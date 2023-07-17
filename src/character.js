/* eslint-disable linebreak-style */
/* eslint-disable no-empty */

export default class Character {
  constructor(name, type) {
    const gameType = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10 || gameType.find((el) => el === type) === undefined) {
      throw new Error('Неверно переданы данные');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
    this.type = type;
  }
}
