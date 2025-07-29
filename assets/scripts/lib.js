/*
如果某mod有物品name为a
mod名为m
那么可以通过下面的代码获取该物品
var a = Vars.content.item("m-a");
要使用的时候就能把a等价看作Items.copper之类的东西
*/
//加载声音
//js用法：lib.loadSound("名字.音频类型", (s) => {你的方块.声音接口 = s});
exports.loadSound = function (name, setter) {
    const params = new Packages.arc.assets.loaders.SoundLoader.SoundParameter();
    params.loadedCallback = new Packages.arc.assets.AssetLoaderParameters.LoadedCallback({
        finishedLoading(asset, str, cls) {
            // print('1 load sound ' + name + ' from arc');
            setter(asset.get(str, cls));
        }
    });

    Core.assets.load("sounds/" + name, Packages.arc.audio.Sound, params).loaded = new Cons({
        get(a) {
            // print('2 load sound ' + name + ' from arc');
            setter(a);
        }
    });
}

exports.modName = "ed";

//new MDT
exports.newEffect = (lifetime, renderer) => new Effect(lifetime, cons(renderer));

exports.newBlock = (name, con) => {
	const b = extend(Block, name, con || {});
	b.solid = b.update = b.hasItems = b.destructible = b.configurable = true
	b.envEnabled = Env.any;
	b.group = BlockGroup.none;
	b.priority = TargetPriority.base;
	b.category = Category.effect;
	b.buildVisibility = BuildVisibility.shown;
	return b
}

exports.setBuilding = (building, block, con) => {
	block.buildType = prov(() => {
		if (building == Building) {
			return extend(building, con);
		} else {
			return extend(building, block, con);
		}
	})
}

exports.newdistribution = (name) => {
    const u = extend(Unloader, name, {
		drawPlace(x, y, rotation, valid) {
			this.super$drawPlace(x, y, rotation, valid);
			Drawf.dashCircle(x * Vars.tilesize + this.offset, y * Vars.tilesize + this.offset, 200, Pal.accent);
		},
		outputsItems() {
			return false;
		},
		setStats() {
			this.super$setStats();
			this.stats.add(Stat.range, 200 / 8, StatUnit.blocks);
		}
	});
	Object.assign(u, {
		acceptsItems: true,
		selectionColumns: 6
	});
	exports[name] = u;
	return u
}

exports.region = (name) => {
	return Core.atlas.find(exports.modName + "-" + name);
}

exports.bundle = (text, num, num1) => {
	if (num1) {
		return Core.bundle.format(text, num, num1);
	} else if (num) {
		return Core.bundle.format(text, num);
	} else {
		return Core.bundle.get(text);
	}
}

exports.float = (speed, length) => {
	return Mathf.sin(Time.time * speed) * length;
}

function Colour(R, G, B, A) {
	if (G) {
		return new Color(R, G, B, A || 1);
	} else {
		return Color.valueOf(R);
	}
}

exports.AngleTrns = (ang, rad, rad2) => {
	if (rad2) {
		return {
			x: Angles.trnsx(ang, rad, rad2),
			y: Angles.trnsy(ang, rad, rad2)
		}
	} else {
		return {
			x: Angles.trnsx(ang, rad),
			y: Angles.trnsy(ang, rad)
		}
	}
}

exports.cons2 = (func) => new Cons2({
    get: (v1, v2) => func(v1, v2)
});
exports.floatc2 = (func) => new Floatc2({
    get: (v1, v2) => func(v1, v2)
});
exports.boolf2 = (func) => new Boolf2({
    get: (v1, v2) => func(v1, v2)
});
exports.func = (getter) => new Func({
    get: getter
});
exports.raycaster = (func) => new Geometry.Raycaster({
    accept: func
});
exports.intc = (func) => new Intc({
    get: func
});
exports.intc2 = (func) => new Intc2({
    get: func
});
exports.floatf = (func) => new Floatf({
    get: func
});

exports.mod = Vars.mods.locateMod(exports.modName);
exports.raycaster = (func) => new Geometry.Raycaster({
    accept: func
});
exports.isDev = () => exports.mod.meta.version.indexOf("dev") >= 0;
exports.addToResearch = (content, research) => {
    if (!content) {
        throw new Error('子内容为空!,');
    }
    if (!research.parent) {
        throw new Error('研究。父母为空!');
    }
    var researchName = research.parent;
    var customRequirements = research.requirements;
    var objectives = research.objectives;

    var lastNode = TechTree.all.find(boolf(t => t.content == content));
    if (lastNode != null) {
        lastNode.remove();
    }

    var node = new TechTree.TechNode(null, content, customRequirements !== undefined ? customRequirements : content.researchRequirements());
    var currentMod = exports.mod;
    if (objectives) {
        node.objectives.addAll(objectives);
    }

    if (node.parent != null) {
        node.parent.children.remove(node);
    }

    var parent = TechTree.all.find(boolf(t => t.content.name.equals(researchName) || t.content.name.equals(currentMod.name + "-" + researchName)));

    if (parent == null) {
        throw new Error("'内容 '" + researchName + "' 不在科技树上, 但 '" + content.name + "'需要对其研究.");
    }
    // add this node to the parent
    if (!parent.children.contains(node)) {
        parent.children.add(node);
    }
    // reparent the node
    node.parent = parent;
};
exports.setBuildingSimple = function(blockType, buildingType, overrides) {
    blockType.buildType = prov(() => new JavaAdapter(buildingType, overrides, blockType));
};
exports.setBuildingSimple2 = function(blockType, buildingType, overridesGetter) {
    blockType.buildType = prov(() => new JavaAdapter(buildingType, overridesGetter(blockType), blockType));
};

exports.loadRegion = (name) => {
    if (Vars.headless === true) {
        return null
    }
    return Core.atlas.find(exports.modName + '-' + name, "error")
};

exports.setBuilding = function(blockType, buildingCreator) {
    blockType.buildType = prov(() => buildingCreator(blockType));
}

exports.getMessage = function(type, key) {
    return Core.bundle.get(type + "." + exports.modName + "." + key);
}

exports.int = (v) => new java.lang.Integer(v);

//new effect
/*exports.stareffect = function(range, size, color) {
const a = new Effect(120, e => {
    Draw.color(color);
    for (let i of Mathf.signs) {
        Drawf.tri(e.x, e.y, size * e.fout(), range, e.rotation + 90 * i);
    }
    Drawf.tri(e.x, e.y, size * e.fout(), range, e.rotation + 0);
    Drawf.tri(e.x, e.y, size * e.fout(), range, e.rotation + 180);
});
}*/

exports.createProbabilitySelector = function() {
    const objects = [];
    const probabilities = [];
    var maxProbabilitySum = 0;

    return {
        showProbabilities() {
            const p = [];
            var previous = 0;
            for (var i = 0; i < probabilities.length; i++) {
                var current = probabilities[i];
                p.push(parseFloat(((current - previous) / maxProbabilitySum).toFixed(5)))
                previous = current;
            }
            return p;
        },
        add(obj, probability) {
            if (!Number.isInteger(probability)) {
                throw "'probability' must integer."
            }
            maxProbabilitySum += probability;
            objects.push(obj);
            probabilities.push(maxProbabilitySum);
        },
        random: function() {
            const random = Math.floor(Math.random() * maxProbabilitySum);
            // Can use binary search
            for (var i = 0; i < probabilities.length; i++) {
                var max = probabilities[i];
                if (random < max) {
                    return objects[i];
                }
            }
            throw "IMPOSSIBLE!!! THIS IS A BUG"
        }
    }
}
