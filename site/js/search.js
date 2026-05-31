/**
 * 斗破苍穹百科 - 全局搜索模块
 * 功能：跨页面词条搜索、悬浮预览、快捷键触发
 */

(function() {
    'use strict';

    // ========== 搜索数据索引 ==========
    const SEARCH_INDEX = [
        // 核心体系
        { title: '斗气修为境界', desc: '斗之气、斗者、斗师、大斗师、斗灵、斗王、斗皇、斗宗、斗尊、斗圣、斗帝', page: 'cultivation.html', keywords: '境界 修为 等级 突破' },
        { title: '功法与斗技', desc: '天地玄黄四阶，每阶分初中高三级', page: 'skills.html', keywords: '功法 斗技 天阶 地阶 玄阶 黄阶' },
        { title: '炼药师体系', desc: '一品到九品炼药师，丹药品阶划分', page: 'alchemy.html', keywords: '炼药师 丹药 品阶 丹方' },
        { title: '灵魂力量', desc: '凡境、灵境、天境、帝境灵魂', page: 'soul.html', keywords: '灵魂 灵境 天境 帝境' },
        { title: '异火榜', desc: '二十三种异火排名与详细设定', page: 'fire.html', keywords: '异火 陨落心炎 青莲地心火 净莲妖火 虚无吞炎' },
        { title: '魔兽体系', desc: '魔兽等级、血脉、斗帝血脉', page: 'beast.html', keywords: '魔兽 血脉 太虚古龙 天妖凰 九幽地冥蟒' },

        // 世界格局
        { title: '远古八族', desc: '古族、魂族、炎族、雷族、药族、石族、灵族、萧族', page: 'clans.html', keywords: '远古八族 古族 魂族 萧族 炎族 雷族 药族' },
        { title: '地理格局', desc: '斗气大陆六大地理层级', page: 'geography.html', keywords: '地理 中州 西北大陆 黑角域 迦南学院' },
        { title: '势力体系', desc: '宗派、家族、组织完整图谱', page: 'forces.html', keywords: '势力 宗门 家族 丹塔 魂殿' },
        { title: '秘境空间', desc: '天墓、丹界、星域、妖火空间等', page: 'realm.html', keywords: '秘境 天墓 丹界 星域 妖火空间' },
        { title: '迦南学院', desc: '西北地域最强修炼学府', page: 'canaan.html', keywords: '迦南学院 天焚炼气塔 内院 外院' },
        { title: '魂殿', desc: '魂族暗线势力', page: 'hundian.html', keywords: '魂殿 魂天帝 魂灭生 虚无吞炎' },
        { title: '古帝洞府', desc: '陀舍古帝洞府与大千世界', page: 'ancient.html', keywords: '古帝洞府 陀舍古帝 大千世界' },

        // 剧情人物
        { title: '剧情时间线', desc: '主线剧情完整时间线', page: 'timeline.html', keywords: '时间线 剧情 三年之约 迦南学院 中州' },
        { title: '萧炎成长', desc: '萧炎成长路线与技能树', page: 'xiaoyan.html', keywords: '萧炎 成长 技能树 焚诀' },
        { title: '战役复盘', desc: '关键战役完整复盘', page: 'battle.html', keywords: '战役 战斗 云岚宗 魂殿 双帝之战' },
        { title: '人物图鉴', desc: '54 角色 10 分组完整档案', page: 'story.html', keywords: '人物 角色 萧炎 萧薰儿 彩鳞 药老' },

        // 互动工具
        { title: '战力计算器', desc: '10 项乘法叠加战力计算', page: 'calculator.html', keywords: '战力 计算器 境界 倒推' },

        // 重要角色
        { title: '萧炎', desc: '主角，远古萧族后裔，焚诀传承者', page: 'xiaoyan.html', keywords: '萧炎 主角 炎帝' },
        { title: '萧薰儿', desc: '古族血脉，萧炎青梅竹马', page: 'story.html', keywords: '萧薰儿 古族 古元' },
        { title: '彩鳞/美杜莎', desc: '蛇人族女王，七彩吞天蟒', page: 'story.html', keywords: '彩鳞 美杜莎 蛇人族' },
        { title: '药尘/药老', desc: '星陨阁创建者，萧炎师父', page: 'story.html', keywords: '药尘 药老 星陨阁' },
        { title: '魂天帝', desc: '最终反派，魂族族长', page: 'story.html', keywords: '魂天帝 魂族 最终BOSS' },
        { title: '古元', desc: '古族族长，萧薰儿之父', page: 'story.html', keywords: '古元 古族' },
        { title: '云韵', desc: '云岚宗宗主，萧炎重要羁绊', page: 'story.html', keywords: '云韵 云岚宗 花宗' },
        { title: '纳兰嫣然', desc: '云岚宗弟子，三年之约', page: 'story.html', keywords: '纳兰嫣然 三年之约 退婚' },
        { title: '小医仙', desc: '厄难毒体', page: 'story.html', keywords: '小医仙 厄难毒体' },
        { title: '紫研', desc: '太虚古龙血脉', page: 'story.html', keywords: '紫研 太虚古龙 古龙岛' },

        // 重要地点
        { title: '乌坦城', desc: '萧炎成长起点', page: 'geography.html', keywords: '乌坦城 萧家 加玛帝国' },
        { title: '加玛帝国', desc: '萧炎前期舞台', page: 'geography.html', keywords: '加玛帝国 云岚宗 纳兰家族' },
        { title: '中州', desc: '斗气大陆核心', page: 'geography.html', keywords: '中州 丹域 星陨阁' },
        { title: '黑角域', desc: '混乱地带', page: 'geography.html', keywords: '黑角域 韩枫 枫城' },

        // 重要概念
        { title: '焚诀', desc: '萧炎修炼的核心功法', page: 'skills.html', keywords: '焚诀 异火 进化' },
        { title: '古帝玉', desc: '开启古帝洞府的钥匙', page: 'ancient.html', keywords: '古帝玉 八块 斗帝' },
        { title: '斗帝血脉', desc: '远古八族的血脉传承', page: 'beast.html', keywords: '斗帝血脉 远古八族 觉醒' },
        { title: '三千焱炎火', desc: '异火榜第九', page: 'fire.html', keywords: '三千焱炎火 丹会 星域' },
        { title: '净莲妖火', desc: '异火榜第三', page: 'fire.html', keywords: '净莲妖火 妖火空间' },
        { title: '虚无吞炎', desc: '异火榜第二', page: 'fire.html', keywords: '虚无吞炎 魂族' },
        { title: '陀舍古帝', desc: '远古最后一位斗帝', page: 'ancient.html', keywords: '陀舍古帝 斗帝 异火广场' },
    ];

    // ========== 搜索界面 ==========
    function createSearchUI() {
        // 搜索按钮（固定在右下角）
        const searchBtn = document.createElement('button');
        searchBtn.id = 'doupo-search-btn';
        searchBtn.innerHTML = '🔍';
        searchBtn.title = '全局搜索 (Ctrl+K)';
        searchBtn.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #f2cc5c, #b8860b);
            border: none;
            font-size: 20px;
            cursor: pointer;
            z-index: 9998;
            box-shadow: 0 4px 15px rgba(242, 204, 92, 0.4);
            transition: all 0.3s ease;
        `;
        searchBtn.addEventListener('mouseenter', () => {
            searchBtn.style.transform = 'scale(1.1)';
            searchBtn.style.boxShadow = '0 6px 20px rgba(242, 204, 92, 0.6)';
        });
        searchBtn.addEventListener('mouseleave', () => {
            searchBtn.style.transform = 'scale(1)';
            searchBtn.style.boxShadow = '0 4px 15px rgba(242, 204, 92, 0.4)';
        });
        searchBtn.addEventListener('click', openSearch);
        document.body.appendChild(searchBtn);

        // 搜索模态框
        const overlay = document.createElement('div');
        overlay.id = 'doupo-search-overlay';
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            z-index: 10000;
            display: none;
            padding: 20px;
            padding-top: 15vh;
        `;
        overlay.innerHTML = `
            <div style="max-width: 600px; margin: 0 auto;">
                <div style="background: rgba(22, 14, 28, 0.95); border: 1px solid rgba(242, 204, 92, 0.3); border-radius: 16px; overflow: hidden; backdrop-filter: blur(20px); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
                    <div style="padding: 16px; border-bottom: 1px solid rgba(242, 204, 92, 0.1);">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 20px;">🔍</span>
                            <input type="text" id="doupo-search-input" placeholder="搜索词条、角色、地点..." 
                                   style="flex: 1; background: none; border: none; color: #fff; font-size: 16px; outline: none; font-family: 'Noto Serif SC', serif;">
                            <kbd style="background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 4px; font-size: 12px; color: rgba(255,255,255,0.5);">ESC</kbd>
                        </div>
                    </div>
                    <div id="doupo-search-results" style="max-height: 400px; overflow-y: auto; padding: 8px;">
                        <div style="text-align: center; padding: 40px 20px; color: rgba(255,255,255,0.5);">
                            输入关键词开始搜索...
                        </div>
                    </div>
                    <div style="padding: 12px 16px; border-top: 1px solid rgba(242, 204, 92, 0.1); display: flex; justify-content: space-between; font-size: 12px; color: rgba(255,255,255,0.4);">
                        <span>↑↓ 导航 · Enter 跳转 · ESC 关闭</span>
                        <span>共 ${SEARCH_INDEX.length} 个词条</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // 事件绑定
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeSearch();
        });

        const input = document.getElementById('doupo-search-input');
        input.addEventListener('input', debounce(handleSearch, 200));
        input.addEventListener('keydown', handleKeyNav);

        // 快捷键
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            if (e.key === 'Escape') {
                closeSearch();
            }
        });
    }

    // ========== 搜索逻辑 ==========
    function handleSearch() {
        const query = document.getElementById('doupo-search-input').value.trim().toLowerCase();
        const resultsEl = document.getElementById('doupo-search-results');

        if (!query) {
            resultsEl.innerHTML = '<div style="text-align: center; padding: 40px 20px; color: rgba(255,255,255,0.5);">输入关键词开始搜索...</div>';
            return;
        }

        const results = SEARCH_INDEX.filter(item => {
            const searchText = `${item.title} ${item.desc} ${item.keywords}`.toLowerCase();
            return query.split(' ').every(word => searchText.includes(word));
        });

        if (results.length === 0) {
            resultsEl.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; color: rgba(255,255,255,0.5);">
                    <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
                    未找到匹配的词条
                </div>
            `;
            return;
        }

        resultsEl.innerHTML = results.map((item, index) => `
            <a href="${item.page}" class="doupo-search-item" data-index="${index}" 
               style="display: block; padding: 12px 16px; border-radius: 8px; text-decoration: none; color: #fff; transition: all 0.2s ease; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="color: var(--color-gold, #f2cc5c); font-size: 16px;">📄</span>
                    <div style="flex: 1;">
                        <div style="font-weight: bold; font-size: 15px; margin-bottom: 4px;">
                            ${highlightMatch(item.title, query)}
                        </div>
                        <div style="font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.4;">
                            ${highlightMatch(item.desc, query)}
                        </div>
                    </div>
                    <span style="font-size: 11px; color: rgba(255,255,255,0.3);">${item.page.replace('.html', '')}</span>
                </div>
            </a>
        `).join('');

        // 添加悬浮效果
        resultsEl.querySelectorAll('.doupo-search-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.background = 'rgba(242, 204, 92, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.background = 'none';
            });
        });
    }

    function highlightMatch(text, query) {
        const words = query.split(' ').filter(w => w.length > 0);
        let result = text;
        words.forEach(word => {
            const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
            result = result.replace(regex, '<mark style="background: rgba(242, 204, 92, 0.3); color: #f2cc5c; padding: 0 2px; border-radius: 2px;">$1</mark>');
        });
        return result;
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // ========== 键盘导航 ==========
    let selectedIndex = -1;

    function handleKeyNav(e) {
        const items = document.querySelectorAll('.doupo-search-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            items[selectedIndex].click();
        }
    }

    function updateSelection(items) {
        items.forEach((item, i) => {
            if (i === selectedIndex) {
                item.style.background = 'rgba(242, 204, 92, 0.15)';
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.style.background = 'none';
            }
        });
    }

    // ========== 打开/关闭搜索 ==========
    function openSearch() {
        const overlay = document.getElementById('doupo-search-overlay');
        overlay.style.display = 'block';
        const input = document.getElementById('doupo-search-input');
        input.value = '';
        input.focus();
        selectedIndex = -1;
        handleSearch();
    }

    function closeSearch() {
        const overlay = document.getElementById('doupo-search-overlay');
        overlay.style.display = 'none';
    }

    // ========== 工具函数 ==========
    function debounce(fn, delay) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    // ========== 初始化 ==========
    function init() {
        createSearchUI();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.DoupoSearch = { open: openSearch, close: closeSearch };
})();
