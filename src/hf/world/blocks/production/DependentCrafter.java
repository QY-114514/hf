package hf.world.blocks.production;

import hf.world.meta.HFStats;
import mindustry.Vars;
import mindustry.content.Blocks;
import mindustry.game.Team;
import mindustry.gen.Building;
import mindustry.world.Block;
import mindustry.world.Tile;
import mindustry.world.blocks.production.GenericCrafter;
import mindustry.world.meta.StatValues;

public class DependentCrafter extends GenericCrafter {
  public Block[] blocks = new Block[] { Blocks.duo, Blocks.arc };

  public DependentCrafter(String name) {
    super(name);
  }

  @Override
  public void setStats() {
    super.setStats();
    for (Block b : blocks) {
      stats.add(HFStats.depend, StatValues.content(b));
    }
  }

  public class DependentCrafterBuild extends GenericCrafterBuild {
    @Override
    public void updateTile() {
      updateProximity();
      a: for (Block b : blocks) {
        b: for (Building e : this.proximity) {
          if (e.block == b) {
            continue a;
          }
        }
        return;
      }
      super.updateTile();
    }
  }
}
