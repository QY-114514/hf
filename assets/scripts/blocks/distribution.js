const {
    fleshspore, //血肉孢子
    tumorousalloy, //瘤变合金
    phaseobject, //相位物
    nucleationalloy, //晶核合金
    cf, //锎
    la, //镧
    opticalglass, //光学玻璃
    lacc, //镧位物
    fcalloy, //紫镧合金
} = require("items");
const lib = require("lib");

const pfsc = extend(StackConveyor,"pfsc",{});
pfsc.health = 25;
pfsc.requirements = ItemStack.with(
    Items.silicon, 2,
    Items.phaseFabric, 2,
);
pfsc.speed = 0.08;
//pfsc.displayedSpeed = 40;//游戏中显示速度
pfsc.insulated = false;
pfsc.placeableLiquid = true;
pfsc.displayFlow = true;
pfsc.absorbLasers = false;
pfsc.itemCapacity = 40;
pfsc.buildVisibility = BuildVisibility.shown;
pfsc.category = Category.distribution;
exports.pfsc = pfsc;