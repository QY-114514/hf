const editem = require("items");
const lib = require("lib");

//辅助
const 大型建造仪 = extend(BuildTurret, "大型建造仪", {});
大型建造仪.requirements = ItemStack.with(
    Items.silicon, 650,
    Items.beryllium, 700,
    Items.tungsten, 650,
    Items.oxide, 175,
);
大型建造仪.buildVisibility = BuildVisibility.shown;
exports.大型建造仪 = 大型建造仪;

//钻头


//电力
const 大型火力发电机 = extend(ConsumeGenerator, "大型火力发电机", {});
大型火力发电机.requirements = ItemStack.with(
    Items.silicon, 150,
    Items.copper, 250,
    Items.graphite, 200,
);
大型火力发电机.buildVisibility = BuildVisibility.shown;
exports.大型火力发电机 = 大型火力发电机;

const 氮气气压井 = extend(ThermalGenerator, "氮气气压井", {});
氮气气压井.requirements = ItemStack.with(
    Items.oxide, 55,
    Items.silicon, 65,
    Items.tungsten, 45,
    Items.beryllium, 60,
);
氮气气压井.buildVisibility = BuildVisibility.shown;
exports.氮气气压井 = 氮气气压井;

//炮台


//工厂


//物流


//墙
/*lib.setBuildingSimple(extend(Wall, "联合协议块", {}), Wall.WallBuild, {
    handleDamage(tile, amount) { return 1000; },
});*/

//热量
const 小型热量分配机 = extend(HeatConductor, "小型热量分配机", {});
小型热量分配机.buildVisibility = BuildVisibility.shown;
exports.小型热量分配机 = 小型热量分配机;

const 微型热量传输机 = extend(HeatConductor, "微型热量传输机", {});
微型热量传输机.buildVisibility = BuildVisibility.shown;
exports.微型热量传输机 = 微型热量传输机;