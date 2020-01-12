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
var BackgroundObject = (function (_super) {
    __extends(BackgroundObject, _super);
    function BackgroundObject() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.iniView, _this);
        return _this;
    }
    BackgroundObject.prototype.iniView = function () {
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
    };
    /**
     * 更新
     */
    BackgroundObject.prototype.update = function (timeStamp) {
        if (this.bg1.x + this.bg1.width <= 0) {
            this.bg1.x = this.bg2.width + this.bg2.x;
        }
        if (this.bg2.x + this.bg2.width <= 0) {
            this.bg2.x = this.bg1.width + this.bg1.x;
        }
        this.bg1.x -= GameData.speed;
        this.bg2.x -= GameData.speed;
        this.tree.x -= GameData.speed;
    };
    return BackgroundObject;
}(GameObject));
__reflect(BackgroundObject.prototype, "BackgroundObject");
