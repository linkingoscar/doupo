# 《斗破苍穹》世界观百科

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

基于天蚕土豆原著的斗气大陆全体系世界观可视化百科。纯前端实现，零构建工具，浏览器直接打开即可运行。

## ✨ 特性

- 🗺️ **SVG 互动地图** — 斗气大陆九大区域悬浮高亮、点击详情
- 🔍 **全局搜索** — `Ctrl+K` 快捷搜索 50+ 词条，键盘导航
- 🔗 **词条穿透** — 正文关键词自动高亮，悬浮预览，点击跳转
- 🎵 **音效反馈** — 点击涟漪、悬浮音效、异火/战力特殊音效
- ⏳ **横向时间轴** — 16 个剧情节点，左右滑动浏览
- 🚀 **无刷新切换** — View Transitions API 平滑页面过渡
- 📱 **响应式设计** — 支持桌面、平板、手机
- 🌙 **暗黑美学** — 玻璃拟态 + 金/红/紫配色

## 📁 项目结构

```text
doupo/
├── site/                   # 🌐 网站主目录（浏览器打开 index.html）
│   ├── index.html          #    首页：封面 Hero + 18 条目录导航
│   ├── css/
│   │   ├── style.css       #    合并发布版（~130KB）
│   │   ├── base.css        #    开发用：变量/重置/全局
│   │   ├── components.css  #    开发用：全部 UI 组件
│   │   └── responsive.css  #    开发用：响应式/动画/折叠
│   ├── js/
│   │   ├── app.js          #    全站共用脚本（~60KB）
│   │   ├── map.js          #    SVG 互动地图模块
│   │   ├── search.js       #    全局搜索模块
│   │   ├── terms.js        #    词条关联穿透模块
│   │   ├── transitions.js  #    无刷新页面切换模块
│   │   ├── sounds.js       #    音效微反馈模块
│   │   └── timeline.js     #    横向时间轴模块
│   ├── assets/
│   │   └── images/         #    配图（WebP 格式）
│   │
│   │  ── 核心体系 ──
│   ├── cultivation.html    # 01 斗气修为境界体系
│   ├── skills.html         # 02 功法与斗技等级体系
│   ├── alchemy.html        # 03 炼药师与丹药体系
│   ├── soul.html           # 04 灵魂力量境界体系
│   ├── fire.html           # 05 异火榜 + 异火体系深度解析
│   ├── beast.html          # 06 魔兽体系与斗帝血脉
│   │
│   │  ── 世界格局 ──
│   ├── clans.html          # 07 远古八族完整设定
│   ├── geography.html      # 08 斗气大陆地理格局（含 SVG 地图）
│   ├── forces.html         # 09 势力体系完整图谱
│   ├── realm.html          # 10 秘境与特殊空间
│   ├── canaan.html         # 11 迦南学院完整设定
│   ├── hundian.html        # 12 魂殿完整设定
│   ├── ancient.html        # 13 古帝洞府与大千世界
│   │
│   │  ── 剧情人物 ──
│   ├── timeline.html       # 14 主线剧情时间线
│   ├── xiaoyan.html        # 15 萧炎成长路线 + 技能树
│   ├── battle.html         # 16 关键战役完整复盘
│   ├── story.html          # 17 人物图鉴 + 角色档案
│   │
│   │  ── 互动工具 ──
│   └── calculator.html     # 18 战力计算器 + 战力倒推
│
├── 素材/                   # 📄 设定源文件（18 篇纯文本）
├── demo/                   # 📦 早期 Demo 备份（已弃用）
├── 其他/                   # 🔧 辅助脚本
├── LICENSE                 # MIT 许可证
└── README.md
```

## 🎮 互动功能

### 全局搜索
按 `Ctrl+K`（macOS: `⌘+K`）打开搜索框，支持：
- 50+ 词条索引（角色、地点、概念）
- 键盘上下导航 + Enter 跳转
- 关键词高亮匹配

### SVG 互动地图
访问 `geography.html`，悬浮查看斗气大陆九大区域详情：
- 西北大陆、黑角域、迦南学院、中州、丹域
- 远古八族界域、魂殿势力范围、魔兽领地、特殊秘境

### 词条穿透
正文中的关键词自动高亮显示：
- 角色名（萧炎、药老、魂天帝...）
- 地点名（乌坦城、中州、迦南学院...）
- 概念词（异火、焚诀、斗帝血脉...）
- 悬浮查看简介，点击跳转详情页

### 音效反馈
- 点击卡片/按钮时的涟漪效果
- 悬浮卡片时的微弱音效
- 异火卡片展开的火焰音效
- 战力计算器的特殊音效

### 横向时间轴
16 个剧情节点，左右滑动浏览萧炎成长历程。

## 📋 内容覆盖

| 素材文件 | 收录页面 | 字数 |
| :--- | :--- | :--- |
| 斗气大陆地理格局完整设定 | `geography.html` | ~14K |
| 大陆势力完整图谱 | `forces.html` | ~12K |
| 功法与斗技完整等级体系详解 | `skills.html` | ~20K |
| 炼药师与丹药体系完整设定 | `alchemy.html` | ~13K |
| 灵魂力量境界体系完整详解 | `soul.html` | ~19K |
| 异火体系深度版 | `fire.html` | ~19K |
| 魔兽体系与斗帝血脉体系完整设定 | `beast.html` | ~33K |
| 远古八族完整详细设定 | `clans.html` | ~37K |
| 迦南学院完整详细设定 | `canaan.html` | ~31K |
| 魂殿全设定详细介绍 | `hundian.html` | ~16K |
| 秘境、副本与特殊空间完整整理 | `realm.html` | ~12K |
| 主线剧情时间线完整整理 | `timeline.html` | ~17K |
| 萧炎成长路线总表 | `xiaoyan.html` | ~16K |
| 萧炎技能树完整整理 | `xiaoyan.html` | ~15K |
| 关键战役完整复盘 | `battle.html` | ~19K |
| 人物关系与角色档案总表 | `story.html` | ~15K |
| 原著战力数值体系 | `calculator.html` | ~17K |
| 战力数值-境界倒推对照表 | `calculator.html` | ~20K |

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 | 语义化标签 |
| CSS3 | 纯手写，无预处理器，无框架 |
| Vanilla JavaScript | 零依赖，无 jQuery / React / Vue |
| ECharts | 多维数据雷达图 |
| Web Audio API | 音效微反馈 |
| View Transitions API | 无刷新页面切换 |
| IntersectionObserver | 滚动入场动画 |

## 🎨 设计规范

### 色彩方案

| 用途 | 颜色 |
|------|------|
| 背景主色 | `#0a060c` 深紫黑 |
| 卡片背景 | `rgba(22, 14, 28, 0.65)` 半透明暗紫 |
| 金色 | `#f2cc5c` / `#fff2b2` / `#b8860b` 主强调色 |
| 火焰红 | `#d90429` / `#ef233c` 警告/魂殿 |
| 火焰橙 | `#ff5400` / `#cc2900` 异火/热情 |
| 魂殿紫 | `#7209b7` / `#9d4edd` 神秘/灵魂 |
| 青色 | `#00f5d4` 标签辅助色 |

### 字体

- **标题** — Ma Shan Zheng（毛笔行书）
- **正文** — Noto Serif SC（思源宋体）
- **数据** — Trebuchet MS / Impact

## 🚀 使用方式

### 浏览网站

直接用浏览器打开 `site/index.html`，无需服务器。

### Netlify 部署

```bash
# 仓库根目录已包含 netlify.toml
# Netlify 后台 Base directory 为仓库根目录
# Build command 留空
# Publish directory 由 netlify.toml 固定为 site
```

### 本地开发

```bash
cd site && python -m http.server 8080
# 或
cd site && npx serve .
```

## 📊 项目规模

| 指标 | 数值 |
|------|------|
| 页面数 | 18 个 HTML |
| CSS | ~130KB（合并版） |
| JS | ~120KB（7 个模块） |
| 素材 | 18 篇纯文本 |
| 配图 | WebP 格式 |
| 总内容 | ~300K 字 |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 数据来源

内容整理自天蚕土豆原著正文及官方衍生作品，仅供学习交流使用。

## 📄 许可证

本项目基于 MIT 许可证开源 - 详见 [LICENSE](LICENSE) 文件

---

⭐ 如果觉得有用，给个 Star 支持一下！
