import Character from '../Character';

export default class Daemon extends Character {
  constructor(level) {
    super(level);
    this.type = 'daemon';
    this.attack = 10;
    this.defence = 40;
    this.player = 'computer';
    this.stepsRadius = 1;
    this.attackRadius = 4;
  }
}