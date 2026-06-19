# Battle Through the Heavens — World Lore Encyclopedia

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A comprehensive visualization encyclopedia of the Dou Qi continent's world-building system, based on the original novel by Heavenly Silkworm Potato. Pure frontend implementation — zero build tools, runs directly in the browser.

> **[中文文档](README.md)**

---

## Features

- **SVG Interactive Map** — 9 regions of the Dou Qi continent with hover highlights and click details
- **Global Search** — `Ctrl+K` quick search across 50+ entries with keyboard navigation
- **Entry Cross-linking** — Auto-highlight keywords in text, hover preview, click to navigate
- **Sound Effects** — Click ripples, hover sounds, special sounds for Heavenly Flames / combat power
- **Horizontal Timeline** — 16 story nodes, swipe left/right to browse
- **No-refresh Navigation** — View Transitions API for smooth page transitions
- **Responsive Design** — Desktop, tablet, mobile support
- **Dark Aesthetics** — Glassmorphism + gold/red/purple color scheme

---

## Project Structure

```
doupo/
├── site/                   # Website root (open index.html in browser)
│   ├── index.html          # Homepage: cover hero + 18 section navigation
│   ├── css/                # Stylesheets
│   ├── js/                 # JavaScript modules (7 modules)
│   ├── assets/images/      # Images (WebP format)
│   │
│   │  ── Core Systems ──
│   ├── cultivation.html    # 01 Dou Qi Cultivation Realm System
│   ├── skills.html         # 02 Martial Skills & Techniques Ranking
│   ├── alchemy.html        # 03 Alchemist & Pill System
│   ├── soul.html           # 04 Soul Power Realm System
│   ├── fire.html           # 05 Heavenly Flame Chart + Deep Analysis
│   ├── beast.html          # 06 Magical Beast & Dou Emperor Bloodline
│   │
│   │  ── World Structure ──
│   ├── clans.html          # 07 Ancient Eight Clans Full Settings
│   ├── geography.html      # 08 Dou Qi Continent Geography (SVG map)
│   ├── forces.html         # 09 Faction System Complete Map
│   ├── realm.html          # 10 Secret Realms & Special Spaces
│   ├── canaan.html         # 11 Canaan Academy Full Settings
│   ├── hundian.html        # 12 Soul Hall Full Settings
│   ├── ancient.html        # 13 Ancient Emperor's Cave & Great Thousand World
│   │
│   │  ── Story & Characters ──
│   ├── timeline.html       # 14 Main Story Timeline
│   ├── xiaoyan.html        # 15 Xiao Yan Growth Route + Skill Tree
│   ├── battle.html         # 16 Key Battle Analysis
│   ├── story.html          # 17 Character Profiles & Relationships
│   │
│   │  ── Interactive Tools ──
│   └── calculator.html     # 18 Combat Power Calculator + Reverse Calculation
│
├── 素材/                   # Source material files (18 plain text documents)
├── demo/                   # Early demo backups (deprecated)
├── 其他/                   # Utility scripts
├── LICENSE                 # MIT License
└── README.md
```

---

## Interactive Features

### Global Search
Press `Ctrl+K` (macOS: `⌘+K`) to open search box:
- 50+ entry index (characters, locations, concepts)
- Keyboard up/down navigation + Enter to jump
- Keyword highlight matching

### SVG Interactive Map
Visit `geography.html`, hover to view 9 regions of the Dou Qi continent:
- Northwest Continent, Black-Corner Region, Canaan Academy, Central Plains, Pill Region
- Ancient Eight Clans territories, Soul Hall domain, Magical Beast territories, Special Secret Realms

### Entry Cross-linking
Keywords in text are auto-highlighted:
- Character names (Xiao Yan, Yao Lao, Soul Emperor, ...)
- Location names (Utan City, Central Plains, Canaan Academy, ...)
- Concept words (Heavenly Flames, Burning Technique, Dou Emperor Bloodline, ...)
- Hover for summary, click to navigate to detail page

### Sound Effects
- Click ripple effect on cards/buttons
- Subtle hover sound on cards
- Flame sound when expanding Heavenly Flame cards
- Special sound for combat power calculator

### Horizontal Timeline
16 story nodes, swipe left/right to browse Xiao Yan's growth journey.

---

## Content Coverage

| Source Material | Page | Word Count |
|----------------|------|------------|
| Dou Qi Continent Geography | `geography.html` | ~14K |
| Faction System Map | `forces.html` | ~12K |
| Martial Skills & Techniques | `skills.html` | ~20K |
| Alchemist & Pill System | `alchemy.html` | ~13K |
| Soul Power System | `soul.html` | ~19K |
| Heavenly Flame System | `fire.html` | ~19K |
| Magical Beast & Bloodline | `beast.html` | ~33K |
| Ancient Eight Clans | `clans.html` | ~37K |
| Canaan Academy | `canaan.html` | ~31K |
| Soul Hall | `hundian.html` | ~16K |
| Secret Realms | `realm.html` | ~12K |
| Main Story Timeline | `timeline.html` | ~17K |
| Xiao Yan Growth Route | `xiaoyan.html` | ~16K |
| Xiao Yan Skill Tree | `xiaoyan.html` | ~15K |
| Key Battles | `battle.html` | ~19K |
| Character Profiles | `story.html` | ~15K |
| Combat Power System | `calculator.html` | ~17K |
| Power Level Reverse Lookup | `calculator.html` | ~20K |

---

## Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Semantic tags |
| CSS3 | Hand-written, no preprocessors, no frameworks |
| Vanilla JavaScript | Zero dependencies, no jQuery / React / Vue |
| ECharts | Multi-dimensional radar charts |
| Web Audio API | Sound effect micro-feedback |
| View Transitions API | No-refresh page transitions |
| IntersectionObserver | Scroll entrance animations |

---

## Design Specs

### Color Scheme

| Usage | Color |
|-------|-------|
| Background | `#0a060c` deep purple-black |
| Card Background | `rgba(22, 14, 28, 0.65)` translucent dark purple |
| Gold | `#f2cc5c` / `#fff2b2` / `#b8860b` primary accent |
| Flame Red | `#d90429` / `#ef233c` warning / Soul Hall |
| Flame Orange | `#ff5400` / `#cc2900` Heavenly Flames / passion |
| Soul Hall Purple | `#7209b7` / `#9d4edd` mystery / soul |
| Cyan | `#00f5d4` tag auxiliary |

### Typography

- **Headings** — Ma Shan Zheng (Chinese calligraphy brush script)
- **Body** — Noto Serif SC (Source Han Serif)
- **Data** — Trebuchet MS / Impact

---

## Usage

### Browse Website

Simply open `site/index.html` in your browser. No server needed.

### Netlify Deployment

```bash
# Repo root already contains netlify.toml
# Netlify dashboard: Base directory = repo root
# Build command: leave empty
# Publish directory: set by netlify.toml to site
```

### Local Development

```bash
cd site && python -m http.server 8080
# or
cd site && npx serve .
```

---

## Project Scale

| Metric | Value |
|--------|-------|
| Pages | 18 HTML files |
| CSS | ~130KB (merged) |
| JS | ~120KB (7 modules) |
| Source Material | 18 plain text documents |
| Images | WebP format |
| Total Content | ~300K characters |

---

## Contributing

Issues and Pull Requests are welcome!

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Data Sources

Content compiled from the original novel by Heavenly Silkworm Potato and official derivative works. For educational and exchange purposes only.

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

If you find this useful, give it a Star!
