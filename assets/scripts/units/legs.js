const lib = require("lib");
const wp = require("edbt");
/*
const 破绽BT = new ArtilleryBulletType(20, 550, "circle-bullet");
破绽BT.lifetime = 27.5;
破绽BT.splashDamageRadius = 80;
破绽BT.splashDamage = 158;
破绽BT.pierceArmor = true;
破绽BT.pierceCap = 2;
破绽BT.hitSound = Sounds.explosion;
破绽BT.shootEffect = new MultiEffect(
    Object.assign(new ParticleEffect(), {
        particles: 8,
        line: true,
        sizeFrom: 2,
        sizeTo: 4,
        length: 32,
        baseLength: 8,
        lifetime: 30,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
        cone: -60,
    }),
    Object.assign(new WaveEffect(), {
        lifetime: 30,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 32,
        strokeFrom: 2,
        strokeTo: 1,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
    }),
);
破绽BT.smokeEffect = Fx.shootBigSmoke;
破绽BT.trailLength = 32;
破绽BT.trailWidth = 4;
破绽BT.trailColor = Color.valueOf("eec591");
破绽BT.backColor = Color.valueOf("eec591");
破绽BT.frontColor = Color.valueOf("ffffff");
破绽BT.width = 8;
破绽BT.height = 16;
破绽BT.status = StatusEffects.burning;
破绽BT.statusDuration = 60;
破绽BT.despawnEffect = Fx.none;
破绽BT.hitEffect = new MultiEffect(
    Object.assign(new WaveEffect(), {
        lifetime: 30,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 80,
        strokeFrom: 2,
        strokeTo: 1,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
    }),
    Object.assign(new ParticleEffect(), {
        particles: 16,
        line: true,
        strokeFrom: 4,
        strokeTo: 0,
        lenFrom: 16,
        lenTo: 0,
        length: 60,
        baseLength: 0,
        lifetime: 80,
        interp: Interp.pow5Out,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
        cone: 60,
    }),
    Object.assign(new ParticleEffect(), {
        lifetime: 80,
        interp: Interp.circleOut,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
        sizeFrom: 8,
        sizeTo: 2,
        baseLength: 0,
        length: 80,
        cone: 360,
        particles: 18,
    })
);
exports.破绽BT = 破绽BT;

const 破绽1 = new Weapon("ed-破绽1");
lib.loadSound("火炮.ogg", (s) => {
    破绽1.shootSound = s
});
破绽1.reload = 90;
破绽1.bullet = 破绽BT;
破绽1.rotate = true;
破绽1.mirror = false;
破绽1.shoot = new ShootAlternate(12);
破绽1.shootY = 44.75;
破绽1.top = true;
破绽1.x = 0;
破绽1.y = -4;
破绽1.recoil = 4;
破绽1.rotateSpeed = 1;
exports.破绽1 = 破绽1;

const 破绽 = extend(UnitType, "破绽", {});
破绽.constructor = prov(() => extend(UnitTypes.toxopid.constructor.get().class, {}));
破绽.armor = 3;
破绽.weapons.add(破绽1);
破绽.speed = 0.8;
破绽.rotateSpeed = 1.2;
破绽.hitSize = 48;
破绽.health = 132000;
破绽.legPairOffset = 3;
破绽.legExtension = -20;
破绽.legBaseOffset = 8;
破绽.stepShake = 1.2;
破绽.legCount = 8;
破绽.legLength = 80;
破绽.legMoveSpace = 1;
破绽.rippleScale = 1.6;
破绽.rotateShooting = true;
破绽.faceTarget = true;
破绽.hovering = true;
exports.破绽 = 破绽;*/