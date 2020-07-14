let products;
window.onload = function () {
    products = JSON.parse(localStorage.getItem('products'));
    showProducts(products)
    showCategories();
}
let proWorks;

function showProduct(item) {
    proWorks = document.querySelector('#works');
    let col = document.createElement('div');
    let card = document.createElement('div');
    let cardBody1 = document.createElement('div');
    let cardBody2 = document.createElement('div');
    let name = document.createElement('h5');
    let author = document.createElement('p');
    let eye = document.createElement('i');
    let view = document.createElement('h6');
    let price = document.createElement('h6');
    let file = document.createElement('i');
    let stars = document.createElement('p');
    let btn = document.createElement('button');


    col.className = 'col-6 col-md-3 col-lg-2';
    card.className = 'card-item';
    cardBody1.classList.add('card-body-item');
    cardBody2.classList.add('card-body-item');
    eye.className = 'fas fa-eye';
    file.className = 'fas fa-file-contract';

    let src = '../img/icon/' + item.icon + '.png';
    btn.innerHTML = `<img src="${src}"/>`;
    name.innerText = item.name;
    author.innerText = item.author;
    file.style.marginBottom = '6px';

    btn.setAttribute('value', item.name);
    btn.addEventListener('click', getClickedCard);
    // console.log(btn.value);

    view.append(eye);
    view.append(' ' + item.view);

    if (item.currency == 'usd') {
        price.innerText = '$ ' + item.price;
    }

    for (let i = 0; i < item.rating; i++) {
        stars.innerHTML += '<i class="fas fa-star"></i>';
    }
    stars.innerHTML += ` (${item.voted})`;

    card.append(btn);
    card.append(name);
    card.append(author);

    cardBody1.append(view);
    cardBody1.append(price);
    card.append(cardBody1);

    cardBody2.append(stars);
    cardBody2.append(file);
    card.append(cardBody2);
    // card.setAttribute('name', item.name);
    // card.setAttribute('categ', item.categoryId);

    // col.append(card);
    proWorks.append(card);
}

let name;
function showProducts(products) {
    console.log(products);
    let result = products.map((elem) => {
        showProduct(elem);
    });
}
let categ;
function showCategories() {
    let categories = document.querySelector('.categories');
    categ = JSON.parse(localStorage.getItem('categories'));
    console.log(categ);

    let result = categ.map((elem) => {
        let name = document.createElement('button');
        name.innerText = elem.name;
        name.setAttribute('value', elem.name);

        name.addEventListener('click', getProductsById);
        return name;
    });

    result.forEach((elem) => {
        categories.append(elem);
    });
}

function getProductsById(event) {
    let sorted;
    console.log(products);
    proWorks.innerText = '';
    let id;
    categ.forEach((elem) => {
        if (elem.name == event.target.value) {
            id = elem.id;
            return;
        }
    });
    console.log(event.target.value);
    sorted = products.filter((item) => {
        console.log(item);
        if (item.categoryId == id) {
            console.log(item.name);
            return item;
        }
    });
    if (sorted.length == 0) {
        location.href = '../model/resultZero.html';
    }
    else {
        sorted.forEach((elem) => {
            showProduct(elem);
        });
    }
}

function getClickedCard() {
    let currentCard;
    console.log(event.currentTarget.value);

    products.forEach((elem) => {
        if (elem.name == event.currentTarget.value) {
            currentCard = elem;
            location.href = '../model/details.html';
            return;
        }
    });

    console.log(currentCard);
    localStorage.setItem('clickedProd', JSON.stringify(currentCard));
}