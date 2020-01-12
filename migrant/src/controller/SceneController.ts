class SceneController {
	private container: egret.DisplayObjectContainer;
	private startScene: StartScene;
	private gameScene: GameScene;
	public constructor() {
		this.startScene = new StartScene();
		this.gameScene = new GameScene();
	}

	private static _instance: SceneController;
	public static get Instance() {
		return this._instance || (this._instance = new this());
	}

	public setContainer(s: egret.DisplayObjectContainer) {
		this.container = s;
	}

	public start() {
		this.container.addChild(this.startScene);
	}

	public game() {
		if (this.startScene.parent) {
			this.container.removeChild(this.startScene);
		}

		this.container.addChild(this.gameScene);
	}
}
