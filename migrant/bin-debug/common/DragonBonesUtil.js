var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DragonBonesUtil = (function () {
    function DragonBonesUtil() {
    }
    /**
    * 创建骨架工厂 创建多个骨架实例时可用
    * ske:骨架集
    * tex:纹理集
    * texPng:骨架图片集
    * return 骨架对象
    */
    DragonBonesUtil.createFactory = function (ske, tex, texPng) {
        var aniSkeData = RES.getRes(ske);
        var aniTexData = RES.getRes(tex);
        var texture = RES.getRes(texPng);
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(aniSkeData);
        egretFactory.parseTextureAtlasData(aniTexData, texture);
        return egretFactory;
    };
    /**
     * 创建骨架实例
     * ske:骨架集
     * tex:纹理集
     * texPng:骨架图片集
     * return 骨架对象
     */
    DragonBonesUtil.createDisplay = function (ske, tex, texPng, armatureName) {
        var aniSkeData = RES.getRes(ske);
        var aniTexData = RES.getRes(tex);
        var texture = RES.getRes(texPng);
        var egretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(aniSkeData);
        egretFactory.parseTextureAtlasData(aniTexData, texture);
        return egretFactory.buildArmatureDisplay(armatureName);
    };
    return DragonBonesUtil;
}());
__reflect(DragonBonesUtil.prototype, "DragonBonesUtil");
