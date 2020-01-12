class BackgroundObject extends GameObject {
	private background: egret.Sprite;

	private bg1: egret.Bitmap;
	private bg2: egret.Bitmap;
	private tree: egret.Bitmap;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.iniView, this);

	}

	private iniView() {
		this.background = new egret.Sprite();
		this.background.graphics.beginFill(0xCCFFFF, 1);
		this.background.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
		this.background.graphics.endFill();
		this.addChild(this.background);

		this.tree = GameUtil.createBitmapByName("back_list_json#tree12");
		this.addChild(this.tree);
		this.tree.y = 200;

		this.bg1 = GameUtil.createBitmapByName("bg-winter_png");
		this.addChild(this.bg1);
		this.bg1.width = this.stage.stageWidth;
		this.bg1.height = this.stage.stageHeight;
		this.bg1.y = 100;
		this.bg2 = GameUtil.createBitmapByName("bg-winter_png");
		this.addChild(this.bg2);
		this.bg2.width = this.stage.stageWidth;
		this.bg2.height = this.stage.stageHeight;
		this.bg2.x = this.bg1.width;
		this.bg2.y = 100;
		
		this.tree.x = this.bg1.width;

	}

	/**
	 * 更新
	 */
	update(timeStamp: number) {
		if (this.bg1.x + this.bg1.width <= 0) {
			this.bg1.x = this.bg2.width + this.bg2.x;
		}

		if (this.bg2.x + this.bg2.width <= 0) {
			this.bg2.x = this.bg1.width + this.bg1.x;
		}


		this.bg1.x -= GameData.speed;
		this.bg2.x -= GameData.speed;
		this.tree.x -= GameData.speed;
	}
}