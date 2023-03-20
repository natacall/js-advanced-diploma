/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */

export default class Character {
  constructor(level, attack, defence, player, stepsRadius, attackRadius) {
    this.level = level; // Уровень игрока
    this.attack = attack; // Сила атаки
    this.defence = defence; // Защита
    this.health = 50; // Здоровье
    this.player = player; // Тип игрока 'user' или 'computer'
    this.stepsRadius = stepsRadius; // Доступный радиус хода в клетках
    this.attackRadius = attackRadius; // Доступный радиус атаки в клетках

    // TODO: throw error if user use "new Character()"
    if (new.target.name === 'Character') {
      throw new Error('Запрещено создавать объекты базового класса Character!');
    }
  }
}