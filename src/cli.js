import readline from 'readline';

export default class CLI {

  constructor(game) {
    this.game = game;
  }

  parseLine(line) {
    const trimedLine = line.trim();
    switch (trimedLine) {
      case 'down':
        this.game.move('down');
        break;
      case 'right':
        this.game.move('right');
        break;
      default:
        throw new Error('You shall not pass!');
    }
    this.log(this.game.draw());
    this.log(`Your input was '${trimedLine}'`);
  }

  // Below methods are neccesary to run prompt in console
  // plz don't edit because firemark will be angry
  run() {
    this.initRL();
    this.log(this.game.draw());
    this.rl.prompt();
  }

  initRL() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    });

    this.rl
      .on('line', this.onLine.bind(this))
      .on('close', this.onClose.bind(this))
    ;
  }

  onLine(line) {
    this.parseLine(line);
    this.rl.prompt();
  }
  
  onClose() {
    this.log('Have a great day!');
    process.exit(0);
  }

  log(s) {
    console.log(s);
  }

}


