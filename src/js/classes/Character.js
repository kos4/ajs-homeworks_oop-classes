export default class Character {
  #types = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  #level = 1;

  #health = 100;

  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть от 2 до 10 символов.');
    }

    if (this.#types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Тип персонажа может быть только: ${this.#types.split(',')}`);
    }

    this.health = this.#health;
    this.level = this.#level;
  }
}
