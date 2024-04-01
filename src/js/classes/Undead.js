import Character from './Character';

export default class Undead extends Character {
  #attack = 25;

  #defence = 25;

  constructor(name) {
    super(name, 'Undead');
    this.attack = this.#attack;
    this.defence = this.#defence;
  }
}
