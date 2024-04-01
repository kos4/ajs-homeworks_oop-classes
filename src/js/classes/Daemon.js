import Character from './Character';

export default class Daemon extends Character {
  #attack = 10;

  #defence = 40;

  constructor(name) {
    super(name, 'Daemon');
    this.attack = this.#attack;
    this.defence = this.#defence;
  }
}
