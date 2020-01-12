class GameScene extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.bird = new Bird();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this);
		this.touchEnabled = true;
		// this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.upSpeed, this);
		// this.addEventListener(egret.TouchEvent.TOUCH_END, this.normalSpeed, this);

	}
    private backgroud:BackgroundObject;

	private bird: Bird;
	private operation: DirectionOperate;
	public initView() {
        this.backgroud=new BackgroundObject();
        this.addChild(this.backgroud);


		this.operation = new DirectionOperate();
		this.addChild(this.operation);

		this.addChild(this.bird);
		this.operation.addOperaObject(this.bird);

		this.start();

	}

	public upSpeed() {
		GameData.speed = GameData.upSpeed;
	}


	public normalSpeed() {
		GameData.speed = GameData.normalSpeed;
	}

	public start() {
		egret.ticker.$startTick(this.update, this);
	}

	public stop() {
		egret.ticker.$stopTick(this.update, this);
	}


	public update(timeStamp: number): boolean {
		this.backgroud.update(timeStamp);
		return true;
	}
}