let table = document.querySelector(".table");
class Drink {
    constructor(name, price, sugar, milk, syrop, chocolate, lemon) {
        this.started = parseInt(price);
        this.name = name;
        this.price = price;
        this.sugar = sugar;
        this.milk = milk;
        this.syrop = syrop;
        this.chocolate = chocolate;
        this.lemon = lemon;
        console.log(typeof this.price);
        this.price = this.started
    }
    create() {
        this.TotalPrice();
        this.showInfo();
    }
    TotalPrice() {
        this.price = this.started;
        if (this.BoolSugar()) {
            this.price += parseInt(this.sugar);
            console.log("this.price = " + this.price);
        }
        if (this.BoolMilk()) {
            this.price += 3;
            console.log("this.price = " + this.price);
        }
        if (this.BoolLemon()) {
            this.price += 2;
            console.log("this.price = " + this.price);
        }
        if (this.BoolSyrop()) {
            this.price += 3;
            console.log("this.price = " + this.price);
        }
        if (this.BoolChocolate()) {
            this.price += 4;
            console.log("this.price = " + this.price);
        }
        console.log("------------ this.price = " + this.price);
        return this.price;
    }
    BoolSugar() {
        if (this.sugar != null || this.sugar != 0 || this.sugar != 'undefined') {
            return true;
        }
        else {
            return false;
        }
    }
    BoolMilk() {
        if (this.milk != '-' && this.milk == 'Milk') {
            return true;
        }
        else {
            return false;
        }
    }
    BoolSyrop() {
        if (this.syrop != '-' && this.syrop == 'Syrop') {
            return true;
        }
        else {
            return false;
        }
    }
    BoolChocolate() {
        if (this.chocolate != '-' && this.chocolate == 'Chocolate') {
            return true;
        }
        else {
            return false;
        }
    }
    BoolLemon() {
        if (this.lemon != '-' && this.lemon == 'Lemon') {
            return true;
        }
        else {
            return false;
        }
    }
    showInfo() {
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        h3.innerText = this.name;
        h5.innerText = `Sugar: ${this.sugar} pcs,\nMilk: ${this.milk},\n Syrop: ${this.syrop},\nChocolate: ${this.chocolate},\nLemon: ${this.lemon}`;
        table.innerHTML += `<p>Your coffee ${this.name} ready! \nYou can take your drink!\n Thank for your ordering😋</p>`
        table.append(h3);
        table.append(h5);
    }
}

class Americano extends Drink {
    constructor(name, price = 20, sugar, milk, syrop, chocolate, lemon) {
        super(name, price, sugar, milk, syrop, chocolate, lemon);
    }
}
class Espresso extends Drink {
    constructor(name, price = 15, sugar, milk, syrop, chocolate, lemon) {
        super(name, price, sugar, milk, syrop, chocolate, lemon);
    }
}
class Cappuccino extends Drink {
    constructor(name, price = 20, sugar, milk, syrop, chocolate, lemon) {
        super(name, price, sugar, milk, syrop, chocolate, lemon);
    }
}
class Tea extends Drink {
    constructor(name, price = 12, sugar, milk, syrop, chocolate, lemon) {
        super(name, price, sugar, milk, syrop, chocolate, lemon);
    }
}




class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    SignInSystem(login, password) {
        if(this.login == login && this.password == password) {
            console.log(`This user "${login}" is in system`);
            return true;
        }
        else {
            return false;
        }
    }
}