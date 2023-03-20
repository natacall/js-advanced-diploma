import Bowman from '../js/Characters/bowman';
import Character from '../js/Character';

test('new Character to throw', () => {
  expect(() => new Character(1, 'bowman')).toThrow();
  expect(() => new Bowman(1)).not.toThrow();
});