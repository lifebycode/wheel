class DragonBonesUtil {
	public constructor() {
	}

	 /**
	 * 创建骨架工厂 创建多个骨架实例时可用
	 * ske:骨架集
	 * tex:纹理集
	 * texPng:骨架图片集 
	 * return 骨架对象
     */
	static createFactory(ske: string, tex: string, texPng: string): dragonBones.EgretFactory {
		var aniSkeData = RES.getRes(ske);
		var aniTexData = RES.getRes(tex);
		var texture = RES.getRes(texPng);

		let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		egretFactory.parseDragonBonesData(aniSkeData);
		egretFactory.parseTextureAtlasData(aniTexData, texture);
		return egretFactory;
	}

    /**
	 * 创建骨架实例
	 * ske:骨架集
	 * tex:纹理集
	 * texPng:骨架图片集 
	 * return 骨架对象
     */
	static createDisplay(ske: string, tex: string, texPng: string, armatureName: string): dragonBones.EgretArmatureDisplay {
		var aniSkeData = RES.getRes(ske);
		var aniTexData = RES.getRes(tex);
		var texture = RES.getRes(texPng);

		let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		egretFactory.parseDragonBonesData(aniSkeData);
		egretFactory.parseTextureAtlasData(aniTexData, texture);
		return egretFactory.buildArmatureDisplay(armatureName);
	}
}	