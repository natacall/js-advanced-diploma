import Character from '../Character';

export default class Undead extends Character {
  constructor(level) {
    super(level);
    this.type = 'undead';
    this.attack = 40;
    this.defence = 10;
    this.player = 'computer';
    this.stepsRadius = 4;
    this.attackRadius = 1;
  }
}