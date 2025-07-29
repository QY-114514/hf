const edbt = require("edbt")
const qwq = require("supplementary")
const lib = require("lib");
const {
    mechanicalfailure
} = require("Status");
const {
    UnitEngine
} = UnitType;

const library = require("library-units");

/********************

真神乃之笑话
             ---------邪神

*******************/

//===========能力=========//
const Cthulhuability1 = (damage, reload, range) => {
    var dam = false;
    var timer = 0;
    var ability = new JavaAdapter(Ability, {
        update(unit) {
            Units.nearby(unit.team, unit.x, unit.y, range, cons(other => {
                if (other != unit) other.apply(StatusEffects.boss, 30);
                if (unit.type.health < 200) {
                    if (other != unit) unit.damageContinuousPierce(unit.type.health / -1)
                };
            }));
            Units.nearbyEnemies(unit.team, unit.x - range, unit.y - range, range * 2, range * 2, cons(other => {
                if (other.within(unit.x, unit.y, range)) other.apply(mechanicalfailure, 30);
            }));
            timer += Time.delta;
            if (timer > reload) {
                dam = false;
                Units.nearbyEnemies(unit.team, unit.x - range, unit.y - range, range * 2, range * 2, cons(other => {
                    if (other.within(unit.x, unit.y, range)) {
                        other.damage(damage);
                        new Effect(65, cons(e => {
                            Draw.color(unit.team.color);
                            Lines.stroke(e.fout() * 10);
                            Lines.circle(e.x, e.y, 2 + e.finpow() * 7);
                        })).at(other.x, other.y);
                        dam = true;
                    }
                }));
                if (dam) {
                    Fx.titanExplosionLarge
                }
                timer = 0;
            }
        },
        copy() {
            return Cthulhuability1(damage, reload, range);
        },
    });
    return ability;
};


//***************克苏鲁*************//
const CthulhuEffectA = lib.newEffect(30, e => {
    Draw.color(Color.valueOf("BF92F9ff"))
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, 16 * e.fout(), 400, e.rotation + 90 * i);
    }
    Drawf.tri(e.x, e.y, 16 * e.fout(), 400, e.rotation + 0);
    Drawf.tri(e.x, e.y, 16 * e.fout(), 400, e.rotation + 180);
    /*Lines.square(e.x, e.y, 30, 45);
    Lines.square(e.x, e.y, 40, 45);
    Lines.square(e.x, e.y, 50, 45);
    Lines.square(e.x, e.y, 60, 45);*/
});
//**************//
const CthulhuEffectB1 = lib.newEffect(240, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 20); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 800);
});
const CthulhuEffectB2 = lib.newEffect(200, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 20); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 800);
});
const CthulhuEffectB3 = lib.newEffect(160, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 20); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 800);
});
const CthulhuEffectB4 = lib.newEffect(120, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 20); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 800);
});
const CthulhuEffectB5 = lib.newEffect(80, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 20); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 800);
});
const CthulhuEffectB6 = lib.newEffect(40, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 20); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 800);
});
//************//
const CthulhuEffectC = lib.newEffect(240, e => {
    Draw.color(Color.valueOf("BF92F9ff"))
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, 32 * e.fout(), e.finpow() * 800, e.rotation + 90 * i);
    }
    Drawf.tri(e.x, e.y, 32 * e.fout(), e.finpow() * 800, e.rotation + 0);
    Drawf.tri(e.x, e.y, 32 * e.fout(), e.finpow() * 800, e.rotation + 180);
    Lines.square(e.x, e.y, 800, 45);
    Lines.square(e.x, e.y, 600, 45);
    Lines.square(e.x, e.y, 400, 45);
});
const CthulhuLS = new LaserBulletType();
CthulhuLS.damage = 18800;
CthulhuLS.hitSize = 8;
CthulhuLS.width = 64;
CthulhuLS.length = 1280;
CthulhuLS.pierce = true;
CthulhuLS.lifetime = 20;
CthulhuLS.reloadMultiplier = 1;
CthulhuLS.laserAbsorb = true;
CthulhuLS.shootEffect = Fx.none;
CthulhuLS.colors = [Color.valueOf("BF92F9ff"), Color.white, Color.white]
CthulhuLS.hitEffect = CthulhuEffectA;
const Cthulhu1 = new Weapon("ed-Cthulhu1");
lib.loadSound("镭射激光.ogg", (s) => {
    Cthulhu1.shootSound = s
});
Cthulhu1.reload = 120;
Cthulhu1.bullet = CthulhuLS;
Cthulhu1.rotate = true;
Cthulhu1.mirror = false;
Cthulhu1.top = true;
Cthulhu1.x = 0;
Cthulhu1.y = -18;
Cthulhu1.recoil = 4;
Cthulhu1.rotateSpeed = 1;
exports.Cthulhu1 = Cthulhu1;
const CthulhuLS2 = new LaserBulletType();
CthulhuLS2.damage = 10800;
CthulhuLS2.hitSize = 8;
CthulhuLS2.width = 24;
CthulhuLS2.length = 640;
CthulhuLS2.lifetime = 20;
CthulhuLS2.pierce = true;
CthulhuLS2.reloadMultiplier = 1;
CthulhuLS2.laserAbsorb = true;
CthulhuLS2.shootEffect = Fx.none;
CthulhuLS2.colors = [Color.valueOf("BF92F9ff"), Color.white, Color.white]
CthulhuLS2.hitEffect = new MultiEffect(
    CthulhuEffectA,
);
const CthulhuBBT2 = new BasicBulletType(0, 0); //普通子弹
CthulhuBBT2.hitSize = 0;
CthulhuBBT2.width = 0;
CthulhuBBT2.height = 0;
CthulhuBBT2.lifetime = 600;
CthulhuBBT2.frontColor = Color.valueOf("8da1e3");
CthulhuBBT2.backColor = Color.valueOf("8da1e3");
CthulhuBBT2.splashDamage = 90000;
CthulhuBBT2.splashDamageRadius = 800;
CthulhuBBT2.despawnEffect = new MultiEffect(
    CthulhuEffectC,
    CthulhuEffectB1,
    CthulhuEffectB2,
    CthulhuEffectB3,
    CthulhuEffectB4,
    CthulhuEffectB5,
    CthulhuEffectB6,
);
CthulhuBBT2.parts.addAll(Object.assign(new ShapePart(), {
    color: Color.valueOf("000000FF"),
    layer: 120,
    circle: true,
    hollow: false,
    radius: 40,
}));
CthulhuBBT2.parts.addAll(Object.assign(new ShapePart(), {
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
    circle: true,
    hollow: false,
    radius: 48,
}));
CthulhuBBT2.parts.addAll(Object.assign(new HaloPart(), {
    rotateSpeed: 0.5,
    sides: 4,
    tri: false,
    hollow: true,
    shapes: 1,
    stroke: 5,
    radius: 250,
    color: Color.valueOf("BF92F9ff"),
    haloRadius: 0,
    haloRotation: 0,
    haloRotateSpeed: 0,
    layer: Layer.effect,
}));
CthulhuBBT2.parts.addAll(Object.assign(new HaloPart(), {
    rotateSpeed: 0.5,
    sides: 4,
    tri: false,
    hollow: true,
    shapes: 1,
    stroke: 5,
    radius: 250,
    color: Color.valueOf("BF92F9ff"),
    haloRadius: 0,
    haloRotation: 45,
    haloRotateSpeed: 0,
    layer: Layer.effect,
}));
CthulhuBBT2.parts.addAll(Object.assign(new HaloPart(), {
    rotateSpeed: 0,
    tri: true,
    shapes: 4,
    stroke: 0,
    radius: 32,
    triLength: 140,
    haloRadius: 440,
    haloRotation: 0,
    haloRotateSpeed: -0.5,
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
}));
CthulhuBBT2.parts.addAll(Object.assign(new HaloPart(), {
    rotateSpeed: 0,
    tri: true,
    shapes: 4,
    stroke: 0,
    radius: 32,
    triLength: 40,
    haloRadius: 400,
    haloRotation: 0,
    haloRotateSpeed: 0.5,
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
}));
CthulhuBBT2.parts.addAll(Object.assign(new ShapePart(), {
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
    circle: true,
    hollow: true,
    stroke: 8,
    radius: 440,
}));
CthulhuBBT2.parts.addAll(Object.assign(new ShapePart(), {
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
    circle: true,
    hollow: true,
    stroke: 8,
    radius: 400,
}));
CthulhuBBT2.intervalBullet = CthulhuLS2;
CthulhuBBT2.bulletInterval = 2;
CthulhuBBT2.intervalBullets = 4;

const CthulhuBBT = new BasicBulletType(8, 0, "bullet");
CthulhuBBT.hitSize = 0;
CthulhuBBT.width = 0;
CthulhuBBT.height = 0;
CthulhuBBT.lifetime = 125;
CthulhuBBT.frontColor = Color.valueOf("BF92F9ff");
CthulhuBBT.backColor = Color.valueOf("BF92F9ff");
CthulhuBBT.splashDamage = 4500;
CthulhuBBT.splashDamageRadius = 160;
CthulhuBBT.trailLength = 15;
CthulhuBBT.trailWidth = 16;
CthulhuBBT.shootEffect = new MultiEffect(
    CthulhuEffectB1,
    CthulhuEffectB2,
    CthulhuEffectB3,
    CthulhuEffectB4,
    CthulhuEffectB5,
    CthulhuEffectB6,
);
CthulhuBBT.trailColor = Color.valueOf("BF92F9ff");
CthulhuBBT.parts.addAll(Object.assign(new ShapePart(), {
    color: Color.valueOf("000000ff"),
    layer: 120,
    circle: true,
    hollow: false,
    radius: 40,
}));
CthulhuBBT.parts.addAll(Object.assign(new ShapePart(), {
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
    circle: true,
    hollow: false,
    radius: 48,
}));
CthulhuBBT.fragBullets = 1;
CthulhuBBT.fragBullet = CthulhuBBT2;

const Cthulhu2 = new Weapon("ed-Cthulhu2");
lib.loadSound("散弹.ogg", (s) => {
    Cthulhu2.shootSound = s
});
Cthulhu2.reload = 1400;
Cthulhu2.bullet = CthulhuBBT;
Cthulhu2.rotate = true;
Cthulhu2.mirror = false;
Cthulhu2.top = true;
Cthulhu2.x = 0;
Cthulhu2.y = -18;
Cthulhu2.recoil = 4;
Cthulhu2.rotateSpeed = 1;
Cthulhu2.shoot = new ShootSummon(0, 0, 1, 360);
Cthulhu2.shoot.shots = 5;
Cthulhu2.shoot.shotDelay = 6;
exports.Cthulhu2 = Cthulhu2;

const CthulhuEffectD = lib.newEffect(30, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, 16 * e.fout(), 400, e.rotation + 90 * i);
    }
    Lines.square(e.x, e.y, 100, 45);
    Lines.square(e.x, e.y, 150, 45);
    Lines.square(e.x, e.y, 200, 45);
    Lines.square(e.x, e.y, 250, 45);
});
const CthulhuEffectD1 = lib.newEffect(120, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 16); //宽度
    Lines.circle(e.x, e.y, e.finpow() * 400);
});
const CthulhuLS3 = new LaserBulletType();
CthulhuLS3.damage = 7800;
CthulhuLS3.hitSize = 8;
CthulhuLS3.width = 64;
CthulhuLS3.length = 640;
CthulhuLS3.pierce = true;
CthulhuLS3.lifetime = 20;
CthulhuLS3.reloadMultiplier = 1;
CthulhuLS3.laserAbsorb = true;
CthulhuLS3.sideAngle = 135;
CthulhuLS3.sideWidth = 2;
CthulhuLS3.sideLength = 40;
CthulhuLS3.colors = [Color.valueOf("BF92F9ff"), Color.white, Color.white]
CthulhuLS3.hitEffect = new MultiEffect(
    CthulhuEffectD,
    CthulhuEffectD1,
);
const CthulhuBBT3 = new BasicBulletType(8, 5800, "missile-large");
CthulhuBBT3.hitSize = 64;
CthulhuBBT3.width = 64;
CthulhuBBT3.height = 80;
CthulhuBBT3.lifetime = 200;
CthulhuBBT3.frontColor = Color.valueOf("BF92F9ff");
CthulhuBBT3.backColor = Color.valueOf("BF92F9ff");
CthulhuBBT3.splashDamage = 4500;
CthulhuBBT3.splashDamageRadius = 160;
CthulhuBBT3.trailLength = 80;
CthulhuBBT3.trailWidth = 16;
CthulhuBBT3.hitEffect = new MultiEffect(
    CthulhuEffectD,
    CthulhuEffectD1,
);
CthulhuBBT3.despawnEffect = new MultiEffect(
    CthulhuEffectD,
    CthulhuEffectD1,
);
CthulhuBBT3.shootEffect = new MultiEffect(
    Fx.shootSmokeSquareBig,
);
CthulhuBBT3.trailColor = Color.valueOf("BF92F9ff");
CthulhuBBT3.homingDelay = 40;
CthulhuBBT3.homingRange = 200;
CthulhuBBT3.homingPower = 0.09;
CthulhuBBT3.fragBullets = 1;
CthulhuBBT3.fragRandomSpread = 0;
CthulhuBBT3.fragBullet = CthulhuLS3;
const Cthulhu3 = new Weapon("ed-Cthulhu3");
lib.loadSound("JG1.ogg", (s) => {
    Cthulhu3.shootSound = s
});
Cthulhu3.reload = 30;
Cthulhu3.bullet = CthulhuBBT3;
Cthulhu3.rotate = true;
Cthulhu3.mirror = false;
Cthulhu3.top = true;
Cthulhu3.x = 0;
Cthulhu3.y = 215;
Cthulhu3.recoil = 4;
Cthulhu3.rotateSpeed = 1;
Cthulhu3.shoot = new ShootSummon(0, 0, 1, 20);
Cthulhu3.shoot.shots = 3;
Cthulhu3.shoot.shotDelay = 3;
exports.Cthulhu3 = Cthulhu3;

const Cthulhu = extend(UnitType, "Cthulhu", {
    init() {
        this.super$init();

        qwq.loadImmunities(this);
    },
});
Cthulhu.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
Cthulhu.speed = 1;
Cthulhu.rotateSpeed = 0.5;
Cthulhu.hitSize = 560;
Cthulhu.health = Infinity;
Cthulhu.armor = Infinity;
Cthulhu.flying = true;
Cthulhu.lowAltitude = true;
Cthulhu.outlineColor = Color.valueOf("32323cff");
Cthulhu.abilities.add(Object.assign(new SuppressionFieldAbility(), {
        x: 0,
        y: 215,
        orbRadius: 44,
        orbMidScl: 1,
        particles: 0,
        active: false,
    })),
    Cthulhu.abilities.add(Object.assign(new SuppressionFieldAbility(), {
        x: 0,
        y: 215,
        orbRadius: 35,
        color: Color.valueOf("000000ff"),
        orbMidScl: 1,
        particles: 0,
        active: false,
        layer: 120,
    })),
    Cthulhu.abilities.add(Object.assign(new SuppressionFieldAbility(), {
        x: 0,
        y: -18,
        orbRadius: 622,
        orbMidScl: 23 / 622,
        particles: 0,
        active: false,
    })),
    Cthulhu.parts.addAll(Object.assign(new HaloPart(), {
        y: -18,
        rotateSpeed: 0,
        tri: true,
        shapes: 2,
        stroke: 0,
        radius: 16,
        triLength: 144,
        haloRadius: 8,
        haloRotation: 0,
        haloRotateSpeed: 0.5,
        color: Color.valueOf("BF92F9ff"),
        layer: Layer.effect,
    }));
Cthulhu.parts.addAll(Object.assign(new HaloPart(), {
        y: -18,
        rotateSpeed: 0,
        tri: true,
        shapes: 2,
        stroke: 0,
        radius: 16,
        triLength: 144,
        haloRadius: 8,
        haloRotation: 0,
        haloRotateSpeed: -0.5,
        color: Color.valueOf("BF92F9ff"),
        layer: Layer.effect,
    })),
    Cthulhu.parts.addAll(Object.assign(new HaloPart(), {
        y: -18,
        rotateSpeed: -0.1,
        sides: 8,
        tri: false,
        hollow: true,
        shapes: 1,
        stroke: 5,
        radius: 620,
        color: Color.valueOf("BF92F9ff"),
        haloRadius: 0,
        haloRotation: 0,
        haloRotateSpeed: 0,
        layer: Layer.effect,
    }));
Cthulhu.parts.addAll(Object.assign(new HaloPart(), {
    y: -18,
    rotateSpeed: -0.1,
    sides: 8,
    tri: false,
    hollow: true,
    shapes: 1,
    stroke: 5,
    radius: 620,
    color: Color.valueOf("BF92F9ff"),
    haloRadius: 0,
    haloRotation: 22.5,
    haloRotateSpeed: 0,
    layer: Layer.effect,
}));
Cthulhu.parts.addAll(Object.assign(new HaloPart(), {
    y: -18,
    rotateSpeed: -0.1,
    sides: 4,
    tri: false,
    hollow: true,
    shapes: 1,
    stroke: 5,
    radius: 620,
    color: Color.valueOf("BF92F9ff"),
    haloRadius: 0,
    haloRotation: 0,
    haloRotateSpeed: 0,
    layer: Layer.effect,
}));
Cthulhu.parts.addAll(Object.assign(new HaloPart(), {
    y: -18,
    rotateSpeed: -0.1,
    sides: 4,
    tri: false,
    hollow: true,
    shapes: 1,
    stroke: 5,
    radius: 620,
    color: Color.valueOf("BF92F9ff"),
    haloRadius: 0,
    haloRotation: 45,
    haloRotateSpeed: 0,
    layer: Layer.effect,
}));
Cthulhu.abilities.add(Cthulhuability1(Infinity, 900, 622));
Cthulhu.weapons.add(Cthulhu1);
Cthulhu.weapons.add(Cthulhu2);
Cthulhu.weapons.add(Cthulhu3);
exports.Cthulhu = Cthulhu;
//************深渊蠕虫***********//
const voidwormEffectA = lib.newEffect(60, e => {
    Draw.color(Color.valueOf("BF92F9ff"));
    Lines.stroke(e.fout() * 4);
    Lines.circle(e.x, e.y, e.finpow() * 160);
    Lines.square(e.x, e.y, 80, 0);
    Lines.square(e.x, e.y, 80, 45);
});
const voidwormEffect = lib.newEffect(60, e => {
    Draw.color(Color.valueOf("BF92F9ff"))
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, 12 * e.fout(), 100, e.rotation + 90 * i);
    }
});
const voidwormmisweaponsbt = ExplosionBulletType(9500, 160);
voidwormmisweaponsbt.collidesAir = true;
voidwormmisweaponsbt.suppressionRange = 450;
voidwormmisweaponsbt.shootEffect = new MultiEffect(
    voidwormEffect,
    Object.assign(new ParticleEffect(), {
        particles: 64,
        line: true,
        strokeFrom: 4,
        strokeTo: 0,
        lenFrom: 16,
        lenTo: 0,
        length: 240,
        baseLength: 0,
        lifetime: 45,
        colorFrom: Color.valueOf("BF92F9ff"),
        colorTo: Color.valueOf("BF92F9ff"),
        cone: 60,
    }),
);
exports.voidwormmisweaponsbt = voidwormmisweaponsbt;
const voidwormmisweapons = new Weapon();
voidwormmisweapons.shootCone = 360;
voidwormmisweapons.mirror = false;
voidwormmisweapons.reload = 1;
voidwormmisweapons.shootOnDeath = true;
voidwormmisweapons.bullet = voidwormmisweaponsbt;
exports.voidwormmisweapons = voidwormmisweapons;
const voidworma = new MissileUnitType("voidworm-missile");
voidworma.targetAir = true;
voidworma.speed = 8;
voidworma.lifetime = 400;
voidworma.maxRange = 5;
voidworma.outlineColor = Pal.darkOutline;
voidworma.health = 88000;
voidworma.homingDelay = 0;
voidworma.lowAltitude = true;
voidworma.engineSize = 3;
voidworma.engineColor = voidworma.trailColor = Color.valueOf("BF92F9ff");
voidworma.engineLayer = Layer.effect;
voidworma.deathExplosionEffect = Fx.none;
voidworma.loopSoundVolume = 0.1;
voidworma.weapons.add(voidwormmisweapons);
exports.voidworma = voidworma;
const voidwormmis = new BulletType();
voidwormmis.reloadMultiplier = 1;
voidwormmis.speed = 0;
voidwormmis.collidesAir = true;
voidwormmis.keepVelocity = false;
voidwormmis.spawnUnit = voidworma;
exports.voidwormmis = voidwormmis;
const voidworm2 = new Weapon("ed-voidworm2");
voidworm2.reload = 60;
voidworm2.bullet = voidwormmis;
voidworm2.rotate = true;
voidworm2.rotateSpeed = 22;
voidworm2.mirror = false;
voidworm2.shootSound = Sounds.missileLarge;
voidworm2.shoot.shots = 3;
voidworm2.shoot.shotDelay = 15;
exports.voidworm2 = voidworm2;

const voidwormBBT = new BasicBulletType(8,  7800);
voidwormBBT.hitSize = 32;
voidwormBBT.width = 32;
voidwormBBT.height = 32;
voidwormBBT.lifetime = 200;
voidwormBBT.frontColor = Color.valueOf("BF92F9ff");
voidwormBBT.backColor = Color.valueOf("BF92F9ff");
voidwormBBT.splashDamage = 1200;
voidwormBBT.splashDamageRadius = 160;
voidwormBBT.trailLength = 80;
voidwormBBT.trailWidth = 8;
voidwormBBT.hitEffect = new MultiEffect(
voidwormEffectA,
Fx.smokeCloud,
)
voidwormBBT.trailColor = Color.valueOf("BF92F9ff");
const voidworm1 = new Weapon("ed-voidworm1");
lib.loadSound("JG1.ogg", (s) => {
    voidworm1.shootSound = s
});
voidworm1.reload = 60;
voidworm1.bullet = voidwormBBT;
voidworm1.rotate = true;
voidworm1.mirror = false;
voidworm1.top = true;
voidworm1.recoil = 4;
voidworm1.rotateSpeed = 22;
exports.voidworm1 = voidworm1;

const voidwormtail = library.segment("深渊蠕虫尾", {
    offsetSegment: 9,
}, {});
voidwormtail.flying = true;
voidwormtail.speed = 1;
voidwormtail.rotateSpeed = 1;
voidwormtail.hitSize = 20;
voidwormtail.hidden = true;
voidwormtail.health = 350000;
voidwormtail.armor = 588;
voidwormtail.flying = true;
voidwormtail.lowAltitude = false;
voidwormtail.faceTarget = false;
voidwormtail.outlineColor = Color.valueOf("32323cff");
voidwormtail.weapons.add(voidworm2);
exports.voidwormtail = voidwormtail;

const voidwormbody = library.segment("深渊蠕虫身", {
    offsetSegment: 9,
}, {});
voidwormbody.flying = true;
voidwormbody.speed = 1;
voidwormbody.rotateSpeed = 1;
voidwormbody.hitSize = 20;
voidwormbody.hidden = true;
voidwormbody.health = 350000;
voidwormbody.armor = 588;
voidwormbody.flying = true;
voidwormbody.lowAltitude = false;
voidwormbody.faceTarget = false;
voidwormbody.outlineColor = Color.valueOf("32323cff");
voidwormbody.parts.addAll(Object.assign(new HaloPart(), {
    rotateSpeed: 0,
    tri: true,
    shapes: 2,
    stroke: 0,
    radius: 8,
    triLength: 72,
    haloRadius: 60,
    haloRotation: 90,
    haloRotateSpeed: 0,
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
}));
voidwormbody.parts.addAll(Object.assign(new HaloPart(), {
    rotateSpeed: 0,
    tri: true,
    shapes: 2,
    stroke: 0,
    radius: 8,
    triLength: 10,
    haloRadius: 60,
    haloRotation: 90,
    shapeRotation: 180,
    haloRotateSpeed: 0,
    color: Color.valueOf("BF92F9ff"),
    layer: Layer.effect,
}));
voidwormbody.weapons.add(voidworm1);
exports.voidwormbody = voidwormbody;

const voidworm = library.head("深渊蠕虫", {
    body: voidwormbody,
    end: voidwormtail,
    lengthSnake: 10,
}, {});
voidworm.flying = true;
voidworm.speed = 1;
voidworm.rotateSpeed = 1;
voidworm.hitSize = 20;
voidworm.health = 350000;
voidworm.armor = 588;
voidworm.flying = true;
voidworm.lowAltitude = false;
voidworm.outlineColor = Color.valueOf("32323cff");
exports.voidworm = voidworm;