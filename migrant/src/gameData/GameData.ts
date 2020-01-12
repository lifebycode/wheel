// TypeScript file
class GameData {
    static normalSpeed: number = 2;

    static upSpeed: number = 10;

    static speed: number = 2;
    /**
     * 方向转盘操作大小
     */
    static OPERA_SIZE = 80;
    /**
     * 方向转盘操作范围
     */
    static OPERA_AREA = 250;
    /**
       * 方向转盘x坐标
       */
    static OPERA_X = GameData.OPERA_AREA - 50;
    /**
       * 方向转盘y坐标
       */
    static OPERA_Y = 640 - GameData.OPERA_AREA + 50;

    /**
     * 鸟的速度
     */
    static BIRD_SPEED = 3;

}