import Character from './Character';

export default class Swordsman extends Character {
  #attack = 40;

  #defence = 10;

  constructor(name) {
    super(name, 'Swordsman');
    this.attack = this.#attack;
    this.defence = this.#defence;
  }
}
