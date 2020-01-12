var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var GameData = (function () {
    function GameData() {
    }
    GameData.normalSpeed = 2;
    GameData.upSpeed = 10;
    GameData.speed = 2;
    /**
     * 方向转盘操作大小
     */
    GameData.OPERA_SIZE = 80;
    /**
     * 方向转盘操作范围
     */
    GameData.OPERA_AREA = 250;
    /**
       * 方向转盘x坐标
       */
    GameData.OPERA_X = GameData.OPERA_AREA - 50;
    /**
       * 方向转盘y坐标
       */
    GameData.OPERA_Y = 640 - GameData.OPERA_AREA + 50;
    /**
     * 鸟的速度
     */
    GameData.BIRD_SPEED = 3;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
