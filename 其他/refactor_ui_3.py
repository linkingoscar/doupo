import re

def process_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix Clan Hover Particles
    # The previous script added CSS like `.clan-node.active[data-clan="hun"]::before`. We need to remove `.active`
    content = content.replace(".clan-node.active[data-clan=", ".clan-node[data-clan=")

    # 2. Fix Clan Text Overlap
    # `<div style="position:absolute; bottom: 30px; text-align:center; width:100%; pointer-events: none;">`
    # Replace with relative positioning
    overlap_target = '<div style="position:absolute; bottom: 30px; text-align:center; width:100%; pointer-events: none;">'
    overlap_replacement = '<div style="margin-top: 30px; text-align:center; width:100%; pointer-events: none; position: relative; z-index: 10;">'
    content = content.replace(overlap_target, overlap_replacement)
    
    # 3. Redesign Puppet System
    old_puppet = """            <ol>
                <li><span class="highlight">人阶妖傀（铜色）</span>：对应斗者至斗灵境界，炼制材料要求低，战力有限，是最基础的傀儡。</li>
                <li><span class="highlight">地阶妖傀（银色）</span>：对应斗王至斗宗境界，需斗宗级强者的肉身、灵魂炼制，可吸收丹雷进化，代表作是萧炎早期的地妖傀。</li>
                <li><span class="highlight">天阶妖傀（金色）</span>：对应斗宗巅峰至斗尊境界，需吸收五色及以上丹雷淬炼而成，肉身坚硬，无惧斗气攻击，代表作是萧炎的初代天妖傀。</li>
                <li><span class="highlight">斗尊级妖傀</span>：对应一至九星斗尊，需经黑魔雷、九玄金雷淬炼，可通过阵法合体提升战力，萧炎的天妖傀最终进化至九星斗尊巅峰。</li>
                <li><span class="highlight-red">斗圣级妖傀</span>：对应一至九星斗圣，需斗圣级强者的肉身与本源炼制，原著中最强的是萧炎以北龙王躯体炼制的北王傀儡，实力达到六星斗圣。
                </li>
            </ol>"""
            
    css_injection = """
        /* ====== 傀儡战力卡片网格 ====== */
        .puppet-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .puppet-card {
            background: linear-gradient(145deg, #1c1c1c, #111);
            border-radius: 10px;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            border-left: 6px solid #444;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
            transition: all 0.3s ease;
        }
        .puppet-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.7);
        }
        .puppet-card::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: repeating-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.03),
                rgba(255, 255, 255, 0.03) 10px,
                transparent 10px,
                transparent 20px
            );
            pointer-events: none;
        }
        .puppet-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }
        .puppet-color-dot {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin-right: 10px;
            box-shadow: 0 0 10px currentColor;
        }
        .puppet-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin: 0;
            letter-spacing: 1px;
            text-shadow: 1px 1px 2px #000;
        }
        .puppet-desc {
            font-size: 0.9rem;
            line-height: 1.6;
            color: #ccc;
            margin: 0;
        }
        
        /* 阶级专属颜色与金属光泽 */
        .puppet-human { border-color: #cd7f32; } /* 铜色 */
        .puppet-human .puppet-color-dot { color: #cd7f32; background: #cd7f32; }
        .puppet-human .puppet-title { color: #e6a869; }

        .puppet-earth { border-color: #c0c0c0; } /* 银色 */
        .puppet-earth .puppet-color-dot { color: #e0e0e0; background: #e0e0e0; }
        .puppet-earth .puppet-title { color: #fff; text-shadow: 0 0 5px rgba(255,255,255,0.5); }

        .puppet-heaven { border-color: #ffd700; } /* 金色 */
        .puppet-heaven .puppet-color-dot { color: #ffd700; background: #ffd700; }
        .puppet-heaven .puppet-title { color: #ffe64d; text-shadow: 0 0 8px rgba(255,215,0,0.6); }

        .puppet-zun { border-color: #b8860b; background: linear-gradient(145deg, #2a2010, #111); } /* 暗金/雷云 */
        .puppet-zun .puppet-color-dot { color: #daa520; background: #daa520; }
        .puppet-zun .puppet-title { color: #fce688; text-shadow: 0 0 10px rgba(218,165,32,0.8); }

        .puppet-sheng { border-color: #8b0000; background: linear-gradient(145deg, #300, #111); grid-column: 1 / -1; } /* 血红/紫金 */
        .puppet-sheng .puppet-color-dot { color: #ff3333; background: #ff3333; box-shadow: 0 0 15px #f00; }
        .puppet-sheng .puppet-title { color: #ff6666; font-size: 1.5rem; text-shadow: 0 0 15px rgba(255,0,0,0.8); }
"""

    new_puppet = """            <div class="puppet-grid">
                <div class="puppet-card puppet-human">
                    <div class="puppet-header">
                        <div class="puppet-color-dot"></div>
                        <h4 class="puppet-title">人阶妖傀（铜色）</h4>
                    </div>
                    <p class="puppet-desc">对应斗者至斗灵境界，炼制材料要求低，战力有限，是最基础的炮灰级金属傀儡。</p>
                </div>
                
                <div class="puppet-card puppet-earth">
                    <div class="puppet-header">
                        <div class="puppet-color-dot"></div>
                        <h4 class="puppet-title">地阶妖傀（银色）</h4>
                    </div>
                    <p class="puppet-desc">对应斗王至斗宗境界，需斗宗级强者的肉身与晶体炼制。初现雷霆抗性，可吸收弱丹雷进行基础进化，肉身极其坚韧。</p>
                </div>
                
                <div class="puppet-card puppet-heaven">
                    <div class="puppet-header">
                        <div class="puppet-color-dot"></div>
                        <h4 class="puppet-title">天阶妖傀（金色）</h4>
                    </div>
                    <p class="puppet-desc">对应斗宗巅峰至初阶斗尊境界，需大量吸收五色及以上的狂暴丹雷淬炼而成。黄金肉身几近不毁，无惧常规斗气攻击与痛楚，绝对忠诚的杀戮机器。</p>
                </div>
                
                <div class="puppet-card puppet-zun">
                    <div class="puppet-header">
                        <div class="puppet-color-dot"></div>
                        <h4 class="puppet-title">斗尊级妖傀形态</h4>
                    </div>
                    <p class="puppet-desc">对应一至九星斗尊阶位。由天阶妖傀历经黑魔雷、九玄金雷的至高洗礼蜕变而来！萧炎掌控的高阶天妖傀甚至可通过“天妖阵”引雷阵法合体叠加爆发，硬撼九星斗尊巅峰。</p>
                </div>
                
                <div class="puppet-card puppet-sheng">
                    <div class="puppet-header">
                        <div class="puppet-color-dot"></div>
                        <h4 class="puppet-title">斗圣级·终极妖傀</h4>
                    </div>
                    <p class="puppet-desc" style="max-width: 800px; font-size: 1rem;">对应一至九星斗圣级别！需直接祭炼斗圣强者的无上肉躯与本源法则。原著中最骇人听闻的存在，便是萧炎强行抽取太虚古龙一族“北龙王”的残躯与高星斗圣灵魂，以黑魔雷暴祭炼而出的【北王傀儡】，单体战力达到惊天地泣鬼神的<span style="color:#ffcc00; font-weight:bold;">六星斗圣</span>巅峰水平！</p>
                </div>
            </div>"""

    if "/* ====== 傀儡战力卡片网格 ====== */" not in content:
        content = content.replace("/* ====== 丹药品阶网格 ====== */", css_injection + "\n/* ====== 丹药品阶网格 ====== */")
        
    content = content.replace(old_puppet, new_puppet)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Puppet, Overlap and Clan Hover FX Fixed.")

if __name__ == '__main__':
    process_html(r"c:\Users\Lenovo\.gemini\antigravity\scratch\未命名 (4).html")
