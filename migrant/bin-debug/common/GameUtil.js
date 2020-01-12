var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtil = (function () {
    function GameUtil() {
    }
    GameUtil.createText = function (text) {
        var textField = new egret.TextField();
        textField.text = text;
        textField.size = 120;
        return textField;
    };
    GameUtil.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");
