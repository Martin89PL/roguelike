import Coords from './Coords';

export default class Hero {

    constructor(sign = '@', coords = new Coords(0, 0)) {
        this.sign = sign;
        this.coords = coords;
    }

    getSign() {
        return this.sign;
    }

    getCoords() {
        return this.coords;
    }

    moveDown() {
        this.coords.setY(this.coords.getY() + 1);
    }

    moveRight() {
        this.coords.setX(this.coords.getX() + 1);
    }

    moveUp() {
        this.coords.setY(this.coords.getY() - 1);
    }

    moveLeft() {
        this.coords.setX(this.coords.getX() - 1);
    }
}
