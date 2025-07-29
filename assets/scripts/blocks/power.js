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
/*const miniatureradioisotopegenerator = extend(Battery,"miniatureradioisotopegenerator",{
setStats() {
        this.super$setStats();
        this.stats.add(Stat.basePowerGeneration, 5, StatUnit.powerSecond);
    },
    setBars() {
        this.super$setBars();
        this.addBar("power", func((entity) => new Bar(
            prov(() => Core.bundle.format("bar.poweroutput", Strings.fixed(entity.getPowerProduction() * 60, 1))),
            prov(() => Pal.powerBar),
            floatp(() => 1)
        )));
        }
});//小型同位素发电机
miniatureradioisotopegenerator.buildType = prov(() => {
    return new JavaAdapter(Battery.BatteryBuild, {

        getPowerProduction() {
            return 5 / 60;
        },
    }, miniatureradioisotopegenerator);
});
miniatureradioisotopegenerator.hasPower = true;
miniatureradioisotopegenerator.consumesPower = false;
miniatureradioisotopegenerator.outputsPower = true;
miniatureradioisotopegenerator.health = 290;
miniatureradioisotopegenerator.consumePowerBuffered(120);
miniatureradioisotopegenerator.size = 2;
miniatureradioisotopegenerator.buildVisibility = BuildVisibility.shown;
miniatureradioisotopegenerator.category = Category.power;
miniatureradioisotopegenerator.researchCostMultiplier = 0.5;
exports.miniatureradioisotopegenerator = miniatureradioisotopegenerator;*/

const handcrankgenerator = extend(SolarGenerator, "handcrankgenerator", {
    setBars() {
        //this.bars.add("poweroutput", new Func(){get:entity => new Bar(prov(() => Core.bundle.format("bar.poweroutput", (entity.getPowerProduction() * 60 * entity.timeScale() + "").replace(/(?<=\.\d)\d*/g, ""))), prov(() => Pal.powerBar), new Floatp(){get:() => 1.0})});
    }
});
handcrankgenerator.size = 2;
handcrankgenerator.health = 250;
handcrankgenerator.buildVisibility = BuildVisibility.shown;
handcrankgenerator.category = Category.power;
handcrankgenerator.update = handcrankgenerator.configurable = handcrankgenerator.hasPower = true;
handcrankgenerator.powerProduction = 30; //电量上限，1:60
handcrankgenerator.buildType = prov(() => extend(Building, {
    productionEfficiency: 0,
    update() {
        if (this.productionEfficiency > 0) this.productionEfficiency -= 0.5; // 每帧减少的量
    },
    buildConfiguration(table) {
        table.button(Icon.upOpen, Styles.cleari, run(() => {
            if (this.productionEfficiency <= 0) this.productionEfficiency += 15; // 每下增加的量
        })).size(80);
    },
    getPowerProduction() {
        return this.productionEfficiency;
    },
    write(write) {
        this.super$write(write);
        write.f(this.productionEfficiency);
    },
    read(read, revision) {
        this.super$read(read, revision);
        this.productionEfficiency = read.f();
    }
}));

const cfcrafting = extend(ConsumeGenerator, "cfcrafting", {//锎生产Lve 1
    setStats() {
        this.super$setStats();
        this.stats.add(Stat.productionTime, 360 / 60, StatUnit.seconds);
        this.stats.add(Stat.output, cf);
    },
    outputsItems() {
        return true;
    },
});
cfcrafting.buildType = prov(() => {
    var p = 0;
    var gp = 0;
    var full = false;
    const block = cfcrafting;
    return new JavaAdapter(ConsumeGenerator.ConsumeGeneratorBuild, {
        updateTile() {
            var cons = this.consValid();
            full = this.items.get(cf) >= block.itemCapacity;
            if (cons && !full) {
                p += this.getProgressIncrease(360);
                gp += this.getProgressIncrease(360);
                //update(this);
            }
            if (p > 1 && !full) {
                this.items.add(cf, 1);
                p %= 1;
            }
            if (gp > 1 && !full) {
                this.consume();
                gp %= 1;
                block.generateEffect.at(this.x + Mathf.range(3), this.y + Mathf.range(3));
            }
            this.productionEfficiency = Mathf.num(cons) * Mathf.num(!full);
            this.dump(cf);
            this.produced(cf);
            this.warmup = Mathf.lerpDelta(this.warmup, cons && !full ? 1 : 0, 0.05)
        },

        shouldConsume() {
            return this.super$shouldConsume() && !full;
        },

        consValid() {
            return this.efficiency > 0;
        },
        getPowerProduction() {
            return Mathf.num(this.consValid()) * block.powerProduction * Mathf.num(!full);
        },
        status() {
            if (this.consValid() && !full) return BlockStatus.active;
            if (full && this.consValid()) return BlockStatus.noOutput;
            return BlockStatus.noInput;
        },
        write(write) {
            this.super$write(write);
            write.f(p);
            write.f(gp);
        },
        read(read, revision) {
            this.super$read(read, revision);
            p = read.f();
            gp = read.f();
        },
    }, cfcrafting);
}); //感谢前人@author <guiY>
cfcrafting.requirements = ItemStack.with(
    lacc, 500,
    la, 550,
    Items.silicon, 600,
    opticalglass, 500,
    nucleationalloy, 600,
);
cfcrafting.powerProduction = 30;
cfcrafting.effectChance = 0.011;
cfcrafting.ambientSound = Sounds.hum;
cfcrafting.ambientSoundVolume = 0.06;
cfcrafting.buildVisibility = BuildVisibility.shown;
cfcrafting.category = Category.power;
cfcrafting.itemCapacity = 15;
cfcrafting.itemDuration = 360;
cfcrafting.hasItems = true;
cfcrafting.hasLiquids = true;
cfcrafting.consumeLiquids(new LiquidStack.with(
        phaseliquid, 0.2,
    ));
cfcrafting.liquidCapacity = 60;
cfcrafting.size = 3;
cfcrafting.consumeItem(lacc, 3); /*.optional(false, false)*/ ;
exports.cfcrafting = cfcrafting;

const mediumsizedbattery = extend(Battery, "mediumsizedbattery", {}); //中电池
mediumsizedbattery.health = 500;
mediumsizedbattery.size = 2;
mediumsizedbattery.outputsPower = true;
mediumsizedbattery.consumesPower = true;
//mediumsizedbattery.fullLightColor = guanbi;
//mediumsizedbattery.emptyLightColor = kaiqi;
mediumsizedbattery.consumePowerBuffered(25000);
mediumsizedbattery.requirements = ItemStack.with(
Items.silicon, 10,
Items.graphite, 25,
);
mediumsizedbattery.buildVisibility = BuildVisibility.shown;
mediumsizedbattery.category = Category.power;
exports.mediumsizedbattery = mediumsizedbattery;