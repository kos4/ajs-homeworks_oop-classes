import Character from './Character';

export default class Magician extends Character {
  #attack = 10;

  #defence = 40;

  constructor(name) {
    super(name, 'Magician');
    this.attack = this.#attack;
    this.defence = this.#defence;
  }
}
