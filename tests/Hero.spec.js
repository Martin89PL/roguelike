import Hero from '../src/Hero';
import Coords from '../src/Coords';


test('Hero should be type of Hero', () => {
    expect(new Hero()).toBeInstanceOf(Hero);
});

test('Hero should have own sign', () => {
    const hero = new Hero();
    expect(hero.getSign()).toBe('@');
});

test('Hero should have initial coords', () => {
    const hero = new Hero();
    const coords = hero.getCoords();
    expect(coords).toBeInstanceOf(Coords);
    expect(coords.getX()).toBe(0);
    expect(coords.getY()).toBe(0);
});

test('Hero should move', () => {
    const hero = new Hero();
    hero.moveDown();
    hero.moveRight();
    const coords = hero.getCoords();
    expect(coords.getX()).toBe(1);
    expect(coords.getY()).toBe(1);
});
