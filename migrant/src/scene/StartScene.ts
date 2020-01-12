class StartScene extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this);
	}

	public initView() {
		var bg = GameUtil.createBitmapByName("migrant-start-bg_jpg");
		this.addChild(bg);
		bg.width = this.stage.stageWidth;
		bg.height = this.stage.stageHeight;

		let startBtn = new StartBtn();
		this.addChild(startBtn);
		startBtn.x = this.stage.stageWidth / 2 + startBtn.width / 2;
		startBtn.y = this.stage.stageHeight / 2 + startBtn.height / 2;

		startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			SceneController.Instance.game();
		}, this);
	}
}