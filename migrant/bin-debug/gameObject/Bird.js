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
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.iniView, _this);
        return _this;
    }
    Bird.prototype.iniView = function () {
        this.display = DragonBonesUtil.createDisplay("bird_ske_json", "bird_tex_json", "bird_tex_png", "fly");
        this.addChild(this.display);
        this.display.x = this.stage.stageWidth / 2;
        this.display.y = this.stage.stageHeight / 2;
        //  this.display.skewY = 180; //设置skewX 为180，图片将垂直翻转180度，若设置skewY 为180，图片将水平翻转180度
        this.display.animation.play("fly").timeScale = 0.8;
    };
    /**
     * 移动坐标
     */
    Bird.prototype.toMove = function (x, y, rotation) {
        this.display.x += x;
        this.display.y += y;
    };
    /**
     * 更新
     */
    Bird.prototype.update = function (timeStamp) {
    };
    return Bird;
}(OperaObject));
__reflect(Bird.prototype, "Bird");
