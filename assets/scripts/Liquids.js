const phaseliquid = new Liquid("phaseliquid", Color.valueOf("F19583FF")); //相位液
exports.phaseliquid = phaseliquid;
Object.assign(phaseliquid, {
    heatCapacity: 1.5,
    boilPoint: 0,
    gasColor: Color.grays(0.9),
    gas: true,
    alwaysUnlocked: true,
});