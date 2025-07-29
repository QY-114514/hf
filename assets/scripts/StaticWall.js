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

const 血墙 = new StaticWall("血墙");
血墙.variants = 3;
exports.血墙 = 血墙;

const 骨骼墙 = new StaticWall("骨骼墙");
骨骼墙.variants = 2;
exports.骨骼墙 = 骨骼墙;

const 真菌墙 = new StaticWall("真菌墙");
真菌墙.variants = 2;
exports.真菌墙 = 真菌墙;

const 射弧墙 = new StaticWall("射弧墙");
射弧墙.variants = 2;
exports.射弧墙 = 射弧墙;

const 骨骼地板 = extend(Floor, "骨骼地板", {});
骨骼地板.lightRadius = 50;
骨骼地板.variants = 4;
exports.骨骼地板 = 骨骼地板;

const 射弧 = extend(Floor, "射弧", {});
射弧.lightRadius = 50;
射弧.variants = 3;
exports.射弧 = 射弧;

const la矿 = extend(OreBlock, "la矿", la, {});
la矿.localizedName = "镧矿";
la矿.variants = 3;
exports.la矿 = la矿;