class Ninja {
    constructor(name , health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(`${this.name}`);
    }

    showStats() {
        console.log(`${this.name} ${this.strength} ${this.speed} ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10) {
        super(name, health, speed, strength);
        this.wisdom = 10;
        return this;
    }

    speakWisdom() {
        this.drinkSake()
        console.log("A Place Where Someone Still Thinks About You Is A Place You Can Call Home.");
        return this;
    }
}


const sensei1 = new Sensei("Master Jiraiya");
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();