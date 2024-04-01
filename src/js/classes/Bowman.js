import Character from './Character';

export default class Bowman extends Character {
  #attack = 25;

  #defence = 25;

  constructor(name) {
    super(name, 'Bowman');
    this.attack = this.#attack;
    this.defence = this.#defence;
  }
}
