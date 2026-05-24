import re
import sys

def process_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add CSS
    css_injection = """
        /* ====== 异火榜与卡片网格样式重构 ======= */
        .archive-card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
            margin: 1.5rem 0;
        }
        .archive-data-card {
            background: linear-gradient(135deg, rgba(20,20,25,0.8) 0%, rgba(10,10,15,0.95) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.5rem;
            transition: var(--transition);
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .archive-data-card:hover {
            border-color: var(--color-gold);
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(242, 204, 92, 0.15);
        }
        .archive-card-header {
            font-size: 1.2rem;
            color: var(--color-gold);
            font-weight: bold;
            margin-bottom: 0.8rem;
            padding-bottom: 0.8rem;
            border-bottom: 1px solid rgba(242, 204, 92, 0.2);
        }
        .archive-card-content {
            flex-grow: 1;
        }
        .archive-kv {
            margin-bottom: 0.6rem;
        }
        .archive-k {
            color: #888;
            font-size: 0.85rem;
            margin-bottom: 0.2rem;
            display: block;
        }
        .archive-v {
            color: #ddd;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        /* 交互式异火卡片 */
        .flame-card {
            cursor: pointer;
            overflow: hidden;
            position: relative;
        }
        .flame-card:hover {
            border-color: var(--color-red-light);
            box-shadow: 0 8px 30px rgba(217, 4, 41, 0.2);
        }
        .flame-details {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
        }
        .flame-card.expanded .flame-details {
            max-height: 1000px;
            opacity: 1;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px dashed rgba(217, 4, 41, 0.3);
        }
        .flame-expand-hint {
            text-align: center;
            font-size: 0.8rem;
            color: #777;
            margin-top: 1rem;
            transition: opacity 0.3s;
        }
        .flame-expand-hint::before { content: "▼ 点击完全展开"; }
        .flame-card.expanded .flame-expand-hint::before { content: "▲ 收起详情"; }
        .flame-card.expanded .flame-expand-hint { opacity: 0.5; }

        /* ====== 境界横轴总览样式 ======= */"""
    
    content = content.replace("/* ====== 境界横轴总览样式 ======= */", css_injection)

    # 2. Fix Calculator Layout Issue
    calc_block = """                                相当于 1 个普通凡人的战力
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 合并原 18模块 -->"""
    
    calc_fixed = """                                相当于 1 个普通凡人的战力
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- End of first calc-container -->

            <!-- 合并原 18模块 -->"""
    content = content.replace(calc_block, calc_fixed)
    
    # Needs to remove closing tag of the original calc-container that was wrapping the 18 module
    bad_closings = """                                    <em style="color: #999;">注：斗帝与斗圣存在规则级壁垒，无论斗圣战力多高，均无法跨过帝境壁垒。</em>
                                </p>
                            </div>
                        </div>
                    </div>
        </section>"""
        
    good_closings = """                                    <em style="color: #999;">注：斗帝与斗圣存在规则级壁垒，无论斗圣战力多高，均无法跨过帝境壁垒。</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>"""
    # Wait, if we closed `calc-container` early, the old 18 part starts its own `<div class="calc-container">` at line 5413, and ends at 5478. 
    # original section 18 actually has its own calc-container:
    #                 <!-- 合并原 18模块 -->
    #                 <div style="...
    #                     <h2 class="section-title"...
    #                     <p class="section-desc">...
    #                     <div class="calc-container">...
    # Then `</div></div></div></section>` at the end.
    # The problem was `<div class="calc-container">` wrapper that started at line 4918 never closed before the `合并原 18模块`.
    # Original HTML:
    #             <div class="calc-container">
    #                  ...
    #                 <div class="calc-result"> ... </div>
    #             <!-- 合并原 18模块 --> (This was inside the FIRST calc-container! wait, if we added `</div>` at the end of calc-result? The calc-container wraps `.calc-settings` and `.calc-result`.)
    # In my fixed string `calc_fixed`, I added `</div>` to close the first `.calc-container`! But wait, I also need to remove an extra `</div>` at the bottom.
    # At the end:
    #                             </div>
    #                         </div>
    #                     </div>
    #         </section>
    
    # 3. Replace Tables
    # Identify tables using regex
    table_pattern = re.compile(r'<table class="clan-archive-table">(.*?)</table>', re.DOTALL)
    def repl_table(m):
        tbody = m.group(1)
        rows = re.findall(r'<tr>(.*?)</tr>', tbody, re.DOTALL)
        if len(rows) < 2: return m.group(0)
        
        # Parse headers
        header_row = rows[0]
        headers = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<th[^>]*>(.*?)</th>', header_row, re.DOTALL)]
        if not headers: return m.group(0)
        
        grid_html = '<div class="archive-card-grid">\n'
        for row in rows[1:]:
            cells = re.findall(r'<td[^>]*>(.*?)</td>', row, re.DOTALL)
            if len(cells) != len(headers): continue
            
            grid_html += '    <div class="archive-data-card">\n'
            grid_html += f'        <div class="archive-card-header">{cells[0].strip()}</div>\n'
            grid_html += '        <div class="archive-card-content">\n'
            for i in range(1, len(cells)):
                grid_html += f'            <div class="archive-kv"><span class="archive-k">{headers[i]}</span><span class="archive-v">{cells[i].strip()}</span></div>\n'
            grid_html += '        </div>\n    </div>\n'
        grid_html += '</div>\n'
        return grid_html
    
    content = table_pattern.sub(repl_table, content)
    
    # 4. Refactor Flame Cards
    # Adding `onclick="this.classList.toggle('expanded')"` to flame_cards.
    # Adding `<div class="flame-expand-hint"></div>`
    flame_card_pattern = re.compile(r'(<div class="flame-card">)(\s*<div class="flame-header">.*?)(<div class="flame-details">.*?</div>\s*</div>)', re.DOTALL)
    
    def repl_flame(m):
        opening = m.group(1).replace('class="flame-card"', 'class="flame-card" onclick="this.classList.toggle(\'expanded\')"')
        header_part = m.group(2)
        
        # We want to extract "来源" from details and put it in a basic section? 
        # Actually user wants "排名、姓名、来源" always visible.
        # Flame name and Rank are in `flame-header`.
        details_part = m.group(3)
        
        # Extract 来源
        source_match = re.search(r'(<p>.*?<strong>.*?来源：.*?</strong>(.*?)</p>)', details_part, re.DOTALL)
        source_html = ""
        if source_match:
            source_html = f'<div class="flame-card-basic" style="font-size: 0.9rem; color: #bbb; padding: 0 1rem 1rem 1rem;">{source_match.group(0)}</div>'
            # don't remove it from details, just show it duplicated, but wait, usually we just keep it in detail or move it out. 
            # Or we can just let `flame-details` handle the rest.
        else:
            source_html = '<div class="flame-card-basic" style="font-size: 0.9rem; color: #bbb; padding: 0 1rem 1rem 1rem;">点击查看详情</div>'
            
        modified_details = details_part.replace('class="flame-details"', 'class="flame-details"')
        modified_details = modified_details.replace('</div>\n</div>', '<div class="flame-expand-hint"></div>\n</div>\n</div>')
        
        return opening + header_part + source_html + modified_details
        
    content = flame_card_pattern.sub(repl_flame, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("UI refactoring complete.")

if __name__ == '__main__':
    process_html(r"c:\Users\Lenovo\.gemini\antigravity\scratch\未命名 (4).html")
