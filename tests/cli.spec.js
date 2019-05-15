import CLI from '../src/cli.js'

// expect https://jestjs.io/docs/en/expect
// mock https://jestjs.io/docs/en/mock-functions#using-a-mock-function
// mock+expect https://jestjs.io/docs/en/expect#tohavebeencalled

test('CLI constructor should save game object', () => {
  const game = jest.fn();
  const cli = new CLI(game);
  expect(cli.game).toBe(game);
});


test('CLI should throw Error when command not found', () => {
  const game = jest.fn();
  const cli = new CLI(game);

  const t = () => {
    cli.parseLine('foobar');
  }

  expect(t).toThrow(Error);
});

test('CLI should react on down command', () => {
  const game = jest.fn();
  game.move = jest.fn();
  game.draw = jest.fn();
  const cli = new CLI(game);
  cli.parseLine('down');
  expect(cli.game.move).toBeCalledTimes(1);
});

test('Foo bar', () => {
  const game = jest.fn();
  const cli = new CLI(game);
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(()=>{});
  cli.onClose();
  expect()
});
