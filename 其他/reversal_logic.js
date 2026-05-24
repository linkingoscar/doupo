
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
