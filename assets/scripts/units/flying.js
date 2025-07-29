const lib = require("lib");
const wp = require("edbt");

//////////////////新空军/////////////
const 行空 = extend(UnitType, "行空", {});
行空.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
行空.speed = 2;
行空.rotateSpeed = 3;
行空.hitSize = 28;
行空.health = 550;
行空.itemCapacity = 25;
行空.armor = 1;
行空.flying = true;
行空.lowAltitude = false;
行空.rotateShooting = false;
行空.faceTarget = true;
exports.行空 = 行空;

const 凌风 = extend(UnitType, "凌风", {});
凌风.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
凌风.speed = 1.7;
凌风.rotateSpeed = 2;
凌风.hitSize = 30;
凌风.health = 1800;
凌风.itemCapacity = 50;
凌风.armor = 2;
凌风.flying = true;
凌风.lowAltitude = false;
凌风.rotateShooting = false;
凌风.faceTarget = true;
exports.凌风 = 凌风;

const 天凌 = extend(UnitType, "天凌", {});
天凌.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
天凌.speed = 1.4;
天凌.rotateSpeed = 1.5;
天凌.hitSize = 70;
天凌.health = 13500;
天凌.itemCapacity = 55;
天凌.armor = 3;
天凌.payloadCapacity = 5184;
天凌.flying = true;
天凌.lowAltitude = false;
天凌.rotateShooting = false;
天凌.faceTarget = true;
exports.天凌 = 天凌;