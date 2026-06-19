# 《斗破苍穹》世界观百科

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> **[English](README.en.md)**

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
│   ├── css/                #    样式文件
│   ├── js/                 #    脚本模块（7 个模块）
│   ├── assets/images/      #    配图（WebP 格式）
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
访问 `geography.html`，悬浮查看斗气大陆九大区域详情。

### 词条穿透
正文中的关键词自动高亮显示，悬浮查看简介，点击跳转详情页。

### 音效反馈
点击卡片/按钮时的涟漪效果，悬浮卡片时的微弱音效。

### 横向时间轴
16 个剧情节点，左右滑动浏览萧炎成长历程。

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

## 📝 数据来源

内容整理自天蚕土豆原著正文及官方衍生作品，仅供学习交流使用。

## 📄 许可证

本项目基于 MIT 许可证开源 - 详见 [LICENSE](LICENSE) 文件

---

⭐ 如果觉得有用，给个 Star 支持一下！
