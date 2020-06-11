let person = {
    fullName: function () {
        return this.name + " " + this.surname;
    }
}

let Ira = {
    name: "Ira",
    surname: "Mertsalova",
    gender: "female",
    SetAge(age) {
        if (typeof (age) == "number") {
            this.age = age;
        }
    },
    get fullInfo() {
        return this.surname + " " + this.name[0];
    }
};

let Vlad = {
    name: "Vlad",
    surname: "Mykulin",
    gender: "male",
    SetAge(age) {
        if (typeof (age) == "number") {
            this.age = age;
        }
    }
};
console.log(Ira.fullInfo);
person.age = 15;
// person.SetAge("16");
// delete person.gender; // видалення властивості
// console.log(person);
// document.body.innerHTML = `<p>${person.name} ${person.surname} - ${person["gender"]}<p/>`;
console.log(person.fullName.call(Ira));
console.log(person.fullName.apply(Vlad));
function User(name, surname) {
    this.name = name;
    this.surname = surname;
}
console.log(Math.min.apply(null, [1, 2, 3]));

let dima = new User("Dima", "Pinkevych");
console.log(dima);

for (let item in Ira) {
    console.log(Ira[item]);
}
console.log(JSON.stringify(Vlad));

function getDate() {
    console.log(new Date());
}

getDate();

(function getDate() {
    console.log("I'm selt invoke function");
    console.log(new Date());
})(); // функція викликає сама себе


// let form = document.getElementsByClassName("form");
// console.log(form);
// form[0].style.backgroundColor = "lightgray";

let elem = document.querySelector(".form");
elem.style.backgroundColor = "orange";

elem.querySelector("button").addEventListener("click", check);

function check() {
    let name = elem.querySelector("input").value;
    console.log(name);
    let surname = elem.querySelector(":nth-child(2)").value;
    console.log(surname);
    alert(name + " " + surname);
}