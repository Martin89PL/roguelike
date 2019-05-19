import Hero from '../src/Hero';
import Coords from '../src/Coords';

describe('testing hero class', () => {

    let hero = undefined;
    
    beforeAll(() => {
        hero = new Hero('@', new Coords(0, 0));
    });

    test('Hero should be type of Hero', () => {
        expect(hero).toBeInstanceOf(Hero);
    });

    test('Hero should have own sign', () => {
        expect(hero.getSign()).toBe('@');
    });

    test('Hero should have initial coords', () => {
        let coords = hero.getCoords();
        expect(coords).toBeInstanceOf(Coords);
        expect(coords.getX()).toBe(0);
        expect(coords.getY()).toBe(0);
    });
    
    test('Hero should move down and right once', () => {
        hero.moveDown();
        hero.moveRight();
        let coords = hero.getCoords();
        expect(coords.getX()).toBe(1);
        expect(coords.getY()).toBe(1);
    });

    test('Hero should move down and move up once', () => {
        hero.moveDown();
        hero.moveUp();
        let coords = hero.getCoords();
        expect(coords.getX()).toBe(1);
        expect(coords.getY()).toBe(1);
    });

    test('Hero should move right and move left once', () => {
        hero.moveRight();
        hero.moveLeft();
        let coords = hero.getCoords();
        expect(coords.getX()).toBe(1);
        expect(coords.getY()).toBe(1);
    })
});
