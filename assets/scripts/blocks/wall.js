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

/**
const sandwall = extend(Wall,"sandwall",{});//沙子墙
sandwall.size = 2;
sandwall.health = 150;
sandwall.buildCostMultiplier = 0.1;
sandwall.armor = 1;
sandwall.absorbLasers = true;
sandwall.requirements = ItemStack.with(Items.sand, 20);
sandwall.buildVisibility = BuildVisibility.shown;
sandwall.category = Category.defense;
exports.sandwall = sandwall;
*/
const lawall = extend(Wall,"lawall",{});//镧墙1*1
lawall.size = 1;
lawall.health = 4500;
lawall.buildCostMultiplier = 10;
lawall.armor = 4;
lawall.absorbLasers = true;
lawall.requirements = ItemStack.with(la, 8);
lawall.buildVisibility = BuildVisibility.shown;
lawall.category = Category.defense;
exports.lawall = lawall;
const lawallbig = extend(Wall,"lawallbig",{});//镧墙2*2
lawallbig.size = 2;
lawallbig.health = 19000;
lawallbig.buildCostMultiplier = 10;
lawallbig.armor = 9;
lawallbig.absorbLasers = true;
lawallbig.requirements = ItemStack.with(la, 32);
lawallbig.buildVisibility = BuildVisibility.shown;
lawallbig.category = Category.defense;
exports.lawallbig = lawallbig;
const nawall = extend(Wall,"nawall",{});//晶核合金墙1*1
nawall.size = 1;
nawall.health = 10000;
nawall.buildCostMultiplier = 10;
nawall.armor = 5;
nawall.absorbLasers = true;
nawall.requirements = ItemStack.with(nucleationalloy, 8);
nawall.buildVisibility = BuildVisibility.shown;
nawall.category = Category.defense;
exports.nawall = nawall;
const nawallbig = extend(Wall,"nawallbig",{});//晶核合金墙2*2
nawallbig.size = 2;
nawallbig.health = 44000;
nawallbig.buildCostMultiplier = 10;
nawallbig.armor = 8;
nawallbig.absorbLasers = true;
nawallbig.requirements = ItemStack.with(nucleationalloy, 32);
nawallbig.buildVisibility = BuildVisibility.shown;
nawallbig.category = Category.defense;
exports.nawallbig = nawallbig;
const nawallbigbig = extend(Wall,"nawallbigbig",{});//晶核合金墙3*3
nawallbigbig.size = 3;
nawallbigbig.health = 44000 * 3;
nawallbigbig.buildCostMultiplier = 10;
nawallbigbig.armor = 16;
nawallbigbig.absorbLasers = true;
nawallbigbig.requirements = ItemStack.with(nucleationalloy, 100);
nawallbigbig.buildVisibility = BuildVisibility.shown;
nawallbigbig.category = Category.defense;
exports.nawallbigbig = nawallbigbig;