/**
 * OverWork Docs - Static Documentation Site Engine
 * Uses hash-based routing (#page) for reliable GitHub Pages navigation.
 */

(function () {
  'use strict';

  const BASE_URL = '/docs';
  let manifest = null;
  let allPages = [];
  let currentPage = null;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const sidebarNav = $('#sidebarNav');
  const article = $('#article');
  const breadcrumb = $('#breadcrumb');
  const tocNav = $('#tocNav');
  const searchInput = $('#searchInput');
  const searchOverlay = $('#searchOverlay');
  const searchResults = $('#searchResults');
  const menuToggle = $('#menuToggle');
  const sidebar = $('#sidebar');
  const sidebarOverlay = $('#sidebarOverlay');

  // =========================
  // Manifest & Content Loading
  // =========================
  async function loadManifest() {
    try {
      const resp = await fetch(BASE_URL + '/manifest.json');
      manifest = await resp.json();
      allPages = [];
      for (const section of manifest.sections) {
        for (const page of section.pages) {
          allPages.push({ ...page, section: section.name, sectionLabel: section.label });
        }
      }
    } catch (e) {
      console.error('Failed to load manifest:', e);
      manifest = { sections: [] };
    }
  }

  async function loadPage(path) {
    try {
      const url = BASE_URL + '/content/' + path;
      const resp = await fetch(url, { cache: 'no-cache' });
      if (!resp.ok) throw new Error('Not found: ' + url);
      const text = await resp.text();
      if (text.includes('<!DOCTYPE html>') || text.includes('<html')) return null;
      return text;
    } catch (e) {
      console.error('loadPage failed:', e);
      return null;
    }
  }

  // =========================
  // Simple Markdown Parser
  // =========================
  function parseMarkdown(md) {
    let html = md;
    html = html.replace(/^---[\s\S]*?---\n*/m, '');

    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      const highlighted = highlightLuau(escapeHtml(code.trimEnd()));
      const langLabel = lang ? `<span class="code-lang">${lang}</span>` : '';
      return `<pre>${langLabel}<button class="copy-btn" onclick="copyCode(this)">Copy</button><code>${highlighted}</code></pre>`;
    });

    html = html.replace(/(?<!`)`([^`\n]+)`(?!`)/g, '<code>$1</code>');

    html = html.replace(/^#### (.+)$/gm, '<h4 id="$slug">$1</h4>');
    html = html.replace(/^### (.+)$/gm, '<h3 id="$slug">$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2 id="$slug">$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    html = html.replace(/id="\$slug"/g, 'id="placeholder"');
    html = html.replace(/<(h[234]) id="placeholder">(.+?)<\/\1>/g, (_, tag, text) => {
      const slug = text.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `<${tag} id="${slug}">${text}</${tag}>`;
    });

    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');

    html = html.replace(/^> \[!(INFO|WARNING|DANGER|TIP)\]\n((?:^> .+\n?)+)/gm, (_, type, content) => {
      const body = content.replace(/^> ?/gm, '').trim();
      return `<div class="callout callout-${type.toLowerCase()}"><div class="callout-title">${type}</div><p>${body}</p></div>`;
    });

    html = html.replace(/^((?:> .+\n?)+)/gm, (_, block) => {
      const text = block.replace(/^> ?/gm, '').trim();
      return `<blockquote><p>${text}</p></blockquote>`;
    });

    html = html.replace(/^---$/gm, '<hr>');

    html = html.replace(/^\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/gm, (_, header, body) => {
      const headers = header.split('|').map(h => h.trim()).filter(Boolean);
      const rows = body.trim().split('\n').filter(Boolean);
      let table = '<table><thead><tr>';
      headers.forEach(h => table += `<th>${h}</th>`);
      table += '</tr></thead><tbody>';
      rows.forEach(row => {
        const cells = row.split('|').map(c => c.trim()).filter(Boolean);
        table += '<tr>';
        cells.forEach(c => table += `<td>${c}</td>`);
        table += '</tr>';
      });
      table += '</tbody></table>';
      return table;
    });

    // Internal links become hash links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => {
      if (href.startsWith('http')) {
        return `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
      }
      return `<a href="#${href}">${text}</a>`;
    });

    html = html.replace(/((?:^[-*] .+\n?)+)/gm, (match) => {
      const items = match.trim().split('\n').map(line => '<li>' + line.replace(/^[-*] /, '') + '</li>').join('');
      return '<ul>' + items + '</ul>';
    });

    html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (match) => {
      const items = match.trim().split('\n').map(line => '<li>' + line.replace(/^\d+\. /, '') + '</li>').join('');
      return '<ol>' + items + '</ol>';
    });

    html = html.replace(/^(?!<[a-z/]|$)(.+)$/gm, '<p>$1</p>');
    html = html.replace(/<p>\s*<\/p>/g, '');

    return html;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // =========================
  // Luau Syntax Highlighting
  // =========================
  function highlightLuau(code) {
    const keywords = ['local', 'function', 'end', 'if', 'then', 'else', 'elseif', 'for', 'while', 'do', 'repeat', 'until', 'return', 'in', 'and', 'or', 'not', 'break', 'continue', 'type', 'export'];
    const builtins = ['print', 'warn', 'error', 'require', 'typeof', 'tostring', 'tonumber', 'pcall', 'xpcall', 'ipairs', 'pairs', 'table', 'string', 'math', 'task', 'game', 'Instance', 'Vector3', 'Vector2', 'CFrame', 'Color3', 'Enum', 'workspace', 'script', 'coroutine', 'os', 'debug'];

    return code.split('\n').map(line => {
      const commentIdx = line.indexOf('--');
      let codePart = line;
      let commentPart = '';
      if (commentIdx >= 0) {
        let inString = false, strChar = null;
        for (let i = 0; i < commentIdx; i++) {
          if (!inString && (line[i] === '"' || line[i] === "'")) { inString = true; strChar = line[i]; }
          else if (inString && line[i] === strChar) { inString = false; }
        }
        if (!inString) {
          codePart = line.slice(0, commentIdx);
          commentPart = `<span class="token-comment">${line.slice(commentIdx)}</span>`;
        }
      }

      codePart = codePart.replace(/(["'])(?:(?!\1).)*\1/g, '<span class="token-string">$&</span>');
      codePart = codePart.replace(/(`[^`]*`)/g, '<span class="token-string">$&</span>');
      codePart = codePart.replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>');
      codePart = codePart.replace(/\bself\b/g, '<span class="token-self">self</span>');

      keywords.forEach(kw => {
        codePart = codePart.replace(new RegExp(`\\b(${kw})\\b`, 'g'), '<span class="token-keyword">$1</span>');
      });

      codePart = codePart.replace(/\b(true|false|nil)\b/g, '<span class="token-boolean">$1</span>');

      builtins.forEach(bi => {
        codePart = codePart.replace(new RegExp(`(?<!\\.)\\b(${bi})\\b`, 'g'), '<span class="token-builtin">$1</span>');
      });

      codePart = codePart.replace(/\b([A-Za-z_]\w*)\s*(?=\()/g, (match, name) => {
        if (codePart.indexOf(`>${name}<`) >= 0) return match;
        return `<span class="token-function">${name}</span>`;
      });

      return codePart + commentPart;
    }).join('\n');
  }

  // =========================
  // Copy Code
  // =========================
  window.copyCode = function (btn) {
    const code = btn.parentElement.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
  };

  // =========================
  // Navigation
  // =========================
  function buildSidebar() {
    if (!manifest) return;
    let html = '';
    for (const section of manifest.sections) {
      html += `<div class="nav-section" data-section="${section.name}">`;
      html += `<div class="nav-section-header" onclick="this.parentElement.classList.toggle('collapsed')">`;
      html += `<span class="chevron">▼</span> ${section.label}`;
      html += `</div><div class="nav-items">`;
      for (const page of section.pages) {
        html += `<a class="nav-item" data-path="${page.file}" href="#${page.file}">${page.title}</a>`;
      }
      html += `</div></div>`;
    }
    sidebarNav.innerHTML = html;
  }

  async function navigateTo(path) {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
    searchOverlay.classList.remove('visible');
    searchInput.value = '';

    if (!path || path === 'home') {
      renderHome();
      setActiveNav('');
      return;
    }

    article.innerHTML = '<div class="loading-spinner"></div>';
    const md = await loadPage(path);

    if (md) {
      currentPage = allPages.find(p => p.file === path);
      article.innerHTML = parseMarkdown(md);
      updateBreadcrumb();
      buildToc();
      setActiveNav(path);
      window.scrollTo(0, 0);
      setTimeout(setupScrollSpy, 100);
    } else {
      article.innerHTML = `<h1>Page Not Found</h1><p class="subtitle">The page "${escapeHtml(path)}" could not be found.</p>`;
    }
  }

  function setActiveNav(path) {
    $$('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.path === path));
  }

  function updateBreadcrumb() {
    if (!currentPage) return;
    breadcrumb.innerHTML = `
      <a class="breadcrumb-item" href="#">Docs</a>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-item">${currentPage.sectionLabel}</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">${currentPage.title}</span>
    `;
  }

  function buildToc() {
    const headings = article.querySelectorAll('h2, h3');
    let html = '';
    headings.forEach(h => {
      const level = h.tagName === 'H3' ? 'toc-h3' : '';
      html += `<a class="${level}" onclick="document.getElementById('${h.id}').scrollIntoView({behavior:'smooth'}); return false;" href="javascript:void(0)">${h.textContent}</a>`;
    });
    tocNav.innerHTML = html;
  }

  // =========================
  // Homepage
  // =========================
  function renderHome() {
    currentPage = null;
    breadcrumb.innerHTML = '';
    tocNav.innerHTML = '';

    const sc = manifest.sections.find(s => s.name === 'services')?.pages.length || 0;
    const cc = manifest.sections.find(s => s.name === 'controllers')?.pages.length || 0;
    const uc = manifest.sections.find(s => s.name === 'utilities')?.pages.length || 0;
    const gc = manifest.sections.find(s => s.name === 'guides')?.pages.length || 0;

    article.innerHTML = `
      <div class="hero">
        <div class="hero-badge">Roblox Framework</div>
        <h1>Over<span class="accent">Work</span> Docs</h1>
        <p class="hero-desc">Complete documentation for the OverWork framework — services, controllers, utilities, and guides for building Roblox experiences.</p>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-number">${sc}</div><div class="stat-label">Services</div></div>
        <div class="stat-card"><div class="stat-number">${cc}</div><div class="stat-label">Controllers</div></div>
        <div class="stat-card"><div class="stat-number">${uc}</div><div class="stat-label">Utilities</div></div>
        <div class="stat-card"><div class="stat-number">${gc}</div><div class="stat-label">Guides</div></div>
      </div>
      <div class="quick-links">
        <a class="quick-link" href="#guides/getting-started.md"><div class="quick-link-icon guides">🚀</div><div class="quick-link-text"><h3>Getting Started</h3><p>Learn how OverWork is structured and how to start using it.</p></div></a>
        <a class="quick-link" href="#guides/architecture.md"><div class="quick-link-icon services">🏗️</div><div class="quick-link-text"><h3>Architecture</h3><p>Understand the server-client lifecycle and module system.</p></div></a>
        <a class="quick-link" href="#services/CurrencyService.md"><div class="quick-link-icon services">💰</div><div class="quick-link-text"><h3>CurrencyService</h3><p>Manage in-game currencies, leaderstats, and transactions.</p></div></a>
        <a class="quick-link" href="#services/InventoryService.md"><div class="quick-link-icon services">🎒</div><div class="quick-link-text"><h3>InventoryService</h3><p>Handle player inventories, items, and equipped state.</p></div></a>
        <a class="quick-link" href="#services/ShopService.md"><div class="quick-link-icon controllers">🛒</div><div class="quick-link-text"><h3>ShopService</h3><p>Purchases, game passes, gifting, and shop rotation.</p></div></a>
        <a class="quick-link" href="#guides/adding-new-docs.md"><div class="quick-link-icon utilities">📝</div><div class="quick-link-text"><h3>Adding New Docs</h3><p>How to add new pages to this documentation site.</p></div></a>
      </div>
    `;
  }

  // =========================
  // Search
  // =========================
  let searchIndex = [];

  async function buildSearchIndex() {
    searchIndex = [];
    for (const page of allPages) {
      try {
        const md = await loadPage(page.file);
        if (md) searchIndex.push({ ...page, content: md.toLowerCase(), rawContent: md });
      } catch (e) {}
    }
  }

  function search(query) {
    if (!query.trim()) { searchOverlay.classList.remove('visible'); return; }
    const q = query.toLowerCase().trim();
    const results = searchIndex.map(page => {
      const titleMatch = page.title.toLowerCase().includes(q) ? 10 : 0;
      const contentMatch = page.content.includes(q) ? 5 : 0;
      if (!titleMatch && !contentMatch) return null;
      let snippet = '';
      if (contentMatch) {
        const idx = page.content.indexOf(q);
        const start = Math.max(0, idx - 60);
        const end = Math.min(page.rawContent.length, idx + q.length + 60);
        snippet = page.rawContent.slice(start, end).replace(/[#*`\[\]]/g, '').trim();
      }
      return { ...page, score: titleMatch + contentMatch, snippet };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 15);

    searchOverlay.classList.add('visible');
    if (!results.length) {
      searchResults.innerHTML = `<div class="no-results">No results for "${escapeHtml(query)}"</div>`;
      return;
    }
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    searchResults.innerHTML = results.map(r => `
      <a class="search-result-item" href="#${r.file}">
        <div class="search-result-category">${r.sectionLabel}</div>
        <div class="search-result-title">${r.title}</div>
        ${r.snippet ? `<div class="search-result-snippet">${escapeHtml(r.snippet).replace(re, '<mark>$1</mark>')}</div>` : ''}
      </a>
    `).join('');
  }

  // =========================
  // Mobile
  // =========================
  menuToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('visible');
  });
  sidebarOverlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
  });

  // =========================
  // Hash Routing
  // =========================
  function getPageFromHash() {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  }

  window.addEventListener('hashchange', () => navigateTo(getPageFromHash()));

  // =========================
  // Scroll Spy & Progress
  // =========================
  function setupScrollSpy() {
    const headings = article.querySelectorAll('h2[id], h3[id]');
    if (!headings.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.toc-nav a').forEach(a => a.classList.toggle('active', a.textContent === entry.target.textContent));
        }
      });
    }, { rootMargin: '-80px 0px -80% 0px' });
    headings.forEach(h => observer.observe(h));
  }

  function setupScrollProgress() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);
    window.addEventListener('scroll', () => {
      const height = document.body.scrollHeight - window.innerHeight;
      if (height > 0) progress.style.transform = `scaleX(${window.scrollY / height})`;
    });
  }

  // =========================
  // Search Keys
  // =========================
  let searchTimeout;
  searchInput?.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => search(e.target.value), 200);
  });
  searchInput?.addEventListener('keydown', (e) => { if (e.key === 'Escape') { searchInput.value = ''; searchOverlay.classList.remove('visible'); } });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) { e.preventDefault(); searchInput?.focus(); }
    if (e.key === 'Escape') { searchOverlay.classList.remove('visible'); searchInput.value = ''; searchInput?.blur(); }
  });
  searchOverlay?.addEventListener('click', (e) => { if (e.target === searchOverlay) { searchOverlay.classList.remove('visible'); searchInput.value = ''; } });

  // =========================
  // Init
  // =========================
  async function init() {
    await loadManifest();
    buildSidebar();
    setupScrollProgress();
    navigateTo(getPageFromHash());
    buildSearchIndex();
  }

  init();
})();
