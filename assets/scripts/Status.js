let armorReduce = Stat("armorReduce");
let disabled = Stat("disabled");
let percentDamage = Stat("percentDamage");
let shieldAdd = Stat("shieldAdd")

const armorreconfiguration = extend(StatusEffect, "armorreconfiguration", {
    update(unit, time) {
        this.super$update(unit, time);

        if (unit.armor >= 0) {
            unit.armor -= 1 / 60
        }
    },
    setStats() {
        this.super$setStats();

        this.stats.add(Stat.armor, -1, StatUnit.none);
    },
    damage: 0
});
armorreconfiguration.permanent = false;
exports.armorreconfiguration = armorreconfiguration;

const mechanicalfailure = extend(StatusEffect, "mechanicalfailure", {
    update(unit, time) {
        this.super$update(unit, time);

        if (unit.type.health > 0 ) {
            //unit.damageContinuousPierce(unit.type.health / 1200);
            unit.shield = 0;
            unit.speedMultiplier = 0.2;
            unit.abilities = [];
            unit.health = 1;
            unit.reloadMultiplier = 0;
            if (unit.getDuration(this) <= 10) {
                unit.apply(this, 180)
            }
        }
    },
    effect: Fx.unitDust,
    color: Color.valueOf("b3e5fa"),
});
mechanicalfailure.permanent = false;
exports.mechanicalfailure = mechanicalfailure;

/*const aa = extend(StatusEffect, "aa", {
    update(unit, time) {
        this.super$update(unit, time);

        if (unit.type.health < 6000) {
        unit.damageContinuousPierce(unit.type.health);
        } else {
        unit.reloadMultiplier = 0
        }
        if (unit.getDuration(this) <= 10) {
            unit.apply(this, 180)
        }
    },
    effect: Fx.unitDust,
    color: Color.valueOf("b3e5fa"),
});
aa.permanent = false;
exports.aa = aa;*/