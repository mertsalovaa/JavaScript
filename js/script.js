let menu = document.querySelector('#my-menu');
let mouseEvent = document.querySelector('#mouseEvent');
window.onload = () => {
    fetch('../json/categories.json').then((responce) => {
        return responce.json();
    }).then((data) => {
        showCategories(data.data);
    });

    fetch('../json/products.json').then((responce) => {
        return responce.json();
    }).then((data) => {
        showProducts(data.data);
    });

}

mouseEvent.addEventListener('mouseover', function () {
    myMenu.innerText = ' ';
    menu.classList.remove('display');
    fetch('../json/categories.json').then((responce) => {
        return responce.json();
    }).then((data) => {
        myMenu.innerText = ' ';
        showCategoriesMenu(data.data);
    });
});
mouseEvent.addEventListener('mouseout', function () {
    myMenu.innerText = ' ';
    menu.classList.add('display');
});

function showCategories(data) {
    localStorage.setItem('categories', JSON.stringify(data));
    console.log(localStorage.getItem('products').length);
    let categories = document.querySelector('.categories');
    let result = data.map((elem) => {
        let item = document.createElement('div');
        item.innerText = elem.name;
        return item;
    });
    result.forEach((elem) => {
        categories.append(elem);
    });
}

let myMenu = document.querySelector('.my-menu-item');
function showCategoriesMenu(data) {
    data.forEach((elem) => {
        let menuItem = document.createElement('a');
        menuItem.classList.add('dropdown-item');
        menuItem.href = '#';
        menuItem.innerText = elem.name;
        myMenu.append(menuItem);
    });
}

function showProducts(data) {
    localStorage.setItem('products', JSON.stringify(data));
    console.log(localStorage.getItem('products').length);
    data.length = 12;
    let proWorks = document.querySelector('#works');
    let result = data.map((elem) => {
        let col = document.createElement('div');
        let card = document.createElement('div');
        let cardBody1 = document.createElement('div');
        let cardBody2 = document.createElement('div');
        let icon = document.createElement('img');
        let name = document.createElement('h5');
        let author = document.createElement('p');
        let eye = document.createElement('i');
        let view = document.createElement('h6');
        let price = document.createElement('h6');
        let file = document.createElement('i');
        let stars = document.createElement('p');

        col.className = 'col-6 col-md-3 col-lg-2';
        card.className = 'card-item';
        cardBody1.classList.add('card-body-item');
        cardBody2.classList.add('card-body-item');
        eye.className = 'fas fa-eye';
        file.className = 'fas fa-file-contract';

        icon.src = '../img/icon/' + elem.icon + '.png';
        name.innerText = elem.name;
        author.innerText = elem.author;
        file.style.marginBottom = '6px';

        view.append(eye);
        view.append(' ' + elem.view);

        if (elem.currency == 'usd') {
            price.innerText = '$ ' + elem.price;
        }

        for (let i = 0; i < elem.rating; i++) {
            stars.innerHTML += '<i class="fas fa-star"></i>';
        }
        stars.innerHTML += ` (${elem.voted})`;

        card.append(icon);
        card.append(name);
        card.append(author);

        cardBody1.append(view);
        cardBody1.append(price);
        card.append(cardBody1);

        cardBody2.append(stars);
        cardBody2.append(file);
        card.append(cardBody2);
        return card;
    });

    result.forEach((card) => {
        proWorks.append(card);
    })
}

function ViewAllProWorks() {
    location.href = '../model/allProWorks.html';
}