# SF6 Combo Guide - Repository Instructions

## Purpose

This repository is a mobile-first Street Fighter 6 combo and setplay reference site published with GitHub Pages. It must remain a static site that works without a build step.

## Architecture

- `index.html`: character list page
- `data/characters.js`: characters shown on the list page
- `assets/css/site.css`: shared visual design for every page
- `assets/js/home.js`: character list renderer
- `assets/js/character-page.js`: shared character article renderer
- `characters/<character-id>/index.html`: thin page shell
- `characters/<character-id>/data/meta.js`: character metadata and empty `entries` array
- `characters/<character-id>/data/<category>.js`: character-specific entries by category
- `templates/combo-entry.template.js`: copy-paste template for one combo item

## Core rules

1. Keep the site framework-free and dependency-free.
2. Do not add npm, bundlers, package managers, or a build step unless the user explicitly requests them.
3. Use relative paths so the site works as a GitHub Pages project site.
4. Keep character-specific text and combo/setplay content out of `character-page.js`.
5. Store character-specific entries in category files: `basic.js`, `corner.js`, `super.js`, `setplay.js`, and `modern.js`. Append each new item as an independent `entries.push(...)` block to its matching file.
6. The official SF6 category name is “セットプレイ”; use the internal ID `setplay`.
7. All combo cards must be one column and use the full content width. Do not restore a two-column combo layout.
8. A combo route is stored as `steps: []`; do not manually insert arrows or HTML into data. The renderer generates arrows and card elements.
9. Escape user-facing data through the shared renderer. Do not use raw character data as HTML.
10. Preserve mobile readability and keyboard accessibility.

## Future page policy

Keep one character page while category filtering remains sufficient. Consider splitting display pages while reusing the same category data when either the character has substantially more than 20–30 items total, or one category has more than about 10 items. A future layout may use `combos/index.html` and `setplay/index.html`; do not split pages preemptively.

## Adding a character

1. Copy `characters/luke/` to `characters/<new-id>/`.
2. Replace `data/meta.js` and each category data file with the new character’s content.
3. Register the character in `data/characters.js`.
4. Keep the shared renderer and stylesheet unchanged unless a reusable feature is needed for every character.

## Validation

Before finishing a task, check JavaScript syntax for the shared scripts and every character data file. Start a local static server and open `/` and `/characters/luke/`. Verify full-width single-column cards, category filters, details, copy buttons, no console errors, and project-subdirectory relative links.
