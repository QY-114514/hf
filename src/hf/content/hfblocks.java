package hf.content;

import arc.Core;
import arc.func.Cons;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Fill;
import arc.graphics.g2d.Lines;
import arc.math.Angles;
import arc.math.Interp;
import arc.math.Mathf;
import arc.math.Rand;
import arc.math.geom.Vec2;
import arc.util.Eachable;
import arc.util.Time;
import arc.util.Tmp;
import arc.util.io.Reads;
import arc.util.io.Writes;
import mindustry.Vars;
import mindustry.content.*;
import mindustry.entities.*;
import mindustry.entities.bullet.BasicBulletType;
import mindustry.entities.bullet.BulletType;
import mindustry.entities.bullet.PointLaserBulletType;
import mindustry.entities.bullet.ShrapnelBulletType;
import mindustry.entities.part.HaloPart;
import mindustry.entities.part.RegionPart;
import mindustry.entities.pattern.*;
import mindustry.entities.units.BuildPlan;
import mindustry.game.Team;
import mindustry.gen.*;
import mindustry.graphics.CacheLayer;
import mindustry.graphics.Drawf;
import mindustry.graphics.Layer;
import mindustry.graphics.Pal;
import mindustry.type.Category;
import mindustry.type.ItemStack;
import mindustry.type.LiquidStack;
import mindustry.world.Block;
import mindustry.world.blocks.defense.*;
import mindustry.world.blocks.defense.turrets.*;
import mindustry.world.blocks.environment.*;
import mindustry.world.blocks.distribution.*;
import mindustry.world.blocks.liquid.LiquidRouter;
import mindustry.world.blocks.logic.MessageBlock;
import mindustry.world.blocks.power.Battery;
import mindustry.world.blocks.power.ConsumeGenerator;
import mindustry.world.blocks.power.PowerNode;
import mindustry.world.blocks.production.SolidPump;
import mindustry.world.blocks.sandbox.ItemSource;
import mindustry.world.blocks.sandbox.LiquidSource;
import mindustry.world.blocks.production.*;
import mindustry.world.blocks.sandbox.PowerVoid;
import mindustry.world.blocks.storage.StorageBlock;
import mindustry.world.consumers.ConsumeCoolant;
import mindustry.world.consumers.ConsumeLiquid;
import mindustry.world.draw.*;
import mindustry.world.meta.Attribute;
import mindustry.world.meta.BuildVisibility;
import mindustry.world.meta.Stat;
import mindustry.world.meta.StatUnit;

import static mindustry.Vars.*;
import static mindustry.type.ItemStack.*;

public class hfblocks {

  /** wall */
  public static Block bigtumorousalloywall,
      sandwall;

  /** Conveyor */
  public static Block tumorousalloyConveyor;

  /** crafting */
  public static Block bigcryofluidmixer;

  public static void load() {

    /** wall */
    sandwall = new Wall("sand-wall") {
      {
        requirements(Category.defense, with(Items.sand, 24));
        health = 130;
        armor = 2f;
        buildCostMultiplier = 5f;
        size = 2;
      }
    };

    bigtumorousalloywall = new Wall("big-tumorousalloy-wall") {
      {
        requirements(Category.defense, with(HFItems.tumorousalloy, 16));
        health = 6800;
        armor = 4f;
        buildCostMultiplier = 10f;
        size = 2;
      }
    };

    /** Conveyor */
    tumorousalloyConveyor = new Conveyor("tumorousalloyConveyor") {
      {
        requirements(Category.distribution, with(
            HFItems.tumorousalloy, 5,
            Items.silicon, 4,
            Items.lead, 4));
        health = 50;
        speed = 0.16f;
        displayedSpeed = 20f;
      }
    };

    /** crafting */
    bigcryofluidmixer = new GenericCrafter("big-cryofluid-mixer") {
      {
        requirements(Category.crafting, with(
            Items.lead, 120,
            Items.silicon, 200,
            Items.titanium, 200,
            Items.plastanium, 100));
        outputLiquid = new LiquidStack(Liquids.cryofluid, 1f);
        size = 4;
        hasPower = true;
        hasItems = true;
        hasLiquids = true;
        rotate = false;
        solid = true;
        outputsLiquid = true;
        drawer = new DrawMulti(
            new DrawRegion("-bottom"),
            new DrawLiquidTile(Liquids.water),
            new DrawLiquidTile(Liquids.cryofluid) {
              {
                drawLiquidLight = true;
              }
            },
            new DrawDefault());
        liquidCapacity = 120f;
        craftTime = 120;
        lightLiquid = Liquids.cryofluid;
        consumePower(2f);
        consumeItem(Items.titanium, 3);
        consumeLiquid(Liquids.water, 1f);
      }
    };
  }
}

/**
 * /\
 * （ﾟ､ 。７
 * l、 ~ \
 * じしf_, )ノ
 */
