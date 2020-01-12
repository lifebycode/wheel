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
var DirectionOperate = (function (_super) {
    __extends(DirectionOperate, _super);
    function DirectionOperate() {
        var _this = _super.call(this) || this;
        _this._start = new egret.Point(GameData.OPERA_X, GameData.OPERA_Y);
        _this.quicken = GameData.BIRD_SPEED;
        _this.isSpeedUp = true;
        _this.area = new egret.Sprite();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    DirectionOperate.prototype.onAddToStage = function (event) {
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
    };
    DirectionOperate.prototype.onTouchBegin = function (event) {
        this.orientationPath_png.alpha = 1;
        this.operationMove(event);
        this.isSpeedUp = true;
        egret.ticker.$startTick(this.onMove, this);
    };
    DirectionOperate.prototype.onTouch = function (event) {
        this.operationMove(event);
    };
    DirectionOperate.prototype.onTouchEnd = function (event) {
        this.orientationPath_png.alpha = 0;
        this.quicken = GameData.BIRD_SPEED;
        egret.ticker.$stopTick(this.onMove, this);
        this.inFront();
    };
    DirectionOperate.prototype.operationMove = function (event) {
        var _end = new egret.Point(event.$stageX, event.$stageY);
        var rotation = this.getAngelByUI(this._start, _end);
        console.log(rotation);
        this.rotationMove = rotation;
        this.orientationPath_png.rotation = rotation * 180 / Math.PI - 45;
    };
    DirectionOperate.prototype.addOperaObject = function (operaObject) {
        this.operaObjects.push(operaObject);
    };
    /**
     * 获取DirectX坐标系弧度
     */
    DirectionOperate.prototype.getAngelByUI = function (_start, _end) {
        var point = new egret.Point(_end.x - _start.x, _end.y - _start.y);
        if (point.x == 0 && point.y > 0) {
            return Math.PI * 0.5;
        }
        else if (point.x == 0 && point.y < 0) {
            return Math.PI * 1.5;
        }
        else if (point.x > 0 && point.y >= 0) {
            return Math.atan(point.y / point.x);
        }
        else if (point.x < 0 && point.y >= 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI * 0.5);
        }
        else if (point.x > 0 && point.y < 0) {
            return Math.atan(point.y / point.x);
        }
        else if (point.x < 0 && point.y < 0) {
            return (Math.atan(Math.abs(point.y / point.x)) + Math.PI);
        }
        return 0;
    };
    /**
     * 极坐标转换直角坐标
     * 用于轮盘移动游戏对象
     */
    DirectionOperate.prototype.onMove = function (timeStamp) {
        if (this.quicken >= GameData.BIRD_SPEED * 5) {
            this.isSpeedUp = false;
        }
        if (this.isSpeedUp) {
            this.quicken = this.quicken + GameData.BIRD_SPEED;
        }
        var x = this.quicken * Math.cos(this.rotationMove);
        var y = this.quicken * Math.sin(this.rotationMove);
        for (var _i = 0, _a = this.operaObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.toMove(x, y, this.rotationMove);
        }
        return true;
    };
    DirectionOperate.prototype.inFront = function () {
        for (var _i = 0, _a = this.operaObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.toMove(0, 0, 0);
        }
    };
    return DirectionOperate;
}(egret.DisplayObjectContainer));
__reflect(DirectionOperate.prototype, "DirectionOperate");
