package hf;

import arc.Events;
import arc.util.Log;
import hf.ui.dialogs.SCResearchDialog;
import hf.content.*;
import mindustry.Vars;
import mindustry.game.EventType.Trigger;
import mindustry.mod.Mod;

public class HFMain extends Mod {
  @Override
  public void loadContent() {
    HFItems.load();
    hfblocks.load();
  }

  @Override
  public void init() {
    Log.info("loaded hf init");
    Events.on(mindustry.game.EventType.ClientLoadEvent.class, (e) -> {
      SCResearchDialog res = new SCResearchDialog();
      Events.run(Trigger.update, () -> {
        if (Vars.ui.research.isShown()) {
          Vars.ui.research.hide();
          if (!res.isShown()) {
            res.show();
          }
        }
      });
    });
  }
}
