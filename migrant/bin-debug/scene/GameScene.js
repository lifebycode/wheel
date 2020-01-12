var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.bird = new Bird();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        _this.touchEnabled = true;
        return _this;
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.upSpeed, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_END, this.normalSpeed, this);
    }
    GameScene.prototype.initView = function () {
        this.backgroud = new BackgroundObject();
        this.addChild(this.backgroud);
        this.operation = new DirectionOperate();
        this.addChild(this.operation);
        this.addChild(this.bird);
        this.operation.addOperaObject(this.bird);
        this.start();
    };
    GameScene.prototype.upSpeed = function () {
        GameData.speed = GameData.upSpeed;
    };
    GameScene.prototype.normalSpeed = function () {
        GameData.speed = GameData.normalSpeed;
    };
    GameScene.prototype.start = function () {
        egret.ticker.$startTick(this.update, this);
    };
    GameScene.prototype.stop = function () {
        egret.ticker.$stopTick(this.update, this);
    };
    GameScene.prototype.update = function (timeStamp) {
        this.backgroud.update(timeStamp);
        return true;
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
