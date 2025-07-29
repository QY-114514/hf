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

const nucleationalloydill = extend(Drill, "nucleationalloydill", {}); //晶核合金钻头
nucleationalloydill.buildType = prov(() => {
    return new JavaAdapter(Drill.DrillBuild, {
    draw() {
    //this.items.total() > 0//这个为判断该建筑内部储存物品数量是否大于零
			this.super$draw();
			Draw.z(Layer.effect);
			this.lastDrillSpeed > 0 ? Draw.color(Color.valueOf("97A5F7FF")) : Draw.color(Color.white);
			Draw.alpha(Mathf.sin(0.05 * Time.time));
			Lines.square(this.x, this.y, 12 * Mathf.sin(0.025 * Time.time), 45);
		}//该方法为绘制正方形
    }, nucleationalloydill);
});
nucleationalloydill.size = 3;
nucleationalloydill.health = 650;
nucleationalloydill.tier = 4;
nucleationalloydill.drillTime = 45;
nucleationalloydill.rotateSpeed = 1.8;
nucleationalloydill.liquidBoostIntensity = 1.2649;
nucleationalloydill.drawRim = false;
nucleationalloydill.itemCapacity = 30;
nucleationalloydill.drawMineItem = true;
nucleationalloydill.hasPower = true;
nucleationalloydill.consumePower(3);
nucleationalloydill.consumeLiquid(Liquids.water, 0.055).boost();
nucleationalloydill.requirements = ItemStack.with(
    Items.lead, 420,
    Items.silicon, 350,
    nucleationalloy, 250,
);
nucleationalloydill.buildVisibility = BuildVisibility.shown;
nucleationalloydill.category = Category.production;
exports.nucleationalloydill = nucleationalloydill;

const pfbill = extend(Drill, "pfbill", {}); //相位钻头
pfbill.size = 1;
pfbill.health = 220;
pfbill.tier = 4;
pfbill.drillTime = 45;
pfbill.rotateSpeed = 1.8;
pfbill.liquidBoostIntensity = 1.2649;
pfbill.drawRim = false;
pfbill.itemCapacity = 30;
pfbill.drawMineItem = true;
pfbill.hasPower = true;
pfbill.consumePower(0.6);
pfbill.consumeLiquid(Liquids.water, 0.055).boost();
pfbill.requirements = ItemStack.with(
    opticalglass, 45,
    Items.silicon, 30,
    Items.phaseFabric, 20,
);
pfbill.buildVisibility = BuildVisibility.shown;
pfbill.category = Category.production;
exports.pfbill = pfbill;

const ladill = extend(Drill, "ladill", {}); //镧钻头
ladill.size = 4;
ladill.health = 850;
ladill.tier = 9;
ladill.drillTime = 30;
ladill.rotateSpeed = 2.2;
ladill.liquidBoostIntensity = 1.2649;
ladill.drawRim = false;
ladill.itemCapacity = 50;
ladill.drawMineItem = true;
ladill.hasPower = true;
ladill.consumePower(10);
ladill.consumeLiquid(Liquids.water, 0.11).boost();
ladill.requirements = ItemStack.with(
    Items.plastanium, 40,
    Items.silicon, 30,
    la, 40,
);
ladill.buildVisibility = BuildVisibility.shown;
ladill.category = Category.production;
exports.ladill = ladill;
