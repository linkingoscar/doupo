// ===== 斗破苍穹专属战力计算器 (Updated Core Logic with Additions mapping) =====
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
    if(!bigRealmSel) return;
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
    if(!selectEl) return 0;
    const val = parseFloat(selectEl.options[selectEl.selectedIndex].value);
    return val - 1.0; 
}

function calculatePower() {
    if(!subRealmSel) return;
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
    
    const lhEl = document.getElementById('lhDisplay'); if(lhEl) lhEl.textContent = '+' + lh.toFixed(2);
    const rsEl = document.getElementById('rsDisplay'); if(rsEl) rsEl.textContent = '+' + rs.toFixed(2);
    const zbEl = document.getElementById('zbDisplay'); if(zbEl) zbEl.textContent = '+' + zb.toFixed(2);
    
    document.getElementById('permDisplay').textContent = formatNumber(permPower);
    
    const dyEl = document.getElementById('dyDisplay'); if(dyEl) dyEl.textContent = '×' + dy.toFixed(1);
    const mfEl = document.getElementById('mfDisplay'); if(mfEl) mfEl.textContent = '×' + mf.toFixed(1);
    const ztEl = document.getElementById('ztDisplay'); if(ztEl) ztEl.textContent = '×' + zt.toFixed(1);

    document.getElementById('finalDisplay').textContent = formatNumber(tempPower);
    document.getElementById('compareDisplay').textContent = '相当于 ' + formatNumber(tempPower) + ' 个普通凡人的战力';
}

function getClosestOptionIdx(selectEl, targetVal) {
     if(!selectEl) return 0;
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

if (logicBtn && logicModal) {
    logicBtn.addEventListener('click', () => logicModal.classList.add('active'));
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
