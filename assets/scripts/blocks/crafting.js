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

const opticalglasscrafting = extend(GenericCrafter,"opticalglasscrafting",{});//光学玻璃厂
opticalglasscrafting.size = 3;
opticalglasscrafting.health = 1455;
opticalglasscrafting.hasPower = true;
opticalglasscrafting.hasItems = true;
opticalglasscrafting.buildCostMultiplier = 0.3;
opticalglasscrafting.requirements = ItemStack.with(
    Items.titanium, 450,
    Items.graphite, 400,
    Items.metaglass, 550,
    Items.silicon, 400,
);
opticalglasscrafting.craftTime = 120;
opticalglasscrafting.itemCapacity = 20;
opticalglasscrafting.consumePower(5); 
opticalglasscrafting.drawer = DrawMulti(new DrawRegion("-bottom"),new DrawDefault(), new DrawFade());
opticalglasscrafting.consumeItems(new ItemStack.with(
        Items.silicon, 1,
        Items.metaglass, 2,
        la, 1,
    ));
opticalglasscrafting.outputItem = new ItemStack(opticalglass, 4);
opticalglasscrafting.buildVisibility = BuildVisibility.shown;
opticalglasscrafting.category = Category.crafting;
exports.opticalglasscrafting = opticalglasscrafting;

const nucleationalloycrafting = extend(GenericCrafter,"nucleationalloycrafting",{});//晶核合金厂
nucleationalloycrafting.size = 3;
nucleationalloycrafting.health = 1455;
nucleationalloycrafting.hasPower = true;
nucleationalloycrafting.hasItems = true;
nucleationalloycrafting.buildCostMultiplier = 0.3;
nucleationalloycrafting.requirements = ItemStack.with(
    Items.titanium, 450,
    Items.surgeAlloy, 200,
    la, 550,
    Items.silicon, 400,
);
nucleationalloycrafting.craftTime = 180;
nucleationalloycrafting.itemCapacity = 20;
nucleationalloycrafting.consumePower(8); 
nucleationalloycrafting.drawer = DrawMulti(new DrawDefault(), new DrawFade());
nucleationalloycrafting.consumeItems(new ItemStack.with(
        Items.titanium, 1,
        la, 1,
        Items.plastanium, 1,
    ));
nucleationalloycrafting.outputItem = new ItemStack(nucleationalloy, 2);
nucleationalloycrafting.buildVisibility = BuildVisibility.shown;
nucleationalloycrafting.category = Category.crafting;
exports.nucleationalloycrafting = nucleationalloycrafting;

const fcalloycrafting = extend(GenericCrafter,"fcalloycrafting",{});//紫镧合金工厂
fcalloycrafting.size = 2;
fcalloycrafting.health = 180;
fcalloycrafting.hasPower = true;
fcalloycrafting.hasItems = true;
fcalloycrafting.buildCostMultiplier = 0.3;
fcalloycrafting.requirements = ItemStack.with(
    Items.surgeAlloy, 80,
    cf, 40,
    lacc, 40,
    nucleationalloy, 50,
);
fcalloycrafting.craftTime = 180;
fcalloycrafting.itemCapacity = 15;
fcalloycrafting.consumePower(6); 
fcalloycrafting.drawer = DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffef99")));
fcalloycrafting.consumeItems(new ItemStack.with(
        Items.surgeAlloy, 2,
        cf, 1,
        la, 2,
    ));
fcalloycrafting.outputItem = new ItemStack(fcalloy, 2);
fcalloycrafting.buildVisibility = BuildVisibility.shown;
fcalloycrafting.category = Category.crafting;
exports.fcalloycrafting = fcalloycrafting;
