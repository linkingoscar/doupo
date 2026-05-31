/**
 * 斗气大陆 SVG 互动地图模块
 * 功能：悬浮高亮、点击显示详情、缩放拖拽
 */

(function() {
    'use strict';

    // ========== 地图数据 ==========
    const REGIONS = [
        {
            id: 'nw',
            name: '西北大陆',
            desc: '萧炎成长起点，包含乌坦城、加玛帝国、魔兽山脉、塔戈尔大沙漠等。',
            color: '#b8860b',
            path: 'M80,280 L120,240 L180,250 L200,290 L180,330 L120,340 L80,310 Z',
            center: [140, 290],
            page: 'geography.html',
            highlights: ['乌坦城', '加玛帝国', '魔兽山脉', '塔戈尔大沙漠', '云岚宗']
        },
        {
            id: 'black',
            name: '黑角域',
            desc: '西北大陆与中州之间的混乱地带，无统一政权，宗派林立。',
            color: '#7209b7',
            path: 'M180,250 L240,220 L280,240 L270,290 L200,290 Z',
            center: [234, 258],
            page: 'geography.html',
            highlights: ['黑盟', '枫城', '魔炎谷', '黑皇宗']
        },
        {
            id: 'canaan',
            name: '迦南学院',
            desc: '西北地域最强修炼学府，位于黑角域边缘。',
            color: '#00f5d4',
            path: 'M240,220 L280,200 L310,220 L300,260 L270,260 L240,240 Z',
            center: [273, 230],
            page: 'canaan.html',
            highlights: ['外院', '内院', '天焚炼气塔', '藏书阁']
        },
        {
            id: 'zhongzhou',
            name: '中州',
            desc: '斗气大陆核心舞台，强者云集、宗派林立。',
            color: '#f2cc5c',
            path: 'M280,180 L380,150 L440,180 L450,240 L420,280 L350,300 L280,280 L260,240 Z',
            center: [355, 225],
            page: 'geography.html',
            highlights: ['丹域', '星陨阁', '焚炎谷', '花宗', '丹塔']
        },
        {
            id: 'danyu',
            name: '丹域',
            desc: '炼药师圣地，丹塔总部所在区域。',
            color: '#ff5400',
            path: 'M320,190 L370,180 L390,200 L380,230 L340,240 L310,220 Z',
            center: [352, 210],
            page: 'alchemy.html',
            highlights: ['圣丹城', '丹塔', '小丹塔']
        },
        {
            id: 'ancient',
            name: '远古八族界域',
            desc: '斗帝血脉族群的独立空间，斗气大陆真正的权力核心。',
            color: '#d90429',
            path: 'M440,150 L520,130 L560,170 L550,230 L500,260 L440,240 L450,180 Z',
            center: [495, 195],
            page: 'clans.html',
            highlights: ['古界', '魂界', '炎界', '雷界', '药界', '萧界']
        },
        {
            id: 'hundun',
            name: '魂殿势力范围',
            desc: '魂族暗线势力覆盖区域，与魂界互为表里。',
            color: '#9d4edd',
            path: 'M380,260 L430,250 L460,280 L440,310 L390,310 L360,290 Z',
            center: [410, 280],
            page: 'hundian.html',
            highlights: ['魂殿总部', '分殿', '魂灭生']
        },
        {
            id: 'beast',
            name: '魔兽领地',
            desc: '太虚古龙、天妖凰族、九幽地冥蟒族等魔兽势力领地。',
            color: '#06d6a0',
            path: 'M500,260 L560,250 L590,290 L570,330 L520,340 L490,310 Z',
            center: [540, 295],
            page: 'beast.html',
            highlights: ['古龙岛', '天妖凰族', '九幽黄泉', '莽荒古域']
        },
        {
            id: 'secret',
            name: '特殊秘境',
            desc: '天墓、丹界、星域、妖火空间、陀舍古帝洞府等。',
            color: '#ef233c',
            path: 'M350,300 L400,290 L430,320 L410,350 L370,350 L340,330 Z',
            center: [383, 325],
            page: 'realm.html',
            highlights: ['天墓', '丹界', '星域', '妖火空间', '陀舍古帝洞府']
        }
    ];

    // ========== SVG 地图渲染 ==========
    function createSVGMap(container) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 650 450');
        svg.setAttribute('class', 'doupo-map-svg');
        svg.style.width = '100%';
        svg.style.maxWidth = '800px';
        svg.style.height = 'auto';
        svg.style.margin = '0 auto';
        svg.style.display = 'block';

        // 背景
        const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bg.setAttribute('width', '650');
        bg.setAttribute('height', '450');
        bg.setAttribute('fill', '#0a060c');
        bg.setAttribute('rx', '12');
        svg.appendChild(bg);

        // 标题
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        title.setAttribute('x', '325');
        title.setAttribute('y', '35');
        title.setAttribute('text-anchor', 'middle');
        title.setAttribute('fill', '#f2cc5c');
        title.setAttribute('font-size', '24');
        title.setAttribute('font-family', 'Ma Shan Zheng, serif');
        title.textContent = '斗气大陆全图';
        svg.appendChild(title);

        // 副标题
        const subtitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        subtitle.setAttribute('x', '325');
        subtitle.setAttribute('y', '55');
        subtitle.setAttribute('text-anchor', 'middle');
        subtitle.setAttribute('fill', 'rgba(255,255,255,0.5)');
        subtitle.setAttribute('font-size', '12');
        subtitle.textContent = '点击区域查看详情 · 悬浮高亮';
        svg.appendChild(subtitle);

        // 绘制区域
        REGIONS.forEach(region => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('class', 'doupo-map-region');
            g.setAttribute('data-id', region.id);

            // 区域路径
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', region.path);
            path.setAttribute('fill', region.color);
            path.setAttribute('fill-opacity', '0.3');
            path.setAttribute('stroke', region.color);
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-opacity', '0.6');
            path.style.transition = 'all 0.3s ease';
            path.style.cursor = 'pointer';

            // 区域名称
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', region.center[0]);
            text.setAttribute('y', region.center[1]);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#fff');
            text.setAttribute('font-size', '14');
            text.setAttribute('font-weight', 'bold');
            text.setAttribute('pointer-events', 'none');
            text.textContent = region.name;

            // 悬浮效果
            g.addEventListener('mouseenter', () => {
                path.setAttribute('fill-opacity', '0.6');
                path.setAttribute('stroke-width', '3');
                text.setAttribute('fill', '#f2cc5c');
                showTooltip(region);
            });

            g.addEventListener('mouseleave', () => {
                path.setAttribute('fill-opacity', '0.3');
                path.setAttribute('stroke-width', '2');
                text.setAttribute('fill', '#fff');
                hideTooltip();
            });

            // 点击跳转
            g.addEventListener('click', () => {
                showRegionDetail(region);
            });

            g.appendChild(path);
            g.appendChild(text);
            svg.appendChild(g);
        });

        // 图例
        const legend = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        legend.setAttribute('transform', 'translate(20, 400)');
        REGIONS.slice(0, 5).forEach((region, i) => {
            const x = i * 120;
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', '0');
            rect.setAttribute('width', '12');
            rect.setAttribute('height', '12');
            rect.setAttribute('fill', region.color);
            rect.setAttribute('rx', '2');
            legend.appendChild(rect);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', x + 16);
            text.setAttribute('y', '10');
            text.setAttribute('fill', 'rgba(255,255,255,0.7)');
            text.setAttribute('font-size', '11');
            text.textContent = region.name;
            legend.appendChild(text);
        });
        svg.appendChild(legend);

        container.appendChild(svg);
    }

    // ========== Tooltip ==========
    let tooltipEl = null;

    function showTooltip(region) {
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.className = 'doupo-map-tooltip';
            tooltipEl.style.cssText = `
                position: fixed;
                background: rgba(22, 14, 28, 0.95);
                border: 1px solid ${region.color};
                border-radius: 8px;
                padding: 12px 16px;
                max-width: 280px;
                z-index: 10000;
                pointer-events: none;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            `;
            document.body.appendChild(tooltipEl);
        }

        tooltipEl.innerHTML = `
            <div style="color: ${region.color}; font-weight: bold; font-size: 15px; margin-bottom: 6px;">
                ${region.name}
            </div>
            <div style="color: rgba(255,255,255,0.8); font-size: 13px; line-height: 1.5;">
                ${region.desc}
            </div>
            <div style="color: rgba(255,255,255,0.5); font-size: 11px; margin-top: 8px;">
                热点：${region.highlights.slice(0, 3).join('、')}
            </div>
            <div style="color: ${region.color}; font-size: 11px; margin-top: 4px;">
                点击查看详情 →
            </div>
        `;

        tooltipEl.style.display = 'block';
        document.addEventListener('mousemove', moveTooltip);
    }

    function moveTooltip(e) {
        if (tooltipEl) {
            tooltipEl.style.left = (e.clientX + 15) + 'px';
            tooltipEl.style.top = (e.clientY + 15) + 'px';
        }
    }

    function hideTooltip() {
        if (tooltipEl) {
            tooltipEl.style.display = 'none';
            document.removeEventListener('mousemove', moveTooltip);
        }
    }

    // ========== 区域详情弹窗 ==========
    function showRegionDetail(region) {
        // 创建弹窗
        let overlay = document.getElementById('doupo-map-modal');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'doupo-map-modal';
            overlay.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.7);
                backdrop-filter: blur(5px);
                z-index: 10001;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            `;
            document.body.appendChild(overlay);
        }

        overlay.innerHTML = `
            <div style="
                background: rgba(22, 14, 28, 0.95);
                border: 1px solid ${region.color};
                border-radius: 16px;
                padding: 24px;
                max-width: 500px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                backdrop-filter: blur(20px);
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h3 style="color: ${region.color}; font-size: 22px; font-family: Ma Shan Zheng, serif;">
                        ${region.name}
                    </h3>
                    <button onclick="document.getElementById('doupo-map-modal').style.display='none'" 
                            style="background: none; border: none; color: rgba(255,255,255,0.5); font-size: 24px; cursor: pointer;">
                        ×
                    </button>
                </div>
                <p style="color: rgba(255,255,255,0.8); line-height: 1.8; margin-bottom: 16px;">
                    ${region.desc}
                </p>
                <div style="margin-bottom: 16px;">
                    <h4 style="color: var(--color-gold); font-size: 14px; margin-bottom: 8px;">热点区域</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${region.highlights.map(h => `
                            <span style="
                                background: ${region.color}22;
                                border: 1px solid ${region.color}44;
                                color: ${region.color};
                                padding: 4px 12px;
                                border-radius: 20px;
                                font-size: 13px;
                            ">${h}</span>
                        `).join('')}
                    </div>
                </div>
                <a href="${region.page}" style="
                    display: inline-block;
                    background: ${region.color};
                    color: #fff;
                    padding: 10px 24px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: bold;
                ">查看详细设定 →</a>
            </div>
        `;

        overlay.style.display = 'flex';
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    }

    // ========== 初始化 ==========
    function init() {
        const container = document.getElementById('doupo-map-container');
        if (container) {
            createSVGMap(container);
        }
    }

    // 页面加载后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 导出到全局
    window.DoupoMap = { init, REGIONS };
})();
