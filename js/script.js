window.onload = () => {
    fetch('./js/categories.json').then((responce) => {
        // console.log(responce);
        return responce.json();
    }).then((data) => {
        // console.log(data);
        showCategories(data.data);
    });

    fetch('./js/products.json').then((responce) => {
        console.log(responce);
        return responce.json();
    }).then((data) => {
        console.log(data);
        showProducts(data.data);
    });
}


function showCategories(data) {
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

function showProducts(data) {
    console.log(data);
    let proWorks = document.querySelector('#works');
    let result = data.map((elem) => {
        let stars = [];
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
        let star = document.createElement('i');
        let rating = document.createElement('p');

        col.className = 'col-6 col-md-3 col-lg-2';
        card.className = 'card-item';
        cardBody1.classList.add('card-body-item');
        cardBody2.classList.add('card-body-item');
        eye.className = 'fas fa-eye';
        star.className = 'fas fa-star';
        file.className = 'fas fa-file-contract';
        // stars = [star, star, star, star, star];
        icon.src = 'img/icon/' + elem.icon + '.png';
        name.innerText = elem.name;
        author.innerText = elem.author;
        view.append(eye);
        view.append(' ' + elem.view);
        if (elem.currency == 'usd') {
            price.innerText = '$ ' + elem.price;
        }
        // rating.append(star)
        // rating.innerText += elem.voted;

// rating.append(star + ' ' + star);

        // for (let i = 0; i < elem.rating; i++) {
        //     if (elem.rating == 5) {

        //     }
        // }

        card.append(icon);
        card.append(name);
        card.append(author);

        cardBody1.append(view);
        cardBody1.append(price);
        card.append(cardBody1);

        cardBody2.append(rating);
        cardBody2.append(file);
        card.append(cardBody2);
        return card;
    });

    result.forEach((card) => {
        proWorks.append(card);
    })
}