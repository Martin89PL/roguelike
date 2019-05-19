import Game from '../src/Game';

describe('testing Game class', () => {
   let game = undefined;   
   
   beforeEach(() => {
     game = new Game();
   });

   test('Game constructor should fill the whole board with floor tiles', () => {
    const game = new Game();
    const board = game.board;
  
    const allowSigns = ['.', '@'];
  
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        expect(allowSigns.includes(board[y][x])).toBeTruthy();
      }
    }
  });

  test('Game.draw() should return string', () => {
    let output = game.draw();
    expect(typeof output).toBe('string');
  });

  test('Game should contain the hero', () => {
    let output = game.draw();
    expect(output).toContain('@');
  });

  test('Game board should let create hero', () => {
    expect(typeof game.setHero).toBe('function');
  });

  test('Game board should move hero down and right once', () => {
    game.move('down');
    game.move('right');
    const hero = game.getHero();
    const coords = hero.getCoords();
    expect(coords.getX()).toBe(1);
    expect(coords.getY()).toBe(1);
  });

  test('Game board should move hero down and up once', () => {
    game.move('down');
    game.move('up');
    const hero = game.getHero();
    const coords = hero.getCoords();
    expect(coords.getX()).toBe(0);
    expect(coords.getY()).toBe(0);
  });

});
