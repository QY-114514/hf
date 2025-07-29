const edFY = require("units/flying");

const 核心基座 = extend(CoreBlock, "核心基座", {
    canBreak(tile) {
        return Vars.state.teams.cores(tile.team()).size > 1;
    },
    canReplace(other) {
        return other.alwaysReplace;
    },
    canPlaceOn(tile, team, rotation) {
        return Vars.state.teams.cores(team);
    }
});
核心基座.size = 3;
核心基座.health = 3000;
核心基座.itemCapacity = 2000;
核心基座.hasItems = true;
核心基座.unloadable = true;
核心基座.unitCapModifier = 32;
核心基座.breakable = true;
核心基座.rebuildable = true;
核心基座.unitType = UnitTypes.alpha;
核心基座.requirements = ItemStack.with(
    Items.copper, 3500,
    Items.lead, 4000
);
核心基座.buildVisibility = BuildVisibility.shown;
核心基座.category = Category.effect;
exports.核心基座 = 核心基座;