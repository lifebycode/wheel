class GameUtil {
  


    static createText(text: string): egret.TextField {
        let textField = new egret.TextField();
        textField.text = text;
        textField.size = 120;

        return textField;
    }

    static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}