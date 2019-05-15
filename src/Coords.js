export default class Coords {
    constructor(x = 0, y =0) {
        this.x = x;
        this.y = y;
    }

    setX(x) {
       this.x = x;
    }

    setY(y) {
       this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}
