/**
 * build.js - Regenerates manifest.json from the content/ folder.
 * 
 * Run: node build.js
 * 
 * This scans all .md files in content/ subfolders and builds the manifest
 * that the docs site uses for navigation.
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');

const SECTIONS = [
  { name: 'guides', label: 'Guides' },
  { name: 'services', label: 'Services' },
  { name: 'controllers', label: 'Controllers' },
  { name: 'utilities', label: 'Utilities' },
  { name: 'classes', label: 'Classes' },
];

// Custom ordering for guides (other sections are alphabetical)
const GUIDE_ORDER = ['getting-started.md', 'architecture.md', 'dependencies.md', 'adding-new-docs.md'];

function buildManifest() {
  const sections = SECTIONS.map(section => {
    const folder = path.join(CONTENT_DIR, section.name);
    let pages = [];

    if (fs.existsSync(folder)) {
      let files = fs.readdirSync(folder).filter(f => f.endsWith('.md'));

      // Apply custom ordering for guides
      if (section.name === 'guides') {
        const ordered = [];
        for (const g of GUIDE_ORDER) {
          const idx = files.indexOf(g);
          if (idx !== -1) {
            ordered.push(files.splice(idx, 1)[0]);
          }
        }
        files = [...ordered, ...files.sort()];
      } else {
        files.sort();
      }

      pages = files.map(f => ({
        title: formatTitle(f.replace('.md', ''), section.name),
        file: `${section.name}/${f}`
      }));
    }

    return { ...section, pages };
  });

  return { sections };
}

function formatTitle(filename, sectionName) {
  if (sectionName === 'guides') {
    // Convert kebab-case to Title Case
    return filename.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  // Keep PascalCase as-is for services/controllers/etc
  return filename;
}

const manifest = buildManifest();
const outputPath = path.join(__dirname, 'manifest.json');

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

const totalPages = manifest.sections.reduce((sum, s) => sum + s.pages.length, 0);
console.log(`✅ manifest.json generated with ${totalPages} pages across ${manifest.sections.length} sections`);
