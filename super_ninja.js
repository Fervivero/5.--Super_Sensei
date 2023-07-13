class Sensei {
    constructor(name) {
        this.name = "Maestro Splinter";
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`Mi salud aumentó a ${this.health}`);
    }
}

const superSensei = new Sensei("Mr. Miyagi");
ninja.speakWisdom();
ninja.showStats();
ninja.drinkSake();
