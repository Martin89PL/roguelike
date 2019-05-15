import Coords from './Coords';

export default class Hero {

    constructor(sign = '@') {
        this.sign = sign;
        this.coords = new Coords();
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
}
