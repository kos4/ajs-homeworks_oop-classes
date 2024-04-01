import Character from './Character';

export default class Zombie extends Character {
  #attack = 40;

  #defence = 10;

  constructor(name) {
    super(name, 'Zombie');
    this.attack = this.#attack;
    this.defence = this.#defence;
  }
}
