class Dog {
    constructor(name, age, breed, energy) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.energy = energy;
    }

    ShowDog() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nBreed: ${this.breed}\nEnergy: ${this.energy}\n`)
    }

    SetName(name) {
        if (this.name === name) {
            console.log('The same names');
        }
        else {
            this.name = name;
        }
    }

    GetAge() {
        return this.age;
    }

    DogPlay(energy, sec) {
        if (this.energy < 0 || this.energy > 100) {
            this.DogDie();
            return;
        }

        console.log('Dog is playing');
        setTimeout(() => {
            this.energy -= energy * 10;

        }, sec * 1000);
    }

    DogDie() {
        console.log(`${this.name} is dead`);
    }

    DogEat(eat) {
        if (this.energy > 100) {
            this.DogDie();
            return;
        }
        console.log("Dog is eating..");
        setTimeout(() => {
            this.energy += eat;
        }, 2000);
    }
}

class HunterDog extends Dog {
    constructor(name, age, breed, energy, power) {
        super(name, age, breed, energy);
        this.power = power;
    }
    ShowDog() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nBreed: ${this.breed}\nEnergy: ${this.energy}\nPower: ${this.power}\n`)
    }
}

// let bobik = new Dog('bobik', 3, 'taksa', 100);
// console.log(bobik);
// // for (let item in bobik) {
// //     console.log(bobik[item]);
// // }
// bobik.SetName('barsik');
// bobik.ShowDog();
// bobik.DogPlay(10, 7);
// bobik.DogEat(20);
// bobik.DogPlay(20, 3);
// setTimeout(() => {
//     bobik.DogPlay(10, 5);
// }, 2000);

let rex = new HunterDog('rex', 5, 'Ukrainian fast', 99, 50);
rex.ShowDog();
console.dir(rex);