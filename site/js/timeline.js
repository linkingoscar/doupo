/**
 * 斗破苍穹百科 - 横向时间轴模块
 * 功能：剧情时间线横向滚动展示
 */

(function() {
    'use strict';

    // ========== 时间轴数据 ==========
    const TIMELINE_DATA = [
        { year: '少年时期', title: '乌坦城', desc: '萧炎从天才跌落为废柴，药老苏醒，焚诀传承', color: '#b8860b', page: 'geography.html' },
        { year: '三年之约', title: '云岚宗', desc: '纳兰嫣然退婚，萧炎立下三年之约', color: '#7209b7', page: 'timeline.html' },
        { year: '历练期', title: '魔兽山脉', desc: '结识小医仙、云韵，获得紫晶翼狮王', color: '#06d6a0', page: 'geography.html' },
        { year: '沙漠篇', title: '塔戈尔大沙漠', desc: '获得青莲地心火，彩鳞登场', color: '#f2cc5c', page: 'geography.html' },
        { year: '帝都篇', title: '加玛帝都', desc: '炼药师大会，建立人脉网络', color: '#ff5400', page: 'geography.html' },
        { year: '三年之约', title: '云岚宗覆灭', desc: '兑现三年之约，云岚宗覆灭', color: '#d90429', page: 'battle.html' },
        { year: '学院篇', title: '迦南学院', desc: '进入迦南学院，收服陨落心炎', color: '#00f5d4', page: 'canaan.html' },
        { year: '黑角域', title: '黑角域历练', desc: '击败韩枫，建立炎盟', color: '#7209b7', page: 'geography.html' },
        { year: '中州篇', title: '中州闯荡', desc: '进入中州，加入星陨阁', color: '#f2cc5c', page: 'geography.html' },
        { year: '丹会篇', title: '丹会夺冠', desc: '丹会夺冠，获得三千焱炎火', color: '#ff5400', page: 'alchemy.html' },
        { year: '营救篇', title: '营救药老', desc: '深入魂殿，营救药尘', color: '#d90429', page: 'battle.html' },
        { year: '古族篇', title: '古族成人礼', desc: '进入古界，与古族年轻一代交锋', color: '#00f5d4', page: 'clans.html' },
        { year: '异火篇', title: '收服净莲妖火', desc: '进入妖火空间，收服净莲妖火', color: '#ff5400', page: 'fire.html' },
        { year: '联盟篇', title: '天府联盟', desc: '组建天府联盟，对抗魂殿', color: '#f2cc5c', page: 'forces.html' },
        { year: '大战篇', title: '双帝之战', desc: '萧炎VS魂天帝终极对决', color: '#d90429', page: 'battle.html' },
        { year: '成帝篇', title: '炎帝诞生', desc: '萧炎成为斗帝，击败魂天帝', color: '#f2cc5c', page: 'cultivation.html' },
    ];

    // ========== 渲染横向时间轴 ==========
    function renderHorizontalTimeline(container) {
        if (!container) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'doupo-h-timeline-wrapper';
        wrapper.style.cssText = `
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 40px 20px 60px;
            scrollbar-width: thin;
            scrollbar-color: rgba(242, 204, 92, 0.3) transparent;
        `;

        const track = document.createElement('div');
        track.className = 'doupo-h-timeline-track';
        track.style.cssText = `
            display: flex;
            gap: 0;
            min-width: max-content;
            position: relative;
        `;

        // 中心线
        const line = document.createElement('div');
        line.style.cssText = `
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(242, 204, 92, 0.5), transparent);
            transform: translateY(-50%);
        `;
        track.appendChild(line);

        // 时间节点
        TIMELINE_DATA.forEach((item, index) => {
            const node = document.createElement('div');
            node.className = 'doupo-h-timeline-node';
            node.style.cssText = `
                flex: 0 0 200px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                cursor: pointer;
                transition: all 0.3s ease;
            `;

            // 上方/下方交替
            const isTop = index % 2 === 0;

            node.innerHTML = `
                ${isTop ? `
                    <div style="
                        background: rgba(22, 14, 28, 0.8);
                        border: 1px solid ${item.color}40;
                        border-radius: 12px;
                        padding: 16px;
                        text-align: center;
                        width: 170px;
                        margin-bottom: 20px;
                        transition: all 0.3s ease;
                    " class="doupo-h-timeline-card">
                        <div style="color: ${item.color}; font-size: 12px; font-weight: bold; margin-bottom: 6px;">
                            ${item.year}
                        </div>
                        <div style="color: #fff; font-size: 15px; font-weight: bold; font-family: Ma Shan Zheng, serif; margin-bottom: 8px;">
                            ${item.title}
                        </div>
                        <div style="color: rgba(255,255,255,0.6); font-size: 12px; line-height: 1.5;">
                            ${item.desc}
                        </div>
                    </div>
                    <div style="
                        width: 2px;
                        height: 30px;
                        background: ${item.color}60;
                    "></div>
                ` : `
                    <div style="
                        width: 2px;
                        height: 30px;
                        background: ${item.color}60;
                    "></div>
                    <div style="
                        background: rgba(22, 14, 28, 0.8);
                        border: 1px solid ${item.color}40;
                        border-radius: 12px;
                        padding: 16px;
                        text-align: center;
                        width: 170px;
                        margin-top: 20px;
                        transition: all 0.3s ease;
                    " class="doupo-h-timeline-card">
                        <div style="color: ${item.color}; font-size: 12px; font-weight: bold; margin-bottom: 6px;">
                            ${item.year}
                        </div>
                        <div style="color: #fff; font-size: 15px; font-weight: bold; font-family: Ma Shan Zheng, serif; margin-bottom: 8px;">
                            ${item.title}
                        </div>
                        <div style="color: rgba(255,255,255,0.6); font-size: 12px; line-height: 1.5;">
                            ${item.desc}
                        </div>
                    </div>
                `}

                <!-- 节点圆点 -->
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: ${item.color};
                    border: 3px solid rgba(22, 14, 28, 0.8);
                    box-shadow: 0 0 10px ${item.color}60;
                    z-index: 2;
                " class="doupo-h-timeline-dot"></div>

                <!-- 序号 -->
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #fff;
                    font-size: 10px;
                    font-weight: bold;
                    z-index: 3;
                    pointer-events: none;
                ">${index + 1}</div>
            `;

            // 悬浮效果
            node.addEventListener('mouseenter', () => {
                node.style.transform = 'scale(1.05)';
                const card = node.querySelector('.doupo-h-timeline-card');
                if (card) {
                    card.style.borderColor = item.color;
                    card.style.boxShadow = `0 4px 20px ${item.color}40`;
                }
            });

            node.addEventListener('mouseleave', () => {
                node.style.transform = 'scale(1)';
                const card = node.querySelector('.doupo-h-timeline-card');
                if (card) {
                    card.style.borderColor = `${item.color}40`;
                    card.style.boxShadow = 'none';
                }
            });

            // 点击跳转
            node.addEventListener('click', () => {
                window.location.href = item.page;
            });

            track.appendChild(node);
        });

        wrapper.appendChild(track);

        // 滚动提示
        const hint = document.createElement('div');
        hint.style.cssText = `
            text-align: center;
            color: rgba(255,255,255,0.4);
            font-size: 12px;
            margin-top: 10px;
        `;
        hint.textContent = '← 左右滑动查看更多 →';

        container.appendChild(wrapper);
        container.appendChild(hint);

        // 自动滚动到中间
        setTimeout(() => {
            wrapper.scrollLeft = (wrapper.scrollWidth - wrapper.clientWidth) / 2;
        }, 100);
    }

    // ========== 初始化 ==========
    function init() {
        const containers = document.querySelectorAll('.doupo-horizontal-timeline');
        containers.forEach(renderHorizontalTimeline);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.DoupoTimeline = { render: renderHorizontalTimeline, DATA: TIMELINE_DATA };
})();
