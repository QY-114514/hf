const {
    mechanicalfailure
} = require("Status");

const BOSS1 = (damage, reload, range) => { //BOSS
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
            return BOSS1(damage, reload, range);
        },
        draw(unit) {
            Draw.color(unit.team.color);

            Lines.stroke(1.5);
            Draw.alpha(0.09);
            Fill.circle(unit.x, unit.y, range);
            Draw.alpha(0.5);
            Lines.circle(unit.x, unit.y, range);
        },
    });
    return ability;
};
exports.BOSS1 = BOSS1;

const BOSS2 = (radius, regen, max, cooldown) => { //BOSS

    var realRad;
    var paramUnit;
    var paramField;
    var shieldConsumer = cons(trait => {
        if (trait.team != paramUnit.team &&
            trait.type.absorbable &&
            Intersector.isInsideHexagon(paramUnit.x, paramUnit.y, realRad * 2, trait.x, trait.y) &&
            paramUnit.shield > 0) {

            trait.absorb();
            Fx.absorb.at(trait);

            paramField.alpha = 1;
        }
    });

    const ability = new JavaAdapter(ForceFieldAbility, {
        update(unit) {
            unit.shield = Infinity;
            this.radiusScale = Mathf.lerpDelta(this.radiusScale, 1, 0.06)
            realRad = this.radiusScale * this.radius;
            paramUnit = unit;
            paramField = this;
            Groups.bullet.intersect(unit.x - realRad, unit.y - realRad, realRad * 2, realRad * 2, shieldConsumer);
            this.alpha = Math.max(this.alpha - Time.delta / 10, 0);
        },
        copy() {
            return BOSS2(radius, regen, max, cooldown);
        },
        draw(unit) {
            this.super$draw(unit);
        }
    }, radius, regen, max, cooldown);

    return ability;
};
exports.BOSS2 = BOSS2;
/*
const 测试aa = (range, max) => {
    let Switch = false;
    var ability = new JavaAdapter(Ability, {
        update(unit) {
            Groups.bullet.intersect(this.x - range, this.y - range, range * 2, range * 2, cons((b) => {
                let ang = Angles.angle(b.x + max, b.y + max), ang1 = Angles.angle(b.x, b.y, this.x, this.y);
                if (b.team != this.team) {
                    b.vel.rotateTo(ang)
                }
            }));
        },
        copy() {
            return 测试aa (range, max);
        },
        draw(unit) {
            Draw.color(unit.team.color);
            Lines.stroke(1.5);
            Draw.alpha(0.09);
            Fill.circle(unit.x, unit.y, range);
            Draw.alpha(0.5);
            Lines.circle(unit.x, unit.y, range);
        }
    });
    return ability;
};
exports.测试aa = 测试aa;*/