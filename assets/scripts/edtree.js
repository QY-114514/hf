const lib = require("lib");
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

const {
phaseliquid, //相位液
} = require("Liquids");

const a = require("edjson");
const d = require("blocks/effect");
const c = require("blocks/power");
const b = require("blocks/turrets");
const e = require("units/T6");
const f = require("blocks/crafting");
//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//物品
lib.addToResearch(fleshspore, {
    parent: Items.beryllium.name,
});
lib.addToResearch(tumorousalloy, {
    parent: fleshspore.name,
});
lib.addToResearch(phaseobject, {
    parent: fleshspore.name,
});

//辅助
lib.addToResearch(a.大型建造仪, {
    parent: Blocks.buildTower.name,
    researchCostMultiplier: 0.1
}); //大型建造仪在建造塔后面

//电力
lib.addToResearch(a.氮气气压井, {
    parent: Blocks.pyrolysisGenerator.name,
    researchCostMultiplier: 0.1
}); //氮气气压井是在热解发生器后面

//热量
lib.addToResearch(a.小型热量分配机, {
    parent: Blocks.smallHeatRedirector.name,
    researchCostMultiplier: 0.1
}); //小型热量分配机在小型热量传输器后面
lib.addToResearch(a.微型热量传输机, {
    parent: Blocks.smallHeatRedirector.name,
    researchCostMultiplier: 0.1
}); //微型热量传输机在小型热量传输器后面


//SSSSSSSSSSSSSSSSSSSSS
//物品
lib.addToResearch(nucleationalloy, {
    parent: Items.titanium.name,
});
lib.addToResearch(cf, {
    parent: nucleationalloy.name,
});
lib.addToResearch(la, {
    parent: Items.titanium.name,
});
lib.addToResearch(opticalglass, {
    parent: Items.metaglass.name,
});
lib.addToResearch(lacc, {
    parent: la.name,
});

//液体
lib.addToResearch(phaseliquid, {
    parent: Liquids.water.name,
});

//工厂
lib.addToResearch(f.opticalglasscrafting, {
    parent: Blocks.kiln.name,
    researchCostMultiplier: 0.1
});//光学仪在火力发电机后面

//电力
lib.addToResearch(a.大型火力发电机, {
    parent: Blocks.combustionGenerator.name,
    researchCostMultiplier: 0.1
});//大型火力发电机在火力发电机后面

//炮台
lib.addToResearch(b.千仗, {
    parent: Blocks.arc.name,
    researchCostMultiplier: 0.1
});//千仗在电弧后面

//单位
lib.addToResearch(e.神权, {
    parent: UnitTypes.reign.name,
    researchCostMultiplier: 0.1
});//神权在王座后面
/*
lib.addToResearch(a.机气管道, {
    parent: map.deltabc.name,
    requirements: ItemStack.with(
        NurturingFund, 20,
    ),
});
lib.addToResearch(a.分类器, {
    parent: a.机气管道.name,
    researchCostMultiplier: 0.1
});
*/