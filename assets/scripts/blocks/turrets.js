const edbt = require("edbt");
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

const sfcItemTurret = extend(ItemTurret,"sfcItemTurret",{});//小以态脆晶炮
sfcItemTurret.size = 2;
sfcItemTurret.health = 550;
sfcItemTurret.ammoPerShot = 1;//射击一次消耗子弹(必须为整数且大于等于1)
sfcItemTurret.range = 160;//范围（8/1）
sfcItemTurret.reload = 6;//攻击间隔（60/1）
sfcItemTurret.inaccuracy = 0;//精准度
sfcItemTurret.shots = 1;//一次射出子弹
sfcItemTurret.xRand = 8;//射击偏移
sfcItemTurret.targetAir = true;//瞄准空军
sfcItemTurret.targetGround = true;//瞄准陆军
sfcItemTurret.maxAmmo = 25,//弹夹容量
sfcItemTurret.rotatespeed = 16;
sfcItemTurret.ammoTypes.put(Items.graphite, edbt.bbbb);
sfcItemTurret.ammoTypes.put(Items.titanium, edbt.deltaLS);
sfcItemTurret.requirements = ItemStack.with(
    Items.silicon, 250,
    Items.graphite, 400,
    Items.titanium, 300,
);
sfcItemTurret.buildVisibility = BuildVisibility.shown;
sfcItemTurret.category = Category.turret;
sfcItemTurret.researchCostMultiplier = 3;
exports.sfcItemTurret = sfcItemTurret;

const idbts = (() => {

    const bt = extend(BasicBulletType, {
        hitEntity(b, other, initialHealth) {
            if (other && other.kill) {
                Call.unitDestroy(other.id)
            }
        },
        hitTile(b, tile, x, y, health, direct) {
            this.super$hitTile(b, tile, x, y, health, direct);
            if (tile) {
                tile.killed()
            }
        },
    });

    bt.damage = Infinity;
    bt.splashDamage = Infinity;
    bt.speed = 24;
    bt.hitSize = 6;
    bt.width = 9;
    bt.height = 45;
    bt.lifetime = 26;
    bt.inaccuracy = 0;
    bt.despawnEffect = Fx.hitBulletSmall;
    bt.keepVelocity = false;
    return bt;
})();


const turret = extend(Turret, 'turret', {});

lib.setBuildingSimple(turret, Turret.TurretBuild, {
    hasAmmo() {
        return true;
    },
    peekAmmo() {
        return idbts;
    },
    useAmmo() {
        return idbts;
    },
    shoot(type) {
        this.super$shoot(type)
    },
});

turret.targetInterval = 0;

const 伪装 = extend(Turret, '伪装树', {});

lib.setBuildingSimple(伪装, Turret.TurretBuild, {
    hasAmmo() {
        return true;
    },
    peekAmmo() {
        return edbt.db;
    },
    useAmmo() {
        return edbt.db;
    },
    shoot(type) {
        this.super$shoot(type)
    },
});

伪装.targetInterval = 0;

const 伪装a = extend(Turret, '伪装墙', {});

lib.setBuildingSimple(伪装a, Turret.TurretBuild, {
    hasAmmo() {
        return true;
    },
    peekAmmo() {
        return edbt.dbLS;
    },
    useAmmo() {
        return edbt.dbLS;
    },
    shoot(type) {
        this.super$shoot(type)
    },
});

伪装a.targetInterval = 0;

const 千仗 = extend(PowerTurret, "千仗", {});
千仗.buildType = prov(() => new JavaAdapter(PowerTurret.PowerTurretBuild, {
    collide(other) { return other.owner != this },
    findTarget() {
        // 优先找己方被打的建筑，再寻找敌人
        var target = Units.findDamagedTile(this.team, this.x, this.y)
        if (target != null && target != this && this.dst(target) <= 千仗.range) {
            // 设置为己方方块
            this.target = target;
        } else {
            // 默认寻找方法
            this.super$findTarget();
        }
    },
    validateTarget() {
        // 修改了 team ，使得己方方块也视为有效目标
        return !Units.invalidateTarget(this.target, Team.derelict, this.x, this.y) || this.isControlled() || this.logicControlled();
    },
}, 千仗))
千仗.size = 2;
千仗.health = 550;
千仗.reload = 60;
千仗.range = 160;
千仗.consumePower(3);
千仗.shootType = edbt.deltaLS
千仗.requirements = ItemStack.with(
    Items.silicon, 250,
    Items.graphite, 400,
    Items.titanium, 300,
);
千仗.buildVisibility = BuildVisibility.shown;
千仗.category = Category.turret;
exports.千仗 = 千仗;