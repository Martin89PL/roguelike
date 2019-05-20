import Hero from "./Hero";
import Coords from "./Coords";
import { Moves } from "./Moves";

const floor = '.';

const BOARD_WIDTH = 28;
const BOARD_HEIGHT = 14;

export default class Game {

  constructor() {
    this.board = [];
    this.createBoard(); 
    this.setHero(new Hero('@', new Coords()));
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

    if(!this.canMove(direction)) {
      return;
    }
    
    this.setBoardSetHeroPosition('.');
  
    switch(direction.toUpperCase()) {
      case 'UP':
        this.hero.moveUp();
        break;
      case 'DOWN':
        this.hero.moveDown();
        break;
      case 'RIGHT':
        this.hero.moveRight();
        break;
      case 'LEFT':
        this.hero.moveLeft();
        break;  
    }
    this.setBoardSetHeroPosition(this.hero.getSign());
  }

  setHero(hero) {
    this.hero = hero;
    this.setBoardSetHeroPosition(this.hero.getSign());
  }

  getHero() {
    return this.hero;
  }

  setBoardSetHeroPosition(sign) {
    this.board[this.hero.getCoords().getY()][this.hero.getCoords().getX()] = sign;
  }

  canMove(direction) {
    let position = -1;
    switch(direction) {
      case 'LEFT':
          position = this.hero.getCoords().getX() - 1;
          break;
    }
    


    return (position >= 0) ? true : false;
  }

  draw() {
    return this.board
      .map((row) => row.join(''))  // transform each row to one line
      .join('\n')  // join lines with new lines
    ;
  }
}

