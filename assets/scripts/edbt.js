const lib = require("lib");

const deltaLS = new LaserBulletType(); //得塔的激光子弹
deltaLS.damage = 11;
//deltaLS.sprite = "creators-yunyu2-laser"
deltaLS.hitSize = 8;
deltaLS.width = 2 * 8;
deltaLS.length = 200;
deltaLS.lifetime = 20;
deltaLS.reloadMultiplier = 1;
deltaLS.buildingDamageMultiplier = 0.3;
deltaLS.healPercent = 2;
deltaLS.collidesTeam = true;
deltaLS.laserAbsorb = false;
deltaLS.shootEffect = new MultiEffect(
    Object.assign(new WaveEffect(), {
        lifetime: 20,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 8,
        strokeFrom: 1,
        strokeTo: 1,
        colorFrom: Color.valueOf("97FFA880"),
        colorTo: Color.valueOf("97FFA880"),
    }),
);
deltaLS.hitEffect = new MultiEffect(
    Object.assign(new ParticleEffect(), {
        line: true,
        interp: Interp.circleOut,
        lifetime: 60,
        particles: 2,
        sizeInterp: Interp.pow10In,
        sizeFrom: 4,
        sizeTo: 4,
        strokeFrom: 1,
        strokeTo: 1,
        length: 24,
        baseLength: 0,
        colorFrom: Color.valueOf("97FFA880"),
        colorTo: Color.valueOf("97FFA880"),
        cone: 36,
    }),
);
//deltaLS.shootEffect = Fx.bigShockwave;
deltaLS.colors = [Color.valueOf("97FFA880"), Color.valueOf("97FFA880"), Color.valueOf("F0FFFF"), Color.white]
deltaLS.ammoMultiplier = 1;
deltaLS.reloadMultiplier = 1;
deltaLS.knockback = 0;
deltaLS.pierceBuilding = false;
deltaLS.reloadMultiplier = 1;
deltaLS.sideAngle = 35;
deltaLS.sideWidth = 1;
deltaLS.sideLength = 70;
exports.deltaLS = deltaLS;

const bs = new BasicBulletType(8, 19, "bullet"); //普通子弹
bs.hitSize = 8;
bs.width = 0.5 * 8
bs.height = 1 * 8;
bs.lifetime = 20;
bs.reloadMultiplier = 1;
bs.frontColor = Color.valueOf("8da1e3");
bs.backColor = Color.valueOf("8da1e3");
bs.ammoMultiplier = 1;
bs.knockback = 1;
bs.pierceBuilding = false;
exports.bs = bs;

const db = new BasicBulletType(1, 1, "bullet"); //伪装树子弹
db.hitSize = 0;
db.width = 0.1;
db.height = 0.1;
db.lifetime = 1;
db.reloadMultiplier = 1;
db.frontColor = Color.valueOf("8da1e3");
db.backColor = Color.valueOf("8da1e3");
db.pierceBuilding = false;
db.instantDisappear = true;
db.splashDamage = 35;
db.splashDamageRadius = 160;
exports.db = db;

const dbLS = new LaserBulletType(); //伪装墙的激光子弹
dbLS.damage = 22;
//dbLS.sprite = "creators-yunyu2-laser"
dbLS.hitSize = 8;
dbLS.width = 2 * 8;
dbLS.length = 200;
dbLS.lifetime = 20;
dbLS.reloadMultiplier = 1;
dbLS.laserAbsorb = false;
dbLS.shootEffect = Fx.bigShockwave;
dbLS.colors = [Color.valueOf("EF5252FF"), Color.valueOf("CF2222FF"), Color.valueOf("901717FF"), Color.white]
dbLS.ammoMultiplier = 1;
dbLS.reloadMultiplier = 1;
dbLS.knockback = 0;
dbLS.pierceBuilding = false;
dbLS.reloadMultiplier = 1;
dbLS.sideAngle = 35;
dbLS.sideWidth = 1;
dbLS.sideLength = 70;
exports.dbLS = dbLS;

//---------------光棱的七彩弹药-------------//
const LSa = new LaserBulletType(); //红
LSa.damage = 25;
//LSa.sprite = "creators-yunyu2-laser"
LSa.hitSize = 8;
LSa.width = 2 * 8;
LSa.length = 200;
LSa.lifetime = 20;
LSa.reloadMultiplier = 1;
LSa.laserAbsorb = false;
LSa.buildingDamageMultiplier = 0.01;
LSa.shootEffect = Fx.bigShockwave;
LSa.colors = [Color.valueOf("EF5252FF"), Color.valueOf("CF2222FF"), Color.valueOf("901717FF"), Color.white]
LSa.ammoMultiplier = 1;
LSa.reloadMultiplier = 1;
LSa.knockback = 0;
LSa.pierceBuilding = false;
LSa.reloadMultiplier = 1;
LSa.sideAngle = 35;
LSa.sideWidth = 1;
LSa.sideLength = 70;
exports.LSa = LSa;
const LSb = new LaserBulletType(); //绿
LSb.damage = 25;
//LSb.sprite = "creators-yunyu2-laser"
LSb.hitSize = 8;
LSb.width = 2 * 8;
LSb.length = 200;
LSb.lifetime = 20;
LSb.reloadMultiplier = 1;
LSb.laserAbsorb = false;
LSb.buildingDamageMultiplier = 0.01;
LSb.shootEffect = Fx.bigShockwave;
LSb.colors = [Color.valueOf("97FFA880"), Color.valueOf("97FFA880"), Color.valueOf("F0FFFF"), Color.white]
LSb.ammoMultiplier = 1;
LSb.reloadMultiplier = 1;
LSb.knockback = 0;
LSb.pierceBuilding = false;
LSb.reloadMultiplier = 1;
LSb.sideAngle = 35;
LSb.sideWidth = 1;
LSb.sideLength = 70;
exports.LSb = LSb;
const LSc = new LaserBulletType(); //蓝
LSc.damage = 25;
//LSc.sprite = "creators-yunyu2-laser"
LSc.hitSize = 8;
LSc.width = 2 * 8;
LSc.length = 200;
LSc.lifetime = 20;
LSc.reloadMultiplier = 1;
LSc.laserAbsorb = false;
LSc.buildingDamageMultiplier = 0.01;
LSc.shootEffect = Fx.bigShockwave;
LSc.colors = [Color.valueOf("115599FF"), Color.valueOf("4DA6FFFF"), Color.valueOf("90C8FFFF"), Color.white]
LSc.ammoMultiplier = 1;
LSc.reloadMultiplier = 1;
LSc.knockback = 0;
LSc.pierceBuilding = false;
LSc.reloadMultiplier = 1;
LSc.sideAngle = 35;
LSc.sideWidth = 1;
LSc.sideLength = 70;
exports.LSc = LSc;
const LSd = new LaserBulletType(); //黄
LSd.damage = 25;
//LSd.sprite = "creators-yunyu2-laser"
LSd.hitSize = 8;
LSd.width = 2 * 8;
LSd.length = 200;
LSd.lifetime = 20;
LSd.reloadMultiplier = 1;
LSd.laserAbsorb = false;
LSd.buildingDamageMultiplier = 0.01;
LSd.shootEffect = Fx.bigShockwave;
LSd.colors = [Color.valueOf("D4816BFF"), Color.valueOf("FFD37FFF"), Color.valueOf("FFE4B1FF"), Color.white]
LSd.ammoMultiplier = 1;
LSd.reloadMultiplier = 1;
LSd.knockback = 0;
LSd.pierceBuilding = false;
LSd.reloadMultiplier = 1;
LSd.sideAngle = 35;
LSd.sideWidth = 1;
LSd.sideLength = 70;
exports.LSd = LSd;
const LSe = new LaserBulletType(); //紫
LSe.damage = 25;
//LSe.sprite = "creators-yunyu2-laser"
LSe.hitSize = 8;
LSe.width = 2 * 8;
LSe.length = 200;
LSe.lifetime = 20;
LSe.reloadMultiplier = 1;
LSe.laserAbsorb = false;
LSe.buildingDamageMultiplier = 0.01;
LSe.shootEffect = Fx.bigShockwave;
LSe.colors = [Color.valueOf("50477BFF"), Color.valueOf("89769AFF"), Color.valueOf("C9A5C8FF"), Color.white]
LSe.ammoMultiplier = 1;
LSe.reloadMultiplier = 1;
LSe.knockback = 0;
LSe.pierceBuilding = false;
LSe.reloadMultiplier = 1;
LSe.sideAngle = 35;
LSe.sideWidth = 1;
LSe.sideLength = 70;
exports.LSe = LSe;

const bbbb = new MultiBulletType(1, LSa, LSb, LSc, LSd, LSe);
exports.bbbb = bbbb;