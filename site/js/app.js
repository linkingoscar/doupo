        const realmData = {
            "普通凡人": [{ name: "无修为", value: 1.0 }],
            "斗之气": [{ name: "1段", value: 2.0 }, { name: "2-3段", value: 3.5 }, { name: "4-6段", value: 6.0 }, { name: "7-9段", value: 9.0 }],
            "斗者": [{ name: "初期", value: 50.0 }, { name: "中期", value: 67.5 }, { name: "后期", value: 90.0 }, { name: "巅峰", value: 130.0 }],
            "斗师": [{ name: "初期", value: 400.0 }, { name: "中期", value: 525.0 }, { name: "后期", value: 800.0 }, { name: "巅峰", value: 1100.0 }],
            "大斗师": [{ name: "初期", value: 3300.0 }, { name: "中期", value: 4400.0 }, { name: "后期", value: 7000.0 }, { name: "巅峰", value: 9500.0 }],
            "斗灵": [{ name: "初期", value: 20000.0 }, { name: "中期", value: 26000.0 }, { name: "后期", value: 40000.0 }, { name: "巅峰", value: 55000.0 }],
            "斗王": [{ name: "初期", value: 120000.0 }, { name: "中期", value: 160000.0 }, { name: "后期", value: 235000.0 }, { name: "巅峰", value: 330000.0 }],
            "斗皇": [{ name: "初期", value: 4200000.0 }, { name: "中期", value: 6500000.0 }, { name: "后期", value: 9000000.0 }, { name: "巅峰", value: 12000000.0 }],
            "半步斗宗": [{ name: "-", value: 410000.0 }],
            "斗宗": [{ name: "初期", value: 600000.0 }, { name: "中期", value: 800000.0 }, { name: "后期", value: 1175000.0 }, { name: "巅峰", value: 1650000.0 }],
            "半步斗尊": [{ name: "-", value: 2200000.0 }],
            "斗尊": [{ name: "初期", value: 3500000.0 }, { name: "中期", value: 4625000.0 }, { name: "后期", value: 6937500.0 }, { name: "巅峰", value: 9500000.0 }],
            "半步斗圣": [{ name: "-", value: 13000000.0 }],
            "半圣": [{ name: "低阶半圣", value: 22000000.0 }, { name: "中阶半圣", value: 32500000.0 }, { name: "高阶半圣", value: 62500000.0 }],
            "斗圣": [
                { name: "1星初期", value: 120000000.0 }, { name: "1星中期", value: 160000000.0 }, { name: "1星后期", value: 235000000.0 }, { name: "1星巅峰", value: 330000000.0 },
                { name: "2星巅峰", value: 660000000.0 }, { name: "3星巅峰", value: 1320000000.0 }, { name: "4星巅峰", value: 2640000000.0 }, { name: "5星巅峰", value: 5280000000.0 },
                { name: "6星巅峰", value: 10560000000.0 }, { name: "7星巅峰", value: 21120000000.0 }, { name: "8星巅峰", value: 42240000000.0 },
                { name: "9星初期", value: 60000000000.0 }, { name: "9星中期", value: 80000000000.0 }, { name: "9星后期", value: 117500000000.0 }, { name: "9星巅峰", value: 165000000000.0 }
            ],
            "斗帝": [
                { name: "1星初期", value: 3600000000000.0 }, { name: "1星中期", value: 4700000000000.0 }, { name: "1星后期", value: 7050000000000.0 }, { name: "1星巅峰", value: 9900000000000.0 },
                { name: "2-9星(巅峰均值)", value: 17650000000000.0 }
            ]
        };

        const presetData = {
            xiaoyan1: { bigRealm: "斗之气", smallRealm: "7-9段", gongfa: "1.06", douji: "1.1", shouliandu: "1.0", yihuo: "1.0", xuemai: "1.0", linghun: "1.0", roushen: "1.0", zhuangbei: "1.0", danyao: "1.0", mifa: "1.0", zhuangtai: "1.0" },
            xiaoyan2: { bigRealm: "斗王", smallRealm: "巅峰", gongfa: "3.0", douji: "1.6", shouliandu: "1.15", yihuo: "1.43", xuemai: "1.0", linghun: "1.12", roushen: "1.1", zhuangbei: "1.15", danyao: "1.0", mifa: "1.0", zhuangtai: "1.0" },
            xiaoyan3: { bigRealm: "斗宗", smallRealm: "巅峰", gongfa: "4.0", douji: "1.6", shouliandu: "1.35", yihuo: "1.56", xuemai: "1.15", linghun: "1.2", roushen: "1.15", zhuangbei: "1.2", danyao: "1.0", mifa: "1.0", zhuangtai: "1.0" },
            xiaoyan4: { bigRealm: "斗圣", smallRealm: "9星巅峰", gongfa: "8.0", douji: "2.8", shouliandu: "1.6", yihuo: "4.0", xuemai: "2.5", linghun: "1.8", roushen: "1.6", zhuangbei: "1.8", danyao: "1.0", mifa: "1.0", zhuangtai: "1.0" }
        };

        const bigRealmSel = document.getElementById('bigRealm');
        const subRealmSel = document.getElementById('subRealm');
        const gongfaSel = document.getElementById('gongfa');
        const doujiSel = document.getElementById('douji');
        const shoulianduSel = document.getElementById('shouliandu');
        const yihuoSel = document.getElementById('yihuo');
        const xuemaiSel = document.getElementById('xuemai');

        const linghunSel = document.getElementById('linghun');
        const roushenSel = document.getElementById('roushen');
        const zhuangbeiSel = document.getElementById('zhuangbei');

        const danyaoSel = document.getElementById('danyao');
        const mifaSel = document.getElementById('mifa');
        const zhuangtaiSel = document.getElementById('zhuangtai');

        function formatNumber(num) {
            if (num < 10000) return num.toFixed(1);
            if (num < 1e8) return (num / 1e4).toFixed(2) + '万';
            if (num < 1e12) return (num / 1e8).toFixed(2) + '亿';
            if (num < 1e16) return (num / 1e12).toFixed(2) + '万亿';
            return (num / 1e16).toFixed(2) + '亿亿';
        }

        function updateSubRealm() {
            if (!bigRealmSel) return;
            const stages = realmData[bigRealmSel.value];
            if (!stages) return;
            subRealmSel.innerHTML = '';
            stages.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.value;
                opt.textContent = s.name;
                subRealmSel.appendChild(opt);
            });
            calculatePower();
        }

        // Auxiliary additions map based on provided rules context:
        // Text states: final multiplier = Core Multiplier + Aux Additions. 
        // We calculate aux additions based on the difference from 1.0 of the selected options.
        function getAuxAddition(selectEl) {
            if (!selectEl) return 0;
            const val = parseFloat(selectEl.options[selectEl.selectedIndex].value);
            return val - 1.0;
        }

        function calculatePower() {
            if (!subRealmSel) return;
            const baseVal = parseFloat(subRealmSel.value) || 1;

            // Core Multipliers (Multiplicative)
            const gf = parseFloat(gongfaSel.value) || 1;
            const dj = parseFloat(doujiSel.value) || 1;
            const sld = parseFloat(shoulianduSel.value) || 1;
            const yh = parseFloat(yihuoSel.value) || 1;
            const xm = parseFloat(xuemaiSel.value) || 1;

            const coreMultiplier = gf * (dj * sld) * yh * xm;

            const lh = getAuxAddition(linghunSel);
            const rs = getAuxAddition(roushenSel);
            const zb = getAuxAddition(zhuangbeiSel);

            const auxAddition = lh + rs + zb;

            // Final permanent multiplier ensures it scales safely.
            const finalMultiplier = coreMultiplier + auxAddition;
            const permPower = baseVal * finalMultiplier;

            // Temp Multipliers
            const dy = parseFloat(danyaoSel.value) || 1;
            const mf = parseFloat(mifaSel.value) || 1;
            const zt = parseFloat(zhuangtaiSel.value) || 1;

            const tempPower = permPower * dy * mf * zt;

            // Update UI
            document.getElementById('baseDisplay').textContent = formatNumber(baseVal);
            document.getElementById('gfDisplay').textContent = '×' + gf.toFixed(2);
            document.getElementById('djDisplay').textContent = '×' + (dj * sld).toFixed(2);
            document.getElementById('yhDisplay').textContent = '×' + yh.toFixed(2);
            document.getElementById('xmDisplay').textContent = '×' + xm.toFixed(2);

            const lhEl = document.getElementById('lhDisplay'); if (lhEl) lhEl.textContent = '+' + lh.toFixed(2);
            const rsEl = document.getElementById('rsDisplay'); if (rsEl) rsEl.textContent = '+' + rs.toFixed(2);
            const zbEl = document.getElementById('zbDisplay'); if (zbEl) zbEl.textContent = '+' + zb.toFixed(2);

            document.getElementById('permDisplay').textContent = formatNumber(permPower);

            const dyEl = document.getElementById('dyDisplay'); if (dyEl) dyEl.textContent = '×' + dy.toFixed(1);
            const mfEl = document.getElementById('mfDisplay'); if (mfEl) mfEl.textContent = '×' + mf.toFixed(1);
            const ztEl = document.getElementById('ztDisplay'); if (ztEl) ztEl.textContent = '×' + zt.toFixed(1);

            document.getElementById('finalDisplay').textContent = formatNumber(tempPower);
            document.getElementById('compareDisplay').textContent = '相当于 ' + formatNumber(tempPower) + ' 个普通凡人的战力';
        }

        function getClosestOptionIdx(selectEl, targetVal) {
            if (!selectEl) return 0;
            let closestIdx = 0;
            let minDiff = Infinity;
            for (let i = 0; i < selectEl.options.length; i++) {
                let diff = Math.abs(parseFloat(selectEl.options[i].value) - parseFloat(targetVal));
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIdx = i;
                }
            }
            return closestIdx;
        }

        function fillPreset(key) {
            const p = presetData[key];
            if (!p) return;
            bigRealmSel.value = p.bigRealm;
            updateSubRealm();

            const match = realmData[p.bigRealm].find(s => s.name === p.smallRealm);
            if (match) subRealmSel.value = match.value;

            gongfaSel.selectedIndex = getClosestOptionIdx(gongfaSel, p.gongfa);
            doujiSel.selectedIndex = getClosestOptionIdx(doujiSel, p.douji);
            shoulianduSel.selectedIndex = getClosestOptionIdx(shoulianduSel, p.shouliandu);
            yihuoSel.selectedIndex = getClosestOptionIdx(yihuoSel, p.yihuo);
            xuemaiSel.selectedIndex = getClosestOptionIdx(xuemaiSel, p.xuemai);

            linghunSel.selectedIndex = getClosestOptionIdx(linghunSel, p.linghun);
            roushenSel.selectedIndex = getClosestOptionIdx(roushenSel, p.roushen);
            zhuangbeiSel.selectedIndex = getClosestOptionIdx(zhuangbeiSel, p.zhuangbei);

            danyaoSel.selectedIndex = getClosestOptionIdx(danyaoSel, p.danyao);
            mifaSel.selectedIndex = getClosestOptionIdx(mifaSel, p.mifa);
            zhuangtaiSel.selectedIndex = getClosestOptionIdx(zhuangtaiSel, p.zhuangtai);

            calculatePower();
        }

        if (bigRealmSel) bigRealmSel.addEventListener('change', updateSubRealm);
        [subRealmSel, gongfaSel, doujiSel, shoulianduSel, yihuoSel, xuemaiSel, linghunSel, roushenSel, zhuangbeiSel, danyaoSel, mifaSel, zhuangtaiSel].forEach(el => {
            if (el) el.addEventListener('change', calculatePower);
        });

        const calcBtn = document.getElementById('calcBtn');
        if (calcBtn) calcBtn.addEventListener('click', calculatePower);

        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => fillPreset(btn.dataset.preset));
        });

        const logicModal = document.getElementById('logicModal');
        const logicBtn = document.getElementById('logicBtn');
        const logicClose = document.getElementById('logicClose');

        document.querySelectorAll('.logic-trigger-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (logicModal) logicModal.classList.add('active');
            });
        });
        if (logicBtn && logicModal) {
            // Keep old if any
        }
        if (logicClose && logicModal) {
            logicClose.addEventListener('click', () => logicModal.classList.remove('active'));
        }
        if (logicModal) {
            logicModal.addEventListener('click', (e) => {
                if (e.target === logicModal) logicModal.classList.remove('active');
            });
        }

        updateSubRealm();


        // ===== 境界倒推逻辑 =====
        const pureBaseData = [
            { max: 1.0, realm: "无修为", detail: "普通凡人" },
            { max: 2.0, realm: "斗之气1段", detail: "刚感应斗气" },
            { max: 4.0, realm: "斗之气2-3段", detail: "斗之气初期阶段" },
            { max: 7.0, realm: "斗之气4-6段", detail: "斗之气中期阶段" },
            { max: 10.0, realm: "斗之气7-9段", detail: "斗之气后期阶段" },
            { max: 50.0, realm: "斗者初期", detail: "已凝聚气旋" },
            { max: 75.0, realm: "斗者中期", detail: "斗者稳固" },
            { max: 100.0, realm: "斗者后期", detail: "斗气储量提升" },
            { max: 150.0, realm: "斗者巅峰", detail: "随时可尝试突破斗师" },
            { max: 400.0, realm: "斗师初期", detail: "斗气可外放显形" },
            { max: 600.0, realm: "斗师中期", detail: "斗气外放熟练" },
            { max: 900.0, realm: "斗师后期", detail: "斗气纱衣雏形" },
            { max: 1200.0, realm: "斗师巅峰", detail: "触摸大斗师壁垒" },
            { max: 3300.0, realm: "大斗师初期", detail: "可凝聚斗气铠甲" },
            { max: 5000.0, realm: "大斗师中期", detail: "斗气铠甲坚固" },
            { max: 8000.0, realm: "大斗师后期", detail: "斗气如液态" },
            { max: 10000.0, realm: "大斗师巅峰", detail: "随时可尝试结丹" },
            { max: 20000.0, realm: "斗灵初期", detail: "斗气凝物化形" },
            { max: 30000.0, realm: "斗灵中期", detail: "凝物更加真实" },
            { max: 45000.0, realm: "斗灵后期", detail: "斗气掌控力微观级" },
            { max: 60000.0, realm: "斗灵巅峰", detail: "开始感应空间涟漪" },
            { max: 120000.0, realm: "斗王初期", detail: "斗气化翼，可御空飞行" },
            { max: 180000.0, realm: "斗王中期", detail: "飞行速度大幅提升" },
            { max: 270000.0, realm: "斗王后期", detail: "初步调动外界斗气" },
            { max: 360000.0, realm: "斗王巅峰", detail: "随时可尝试突破斗皇" },
            { max: 450000.0, realm: "半步斗宗", detail: "未掌握空间之力，但斗气超斗王" },
            { max: 600000.0, realm: "斗宗初期", detail: "不借助外力踏空而行" },
            { max: 900000.0, realm: "斗宗中期", detail: "可制造空间锁" },
            { max: 1350000.0, realm: "斗宗后期", detail: "空间操控更熟练" },
            { max: 1800000.0, realm: "斗宗巅峰", detail: "加玛帝国/黑角域绝对霸主" },
            { max: 2500000.0, realm: "半步斗尊", detail: "初步感悟空间之力更深层应用" },
            { max: 3500000.0, realm: "斗尊初期", detail: "掌握空间穿梭，中州强者的起点" },
            { max: 5250000.0, realm: "斗尊中期", detail: "可开辟小型空间通道" },
            { max: 7875000.0, realm: "斗尊后期", detail: "空间绞杀防不胜防" },
            { max: 10500000.0, realm: "斗尊巅峰", detail: "九转入圣前的极致" },
            { max: 15000000.0, realm: "半步斗圣", detail: "触摸圣道门槛" },
            { max: 22000000.0, realm: "低阶半圣", detail: "初步掌握圣道规则" },
            { max: 40000000.0, realm: "中阶半圣", detail: "半圣境界稳固" },
            { max: 75000000.0, realm: "高阶半圣", detail: "真正斗圣之下的最强者" },
            { max: 120000000.0, realm: "1星斗圣初期", detail: "真正的天地霸主级力量" },
            { max: 360000000.0, realm: "1星斗圣巅峰", detail: "空间造诣极深" },
            { max: 720000000.0, realm: "2星斗圣巅峰", detail: "远古种族长老级实力" },
            { max: 1440000000.0, realm: "3星斗圣巅峰", detail: "天府联盟中坚力量" },
            { max: 2880000000.0, realm: "4星斗圣巅峰", detail: "大陆明面上的顶尖强者" },
            { max: 5760000000.0, realm: "5星斗圣巅峰", detail: "远古种族核心高层" },
            { max: 11520000000.0, realm: "6星斗圣巅峰", detail: "空间界碑级强者" },
            { max: 23040000000.0, realm: "7星斗圣巅峰", detail: "远古种族族长外最强者" },
            { max: 46080000000.0, realm: "8星斗圣巅峰", detail: "仅次于远古族长的存在" },
            { max: 60000000000.0, realm: "9星斗圣初期", detail: "远古种族族长级实力" },
            { max: 180000000000.0, realm: "9星斗圣巅峰", detail: "触摸斗帝门槛，世间最巅峰" },
            { max: 3600000000000.0, realm: "1星斗帝初期", detail: "掌握帝之本源，超脱世俗常规逻辑" },
            { max: 10800000000000.0, realm: "1星斗帝巅峰", detail: "斗帝境界彻底稳固" },
            { max: Infinity, realm: "斗帝之上", detail: "大千世界级别力量" }
        ];

        const combatBaseData = [
            { max: 300.0, realm: "斗者巅峰", detail: "乌坦城萧炎（斗者巅峰）战力水平" },
            { max: 3000.0, realm: "斗师巅峰", detail: "加玛帝国炼药师大会时期" },
            { max: 25000.0, realm: "大斗师巅峰", detail: "魔兽山脉历练后萧炎" },
            { max: 150000.0, realm: "斗灵巅峰", detail: "收服青莲地心火后的萧炎水平" },
            { max: 3000000.0, realm: "斗王巅峰", detail: "三年之约时期萧炎（可抗衡半步斗宗）" },
            { max: 26000000.0, realm: "斗宗巅峰", detail: "迦南学院后期萧炎（越阶战斗尊）" },
            { max: 80000000.0, realm: "斗尊巅峰", detail: "中州丹会夺冠时期萧炎水平" },
            { max: 200000000.0, realm: "高阶半圣", detail: "药老复活初期战力水平" },
            { max: 1500000000.0, realm: "1星斗圣巅峰", detail: "收服净莲妖火前萧炎战力" },
            { max: 6000000000.0, realm: "3星斗圣巅峰", detail: "天府联盟时期萧炎战力" },
            { max: 50000000000.0, realm: "6星斗圣巅峰", detail: "古帝洞府历练前夕萧炎战力" },
            { max: 550000000000.0, realm: "9星斗圣巅峰", detail: "双帝之战前萧炎（巅峰状态极致爆发）" },
            { max: 20000000000000.0, realm: "1星斗帝初期", detail: "刚突破斗帝的萧炎/魂天帝常规水平" },
            { max: 50000000000000.0, realm: "1星斗帝巅峰", detail: "双帝之战最终决战时期萧炎" },
            { max: Infinity, realm: "斗帝之上", detail: "足以打破位面壁垒前往大千世界" }
        ];

        const revBtn = document.getElementById('revBtn');
        const revInput = document.getElementById('revInput');
        const revTrueRealm = document.getElementById('revTrueRealm');
        const revTrueDetail = document.getElementById('revTrueDetail');
        const revCombatRealm = document.getElementById('revCombatRealm');
        const revCombatDetail = document.getElementById('revCombatDetail');
        const revPresets = document.querySelectorAll('.rev-preset');

        function doReverseCalc() {
            if (!revInput) return;
            const val = parseFloat(revInput.value);
            if (isNaN(val) || val <= 0) {
                if (revTrueRealm) revTrueRealm.textContent = "请输入有效战力数值";
                if (revCombatRealm) revCombatRealm.textContent = "等待输入...";
                return;
            }

            let trueResult = pureBaseData[pureBaseData.length - 1];
            for (let i = 0; i < pureBaseData.length; i++) {
                if (val <= pureBaseData[i].max) {
                    trueResult = pureBaseData[i];
                    break;
                }
            }

            let combatResult = combatBaseData[combatBaseData.length - 1];
            for (let i = 0; i < combatBaseData.length; i++) {
                if (val <= combatBaseData[i].max) {
                    combatResult = combatBaseData[i];
                    break;
                }
            }

            // Special Dou Di rule
            const douShengPeakMax = 180000000000.0;
            const douDiMin = 3600000000000.0;
            let finalTrueRealm = trueResult.realm;
            let finalTrueDetail = trueResult.detail;

            if (val > douShengPeakMax && val < douDiMin) {
                finalTrueRealm = "9星斗圣巅峰 (极限超越阶段)";
                finalTrueDetail = "战力超过九星斗圣巅峰基础极限，但缺乏源气未入斗帝境界。被天地规则壁垒死死压制，无法逾越。";
            }

            if (revTrueRealm) revTrueRealm.textContent = finalTrueRealm;
            if (revTrueDetail) revTrueDetail.textContent = finalTrueDetail;

            if (revCombatRealm) revCombatRealm.textContent = "相当于 " + combatResult.realm + " 战力";
            if (revCombatDetail) revCombatDetail.textContent = combatResult.detail;
        }

        if (revBtn) revBtn.addEventListener('click', doReverseCalc);
        if (revInput) revInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') doReverseCalc();
        });
        revPresets.forEach(btn => {
            btn.addEventListener('click', () => {
                if (revInput) {
                    revInput.value = btn.dataset.val;
                    doReverseCalc();
                }
            });
        });


        const reverseLogicModal = document.getElementById('reverseLogicModal');
        const reverseLogicClose = document.getElementById('reverseLogicClose');

        document.querySelectorAll('.rev-logic-trigger-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (reverseLogicModal) reverseLogicModal.classList.add('active');
            });
        });

        if (reverseLogicClose && reverseLogicModal) {
            reverseLogicClose.addEventListener('click', () => reverseLogicModal.classList.remove('active'));
        }

        if (reverseLogicModal) {
            reverseLogicModal.addEventListener('click', (e) => {
                if (e.target === reverseLogicModal) reverseLogicModal.classList.remove('active');
            });
        }

        // ===== 远古八族卡片弹窗逻辑 =====
        const clanModal = document.getElementById('clanModal');
        const clanModalBody = document.getElementById('clanModalBody');
        const clanModalClose = document.getElementById('clanModalClose');
        const clanCards = document.querySelectorAll('.clan-card');

        if (clanModal && clanModalBody) {
            if (clanCards.length > 0) {
                clanCards.forEach(card => {
                    card.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = card.getAttribute('href').substring(1); // 移除 #
                        const targetContent = document.getElementById(targetId);

                        if (targetContent) {
                            // 清空目前弹窗内容，克隆目标内容的内部HTML注入弹窗
                            clanModalBody.innerHTML = targetContent.innerHTML;

                            // 移除或调整克隆内容里的冲突样式
                            const clonedTitles = clanModalBody.querySelectorAll('.section-subtitle');
                            clonedTitles.forEach(t => t.style.marginTop = '0');

                            // 呼出弹窗
                            clanModal.classList.add('active');
                        }
                    });
                });
            }

            if (clanModalClose) {
                clanModalClose.addEventListener('click', () => {
                    clanModal.classList.remove('active');
                });
            }

            clanModal.addEventListener('click', (e) => {
                if (e.target === clanModal) {
                    clanModal.classList.remove('active');
                }
            });
        }

        // 远古八族 SVG 轮盘渲染逻辑
        const wheel = document.getElementById('clanWheel');
        if (wheel) {
            const clansData = [
                { id: "clan-xiao", name: "萧族", color: "#ff4d4d", angle: 0, desc: "曾经最强，因萧玄陨落而没落。现已复兴。" },
                { id: "clan-gu", name: "古族", color: "#ffd700", angle: 45, desc: "底蕴深厚，拥有金帝焚天炎。薰儿所在家族。" },
                { id: "clan-hun", name: "魂族", color: "#8a2be2", angle: 90, desc: "诡异莫测，拥有虚无吞炎。最大反派。" },
                { id: "clan-yan", name: "炎族", color: "#ff4500", angle: 135, desc: "控火无双，拥有多种异火。" },
                { id: "clan-yao", name: "药族", color: "#32cd32", angle: 180, desc: "炼药世界之主，丹典鼻祖。" },
                { id: "clan-shi-ling", name: "石族", color: "#8b4513", angle: 225, desc: "极致肉身防线。" },
                { id: "clan-shi-ling", name: "灵族", color: "#c0c0c0", angle: 270, desc: "擅长灵魂秘术，行踪莫测。" },
                { id: "clan-lei", name: "雷族", color: "#00ced1", angle: 315, desc: "血脉刚烈，掌控九霄狂雷。" }
            ];

            const radius = 200; // 半径

            clansData.forEach(clan => {
                const rad = (clan.angle - 90) * (Math.PI / 180); // 调整起始位置
                const x = 250 + radius * Math.cos(rad);
                const y = 250 + radius * Math.sin(rad);

                const node = document.createElement('a');
                node.className = 'clan-node';
                node.href = `#${clan.id}`;
                node.style.left = x + 'px';
                node.style.top = y + 'px';
                node.style.setProperty('--clan-color', clan.color);
                node.innerText = clan.name;

                // 统一旋转抗抵消：由于父节点在旋转，我们也可以给每个节点加上反向旋转维持正向，或者保持现状靠动画跟随
                // 为了视觉酷炫，让它们自转抗衡父容器。
                node.style.animation = `counterRotate 180s linear infinite`;

                node.title = clan.desc;

                // 绑定点击弹出深层 Modal 情报 (复用前面的 modal 逻辑)
                node.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!clanModal || !clanModalBody) return;
                    const targetContent = document.getElementById(clan.id);

                    if (targetContent) {
                        clanModalBody.innerHTML = targetContent.innerHTML;
                        const clonedTitles = clanModalBody.querySelectorAll('.section-subtitle');
                        clonedTitles.forEach(t => t.style.marginTop = '0');
                        clanModal.classList.add('active');
                    }
                });

                wheel.appendChild(node);
            });

            // 写入反转动画
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes counterRotate {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(-360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        // ===== 封面高级斗气/异火粒子特效 =====
        const fireCanvas = document.getElementById('fireCanvas');
        if (fireCanvas) {
            const ctx = fireCanvas.getContext('2d');
            let particles = [];
            const colors = ['#f2cc5c', '#d90429', '#ff5400', '#ffb703', '#fb8500', '#e5383b'];

            function resizeCanvas() {
                fireCanvas.width = window.innerWidth;
                fireCanvas.height = window.innerHeight;
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            class Particle {
                constructor() {
                    this.x = Math.random() * fireCanvas.width;
                    this.y = fireCanvas.height + Math.random() * 100;
                    this.size = Math.random() * 4 + 1; // 1-5px size
                    this.speedX = (Math.random() - 0.5) * 1.5; // Slight drift
                    this.speedY = Math.random() * -3 - 1; // Move up faster
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                    this.opacity = Math.random() * 0.5 + 0.3;
                    this.life = Math.random() * 80 + 40;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    // Wind effect & wave
                    this.x += Math.sin(this.y * 0.01) * 0.5;

                    this.life--;
                    if (this.life < 20) {
                        this.opacity -= 0.05;
                    }
                }

                draw() {
                    ctx.save();
                    ctx.globalAlpha = Math.max(0, this.opacity);
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                    // Glow effect
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = this.color;

                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.restore();
                }
            }

            function initParticles() {
                // Number of particles relative to screen width
                const numParticles = Math.floor(window.innerWidth / 15);
                for (let i = 0; i < numParticles; i++) {
                    particles.push(new Particle());
                }
            }

            function animateParticles() {
                ctx.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

                // Add new particles occasionally to maintain density
                if (Math.random() > 0.6 && particles.length < window.innerWidth / 10) {
                    particles.push(new Particle());
                    particles.push(new Particle());
                }

                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();

                    // Remove dead particles
                    if (particles[i].life <= 0 || particles[i].opacity <= 0) {
                        particles.splice(i, 1);
                        i--;
                    }
                }

                requestAnimationFrame(animateParticles);
            }

            initParticles();
            animateParticles();
        }

        // ====== 境界横轴总览切换逻辑 =======
        function switchRealm(realmId, nodeElement) {
            // Hide all realm cards
            document.querySelectorAll('.realm-card').forEach(function (card) {
                card.classList.remove('active');
            });
            // Show target card
            var target = document.getElementById(realmId);
            if (target) target.classList.add('active');

            // Handle active styles for timeline nodes
            document.querySelectorAll('.timeline-node').forEach(function (node) {
                node.classList.remove('active');
            });
            nodeElement.classList.add('active');

            // scroll timeline to center the active node
            var container = document.querySelector('.timeline-container');
            if (container) {
                var containerRect = container.getBoundingClientRect();
                var nodeRect = nodeElement.getBoundingClientRect();
                if (nodeRect.left < containerRect.left || nodeRect.right > containerRect.right) {
                    container.scrollBy({ left: nodeRect.left - containerRect.left - container.clientWidth / 2 + nodeElement.clientWidth / 2, behavior: 'smooth' });
                }
            }
        }

        // ===== 移动端导航汉堡菜单 =====
        const navToggle = document.getElementById('navToggle');
        const navContainer = document.querySelector('.nav-container');
        if (navToggle && navContainer) {
            navToggle.addEventListener('click', () => {
                navContainer.classList.toggle('open');
                navToggle.textContent = navContainer.classList.contains('open') ? '✕' : '☰';
            });
            // 点击导航链接后自动收起
            navContainer.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => {
                    navContainer.classList.remove('open');
                    navToggle.textContent = '☰';
                });
            });
        }

        // ===== 返回顶部按钮 =====
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 600) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        // ===== 异火榜高密度矩阵交互逻辑 =====
        document.querySelectorAll('.flame-card').forEach(card => {
            // 移除原本粗糙的内联 toggle，接管点击事件
            card.removeAttribute('onclick');
            card.addEventListener('click', function() {
                const isExpanded = this.classList.contains('expanded');
                // 先收起所有其他的卡片
                document.querySelectorAll('.flame-card').forEach(c => c.classList.remove('expanded'));
                
                if (!isExpanded) {
                    // 展开当前点击的卡片
                    this.classList.add('expanded');
                    // 延时等待 CSS 展开动画结束后，确保卡片在视口内可见
                    setTimeout(() => {
                        const rect = this.getBoundingClientRect();
                        const isFullyVisible = (rect.top >= 80 && rect.bottom <= window.innerHeight);
                        if (!isFullyVisible) {
                            this.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                    }, 400);
                }
            });
        });

        // ===== 萧炎能力矩阵雷达图 (ECharts) =====
        const radarDom = document.getElementById('ability-radar');
        if (radarDom && typeof echarts !== 'undefined') {
            const myChart = echarts.init(radarDom);
            const option = {
                title: {
                    text: '萧炎核心能力成长对比',
                    left: 'center',
                    textStyle: { color: '#f2cc5c', fontFamily: 'Ma Shan Zheng', fontSize: 24 }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    bottom: 10,
                    data: ['早期 (加玛帝国时期)', '后期 (炎帝时期)'],
                    textStyle: { color: '#ccc' }
                },
                radar: {
                    indicator: [
                        { name: '斗气境界', max: 100 },
                        { name: '炼药水平', max: 100 },
                        { name: '灵魂力量', max: 100 },
                        { name: '异火能力', max: 100 },
                        { name: '组织势力', max: 100 },
                        { name: '越阶战力', max: 100 }
                    ],
                    shape: 'circle',
                    splitNumber: 5,
                    axisName: {
                        color: '#ffcccc',
                        fontSize: 14,
                        fontWeight: 'bold'
                    },
                    splitLine: {
                        lineStyle: { color: ['rgba(255, 30, 30, 0.1)', 'rgba(255, 30, 30, 0.2)', 'rgba(255, 30, 30, 0.4)', 'rgba(255, 30, 30, 0.6)', 'rgba(255, 30, 30, 0.8)'].reverse() }
                    },
                    splitArea: { show: false },
                    axisLine: { lineStyle: { color: 'rgba(255, 30, 30, 0.5)' } }
                },
                series: [
                    {
                        name: '能力值对比',
                        type: 'radar',
                        data: [
                            {
                                value: [30, 45, 40, 20, 10, 95],
                                name: '早期 (加玛帝国时期)',
                                itemStyle: { color: '#00f5d4' },
                                areaStyle: { color: 'rgba(0, 245, 212, 0.3)' }
                            },
                            {
                                value: [100, 100, 100, 100, 100, 100],
                                name: '后期 (炎帝时期)',
                                itemStyle: { color: '#e74c3c' },
                                areaStyle: { color: 'rgba(231, 76, 60, 0.4)' }
                            }
                        ]
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener('resize', () => myChart.resize());
        }

        // ===== 滚动入场动画 (Intersection Observer) =====
        (function initScrollAnimations() {
            const selector = '.section, .info-card, .profile-card, .battle-card, .stage-item, .growth-stage, .character-card, .flame-card, .card, .jade-card, .catalog-item, .puppet-card, .pill-card, .clan-card';
            const targets = document.querySelectorAll(selector);

            // 先标记 body 就绪，CSS 才开始隐藏元素
            document.body.classList.add('scroll-ready');

            // 给所有目标加上 scroll-reveal
            targets.forEach(el => el.classList.add('scroll-reveal'));

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

                targets.forEach(el => observer.observe(el));
            } else {
                // fallback: 直接全部显示
                targets.forEach(el => el.classList.add('revealed'));
            }
        })();

        // ===== 折叠面板初始化 =====
        document.querySelectorAll('details').forEach(d => {
            d.addEventListener('toggle', () => {
                if (d.open) {
                    d.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
                }
            });
        });

        // ===== 全站视觉资源接入 =====
        (function initVisualRefresh() {
            const imageRoot = 'assets/images';
            const pageVisuals = {
                'index.html': {
                    title: '斗破苍穹世界观',
                    kicker: '全体系总览',
                    group: '首页',
                    image: '01-home-hero-banner',
                    desc: '斗气大陆、异火、宗门、远古八族、主线剧情与战力体系的视觉索引。'
                },
                'cultivation.html': {
                    title: '斗气修为',
                    kicker: '核心体系',
                    group: '核心体系',
                    image: '04-cultivation-levels-infographic',
                    desc: '从斗之气到斗帝，按境界、能力特征和大陆地位拆解完整修炼阶梯。'
                },
                'skills.html': {
                    title: '功法斗技',
                    kicker: '战力配套',
                    group: '核心体系',
                    image: '13-skill-tree',
                    desc: '功法、斗技、熟练度与技能成长路线的等级化整理。'
                },
                'alchemy.html': {
                    title: '炼药师丹药',
                    kicker: '核心职业',
                    group: '核心体系',
                    image: '05-alchemist-pill-system',
                    desc: '炼药师等级、丹药品阶、灵魂力量与资源网络的结构化梳理。'
                },
                'soul.html': {
                    title: '灵魂力量',
                    kicker: '感知与炼药',
                    group: '核心体系',
                    image: '03-world-overview-cover',
                    desc: '凡境、灵境、天境、帝境的灵魂体系与炼药能力关联。'
                },
                'fire.html': {
                    title: '异火榜',
                    kicker: '核心金手指',
                    group: '核心体系',
                    image: '08-heavenly-flames-poster',
                    desc: '二十三种异火的排名、能力、宿主和剧情获取路径。'
                },
                'beast.html': {
                    title: '血脉与魔兽',
                    kicker: '族群设定',
                    group: '核心体系',
                    image: '06-bloodline-race-system',
                    desc: '魔兽等级、远古血脉、太虚古龙与天妖凰等族群设定。'
                },
                'clans.html': {
                    title: '远古八族',
                    kicker: '巅峰血脉',
                    group: '世界格局',
                    image: '07-faction-relationship-chart',
                    desc: '古、魂、萧、炎、雷、药、石、灵八族的血脉、族界与权力关系。'
                },
                'geography.html': {
                    title: '地理格局',
                    kicker: '斗气大陆',
                    group: '世界格局',
                    image: '02-douqi-continent-map',
                    desc: '从西北大陆到中州、远古族界、特殊秘境的多层空间结构。'
                },
                'forces.html': {
                    title: '势力体系',
                    kicker: '大陆权力',
                    group: '世界格局',
                    image: '20-faction-cover-collection',
                    desc: '宗门、学院、丹塔、魂殿、远古种族等势力的影响范围。'
                },
                'realm.html': {
                    title: '秘境空间',
                    kicker: '副本与禁地',
                    group: '世界格局',
                    image: '16-secret-realms-overview',
                    desc: '天墓、丹界、星域、妖火空间、莽荒古域等关键空间。'
                },
                'canaan.html': {
                    title: '迦南学院',
                    kicker: '成长摇篮',
                    group: '世界格局',
                    image: '18-heaven-burning-training-tower',
                    desc: '内院、天焚炼气塔、陨落心炎和黑角域阶段的核心设定。'
                },
                'hundian.html': {
                    title: '魂殿全解',
                    kicker: '大陆暗线',
                    group: '世界格局',
                    image: '03-world-overview-cover',
                    desc: '魂殿层级、魂族布局、灵魂捕猎与主线反派网络。'
                },
                'ancient.html': {
                    title: '古帝洞府',
                    kicker: '终极秘境',
                    group: '世界格局',
                    image: '17-ancient-emperor-cave',
                    desc: '陀舍古帝传承、帝品雏丹、洞府空间与大千世界入口。'
                },
                'timeline.html': {
                    title: '剧情时间线',
                    kicker: '主线脉络',
                    group: '剧情人物',
                    image: '11-main-story-timeline',
                    desc: '乌坦城、三年之约、黑角域、中州、双帝之战的主线推进。'
                },
                'xiaoyan.html': {
                    title: '萧炎成长',
                    kicker: '主角路线',
                    group: '剧情人物',
                    image: '12-xiao-yan-growth-route',
                    desc: '境界突破、异火收集、势力建设与技能树成长路线。'
                },
                'battle.html': {
                    title: '战役复盘',
                    kicker: '关键名场面',
                    group: '剧情人物',
                    image: '14-key-battles-overview',
                    desc: '三年之约、云岚宗大战、丹塔、妖火空间与双帝之战。'
                },
                'story.html': {
                    title: '人物图鉴',
                    kicker: '角色关系',
                    group: '剧情人物',
                    image: '19-character-relationship-network',
                    desc: '主角团、远古种族、学院、宗门、魂殿等人物关系档案。'
                },
                'calculator.html': {
                    title: '战力计算',
                    kicker: '互动工具',
                    group: '互动工具',
                    image: '10-flame-acquisition-route',
                    desc: '用境界、功法、斗技、异火、血脉等参数估算综合战力。'
                }
            };

            const pageName = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
            const current = pageVisuals[pageName] || pageVisuals['index.html'];

            function imageUrl(visual, size) {
                return `${imageRoot}/${size}/${visual.image}.webp`;
            }

            function imageTag(visual, size, loading = 'lazy') {
                return `<img src="${imageUrl(visual, size)}" alt="${visual.title}" loading="${loading}" />`;
            }

            function applyPageAtmosphere() {
                const accentMap = {
                    '核心体系': '#d98445',
                    '世界格局': '#64d2c4',
                    '剧情人物': '#d8b45f',
                    '互动工具': '#aeb9e6',
                    '首页': '#d8b45f'
                };
                document.body.classList.add('page-visual-bg');
                document.body.dataset.sectionGroup = current.group;
                document.body.style.setProperty('--page-bg-image', `url("${imageUrl(current, 'hero')}")`);
                document.body.style.setProperty('--page-accent', accentMap[current.group] || '#d8b45f');
            }

            function enhanceNav() {
                const nav = document.querySelector('.nav');
                const navContainer = document.querySelector('.nav-container');
                if (!nav || !navContainer || nav.querySelector('.nav-brand')) return;

                const brand = document.createElement('a');
                brand.className = 'nav-brand';
                brand.href = 'index.html';
                brand.innerHTML = '<span class="nav-brand-mark">典</span><span class="nav-brand-text">斗破设定库</span>';
                nav.insertBefore(brand, nav.firstElementChild);
            }

            function enhanceHomeHero() {
                const hero = document.querySelector('.hero');
                if (!hero) return;
                hero.classList.add('hero-refresh');
                hero.style.removeProperty('--hero-image');

                let copy = hero.querySelector('.hero-copy');
                if (!copy) {
                    copy = document.createElement('div');
                    copy.className = 'hero-copy';
                    const title = hero.querySelector(':scope > h1');
                    const subtitle = hero.querySelector(':scope > .subtitle');
                    const desc = hero.querySelector(':scope > .desc');
                    const anchor = title || subtitle || desc || hero.querySelector('.scroll-down');
                    hero.insertBefore(copy, anchor);
                    [title, subtitle, desc].forEach(el => {
                        if (el) copy.appendChild(el);
                    });
                }

                if (!copy.querySelector('.hero-panel')) {
                    const panel = document.createElement('div');
                    panel.className = 'hero-panel';
                    panel.innerHTML = `
                        <div class="hero-metrics" aria-label="世界观摘要">
                            <span><strong>18</strong>设定模块</span>
                            <span><strong>23</strong>异火谱系</span>
                            <span><strong>8</strong>远古族界</span>
                        </div>
                        <div class="hero-actions">
                            <a class="hero-action primary" href="geography.html">大陆地图</a>
                            <a class="hero-action" href="calculator.html">战力计算</a>
                        </div>
                    `;
                    copy.appendChild(panel);
                }

                hero.querySelector('.hero-visual')?.remove();
            }

            function enhanceCatalog() {
                const catalog = document.querySelector('.catalog-section');
                if (!catalog) return;

                if (!catalog.querySelector('.visual-showcase')) {
                    const showcaseItems = [
                        pageVisuals['geography.html'],
                        { ...pageVisuals['fire.html'], image: '09-key-flames-collection', title: '异火收藏' },
                        { ...pageVisuals['fire.html'], image: '10-flame-acquisition-route', title: '异火路线' },
                        { ...pageVisuals['geography.html'], image: '15-region-scenes-overview', title: '地域场景' }
                    ];
                    const showcase = document.createElement('div');
                    showcase.className = 'visual-showcase';
                    showcase.innerHTML = showcaseItems.map(item => `
                        <a class="visual-showcase-card" href="${item === showcaseItems[1] || item === showcaseItems[2] ? 'fire.html' : 'geography.html'}">
                            <span class="visual-showcase-image">${imageTag(item, 'thumb')}</span>
                            <span class="visual-showcase-copy">
                                <small>${item.kicker}</small>
                                <strong>${item.title}</strong>
                            </span>
                        </a>
                    `).join('');
                    catalog.insertBefore(showcase, catalog.querySelector('.catalog-grid'));
                }

                document.querySelectorAll('.catalog-item').forEach(item => {
                    if (item.classList.contains('catalog-item--visual')) return;
                    const href = item.getAttribute('href');
                    const visual = pageVisuals[href];
                    if (!visual) return;

                    const numberEl = item.querySelector('span');
                    const number = numberEl ? numberEl.textContent.trim() : '';
                    const title = Array.from(item.childNodes)
                        .filter(node => node.nodeType === Node.TEXT_NODE)
                        .map(node => node.textContent.trim())
                        .join('')
                        .replace(/^[:：\s]+/, '');

                    item.classList.add('catalog-item--visual');
                    item.innerHTML = '';

                    const thumb = document.createElement('span');
                    thumb.className = 'catalog-thumb';
                    thumb.innerHTML = imageTag(visual, 'thumb');

                    const copy = document.createElement('span');
                    copy.className = 'catalog-copy';
                    copy.innerHTML = `<span class="catalog-kicker">${visual.group}</span><span class="catalog-title">${title}</span>`;

                    const index = document.createElement('span');
                    index.className = 'catalog-index';
                    index.textContent = number;

                    item.append(thumb, copy, index);
                });
            }

            function buildPageHero() {
                if (pageName === 'index.html' || document.querySelector('.page-hero')) return;
                const nav = document.querySelector('.nav');
                const firstSection = document.querySelector('.section');
                if (!nav || !firstSection) return;

                const hero = document.createElement('header');
                hero.className = 'page-hero';
                hero.innerHTML = `
                    <div class="page-hero-copy">
                        <p class="page-kicker">${current.group} / ${current.kicker}</p>
                        <h1>${current.title}</h1>
                        <p>${current.desc}</p>
                        <div class="page-hero-tags">
                            <span>${current.group}</span>
                            <span>视觉档案</span>
                            <span>原著设定</span>
                        </div>
                    </div>
                    <figure class="page-hero-figure">
                        <img src="${imageUrl(current, 'hero')}" alt="${current.title}" loading="eager" />
                    </figure>
                `;
                nav.insertAdjacentElement('afterend', hero);
            }

            function addSectionVisuals() {
                if (pageName === 'index.html') return;
                const firstSection = document.querySelector('.section');
                if (!firstSection || firstSection.querySelector('.section-visual-summary')) return;
                const desc = firstSection.querySelector('.section-desc');
                if (!desc) return;

                const summary = document.createElement('div');
                summary.className = 'section-visual-summary';
                summary.innerHTML = `
                    <span class="section-visual-thumb">${imageTag(current, 'thumb')}</span>
                    <p>${current.desc}</p>
                `;
                desc.insertAdjacentElement('afterend', summary);
            }

            function splitListLine(line, index) {
                const cleaned = line
                    .replace(/^\s*(?:[-•]|[0-9]+[.、]|第[一二三四五六七八九十]+[层梯队阶段站]?[：:]?)\s*/, '')
                    .trim();
                const splitAt = cleaned.indexOf('：') > -1 ? cleaned.indexOf('：') : cleaned.indexOf(':');
                if (splitAt > 0 && splitAt <= 18) {
                    return {
                        title: cleaned.slice(0, splitAt).trim(),
                        body: cleaned.slice(splitAt + 1).trim()
                    };
                }
                return {
                    title: `要点 ${String(index + 1).padStart(2, '0')}`,
                    body: cleaned
                };
            }

            function enhanceDenseParagraphs() {
                document.querySelectorAll('.section > p.section-desc').forEach(p => {
                    if (p.dataset.autoBrief === 'true' || p.closest('.section-visual-summary')) return;
                    const text = p.textContent.replace(/\r/g, '').trim();
                    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
                    const itemLines = lines.filter(line => /^(\d+[.、]|[-•]|第[一二三四五六七八九十]+[层梯队阶段站]?[：:])/.test(line));
                    if (lines.length < 5 || itemLines.length < 3) return;

                    const introLines = [];
                    const cards = [];
                    lines.forEach(line => {
                        if (/^(\d+[.、]|[-•]|第[一二三四五六七八九十]+[层梯队阶段站]?[：:])/.test(line)) {
                            cards.push(splitListLine(line, cards.length));
                        } else {
                            introLines.push(line);
                        }
                    });
                    if (cards.length < 3) return;

                    const brief = document.createElement('div');
                    brief.className = 'auto-brief';
                    brief.innerHTML = `
                        ${introLines.length ? `<p class="auto-brief-intro">${introLines.join('')}</p>` : ''}
                        <div class="auto-brief-grid">
                            ${cards.map((card, index) => `
                                <article class="auto-brief-card">
                                    <span class="auto-brief-index">${String(index + 1).padStart(2, '0')}</span>
                                    <h4>${card.title}</h4>
                                    <p>${card.body}</p>
                                </article>
                            `).join('')}
                        </div>
                    `;
                    p.dataset.autoBrief = 'true';
                    p.replaceWith(brief);
                });
            }

            function enhanceLooseLists() {
                document.querySelectorAll('.section > ul, .two-column ul').forEach(ul => {
                    if (ul.classList.contains('content-card-list') || ul.closest('.nav')) return;
                    if (ul.children.length < 2) return;
                    ul.classList.add('content-card-list');
                    Array.from(ul.children).forEach(li => li.classList.add('content-card-item'));
                });
            }

            function enhanceBulletParagraphs() {
                document.querySelectorAll('.info-card-body, .card, .canaan-department').forEach(container => {
                    const bulletParagraphs = Array.from(container.children).filter(el =>
                        el.tagName === 'P' && /^[-•]\s+/.test(el.textContent.trim())
                    );
                    if (bulletParagraphs.length < 2) return;
                    const list = document.createElement('ul');
                    list.className = 'micro-card-list';
                    bulletParagraphs[0].before(list);
                    bulletParagraphs.forEach(p => {
                        const li = document.createElement('li');
                        li.innerHTML = p.innerHTML.replace(/^\s*[-•]\s+/, '');
                        list.appendChild(li);
                        p.remove();
                    });
                });
            }

            function enhanceSections() {
                document.querySelectorAll('.section').forEach((section, index) => {
                    section.classList.add('section-enhanced');
                    section.style.setProperty('--section-order', index % 4);
                });
            }

            function initReadingProgress() {
                if (document.querySelector('.reading-progress')) return;
                const progress = document.createElement('div');
                progress.className = 'reading-progress';
                progress.innerHTML = '<span></span>';
                document.body.appendChild(progress);
                const bar = progress.querySelector('span');
                const update = () => {
                    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
                    bar.style.transform = `scaleX(${ratio})`;
                };
                update();
                window.addEventListener('scroll', update, { passive: true });
                window.addEventListener('resize', update);
            }

            applyPageAtmosphere();
            enhanceNav();
            enhanceHomeHero();
            enhanceCatalog();
            buildPageHero();
            addSectionVisuals();
            enhanceSections();
            enhanceDenseParagraphs();
            enhanceLooseLists();
            enhanceBulletParagraphs();
            initReadingProgress();
        })();
