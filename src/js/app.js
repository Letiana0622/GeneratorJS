class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

export default class Team {
  
  constructor() {
    this.members = new Set();
  }

  getPerson() {
    return this.members
  }

  *[Symbol.iterator]() {
    yield this.getPerson();
  }

  add(person) {
    const isPersonInTeam = () => this.members.has(person);
    if (!isPersonInTeam()) {
      this.members.add(person);
    } else {
      throw new Error("Person is already in the team");
    }
  }

  addAll(...persons) {
    for (const person of persons) {
      this.members.add(person);
    }
  }
}


/*
const charac1 = new Character("Bowman1", "Bowman", 50, 1, 25, 25);
const charac2 = new Character("Bowman2", "Bowman", 50, 1, 25, 25);
const charac3 = new Character("Bowman3", "Bowman", 50, 1, 25, 25);
const team1 = new Team();
team1.addAll(charac1, charac2, charac3);
console.log(team1);

for (let t of team1) {
  console.log(t)
}
*/