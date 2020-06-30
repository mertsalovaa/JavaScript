let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
let header = document.querySelector("header");

window.onload = LoadCurrency();


async function LoadCurrency() {
    let responce = await fetch(url);
    let data = await responce.json();
    createCurrency(data);
    SpinnerOff();
};

function createCurrency(data) {
    let currency = data.map((elem) => {
        let p = document.createElement("p");
        if (elem.ccy == "USD") {
            p.innerText = "buy: " + elem.buy + "\nsale: " + elem.sale;
        }
        header.append(p);
    });
}
function SpinnerOn() {
    setTimeout(() => {
        let spinner = document.getElementsByClassName("MySpinner");
        console.log(spinner);
        spinner[0].classList.add("spinner-border");
        document.body.style.backgroundColor = "rgba(173, 173, 173, 0.466)";
        spinner[0].classList.add("spinner");
        document.body.classList.add("body");
        spinner[0].parentElement.classList.add("my-layout-spinner");
        spinner[0].classList.add("btn-height");
    });
}

function SpinnerOff() {
    setTimeout(() => {
        let spinner = document.getElementsByClassName("MySpinner");
        spinner[0].classList.remove("spinner-border");
        document.body.style.backgroundColor = "white";
        spinner[0].classList.remove("spinner");
        document.body.classList.remove("body");
        spinner[0].parentElement.classList.remove("my-layout-spinner");
        spinner[0].classList.remove("btn-height");
    });
}
async function ShowPictures() {
    url = "https://jsonplaceholder.typicode.com/photos";
    SpinnerOn();

    let responce = await fetch(url);
    let data = await responce.json();
    LoadPictures(data);
}

let album = document.getElementsByClassName("photo");
function LoadPictures(data) {
    data.length = 35;
    let photos = data.map((elem) => {
        SpinnerOff();
        let card = document.createElement("div");
        let img = document.createElement("img");
        let h5 = document.createElement("h5");
        let card_body = document.createElement("div");
        
        card.classList.add("card");
        img.classList.add("card-img-top")
        h5.classList.add("card-title");
        card_body.classList.add("card-body");
        
        img.src = elem.url;
        h5.innerText = elem.title;
        card.append(img);
        card.append(card_body);
        card_body.append(h5);
        card_body.append(img);
        album[0].append(card);
        // album[0].append(img);

    });
}