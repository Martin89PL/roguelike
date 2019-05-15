import Hero from "./Hero";
import { tsMethodSignature } from "@babel/types";

const floor = '.';

const BOARD_WIDTH = 28;
const BOARD_HEIGHT = 14;

export default class Game {

  constructor() {
    this.board = [];
    this.createBoard(); 
    this.setHero(new Hero());
  }

  createBoard() {
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      const row = new Array(BOARD_WIDTH);
      for (let x = 0; x < BOARD_WIDTH; x++) {
        row[x] = floor;
      }
      this.board[y] = row;
    }
  }

  move(direction) {
    let heroCoords = this.hero.getCoords();
    this.board[heroCoords.getY()][heroCoords.getX()] = '.';
  
    switch(direction) {
      case 'down':
        this.hero.moveDown();
        break;
      case 'right':
        this.hero.moveRight();
        break;
    }
    heroCoords = this.hero.getCoords();
    this.board[heroCoords.getY()][heroCoords.getX()] = this.hero.getSign();
  }

  setHero(hero) {
    this.hero = hero;
    const heroCoords = this.hero.getCoords();
    this.board[heroCoords.getY()][heroCoords.getX()] = this.hero.getSign();
  }

  getHero() {
    return this.hero;
  }

  draw() {
    return this.board
      .map((row) => row.join(''))  // transform each row to one line
      .join('\n')  // join lines with new lines
    ;
  }
}

