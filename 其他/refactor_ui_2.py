import re

def process_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Restore the Heavenly Flames Section header and Top 5 flames
    # I will look for `<section class="section" id="丹药体系">` (or similar) or `#异火榜`
    # Wait, where was the Section 05 Heavenly Flames originally?
    # It was right before the "NO.6 八荒破灭焱".
    # Let's find the NO.6 block.
    
    missing_flames_html = """
        <section class="section" id="异火榜">
            <h2 class="section-title">05 核心金手指：火焰与异火榜体系</h2>
            <p class="section-desc">斗气大陆公认的至高火焰榜单，固定收录23种天地异火，排名越靠前，火焰威力越强、成长性越高，多火融合可爆发毁天灭地的威力。</p>
            <h3 class="section-subtitle">异火榜完整排名（原著官方23种）</h3>
            <div class="card-grid flame-grid">
                <div class="flame-card" onclick="this.classList.toggle('expanded')">
                    <div class="flame-header">
                        <div class="flame-rank-block">NO.1</div>
                        <h4 class="flame-name">帝炎</h4>
                    </div>
                    <div class="flame-card-basic">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>天地间二十二种异火融合而成，万火之尊。</p>
                    </div>
                    <div class="flame-details">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>天地间二十二种异火融合而成，万火之尊。</p>
                        <p><strong><span style="color:var(--color-gold-light)">📍</span>所在地：</strong>陀舍古帝传承/萧炎体内。</p>
                        <p><strong><span style="color:var(--color-purple-light)">👤</span>归属方：</strong>陀舍古帝 -> 萧炎。</p>
                        <p class="flame-desc"><strong>✨特性：</strong>绚丽多彩，拥有所有异火的能力，毁天灭地，无物不焚，乃是斗帝级别的专属神火。</p>
                    </div>
                </div>
                <div class="flame-card" onclick="this.classList.toggle('expanded')">
                    <div class="flame-header">
                        <div class="flame-rank-block">NO.2</div>
                        <h4 class="flame-name">虚无吞炎</h4>
                    </div>
                    <div class="flame-card-basic">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>生于虚无之中，无相可寻，无形可抓。</p>
                    </div>
                    <div class="flame-details">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>生于虚无之中，无相可寻，无形可抓。</p>
                        <p><strong><span style="color:var(--color-gold-light)">📍</span>所在地：</strong>魂帮核心界域。</p>
                        <p><strong><span style="color:var(--color-purple-light)">👤</span>归属方：</strong>魂族（魂天帝）。</p>
                        <p class="flame-desc"><strong>✨特性：</strong>呈纯黑色，拥有吞噬万物之能，连空间、斗气都能吞噬，并拥有极高灵智，化为人形后实力达到九星斗圣。</p>
                    </div>
                </div>
                <div class="flame-card" onclick="this.classList.toggle('expanded')">
                    <div class="flame-header">
                        <div class="flame-rank-block">NO.3</div>
                        <h4 class="flame-name">净莲妖火</h4>
                    </div>
                    <div class="flame-card-basic">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>天地间极其神秘的火焰，能够以人的情绪为引子，引爆体内。</p>
                    </div>
                    <div class="flame-details">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>天地间极其神秘的火焰，能够以人的情绪为引子，引爆体内。</p>
                        <p><strong><span style="color:var(--color-gold-light)">📍</span>所在地：</strong>妖火空间。</p>
                        <p><strong><span style="color:var(--color-purple-light)">👤</span>归属方：</strong>净莲妖圣 -> 萧炎。</p>
                        <p class="flame-desc"><strong>✨特性：</strong>呈粉红色双莲形态。将其焚烧为虚无。脾气极其暴躁不驯服，拥有毁天灭地的力量。</p>
                    </div>
                </div>
                <div class="flame-card" onclick="this.classList.toggle('expanded')">
                    <div class="flame-header">
                        <div class="flame-rank-block">NO.4</div>
                        <h4 class="flame-name">金帝焚天炎</h4>
                    </div>
                    <div class="flame-card-basic">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>远古八族之一古族的传承异火，镇族之宝。</p>
                    </div>
                    <div class="flame-details">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>远古八族之一古族的传承异火，镇族之宝。</p>
                        <p><strong><span style="color:var(--color-gold-light)">📍</span>所在地：</strong>古族古界。</p>
                        <p><strong><span style="color:var(--color-purple-light)">👤</span>归属方：</strong>古族 -> 萧薰儿。</p>
                        <p class="flame-desc"><strong>✨特性：</strong>通体金黄，传闻第一任主人施展时直接将一位斗圣所创造的空间烧成虚无，连斗气都能燃烧。</p>
                    </div>
                </div>
                <div class="flame-card" onclick="this.classList.toggle('expanded')">
                    <div class="flame-header">
                        <div class="flame-rank-block">NO.5</div>
                        <h4 class="flame-name">生灵之焱</h4>
                    </div>
                    <div class="flame-card-basic">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>诞生于神农山脉万灵之源，极具生命力。</p>
                    </div>
                    <div class="flame-details">
                        <p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>诞生于神农山脉万灵之源，极具生命力。</p>
                        <p><strong><span style="color:var(--color-gold-light)">📍</span>所在地：</strong>神农山脉。</p>
                        <p><strong><span style="color:var(--color-purple-light)">👤</span>归属方：</strong>神农老人。</p>
                        <p class="flame-desc"><strong>✨特性：</strong>翠绿色火焰，生命属性极其可怕，可无极度催熟绝世灵药。虽不擅长破坏，但号称不死之火。</p>
                    </div>
                </div>
"""
    
    # We need to find `<div class="flame-card" onclick="this.classList.toggle('expanded')">\n                    <div class="flame-header">\n                        <span class="flame-rank">NO.6</span>`
    # and inject missing_flames_html right before it. Wait, the `div class="card-grid flame-grid"` was destroyed too. We need to recreate it.
    
    # Let's carefully find where to inject it. It should be right after `</section>` of section 04 or right before `<div class="flame-card"...> NO.6`.
    no6_index = content.find('<span class="flame-rank">NO.6</span>')
    if no6_index != -1:
        start_of_no6 = content.rfind('<div class="flame-card"', 0, no6_index)
        content = content[:start_of_no6] + missing_flames_html + content[start_of_no6:]

    # Now let's update CSS for flame-card
    # Replace `<span class="flame-rank">NO.X</span>` with `<div class="flame-rank-block">NO.X</div>`
    content = re.sub(r'<span class="flame-rank">(NO\.\d+)</span>', r'<div class="flame-rank-block">\1</div>', content)
    
    css_injection = """
        /* ====== 改版异火榜卡片样式 (Dark Red Theme) ====== */
        .flame-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .flame-card {
            background: #110505;
            background-image: radial-gradient(circle at center, rgba(30,0,0,0.8) 0%, #110505 100%);
            border: 1px solid rgba(255, 30, 30, 0.2);
            border-radius: 8px;
            padding: 1.2rem;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            box-shadow: 0 4px 15px rgba(0,0,0,0.6);
        }
        .flame-card:hover {
            border-color: rgba(255, 60, 60, 0.6);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 20, 20, 0.15);
        }
        .flame-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.8rem;
        }
        .flame-rank-block {
            background: linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%);
            color: #fff;
            font-weight: 900;
            font-size: 1.1rem;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            margin-right: 1rem;
            box-shadow: 0 0 10px rgba(255, 50, 50, 0.4);
            font-style: italic;
        }
        .flame-name {
            font-size: 1.3rem;
            color: #ffcccc;
            margin: 0;
            text-shadow: 0 0 8px rgba(255, 50, 50, 0.5);
            font-weight: bold;
        }
        .flame-card-basic {
            font-size: 0.9rem;
            color: #aaa;
            padding-bottom: 0.5rem;
            border-bottom: 1px dashed rgba(255, 50, 50, 0.3);
            margin-bottom: 0.5rem;
        }
        .flame-details {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.4s ease-in-out;
        }
        .flame-card.expanded .flame-details {
            max-height: 800px;
            opacity: 1;
            padding-top: 0.5rem;
        }
        .flame-card-basic p, .flame-details p {
            margin: 0.3rem 0;
            line-height: 1.6;
            font-size: 0.9rem;
        }
        .flame-expand-hint {
            text-align: center;
            font-size: 0.8rem;
            color: #ff6666;
            margin-top: 0.8rem;
            text-decoration: underline;
            text-underline-offset: 3px;
            opacity: 0.7;
        }
        .flame-expand-hint::before {
            content: "\u25BC 点击发掘异火隐秘";
        }
        .flame-card.expanded .flame-expand-hint::before {
            content: "\u25B2 闭合异火档案";
        }
        
        /* ====== 丹药品阶网格 ====== */
        .pill-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .pill-card {
            background: rgba(15, 20, 25, 0.8);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: transform 0.3s;
        }
        .pill-card:hover {
            transform: translateY(-5px);
        }
        .pill-orb {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 1rem;
            background: #222;
        }
        .pill-card h4 {
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
        .pill-card p {
            font-size: 0.9rem;
            color: #aaa;
            line-height: 1.5;
        }
        /* Specific pill glow effects */
        .orb-low { box-shadow: 0 0 20px rgba(150,150,150,0.5) inset, 0 0 15px rgba(150,150,150,0.3); background: #ccc; }
        .orb-mid { box-shadow: 0 0 20px rgba(50,200,100,0.8) inset, 0 0 20px rgba(50,200,100,0.4); background: #5df296; }
        .orb-high { box-shadow: 0 0 25px rgba(150,50,250,0.8) inset, 0 0 25px rgba(150,50,250,0.5); background: #b05df2; }
        .orb-bao { box-shadow: 0 0 30px rgba(30,30,30,0.9) inset, 0 0 30px rgba(0,0,0,0.6); background: #333; border: 2px solid #111; }
        .orb-xuan { box-shadow: 0 0 35px rgba(100,200,255,0.9) inset, 0 0 30px rgba(100,200,255,0.6); background: #adf; }
        .orb-jin { box-shadow: 0 0 40px rgba(255,215,0,0.9) inset, 0 0 40px rgba(255,215,0,0.7); background: gold; }
        .orb-di { background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3); box-shadow: 0 0 50px rgba(255,100,100,0.8); background-size: 400%; animation: rgb_glow 3s linear infinite; }
        
        @keyframes rgb_glow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        
        /* ====== 八族粒子特效 ====== */
        .clan-node {
            position: relative;
        }
        .clan-node::before {
            content: ''; position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px;
            border-radius: 50%; z-index: -1; opacity: 0; transition: opacity 0.5s;
        }
        .clan-node:hover::before { opacity: 1; }
        
        .clan-node.active[data-clan="hun"]::before { background: radial-gradient(circle, rgba(20,20,20,0.8) 0%, transparent 60%); box-shadow: 0 0 30px rgba(0,0,0,0.9); }
        .clan-node.active[data-clan="gu"]::before { background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(255,215,0,0.6); }
        .clan-node.active[data-clan="yan"]::before { background: radial-gradient(circle, rgba(255,50,0,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(255,50,0,0.6); }
        .clan-node.active[data-clan="yao"]::before { background: radial-gradient(circle, rgba(50,200,50,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(50,200,50,0.5); }
        .clan-node.active[data-clan="lei"]::before { background: radial-gradient(circle, rgba(200,50,250,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(200,50,250,0.6); }
        .clan-node.active[data-clan="shi"]::before { background: radial-gradient(circle, rgba(150,150,150,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(150,150,150,0.6); }
        .clan-node.active[data-clan="ling"]::before { background: radial-gradient(circle, rgba(100,200,255,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(100,200,255,0.6); }
        .clan-node.active[data-clan="xiao"]::before { background: radial-gradient(circle, rgba(255,100,150,0.3) 0%, transparent 60%); box-shadow: 0 0 30px rgba(255,100,150,0.6); }
"""

    if "/* ====== 改版异火榜卡片样式 (Dark Red Theme) ====== */" not in content:
        content = content.replace("/* ====== 境界横轴总览样式 ======= */", css_injection + "\n/* ====== 境界横轴总览样式 ======= */")

    # Strip out the old `<div class="flame-card-basic"...>` that I added earlier for NO.6+ because I am styling it systematically now via HTML.
    content = re.sub(r'<div class="flame-card-basic".*?</div>(<div class="flame-details">)', r'\1', content)
    
    # Wait, the prompt specifically wanted basic info separated from expanded. Let's fix the basic info for the rest of flames dynamically!
    def refactor_flame_html(m):
        full_html = m.group(0)
        # Check if we already added a flame-card-basic
        if 'class="flame-card-basic"' in full_html:
            return full_html
        
        # Extract name and details
        details_match = re.search(r'<div class="flame-details">(.*?)</div>\n\s*<div class="flame-expand-hint">', full_html, re.DOTALL)
        if not details_match:
            details_match = re.search(r'<div class="flame-details">(.*?)</div>', full_html, re.DOTALL)
        
        if details_match:
            details_html = details_match.group(1)
            source_match = re.search(r'<p>.*?<strong>.*?来源：.*?</strong>(.*?)</p>', details_html, re.DOTALL)
            basic_html = ""
            if source_match:
                basic_html = f'<div class="flame-card-basic"><p><strong><span style="color:var(--color-flame-orange)">🌋</span>来源：</strong>{source_match.group(1).strip()}</p></div>'
            else:
                basic_html = '<div class="flame-card-basic"><p>点击卡片探索详细秘辛...</p></div>'
            
            return full_html.replace('<div class="flame-details">', basic_html + '\n<div class="flame-details">')
        return full_html
        
    content = re.sub(r'<div class="flame-card" onclick="this.classList.toggle\(\'expanded\'\)">.*?</div>\s*</div>', refactor_flame_html, content, flags=re.DOTALL)

    # 3. Redesign Pills
    old_pills = """            <ol>
                <li><span class="highlight">一至三品低阶丹药</span>：无丹雷，仅能满足基础修炼、疗伤需求，无特殊加持。</li>
                <li><span class="highlight">四品至六品中阶丹药</span>：六品丹药炼制成功会引发天地异象，七品及以上丹药会降下丹雷，品阶越高，丹雷威力越强。</li>
                <li><span class="highlight">七品至八品高阶丹药</span>：八品丹药可通过丹雷颜色区分品质，两色至四色丹雷为八品低级，五色至六色为中级，七色至八色为高级，九色为八品巅峰。
                </li>
                <li><span class="highlight">九品宝丹</span>：九品丹药入门级，炼制时会降下黑魔雷，可辅助斗尊突破半圣，有极强的疗伤、增幅效果。</li>
                <li><span class="highlight">九品玄丹</span>：九品丹药中阶，丹药成形时会出现丹雨，可诞生初步灵智，可辅助半圣突破斗圣，丹塔老祖即为九品玄丹化形。</li>
                <li><span class="highlight">九品金丹</span>：九品丹药顶级，炼制时会招来九玄金雷，丹灵可化形，拥有不弱于斗圣的战力，千年内无人可炼制。</li>
                <li><span
                        class="highlight-red">帝品丹药</span>：丹药的终极形态，只有帝品炼药师可炼制，内含位面源气，可助人突破斗帝境界，丹灵拥有堪比斗帝的实力，原著中仅出现过一枚帝品雏丹。
                </li>
            </ol>"""
            
    new_pills = """            <div class="pill-grid">
                <div class="pill-card">
                    <div class="pill-orb orb-low"></div>
                    <h4 style="color:#ccc;">一至三品低阶丹药</h4>
                    <p>无丹雷，仅能满足基础修炼、疗伤需求，无特殊加持。</p>
                </div>
                <div class="pill-card">
                    <div class="pill-orb orb-mid"></div>
                    <h4 style="color:#5df296;">四至六品中阶丹药</h4>
                    <p>六品丹药炼制成功即会引发天地异象，极度珍贵。</p>
                </div>
                <div class="pill-card">
                    <div class="pill-orb orb-high"></div>
                    <h4 style="color:#b05df2;">七至八品高阶丹药</h4>
                    <p>成丹降下丹雷，其中八品丹药通过丹雷颜色(2孔-9色)区分品质，可化灵。</p>
                </div>
                <div class="pill-card">
                    <div class="pill-orb orb-bao"></div>
                    <h4 style="color:#888;">九品宝丹</h4>
                    <p>引来致命黑魔雷。具有极强的灵智与战力，可辅助斗尊突破至半圣境，中州至宝。</p>
                </div>
                <div class="pill-card">
                    <div class="pill-orb orb-xuan"></div>
                    <h4 style="color:#adf;">九品玄丹</h4>
                    <p>成形降下丹雨，可化作人形生灵，实力堪比斗圣。原著中丹塔老祖即为九品玄丹化形。</p>
                </div>
                <div class="pill-card">
                    <div class="pill-orb orb-jin"></div>
                    <h4 style="color:gold;">九品金丹</h4>
                    <p>招来毁灭性的九玄金雷。战力堪比高星斗圣，已可与天地争辉，千年内几乎无人能炼制。</p>
                </div>
                <div class="pill-card" style="grid-column: 1 / -1; background: rgba(50,0,0,0.5); border-color: rgba(255,0,0,0.3);">
                    <div class="pill-orb orb-di" style="width: 80px; height: 80px;"></div>
                    <h4 style="color:#ff4d4d; font-size: 1.5rem; text-shadow: 0 0 10px red;">帝品丹药</h4>
                    <p style="font-size:1.1rem; color: #fcc; max-width:800px;">丹药的终极至高形态，唯有斗帝或准帝境持有位面源气方可炼制！内含突破斗帝必须的本源源气，丹灵拥有无敌于天地间的绝世战力。原著中仅出现了一枚帝品雏丹，存放于陀舍古帝洞府。</p>
                </div>
            </div>"""
    content = content.replace(old_pills, new_pills)

    # 4. Fix Ancient Clans Text Overlap
    # `<div class="structure-diagram" style="position: relative; height: 500px; margin: 2rem 0; background: radial-gradient(circle, rgba(20,20,20,0.8) 0%, transparent 70%);">
    #                 <!-- 中心节点：远古八族斗帝血脉 -->
    #                 <div class="clan-node center-node active" data-clan="none" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10;">
    #                     <div class="clan-icon" style="background: var(--color-gold); color: #000; font-size: 1.5rem; font-weight: bold;">帝</div>
    #                     <div class="clan-name" style="color: var(--color-gold); font-size: 1.2rem; margin-top: 10px;">远古八族·斗帝血脉</div>
    #                     <div style="font-size: 0.8rem; color: #ffeb3b; margin-top: 5px; text-shadow: 0 0 5px rgba(255,235,59,0.5);">点击族徽查看血脉及深度情报</div>
    #                 </div>`
    # Replace to fix overlap: change absolute positioning of text or add margin to Center node.
    text_overlap_bad = """<div style="font-size: 0.8rem; color: #ffeb3b; margin-top: 5px; text-shadow: 0 0 5px rgba(255,235,59,0.5);">点击族徽查看血脉及深度情报</div>"""
    text_overlap_good = """<div class="click-hint-text" style="position: absolute; top: 110%; width: 250px; left: 50%; transform: translateX(-50%); font-size: 0.9rem; color: #ffeb3b; margin-top: 15px; text-shadow: 0 0 5px rgba(255,235,59,0.5); opacity: 0.8; letter-spacing: 1px;">🖱️ 点击周围族徽查看血脉深度情报</div>"""
    content = content.replace(text_overlap_bad, text_overlap_good)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("UI refactoring Phase 2 complete. Restored Flames and designed Pill grid.")

if __name__ == '__main__':
    process_html(r"c:\Users\Lenovo\.gemini\antigravity\scratch\未命名 (4).html")
