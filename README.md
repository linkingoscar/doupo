# 《斗破苍穹》世界观百科

基于天蚕土豆原著的斗气大陆全体系世界观可视化百科。纯前端实现，零构建工具，浏览器直接打开即可运行。

---

## 项目结构

```text
doupo/
├── site/                   # 🌐 网站主目录（浏览器打开 index.html）
│   ├── index.html          #    首页：封面 Hero + 18 条目录导航
│   ├── css/
│   │   ├── style.css       #    合并发布版（~130KB，浏览器直接加载）
│   │   ├── base.css        #    开发用：变量/重置/全局（~3KB）
│   │   ├── components.css  #    开发用：全部 UI 组件（~104KB）
│   │   └── responsive.css  #    开发用：响应式/动画/折叠（~23KB）
│   ├── js/
│   │   └── app.js          #    全站共用脚本（~40KB，含计算器/粒子/动画/雷达图）
│   ├── assets/
│   │   └── images/         #    首页、目录卡、章节 Hero 与正文摘要配图（WebP）
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
│   ├── geography.html      # 08 斗气大陆地理格局
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
├── 其他/                   # 🔧 辅助脚本与原著文本
└── README.md
```

---

## 素材文件清单（18 篇）

全部存放于 `素材/` 目录，均为纯文本格式，已 100% 收录进网站页面。

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

---

## 技术栈

### 前端

- **HTML5** — 语义化标签，`<section>` / `<nav>` / `<canvas>`
- **CSS3** — 纯手写，无预处理器，无框架
- **Vanilla JavaScript** — 零依赖，无 jQuery / React / Vue
- **ECharts** — 用于多维数据雷达图等高级可视化呈现

### CSS 架构

单文件 `style.css`（~130KB），按层级组织：

| 区域 | 职责 |
|------|------|
| 变量与重置 | `:root` 色板、`*` box-sizing、滚动条美化 |
| 全局布局 | `.container`、`.section`、`.catalog-section` |
| 组件层 | 卡片、徽章、弹窗、计算器、时间线等全部 UI 组件 |
| 响应式 | 480px / 768px / 900px 三档媒体查询 |
| 滚动动画 | `body.scroll-ready` + `.scroll-reveal` + `.revealed` 安全入场 |
| 页面淡入 | `@keyframes pageIn` 容器加载动画 |
| 折叠面板 | `<details>` / `<summary>` 自定义样式 |
| 导航分隔 | `.nav-sep` 细线分组 |

> 源码按 `base.css` / `components.css` / `responsive.css` 三文件开发，合并为单文件发布（本地 file:// 不支持 `@import`）。

- **CSS 变量驱动主题** — `:root` 定义全局色板
  - 金色系：`--color-gold` / `--color-gold-light` / `--color-gold-dark`
  - 火焰系：`--color-red` / `--color-flame-orange` / `--color-flame-deep`
  - 魂殿紫：`--color-purple` / `--color-purple-light`
  - 辅助色：`--color-cyan`（标签用）
- **响应式断点** — 480px / 768px / 900px 三档
- **玻璃拟态** — `backdrop-filter: blur()` + 半透明背景
- **自定义滚动条** — WebKit 金色渐变滚动条

### CSS 组件清单

| 组件 | 类名 | 用途 |
| :--- | :--- | :--- |
| 信息卡片 | `.info-card` `.info-grid` | 地点、秘境、技能、六条线总览 |
| 人物档案卡 | `.profile-card` `.profile-grid` | 人物关系与角色档案深度版 |
| 成长阶段卡 | `.growth-stage` `.growth-body` `.growth-stat` | 萧炎成长路线总表 |
| 战役卡片 | `.battle-card` `.battle-grid` | 战役复盘展示 |
| 时间线阶段 | `.stage-item` `.stage-list` | 剧情阶段展示 |
| 火焰卡片 | `.flame-card` `.flame-grid` | 异火榜展开卡片 |
| 人物卡片 | `.character-card` `.character-grid` | 角色档案展示 |
| 傀儡卡片 | `.puppet-card` `.puppet-grid` | 妖傀等级展示 |
| 丹药卡片 | `.pill-card` `.pill-grid` | 丹药品阶展示 |
| 玉简卡片 | `.jade-card` `.jade-grid` | 战力区间速查 |
| 境界时间线 | `.timeline-node` `.timeline-container` | 境界横轴总览 |
| 境界详情卡 | `.realm-card` `.realm-left` `.realm-right` | 境界详细说明 |
| 八族卡片 | `.clan-card` | 远古八族档案 |
| 魂殿层级 | `.soul-hierarchy` `.soul-node` | 魂殿金字塔树 |
| 标签 | `.meta-tag` `.meta-tag.type` `.meta-tag.location` `.meta-tag.risk` | 三色信息标签 |
| 键值对 | `.kv-row` `.kv-key` `.kv-val` | 字段展示 |
| 分隔标题 | `.divider-title` | 章节金色分隔线 |
| 导航栏 | `.nav` `.nav-container` `.nav-toggle` | 顶部导航 + 汉堡菜单 |
| 页面 Hero | `.page-hero` `.page-hero-figure` | 每个章节首屏标题、标签与主题视觉图 |
| 视觉摘要 | `.section-visual-summary` `.section-visual-thumb` | 正文段落前的图片摘要条 |
| 自动摘要卡 | `.auto-brief` `.auto-brief-card` | 长文本/编号条目自动拆分为卡片 |
| 内容列表卡 | `.content-card-list` `.content-card-item` | 普通列表卡片化展示 |
| 弹窗 | `.modal-overlay` `.modal-box` `.modal-close` | 统一弹窗组件 |
| 计算器 | `.calc-container` `.calc-grid` `.calc-item` | 战力计算器面板 |
| 仪表盘 | `.dashboard-card` `.power-dashboard` | 战力分析面板 |
| 返回顶部 | `#backToTop` | 滚动显示/隐藏按钮 |
| 目录网格 | `.catalog-grid` `.catalog-item` | 首页目录卡片 |

### JavaScript 功能模块

| 模块 | 功能 |
| :--- | :--- |
| 战力计算器 | 10 项乘法叠加，境界/功法/斗技/异火/血脉/灵魂/肉身/装备/丹药/秘法/状态 |
| 战力倒推 | 输入数值自动判定真实境界 + 常态满配战力评估 |
| 火焰粒子 | Canvas 粒子系统，模拟异火上升飘散效果 |
| 境界切换 | `switchRealm()` 横轴时间线点击切换境界详情卡 |
| 异火卡片展开 | `onclick="this.classList.toggle('expanded')"` 内联交互 |
| 八族轮盘 | JS 动态生成 SVG 轮盘节点 + 反向旋转动画 |
| 魂殿弹窗 | 八族卡片点击 → 克隆隐藏内容注入 Modal |
| 导航汉堡 | 移动端 `☰` 按钮切换导航展开/收起 |
| 返回顶部 | `scrollY > 600` 显示按钮，平滑滚动回顶 |
| 导航高亮 | 当前页面对应链接添加 `class="active"` |
| 预设填充 | 一键填充原著角色参数（乌坦城/三年之约/迦南学院/双帝之战） |
| 滚动入场动画 | `IntersectionObserver` 监测，卡片/文本滚动进入视口时淡入上浮 |
| 折叠面板 | 长文本段落自动包裹 `<details>`，减少首屏信息压力 |
| ECharts 雷达图 | 人物能力五维可视化（仅部分页面） |

### UX 交互特性

| 特性 | 实现方式 |
|------|----------|
| 滚动入场动画 | `body.scroll-ready` + `IntersectionObserver`，JS 就绪前内容可见，避免黑屏 |
| 页面加载淡入 | `@keyframes pageIn`，`.container` 0.5s ease-out 从下方 12px 淡入 |
| 折叠面板 | 原生 `<details>` + `<summary>`，自定义箭头旋转动画 |
| 图片完整展示 | 真实 `<img>` + `object-fit: contain`，优先保留图内文字和边缘信息 |
| 章节氛围背景 | `--page-bg-image` 驱动每页首屏背景，叠加暗色渐变保证文字可读 |
| 长文卡片化 | JS 自动识别编号/列表段落，转换为摘要卡和内容卡 |
| 防重叠布局 | `minmax(min(100%, ...))`、`overflow-wrap`、编号占位修正，避免文字与 UI 装饰挤压 |
| 导航分隔 | `.nav-sep` 细线分组，无文字标签，横向可滚动 |
| 卡片 Hover | `translateY(-4px)` 上浮 + 边框高亮 + 阴影加深 |
| 火焰粒子 | Canvas `requestAnimationFrame` 循环，粒子数量随屏幕宽度缩放 |
| 移动端适配 | 768px/480px 断点，卡片单列，导航汉堡菜单，弹窗全屏 |

---

## 设计规范

### 色彩方案

```text
背景主色    #0a060c    深紫黑
卡片背景    rgba(22, 14, 28, 0.65)    半透明暗紫
金色        #f2cc5c / #fff2b2 / #b8860b    主强调色
火焰红      #d90429 / #ef233c / #8a0319    警告/魂殿
火焰橙      #ff5400 / #cc2900    异火/热情
魂殿紫      #7209b7 / #9d4edd    神秘/灵魂
青色        #00f5d4    标签辅助色
```

### 字体

- **标题** — Ma Shan Zheng（毛笔行书，Google Fonts）
- **正文** — Noto Serif SC（思源宋体，Google Fonts）
- **数据** — Trebuchet MS / Impact

### 圆角

- 卡片：`6px` - `12px`
- 标签：`4px`
- 按钮：`4px` - `50%`（圆形）

---

## 使用方式

### 浏览网站

直接用浏览器打开 `site/index.html`，无需服务器。

### 本地开发

如需热重载，可用任意静态服务器：

```bash
# Python
cd site && python -m http.server 8080

# Node.js
cd site && npx serve .
```

---

## 历史演变

| 阶段 | 说明 |
| :--- | :--- |
| `demo/斗破初始.html` | 初始单文件原型（7930 行，388KB） |
| `demo/未命名 (4).html` | 最完整单文件版本（UI 最精致） |
| `site/` 多文件版 | 从单文件拆分为 19 个独立页面 + 共用 CSS/JS |
| 可视化优化阶段一 | 将纯文字页面结构重写为卡片/时间线/标签组件 |
| 视觉优化阶段二 | 全局徽章系统（Badge System）上线，大幅提升界面信息密度与层级感 |
| 可视化优化阶段三 | 引入 ECharts 轻量级可视化库，实现人物能力等多维雷达图动态展示 |
| 深度优化阶段四 | 人物档案改为 `.profile-card` 网格（54 角色 10 分组），成长路线改为 `.growth-stage` 紧凑卡片（24 阶段），新增 `.profile-card` / `.growth-stage` / `.growth-stat` 组件 |
| 产品设计 Review 阶段五 | 响应设计审查报告落地：① 滚动入场动画（IntersectionObserver + body.scroll-ready 安全模式）② 长文本折叠面板（`<details>`）③ 导航栏简洁分隔（`.nav-sep` 细线，去掉文字标签）④ CSS 拆分为 base / components / responsive 三模块 ⑤ 页面加载淡入动画（`@keyframes pageIn`）⑥ 修复 modal-overlay 被 `!important` 强制显示的 bug |
| 导航与动画优化 | 导航栏重写：更紧凑（0.82rem 字号 / 55% 透明度 / 无文字标签 / 横向可滚动），滚动动画改为 `body.scroll-ready` 安全模式（JS 就绪前内容可见，不会黑屏） |
| 视觉资产重构 | 接入未使用图片资产：首页背景图、目录缩略图、推荐图、章节 Hero 图与正文视觉摘要；图片统一完整展示，避免 `cover` 裁剪关键信息 |
| UI/UX 再设计 | 首页推荐卡与目录卡重排，章节首屏增加主题背景和可读渐变；长段文本自动拆为摘要卡/列表卡，并修复移动端与窄列场景下的文字重叠 |
