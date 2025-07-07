package hf.content;

import arc.graphics.Color;
import hf.world.blocks.production.DependentCrafter;
import mindustry.content.Fx;
import mindustry.content.Items;
import mindustry.gen.Sounds;
import mindustry.type.Category;
import mindustry.type.ItemStack;
import mindustry.world.Block;
import mindustry.world.draw.DrawDefault;
import mindustry.world.draw.DrawFlame;
import mindustry.world.draw.DrawMulti;

/**
 * HBlocks
 */
public class HBlocks {

  public static Block test;

  public static void load() {
    test = new DependentCrafter("test") {
      {
        requirements(Category.crafting, ItemStack.with(Items.copper, 60, Items.graphite, 30, Items.lead, 30));
        craftEffect = Fx.smeltsmoke;
        outputItem = new ItemStack(Items.metaglass, 1);
        craftTime = 30f;
        size = 2;
        hasPower = hasItems = true;
        drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffc099")));
        ambientSound = Sounds.smelter;
        ambientSoundVolume = 0.07f;

        consumeItems(ItemStack.with(Items.lead, 1, Items.sand, 1));
        consumePower(0.60f);
      }
    };
  }
}
