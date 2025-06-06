package hf.world.blocks.effect;

import mindustry.content.Fx;
import mindustry.entities.Effect;
import mindustry.gen.Building;
import mindustry.graphics.Drawf;
import mindustry.logic.Ranged;
import mindustry.world.Block;
import mindustry.world.blocks.production.BeamDrill;
import mindustry.world.blocks.production.Drill;
import mindustry.world.meta.Stat;
import mindustry.world.meta.StatUnit;

import static mindustry.Vars.*;

import arc.graphics.Color;
import arc.math.Mathf;
import arc.util.Time;
import arc.util.Tmp;

public class DropItems extends Block {
  public float range;
  public Effect workeffect;
  public float reload;
  public Color color;

  public DropItems(String name) {
    super(name);
    this.hasItems = true;
    this.range = 120f;
    this.update = true;
    this.solid = true;
    this.armor = 10;
    this.workeffect = Fx.none;
    this.reload = 60f;
    this.color = Color.valueOf("#8998E5FF");
    this.itemCapacity = 50;
  }

  @Override
  public void init() {
    super.init();
    if (this.itemCapacity <= 0) {
      this.itemCapacity = 50;
    }
    if (this.range <= 0) {
      this.range = 120f;
    }
  }

  @Override
  public void setStats() {
    super.setStats();
    stats.add(Stat.range, range / 8, StatUnit.blocks);
  }

  @Override
  public void setBars() {
    super.setBars();
  }

  @Override
  public void drawPlace(int x, int y, int rotation, boolean valid) {
    super.drawPlace(x, y, rotation, valid);
    Drawf.dashCircle(x * tilesize + offset, y * tilesize + offset, range, color);
    indexer.eachBlock(player.team(), x * tilesize + offset, y * tilesize + offset, range,
        other -> other.block instanceof Drill || other.block instanceof BeamDrill,
        other -> Drawf.selected(other, Tmp.c1.set(color).a(Mathf.absin(4f, 1f))));
  }

  public class DropItemsBuild extends Building implements Ranged {
    float reloadtime = reload;
    float timer = 0f;

    @Override
    public float range() {
      return range;
    }

    @Override
    public void updateTile() {
      timer += Time.delta;
      if (timer >= reloadtime) {
        workeffect.at(x, y);
        getDrillItems();
        timer = 0f;
      }
    }

    public void getDrillItems() {
      /**
       * indexer.eachBlock(player.team(), x * tilesize + offset, y * tilesize +
       * offset, range,
       * other-> other.block instanceof Drill || other.block instanceof BeamDrill,
       * other -> ;
       */
    }
    /**
     * public boolean canDrop(Block block) {
     * return block instanceof Drill &&
     * }
     */
  }
}
