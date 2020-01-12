class DirectionOperate extends egret.DisplayObjectContainer {
	public area: egret.Sprite;
	private orientation_png: egret.Bitmap;
	private orientationPath_png: egret.Bitmap;
	private operaObjects: OperaObject[];
	public constructor() {
		super();
		this.area = new egret.Sprite();

		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}



	private onAddToStage(event: egret.Event) {

		this.operaObjects = [];
		this.area.graphics.beginFill(0x00ff00, 0);
		this.area.graphics.drawCircle(0, 0, GameData.OPERA_AREA);
		this.area.graphics.endFill();
		this.area.touchEnabled = true;
		this.addChild(this.area);

		this.area.x = GameData.OPERA_X;
		this.area.y = GameData.OPERA_Y;
		this.area.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
		this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
		this.area.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
		this.area.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);



		this.orientation_png = GameUtil.createBitmapByName("operation_png");
		this.area.addChild(this.orientation_png);
		this.orientation_png.x = -GameData.OPERA_SIZE;
		this.orientation_png.y = -GameData.OPERA_SIZE;

		this.orientationPath_png = GameUtil.createBitmapByName("operation-path_png");
		this.area.addChild(this.orientationPath_png);
		this.orientationPath_png.alpha = 0;



	}
	private _start = new egret.Point(GameData.OPERA_X, GameData.OPERA_Y);
	private onTouchBegin(event: egret.TouchEvent) {
		this.orientationPath_png.alpha = 1;
		this.operationMove(event);
		this.isSpeedUp = true;
		egret.ticker.$startTick(this.onMove, this);

	}

	private onTouch(event: egret.TouchEvent) {
		this.operationMove(event);
	}

	private onTouchEnd(event: egret.TouchEvent) {
		this.orientationPath_png.alpha = 0;
		this.quicken =  GameData.BIRD_SPEED;
		egret.ticker.$stopTick(this.onMove, this);
		this.inFront();
	}

	private operationMove(event: egret.TouchEvent) {
		var _end = new egret.Point(event.$stageX, event.$stageY);
		var rotation = this.getAngelByUI(this._start, _end) ;
		console.log(rotation);
		this.rotationMove = rotation;
		this.orientationPath_png.rotation = rotation*180/ Math.PI-45;
	}

	public addOperaObject(operaObject: OperaObject) {
		this.operaObjects.push(operaObject);
	}

	/**
	 * 获取DirectX坐标系弧度
	 */
	private getAngelByUI(_start: egret.Point, _end: egret.Point) {
		var point = new egret.Point(_end.x - _start.x, _end.y - _start.y);
		if (point.x == 0 && point.y > 0) {
			return Math.PI * 0.5 ;     
		} else if (point.x == 0 && point.y < 0) {
			return Math.PI * 1.5 ;
		} else if (point.x > 0 && point.y >= 0) {
			return Math.atan(point.y / point.x) ;
		} else if (point.x < 0 && point.y >= 0) {
			return (Math.atan(Math.abs(point.x / point.y)) + Math.PI * 0.5) ;
		} else if (point.x > 0 && point.y < 0) {
			return Math.atan(point.y / point.x) ; 
		} else if (point.x < 0 && point.y < 0) {
			return (Math.atan(Math.abs(point.y / point.x)) + Math.PI) ;
		}
		return 0;
	}

	private rotationMove: number;
	private quicken: number = GameData.BIRD_SPEED;
	private isSpeedUp: boolean = true;
    /**
	 * 极坐标转换直角坐标
	 * 用于轮盘移动游戏对象
	 */
	private onMove(timeStamp: number): boolean {
		if (this.quicken >= GameData.BIRD_SPEED*5) {
			this.isSpeedUp = false;
		}

		if (this.isSpeedUp) {
			this.quicken = this.quicken +  GameData.BIRD_SPEED;
		} 
		let x = this.quicken * Math.cos(this.rotationMove);
		let y = this.quicken * Math.sin(this.rotationMove);
		for (let obj of this.operaObjects) {
			obj.toMove(x, y, this.rotationMove);
		}
		return true;
	}

	private inFront() {
		for (let obj of this.operaObjects) {
			obj.toMove(0, 0, 0);
		}
	}
}