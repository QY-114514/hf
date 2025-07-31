package hf.content;

import arc.graphics.Color;
import mindustry.content.Items;
import mindustry.type.Item;

public class HFItems {
  public static Item tumorousalloy;

  public static void load() {
    tumorousalloy = new Item("tumorousalloy") {//瘤变合金
      {
        cost = 1;
        color = HFColor.tumorousalloycolor;
      }
    };
  }
}
