Events.on(EventType.ClientLoadEvent, cons(e => {
       var dialogo = new BaseDialog("EndlandDust-Desktop");
	dialogo.buttons.button("@close", run(() => {
		dialogo.hide()
	})).size(210, 64);

    dialogo.cont.pane(table => {
        
        table.add(Core.bundle.get("EndlandDust-Desktop description")).left().growX().wrap().width(600).maxWidth(600).pad(4).labelAlign(Align.left).row();
        
		table.image(Core.atlas.find("erekir")).left().size(400, 300).pad(3).row();

		table.add("This is a mod that expands upon the original version").left().growX().wrap().pad(4).labelAlign(Align.left).row();
		 let label = new FLabel("The intensity of this mod will be very high");
		 table.add(label).left().row();
		 table.add("QQ group chat number: 暂定"
).left().growX().wrap().width(580).maxWidth(580).pad(4).labelAlign(Align.left).row();

	}).grow().center().maxWidth(600)
	dialogo.show();
}))


require("lib");
require("library-units");
require("library-blocks");
require("items");
require("Liquids");
require("edjson");
require("edbt");
require("blocks/turrets");
require("blocks/dill");
require("blocks/distribution");
require("units/flying");
require("blocks/effect");
require("blocks/power");
require("blocks/wall");
require("blocks/crafting");
require("Status");
require("units/edabilities");
require("units/legs");
require("units/tank");
require("StaticWall");
require("units/T6");
require("supplementary");
require("units/BOSS");
require("units/测试");
require("blocks/liquid");
require("demongod");
require("edtree");