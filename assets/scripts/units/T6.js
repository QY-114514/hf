const lib = require("lib");
//////////////<<<<^神权^>>>>>//////////////
const T6reignBT2 = new BasicBulletType(8, 22, "missile-back");
T6reignBT2.hitSize = 8;
T6reignBT2.width = 1 * 8
T6reignBT2.height = 2 * 8;
T6reignBT2.lifetime = 50;
T6reignBT2.reloadMultiplier = 1;
T6reignBT2.frontColor = Color.valueOf("FFB90F");
T6reignBT2.backColor = Color.valueOf("FF8C00");
T6reignBT2.knockback = 1;
T6reignBT2.pierceBuilding = false;
T6reignBT2.smokeEffect = Fx.shootSmallSmoke;
T6reignBT2.status = StatusEffects.burning;
T6reignBT2.statusDuration = 600;
T6reignBT2.incendAmount = 21;
T6reignBT2.incendSpread = 16;
T6reignBT2.incendChance = 100;
exports.T6reignBT2 = T6reignBT2;
const T6reignLS = new LaserBulletType();
T6reignLS.damage = 23;
T6reignLS.hitSize = 8;
T6reignLS.width = 2 * 8;
T6reignLS.length = 400;
T6reignLS.lifetime = 20;
T6reignLS.reloadMultiplier = 1;
T6reignLS.laserAbsorb = false;
T6reignLS.shootEffect = new MultiEffect(
    Object.assign(new WaveEffect(), {
        lifetime: 20,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 8,
        strokeFrom: 1,
        strokeTo: 1,
        colorFrom: Color.valueOf("B85E40FF"),
        colorTo: Color.valueOf("B85E40FF"),
    }),
);
T6reignLS.hitEffect = new MultiEffect(
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
        colorFrom: Color.valueOf("B85E40FF"),
        colorTo: Color.valueOf("B85E40FF"),
        cone: 36,
    }),
);
T6reignLS.colors = [Color.valueOf("B85E40FF"), Color.valueOf("B85E40FF"), Color.valueOf("B85E40FF"), Color.white]
T6reignLS.knockback = 0;
T6reignLS.pierceBuilding = false;
T6reignLS.reloadMultiplier = 1;
T6reignLS.sideAngle = 90;
T6reignLS.sideWidth = 1;
T6reignLS.sideLength = 70;
exports.T6reignLS = T6reignLS;
const T6reign2 = new Weapon("ed-T6reign2");
T6reign2.reload = 30;
T6reign2.bullet = T6reignBT2;
T6reign2.shoot.shots = 3;
T6reign2.shoot.shotDelay = 5;
T6reign2.rotate = true;
T6reign2.mirror = true;
T6reign2.recoil = 2;
T6reign2.shootSound = Sounds.missile;
T6reign2.rotateSpeed = 16;
T6reign2.x = -16;
T6reign2.y = -8;
exports.T6reign2 = T6reign2;
const T6reign3 = new Weapon("ed-T6reign3");
T6reign3.reload = 15;
T6reign3.bullet = T6reignBT2;
T6reign3.rotate = true;
T6reign3.mirror = true;
T6reign3.recoil = 2;
T6reign3.shootSound = Sounds.missile;
T6reign3.rotateSpeed = 16;
T6reign3.x = -8;
T6reign3.y = 0;
exports.T6reign3 = T6reign3;
const T6reign4 = new Weapon("ed-T6reign4");
T6reign4.reload = 15;
T6reign4.bullet = T6reignLS;
T6reign4.rotate = true;
T6reign4.mirror = false;
T6reign4.recoil = 2;
T6reign4.shootSound = Sounds.laser;
T6reign4.rotateSpeed = 16;
T6reign4.x = 0;
T6reign4.y = -8;
exports.T6reign4 = T6reign4;
const T6reignLS2 = new LaserBulletType();
T6reignLS2.damage = 25;
T6reignLS2.hitSize = 8;
T6reignLS2.width = 2 * 8;
T6reignLS2.length = 160;
T6reignLS2.lifetime = 20;
T6reignLS2.reloadMultiplier = 1;
T6reignLS2.laserAbsorb = false;
T6reignLS2.shootEffect = Fx.bigShockwave;
T6reignLS2.colors = [Color.valueOf("eec591"), Color.valueOf("eec591"), Color.valueOf("eec591"), Color.white]
T6reignLS2.ammoMultiplier = 1;
T6reignLS2.reloadMultiplier = 1;
T6reignLS2.knockback = 0;
T6reignLS2.pierceBuilding = false;
T6reignLS2.reloadMultiplier = 1;
T6reignLS2.sideAngle = 160;
T6reignLS2.sideWidth = 1;
T6reignLS2.sideLength = 16;
exports.T6reignLS2 = T6reignLS2;
const T6reignBT = new BasicBulletType(20, 105, "circle-bullet");
T6reignBT.lifetime = 27.5;
T6reignBT.splashDamageRadius = 43;
T6reignBT.splashDamage = 55;
T6reignBT.pierceArmor = true;
T6reignBT.pierceCap = 2;
T6reignBT.hitSound = Sounds.explosion;
T6reignBT.shootEffect = new MultiEffect(
    Object.assign(new WaveEffect(), {
        lifetime: 15,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 32,
        strokeFrom: 1,
        strokeTo: 1,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
    }),
    Object.assign(new ParticleEffect(), {
        particles: 5,
        line: true,
        sizeFrom: 2,
        sizeTo: 4,
        length: 32,
        baseLength: 8,
        lifetime: 30,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
        cone: 60,
    }),
);
T6reignBT.smokeEffect = Fx.shootBigSmoke;
T6reignBT.trailLength = 1;
T6reignBT.trailLength = 1;
T6reignBT.trailWidth = 3;
T6reignBT.trailColor = Color.valueOf("eec591");
T6reignBT.backColor = Color.valueOf("eec591");
T6reignBT.frontColor = Color.valueOf("ffffff");
T6reignBT.width = 9;
T6reignBT.height = 26;
T6reignBT.fragBullets = 1;
T6reignBT.fragRandomSpread = 0;
T6reignBT.fragBullet = T6reignLS2;
T6reignBT.status = StatusEffects.burning
T6reignBT.statusDuration = 60
T6reignBT.despawnEffect = Fx.flakExplosionBig;
T6reignBT.hitEffect = new MultiEffect(
    Object.assign(new WaveEffect(), {
        lifetime: 10,
        interp: Interp.circleOut,
        sizeFrom: 0,
        sizeTo: 32,
        strokeFrom: 1,
        strokeTo: 1,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
    }),
    Object.assign(new ParticleEffect(), {
        particles: 8,
        line: true,
        strokeFrom: 4,
        strokeTo: 0,
        lenFrom: 16,
        lenTo: 0,
        length: 60,
        baseLength: 0,
        lifetime: 15,
        colorFrom: Color.valueOf("FFA05C"),
        colorTo: Color.valueOf("FFFFFF"),
        cone: 60,
    }),
);
exports.T6reignBT = T6reignBT;
const T6reign1 = new Weapon("ed-T6reign1");
T6reign1.reload = 8;
T6reign1.shake = 3;
T6reign1.bullet = T6reignBT;
T6reign1.rotate = false;
T6reign1.mirror = true;
T6reign1.recoil = 5;
T6reign1.shootSound = Sounds.shootBig;
T6reign1.rotateSpeed = 16;
T6reign1.shoot.shots = 2;
T6reign1.shoot.shotDelay = 4;
T6reign1.shootY = 26;
T6reign1.x = -41;
T6reign1.y = -0.25;
T6reign1.top = true;
T6reign1.inaccuracy = 0.5;
T6reign1.ejectEffect = Fx.casing4;
T6reign1.alternate = false;
T6reign1.shootCone = 18;
exports.T6reign1 = T6reign1;
const T6reign5 = new Weapon("ed-T6reign1");
T6reign5.reload = 8;
T6reign5.shake = 3;
T6reign5.bullet = T6reignBT;
T6reign5.rotate = false;
T6reign5.mirror = true;
T6reign5.recoil = 5;
T6reign5.shootSound = Sounds.shootBig;
T6reign5.rotateSpeed = 16;
T6reign5.shoot.shots = 2;
T6reign5.shoot.shotDelay = 4;
T6reign5.shootY = 26;
T6reign5.x = -30;
T6reign5.y = 2;
T6reign5.top = true;
T6reign5.inaccuracy = 0.5;
T6reign5.ejectEffect = Fx.casing4;
T6reign5.alternate = true;
T6reign5.shootCone = 18;
exports.T6reign5 = T6reign5;
const T6reign = extend(UnitType, "T6reign", {});
T6reign.constructor = prov(() => extend(UnitTypes.toxopid.constructor.get().class, {}));
T6reign.health = 158000;
T6reign.armor = 2;
T6reign.hitSize = 61;
T6reign.canDrown = false;
T6reign.speed = 0.4;
T6reign.legSplashDamage = 370;
T6reign.legSplashRange = 50;
T6reign.legCount = 6;
T6reign.legMoveSpace = 2.1;
T6reign.legExtension = -8;
T6reign.legBaseOffset = 0;
T6reign.legLength = 30;
T6reign.legForwardScl = 0.8;
T6reign.stepShake = 4.5;
T6reign.rippleScale = 1;
T6reign.hovering = true;
T6reign.allowLegStep = true;
T6reign.canBoost = false;
T6reign.rotateSpeed = 1.4;
T6reign.weapons.add(T6reign2);
T6reign.weapons.add(T6reign3);
T6reign.weapons.add(T6reign4);
T6reign.weapons.add(T6reign1);
T6reign.weapons.add(T6reign5);
T6reign.immunities = ObjectSet.with(StatusEffects.freezing, StatusEffects.unmoving, StatusEffects.sapped);
T6reign.abilities.add(new ArmorPlateAbility)
T6reign.abilities.add(
        Object.assign(new ShieldArcAbility(), {
            radius: 61,
            angle: 180,
            regen: 10,
            cooldown: 360,
            max: 8000,
            width: 16,
            whenShooting: false,
        })
    ),
    exports.T6reign = T6reign;

//////////////////悲悯/////////////////
const T6disruptEffect = lib.newEffect(21, e => {
    Draw.color(Pal.spore)
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, 4 * e.fout(), 80, e.rotation + 90 * i);
    }
});
const T6disruptmisweaponsbt = ExplosionBulletType(450, 80);
T6disruptmisweaponsbt.collidesAir = false;
T6disruptmisweaponsbt.suppressionRange = 450;
T6disruptmisweaponsbt.shootEffect = new MultiEffect(
    T6disruptEffect,
    Object.assign(new ParticleEffect(), {
        particles: 8,
        line: true,
        strokeFrom: 4,
        strokeTo: 0,
        lenFrom: 16,
        lenTo: 0,
        length: 80,
        baseLength: 0,
        lifetime: 15,
        colorFrom: Pal.sapBulletBack,
        colorTo: Pal.sapBulletBack,
        cone: 60,
    }),
);
exports.T6disruptmisweaponsbt = T6disruptmisweaponsbt;
const T6disruptmisweapons = new Weapon();
T6disruptmisweapons.shootCone = 360;
T6disruptmisweapons.mirror = false;
T6disruptmisweapons.reload = 1;
T6disruptmisweapons.shootOnDeath = true;
T6disruptmisweapons.bullet = T6disruptmisweaponsbt;
exports.T6disruptmisweapons = T6disruptmisweapons;
const T6disrupta = new MissileUnitType("T6disrupt-missile");
T6disrupta.targetAir = false;
T6disrupta.speed = 4.6;
T6disrupta.maxRange = 5;
T6disrupta.outlineColor = Pal.darkOutline;
T6disrupta.health = 70;
T6disrupta.homingDelay = 0;
T6disrupta.lowAltitude = true;
T6disrupta.engineSize = 3;
T6disrupta.engineColor = T6disrupta.trailColor = Pal.sapBulletBack;
T6disrupta.engineLayer = Layer.effect;
T6disrupta.deathExplosionEffect = Fx.none;
T6disrupta.loopSoundVolume = 0.1;
T6disrupta.weapons.add(T6disruptmisweapons);
exports.T6disrupta = T6disrupta;
const T6disruptmis = new BulletType();
T6disruptmis.reloadMultiplier = 1;
T6disruptmis.speed = 0;
T6disruptmis.collidesAir = false;
T6disruptmis.keepVelocity = false;
T6disruptmis.shootEffect = new MultiEffect(
    Object.assign(new ParticleEffect(), {
        lifetime: 120,
        particles: 2,
        sizeInterp: Interp.pow10In,
        sizeFrom: 4,
        sizeTo: 4,
        length: 32,
        baseLength: 0,
        colorFrom: Pal.sapBulletBack,
        colorTo: Pal.sapBulletBack,
        cone: 36,
    }),
);
T6disruptmis.smokeEffect = new MultiEffect(
    Object.assign(new ParticleEffect(), {
        lifetime: 120,
        particles: 2,
        sizeInterp: Interp.pow10In,
        sizeFrom: 4,
        sizeTo: 4,
        length: 32,
        baseLength: 0,
        colorFrom: Pal.sapBulletBack,
        colorTo: Pal.sapBulletBack,
        cone: 36,
    }),
);
T6disruptmis.spawnUnit = T6disrupta;
exports.T6disruptmis = T6disruptmis;
const T6disrupt1 = new Weapon("ed-T6disrupt1");
T6disrupt1.reload = 180;
T6disrupt1.shake = 3;
T6disrupt1.bullet = T6disruptmis;
T6disrupt1.rotate = false;
T6disrupt1.mirror = true;
T6disrupt1.recoil = 5;
T6disrupt1.shootSound = Sounds.missileLarge;
T6disrupt1.rotateSpeed = 16;
T6disrupt1.shoot.shots = 3;
T6disrupt1.shoot.shotDelay = 15;
T6disrupt1.shootY = 27.25;
T6disrupt1.x = -30;
T6disrupt1.shadow = -5;
T6disrupt1.inaccuracy = 0.5;
T6disrupt1.ejectEffect = Fx.casing4;
T6disrupt1.alternate = true;
T6disrupt1.shootCone = 18;
T6disrupt1.layerOffset = -20;
exports.T6disrupt1 = T6disrupt1;
const T6disrupt = extend(UnitType, "T6disrupt", {});
T6disrupt.constructor = prov(() => extend(UnitTypes.disrupt.constructor.get().class, {}));
T6disrupt.speed = 0.5;
T6disrupt.targetAir = false;
T6disrupt.rotateSpeed = 1;
T6disrupt.hitSize = 87;
T6disrupt.health = 25000;
T6disrupt.itemCapacity = 50;
T6disrupt.armor = 5;
T6disrupt.payloadCapacity = 5184;
T6disrupt.flying = true;
T6disrupt.lowAltitude = false;
T6disrupt.rotateShooting = false;
T6disrupt.faceTarget = true;
T6disrupt.abilities.add(
    Object.assign(new ShieldArcAbility(), {
            radius: 60,
            angle: 90,
            regen: 10,
            cooldown: 360,
            max: 4000,
            width: 16,
            whenShooting: false,
            angleOffset: 60,
        })),
T6disrupt.abilities.add(
    Object.assign(new ShieldArcAbility(), {
            radius: 60,
            angle: 90,
            regen: 10,
            cooldown: 360,
            max: 4000,
            width: 16,
            whenShooting: false,
            angleOffset: -60,
        })),
T6disrupt.abilities.add(
    Object.assign(new SuppressionFieldAbility(), {
            y: 23.75,
            orbRadius: 5,
            particles: 10,
            particleSize: 3,
        }));
T6disrupt.abilities.add(
    Object.assign(new SuppressionFieldAbility(), {
        y: -15.75,
        orbRadius: 28.75,
        particles: 10,
        particleSize: 3,
        orbMidScl: 0.1391,
        particleLen: 28.75,
        active: false,
    }));
T6disrupt.abilities.add(
    Object.assign(new SuppressionFieldAbility(), {
        x: 11.25,
        y: 5.75,
        orbRadius: 5,
        particles: 10,
        particleSize: 3,
        active: false,
    }));
T6disrupt.abilities.add(
    Object.assign(new SuppressionFieldAbility(), {
        x: -11.25,
        y: 5.75,
        orbRadius: 5,
        particles: 10,
        particleSize: 3,
        active: false,
    }));
T6disrupt.weapons.add(T6disrupt1);
exports.T6disrupt = T6disrupt;