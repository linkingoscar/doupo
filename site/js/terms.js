/**
 * 斗破苍穹百科 - 词条关联穿透模块
 * 功能：自动识别关键词并添加悬浮预览和跳转链接
 */

(function() {
    'use strict';

    // ========== 词条数据库 ==========
    const TERMS = {
        // 角色
        '萧炎': { desc: '主角，远古萧族后裔，焚诀传承者，最终成为炎帝', page: 'xiaoyan.html', color: '#ff5400' },
        '萧薰儿': { desc: '古族血脉，萧炎青梅竹马，最终与萧炎在一起', page: 'story.html', color: '#ff69b4' },
        '彩鳞': { desc: '蛇人族女王，七彩吞天蟒，萧炎妻子', page: 'story.html', color: '#9d4edd' },
        '美杜莎': { desc: '彩鳞的另一个身份，蛇人族女王', page: 'story.html', color: '#9d4edd' },
        '药尘': { desc: '星陨阁创建者，萧炎师父，药族后裔', page: 'story.html', color: '#f2cc5c' },
        '药老': { desc: '药尘的尊称，萧炎的师父', page: 'story.html', color: '#f2cc5c' },
        '魂天帝': { desc: '最终反派，魂族族长，妄图成为斗帝', page: 'story.html', color: '#d90429' },
        '古元': { desc: '古族族长，萧薰儿之父，九星斗圣', page: 'story.html', color: '#00f5d4' },
        '云韵': { desc: '云岚宗宗主，花宗宗主，萧炎重要羁绊', page: 'story.html', color: '#ff69b4' },
        '纳兰嫣然': { desc: '云岚宗弟子，三年之约的另一方', page: 'story.html', color: '#7209b7' },
        '小医仙': { desc: '厄难毒体，萧炎挚友', page: 'story.html', color: '#06d6a0' },
        '紫研': { desc: '太虚古龙血脉，萧炎义妹', page: 'story.html', color: '#00f5d4' },
        '海波东': { desc: '加玛帝国十大强者之一，冰皇', page: 'story.html', color: '#00b4d8' },
        '雅妃': { desc: '米特尔家族拍卖师，萧炎早期人脉', page: 'story.html', color: '#ff69b4' },
        '萧鼎': { desc: '萧炎大哥，炎盟盟主', page: 'story.html', color: '#b8860b' },
        '萧厉': { desc: '萧炎二哥，炎盟副盟主', page: 'story.html', color: '#b8860b' },
        '青鳞': { desc: '碧蛇三花瞳，萧炎侍女', page: 'story.html', color: '#06d6a0' },
        '风尊者': { desc: '星陨阁二号人物，药老挚友', page: 'story.html', color: '#00f5d4' },
        '苏千': { desc: '迦南学院大长老', page: 'story.html', color: '#f2cc5c' },
        '韩枫': { desc: '药老叛徒，黑角域药皇', page: 'story.html', color: '#d90429' },
        '凤清儿': { desc: '天妖凰族，风雷阁弟子', page: 'story.html', color: '#ff69b4' },
        '烛坤': { desc: '太虚古龙族长，紫研之父', page: 'story.html', color: '#00f5d4' },
        '魂灭生': { desc: '魂殿殿主，魂族先锋', page: 'story.html', color: '#d90429' },
        '虚无吞炎': { desc: '异火榜第二，魂族盟友', page: 'fire.html', color: '#9d4edd' },
        '邙天尺': { desc: '雷族族长，迦南学院创始人之一', page: 'story.html', color: '#00b4d8' },
        '唐震': { desc: '焚炎谷谷主', page: 'story.html', color: '#ff5400' },
        '玄空子': { desc: '丹塔三巨头之一', page: 'story.html', color: '#f2cc5c' },
        '曹颖': { desc: '丹塔天才炼药师', page: 'story.html', color: '#ff69b4' },
        '古青阳': { desc: '古族年轻一代强者', page: 'story.html', color: '#00f5d4' },
        '妖暝': { desc: '九幽地冥蟒族族长', page: 'story.html', color: '#06d6a0' },

        // 地点
        '乌坦城': { desc: '萧炎成长起点，加玛帝国境内', page: 'geography.html', color: '#b8860b' },
        '加玛帝国': { desc: '萧炎前期舞台，西北大陆', page: 'geography.html', color: '#b8860b' },
        '云岚宗': { desc: '加玛帝国第一宗门，前期反派', page: 'geography.html', color: '#7209b7' },
        '魔兽山脉': { desc: '加玛帝国境内大型魔兽聚集区', page: 'geography.html', color: '#06d6a0' },
        '塔戈尔大沙漠': { desc: '蛇人族活动地，青莲地心火所在', page: 'geography.html', color: '#f2cc5c' },
        '黑角域': { desc: '西北与中州之间的混乱地带', page: 'geography.html', color: '#7209b7' },
        '迦南学院': { desc: '西北最强修炼学府', page: 'canaan.html', color: '#00f5d4' },
        '天焚炼气塔': { desc: '迦南学院核心设施，陨落心炎所在', page: 'canaan.html', color: '#ff5400' },
        '中州': { desc: '斗气大陆核心舞台', page: 'geography.html', color: '#f2cc5c' },
        '丹域': { desc: '炼药师圣地，丹塔总部', page: 'alchemy.html', color: '#ff5400' },
        '星陨阁': { desc: '药老创建的势力，四方阁之一', page: 'forces.html', color: '#f2cc5c' },
        '焚炎谷': { desc: '拥有九龙雷罡火，三谷之一', page: 'forces.html', color: '#ff5400' },
        '花宗': { desc: '中州女性宗门，云韵所在', page: 'forces.html', color: '#ff69b4' },
        '魂殿': { desc: '魂族暗线势力，全大陆公敌', page: 'hundian.html', color: '#d90429' },
        '古界': { desc: '古族族界', page: 'clans.html', color: '#00f5d4' },
        '魂界': { desc: '魂族族界', page: 'clans.html', color: '#d90429' },
        '药界': { desc: '药族族界', page: 'clans.html', color: '#f2cc5c' },
        '古龙岛': { desc: '太虚古龙族领地', page: 'beast.html', color: '#00f5d4' },
        '陀舍古帝洞府': { desc: '远古最后一位斗帝留下的洞府', page: 'ancient.html', color: '#f2cc5c' },
        '天墓': { desc: '远古八族共有秘境', page: 'realm.html', color: '#7209b7' },
        '丹塔': { desc: '炼药师最高组织', page: 'alchemy.html', color: '#ff5400' },
        '炎盟': { desc: '萧炎创建的势力', page: 'forces.html', color: '#ff5400' },
        '天府联盟': { desc: '对抗魂殿的联盟', page: 'forces.html', color: '#f2cc5c' },

        // 概念
        '焚诀': { desc: '萧炎修炼的核心功法，可吞噬异火进化', page: 'skills.html', color: '#ff5400' },
        '异火': { desc: '天地孕育的特殊火焰，共二十三种', page: 'fire.html', color: '#ff5400' },
        '斗气': { desc: '斗气大陆的基础能量', page: 'cultivation.html', color: '#f2cc5c' },
        '斗帝': { desc: '斗气大陆最高境界', page: 'cultivation.html', color: '#f2cc5c' },
        '斗圣': { desc: '斗帝之下的最高境界', page: 'cultivation.html', color: '#f2cc5c' },
        '斗尊': { desc: '高阶强者境界', page: 'cultivation.html', color: '#f2cc5c' },
        '斗皇': { desc: '中阶强者境界', page: 'cultivation.html', color: '#f2cc5c' },
        '炼药师': { desc: '斗气大陆的特殊职业', page: 'alchemy.html', color: '#ff5400' },
        '丹药': { desc: '炼药师炼制的药物', page: 'alchemy.html', color: '#ff5400' },
        '灵魂力量': { desc: '独立于斗气的另一种力量体系', page: 'soul.html', color: '#7209b7' },
        '斗帝血脉': { desc: '远古八族的血脉传承', page: 'beast.html', color: '#f2cc5c' },
        '古帝玉': { desc: '开启古帝洞府的钥匙，共八块', page: 'ancient.html', color: '#f2cc5c' },
        '三年之约': { desc: '萧炎与纳兰嫣然的约定', page: 'timeline.html', color: '#7209b7' },
        '厄难毒体': { desc: '特殊体质，小医仙所有', page: 'story.html', color: '#06d6a0' },
        '碧蛇三花瞳': { desc: '特殊瞳术，青鳞所有', page: 'story.html', color: '#06d6a0' },

        // 异火
        '净莲妖火': { desc: '异火榜第三，被萧炎收服', page: 'fire.html', color: '#ff5400' },
        '虚无吞炎': { desc: '异火榜第二，魂族盟友', page: 'fire.html', color: '#9d4edd' },
        '青莲地心火': { desc: '异火榜第十九，萧炎第一种异火', page: 'fire.html', color: '#06d6a0' },
        '陨落心炎': { desc: '异火榜第十四，迦南学院', page: 'fire.html', color: '#ff5400' },
        '三千焱炎火': { desc: '异火榜第九，丹会争夺', page: 'fire.html', color: '#f2cc5c' },
        '九龙雷罡火': { desc: '异火榜第十二，焚炎谷', page: 'fire.html', color: '#00b4d8' },
        '海心焰': { desc: '异火榜第十五', page: 'fire.html', color: '#00b4d8' },
        '骨灵冷火': { desc: '异火榜第十一，药老所有', page: 'fire.html', color: '#00b4d8' },
        '九幽风雷': { desc: '异火榜第十', page: 'fire.html', color: '#7209b7' },
        '红莲业火': { desc: '异火榜第八', page: 'fire.html', color: '#d90429' },
        '九幽金祖火': { desc: '异火榜第七', page: 'fire.html', color: '#f2cc5c' },
        '八荒破灭焱': { desc: '异火榜第六', page: 'fire.html', color: '#ff5400' },
        '生灵之焱': { desc: '异火榜第五', page: 'fire.html', color: '#06d6a0' },
        '金帝焚天炎': { desc: '异火榜第四，古族', page: 'fire.html', color: '#f2cc5c' },
        '炎烬': { desc: '异火榜第一，陀舍古帝所有', page: 'fire.html', color: '#f2cc5c' },
    };

    // ========== 词条识别与链接 ==========
    function autoLinkTerms() {
        // 获取正文内容区域
        const contentAreas = document.querySelectorAll('.info-card-body, .section-desc, .kv-val, p');
        
        contentAreas.forEach(area => {
            // 跳过已经有链接的区域
            if (area.querySelector('a') || area.closest('a')) return;
            
            // 跳过导航、页脚等
            if (area.closest('.nav') || area.closest('.footer') || area.closest('button')) return;

            const text = area.innerHTML;
            let hasChanges = false;
            let newText = text;

            // 按长度排序，优先匹配长词
            const sortedTerms = Object.keys(TERMS).sort((a, b) => b.length - a.length);

            sortedTerms.forEach(term => {
                // 跳过已经被处理的
                if (newText.includes(`data-term="${term}"`)) return;

                const regex = new RegExp(`(?<![<\w])(${escapeRegex(term)})(?![>\w])`, 'g');
                if (regex.test(newText)) {
                    const info = TERMS[term];
                    newText = newText.replace(regex, `<span class="doupo-term" data-term="${term}" style="color: ${info.color}; cursor: pointer; border-bottom: 1px dashed ${info.color}40; padding-bottom: 1px;">$1</span>`);
                    hasChanges = true;
                }
            });

            if (hasChanges) {
                area.innerHTML = newText;
            }
        });

        // 添加悬浮事件
        initTermTooltips();
    }

    // ========== 悬浮预览 ==========
    let termTooltip = null;

    function initTermTooltips() {
        document.querySelectorAll('.doupo-term').forEach(el => {
            el.addEventListener('mouseenter', showTermTooltip);
            el.addEventListener('mouseleave', hideTermTooltip);
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const term = el.dataset.term;
                const info = TERMS[term];
                if (info) {
                    window.location.href = info.page;
                }
            });
        });
    }

    function showTermTooltip(e) {
        const term = e.target.dataset.term;
        const info = TERMS[term];
        if (!info) return;

        if (!termTooltip) {
            termTooltip = document.createElement('div');
            termTooltip.className = 'doupo-term-tooltip';
            termTooltip.style.cssText = `
                position: fixed;
                background: rgba(22, 14, 28, 0.95);
                border: 1px solid rgba(242, 204, 92, 0.3);
                border-radius: 10px;
                padding: 14px 18px;
                max-width: 300px;
                z-index: 10000;
                pointer-events: none;
                backdrop-filter: blur(15px);
                box-shadow: 0 8px 30px rgba(0,0,0,0.4);
                font-family: 'Noto Serif SC', serif;
            `;
            document.body.appendChild(termTooltip);
        }

        termTooltip.innerHTML = `
            <div style="color: ${info.color}; font-weight: bold; font-size: 16px; margin-bottom: 8px; font-family: Ma Shan Zheng, serif;">
                ${term}
            </div>
            <div style="color: rgba(255,255,255,0.8); font-size: 13px; line-height: 1.6;">
                ${info.desc}
            </div>
            <div style="color: ${info.color}; font-size: 11px; margin-top: 10px; display: flex; align-items: center; gap: 4px;">
                <span>📄</span> 点击查看详细设定 →
            </div>
        `;

        termTooltip.style.display = 'block';
        document.addEventListener('mousemove', moveTermTooltip);
    }

    function moveTermTooltip(e) {
        if (termTooltip) {
            termTooltip.style.left = (e.clientX + 15) + 'px';
            termTooltip.style.top = (e.clientY + 15) + 'px';
        }
    }

    function hideTermTooltip() {
        if (termTooltip) {
            termTooltip.style.display = 'none';
            document.removeEventListener('mousemove', moveTermTooltip);
        }
    }

    // ========== 工具函数 ==========
    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // ========== 初始化 ==========
    function init() {
        // 延迟执行，等待页面内容加载
        setTimeout(autoLinkTerms, 500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 页面切换后重新初始化
    window.addEventListener('pageLoaded', init);

    window.DoupoTerms = { autoLink: autoLinkTerms, TERMS };
})();
