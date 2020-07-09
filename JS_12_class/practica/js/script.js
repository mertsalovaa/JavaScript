// let main = document.querySelector('form');
// function SignIn() {
//     let sign = document.querySelector('form');
//     sign.classList.add('display');    
//     main.classList.remove('display');    
// }
let coffee;
let name;
let sugarPcs;
let added = [];
let Price;
let totalPrice = document.querySelector('.total-price').children[1];
function MakeOrder() {
    name = SelectName();
    console.log(name);
    console.log(`Sugar: ${sugarPcs}, Milk - ${added[0]}, Lemon - ${added[1]}, Syrop - ${added[2]}, Chocolate - ${added[3]}`);
    sugarPcs = document.getElementById('number').value;
    if (sugarPcs == null) {
        sugarPcs = 0;
    }
    AddedChecked();
    if (name == 'Americano') {
        Price = 20;
        coffee = new Americano(name, Price, sugarPcs, added[0], added[2], added[3], added[1]);
        coffee.create();
        console.log(coffee);
        totalPrice.innerHTML = `<p>${coffee.TotalPrice()}</p>`;
        document.querySelector("#main-img").src = "https://typobar.ru/files/drinks/2018-01-16-amerikano.png";
        table.style.height = 'auto';
    }
    else if (name == 'Espresso') {
        Price = 15;
        coffee = new Espresso(name, Price, sugarPcs, added[0], added[2], added[3], added[1]);
        coffee.create();
        console.log(coffee);
        totalPrice.innerHTML = `<p>${coffee.TotalPrice()}</p>`;
        document.querySelector("#main-img").src = "https://lh3.googleusercontent.com/K7BCnhPMWIvhjbATk0bhiH1cOBFDBSDfftxz4N4nVoZqHkerQu5qEKz4D2nAO20DgAQ";
        table.style.height = 'auto';
    }
    else if (name == 'Cappuccino') {
        Price = 20;
        coffee = new Cappuccino(name, Price, sugarPcs, added[0], added[2], added[3], added[1]);
        coffee.create();
        console.log(coffee);
        totalPrice.innerHTML = `<p>${coffee.TotalPrice()}</p>`;
        document.querySelector("#main-img").src = "https://www.delonghi.com/Global/recipes/Coffee/frappuccino.png";
        table.style.height = 'auto';
    }
    else if (name == 'Tea') {
        Price = 12;
        coffee = new Tea(name, Price, sugarPcs, added[0], added[2], added[3], added[1]);
        coffee.create();
        console.log(coffee);
        totalPrice.innerHTML = `<p>${coffee.TotalPrice()}</p>`;
        document.querySelector("#main-img").src = "https://img2.freepng.ru/20180524/krr/kisspng-green-tea-fizzy-drinks-ginger-tea-lemon-juice-blau-gas-5b06d7ce017851.724540391527175118006.jpg";
        table.style.height = 'auto';
    }
}
function SelectName() {
    let search = document.querySelectorAll("select");
    for (let index = 0; index < search.length; index++) {
        if (search[index].selectedIndex) {
            return search[index].value;
        }
        else {
            return;
        }
    }
}
function AddedChecked() {
    let search = document.querySelectorAll("input[type='checkbox']");
    for (let index = 0; index < search.length; index++) {
        if (search[index].checked) {
            added.push(search[index].value);
        }
        else {
            added.push('-');
        }
    }
}

window.onload = () => {
    localStorage.setItem("")
};