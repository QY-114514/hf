const {
BOSS1,
BOSS2,
} = require("units/edabilities");
const lib = require("lib");

const BOSSEffect = lib.newEffect(30, e => {
    Draw.color(Color.valueOf("BF1515FF"))
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, 4 * e.fout(), 80, e.rotation + 90 * i);
    }
});
const BOSSEffect2 = lib.newEffect(30, e => {
		Draw.color(Color.valueOf("BF1515FF"));
		Lines.square(e.x, e.y, 90 * Mathf.sin(0.025 * Time.time), 45);
});
const 死神BT1 = extend(ArtilleryBulletType, {
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
死神BT1.speed = 8;
死神BT1.damage = Infinity;
死神BT1.sprite = "ed-newstar";
死神BT1.splashDamageRadius = 4 * 8;
死神BT1.splashDamage = Infinity;
死神BT1.trailLength = 32;
死神BT1.trailWidth = 3;
死神BT1.trailColor = Color.valueOf("BF1515FF");
死神BT1.hitSize = 4 * 8;
死神BT1.width = 4 * 8;
死神BT1.height = 4 * 8;
死神BT1.lifetime = 6900;
死神BT1.reloadMultiplier = 1;
死神BT1.frontColor = Color.valueOf("BF1515FF");
死神BT1.backColor = Color.valueOf("BF1515FF");
死神BT1.knockback = 1;
死神BT1.spin = 1;
死神BT1.pierceBuilding = false;
死神BT1.hitEffect = new MultiEffect(
BOSSEffect,
BOSSEffect2,
Object.assign(new ParticleEffect(), {
        particles: 8,
        line: true,
        strokeFrom: 4,
        strokeTo: 0,
        lenFrom: 16,
        lenTo: 0,
        length: 80,
        baseLength: 0,
        lifetime: 30,
        colorFrom: Color.valueOf("BF1515FF"),
        colorTo: Color.valueOf("BF1515FF"),
        cone: 60,
    }),
    Object.assign(new WaveEffect(), {
        lifetime: 30,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 88,
        strokeFrom: 2,
        strokeTo: 2,
        colorFrom: Color.valueOf("BF1515FF"),
        colorTo: Color.valueOf("BF1515FF"),
    }),
)
exports.死神BT1 = 死神BT1;
const 死神1 = new Weapon("ed-死神1");
死神1.reload = 1;
死神1.bullet = 死神BT1;
死神1.rotate = true;
死神1.mirror = true;
死神1.shootSound = Sounds.missile;
死神1.x = 0;
死神1.y = 0;
死神1.xRand = 80;
死神1.shootY = -800;
exports.死神1 = 死神1;
const 死神 = extend(UnitType, "死神", {});
死神.constructor = prov(() => extend(UnitTypes.disrupt.constructor.get().class, {}));
死神.speed = 1;
死神.targetAir = false;
死神.rotateSpeed = 2;
死神.hitSize = 16;
死神.health = Infinity;
死神.itemCapacity = 5000;
死神.armor = Infinity;
死神.payloadCapacity = 5184;
死神.flying = true;
死神.lowAltitude = true;
死神.rotateShooting = false;
死神.faceTarget = true;
死神.abilities.add(BOSS1(Infinity, 60 * 5, 1600));
死神.abilities.add(BOSS2(80, Infinity, Infinity, 0));
死神.weapons.add(死神1);
exports.死神 = 死神;

//////////////-------------次-----------//////////////
const 次 = extend(UnitType, "次", {});
次.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
/*次.parts.add(Object.assign(new RegionPart("-gower1"), {
color: Color.valueOf("FFFFFFFF"),
blending: Blending.additive,
outline: false,
}));
次.parts.add(Object.assign(new RegionPart("-gower2"), {
color: Color.valueOf("FFFFFF55"),
blending: Blending.additive,
outline: false,
}));
次.parts.add(Object.assign(new RegionPart("-gower3"), {
color: Color.valueOf("FFFFFF55"),
blending: Blending.additive,
outline: false,
}));*/
次.speed = 2;
次.rotateSpeed = 3;
次.hitSize = 160;
次.health = 9018058;
次.itemCapacity = 5000;
次.armor = 548;
次.flying = true;
次.lowAltitude = true;
次.rotateShooting = false;
次.faceTarget = true;
exports.次 = 次;