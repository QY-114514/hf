const fleshspore = new Item("fleshspore", Color.valueOf("983E3EFF")); //血肉饱子
exports.fleshspore = fleshspore;
Object.assign(fleshspore, {
    flammability: 0.1,
    cost: 1,
});
const tumorousalloy = new Item("tumorousalloy", Color.valueOf("D73E3EFF")); //瘤变合金
exports.tumorousalloy = tumorousalloy;
const fcalloy = new Item("fcalloy", Color.valueOf("8A73C6FF")); //紫镧合金
exports.fcalloy = fcalloy;
const nucleationalloy = new Item("nucleationalloy", Color.valueOf("97A5F7FF")); //晶核合金
exports.nucleationalloy = nucleationalloy;
const phaseobject = new Item("phaseobject", Color.valueOf("ffd59e")); //相位物
exports.phaseobject = phaseobject;
Object.assign(phaseobject, {
    cost: 1,
    radioactivity: 0.75,
});
const cf = new Item("cf", Color.valueOf("C6DAE5FF")); //锎
exports.cf = cf;
Object.assign(cf, {
    cost: 1,
    radioactivity: 1.25,
    flammability: 0.5,
    explosiveness: 1.75,
    hardness: 8,
});
const la = new Item("la", Color.valueOf("ABB5D4FF")); //镧
exports.la = la;
Object.assign(la, {
    cost: 1,
    radioactivity: 1,
    flammability: 0.4,
    explosiveness: 1,
    hardness: 4,
});
const opticalglass = new Item("opticalglass", Color.valueOf("FFFFFFFF")); //光学玻璃
exports.opticalglass = opticalglass;
const lacc = new Item("lacc", Color.valueOf("FFFFFFFF")); //镧位物
exports.lacc = lacc;
Object.assign(lacc, {
    cost: 1,
    radioactivity: 1.8,
    flammability: 0.6,
});
/*
const euc =new Item("euc",Color.valueOf("AB6B0DFF"));//Economic Union Currency 经济联合币
exports.euc = euc;
	Object.assign(euc, {
    hardness: 0, //硬度，只有矿物有，与挖掘速度、挖掘等级有关
	radioactivity: 0, //放射性
	explosiveness: 0, //爆炸性
	flammability: 0, //燃烧性
	charge: 0, //放电性
	cost: 1, //建筑时间消耗倍率
	frames: 0,//动态贴图帧数
});*/