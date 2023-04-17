class Ninja {
    constructor(name , health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(`${this.name}`)
    }

    showStats() {
        console.log(`${this.name} ${this.strength} ${this.speed} ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Tony", 100);

console.log(ninja1.showStats())
console.log(ninja1.drinkSake())
console.log(ninja1.showStats())
