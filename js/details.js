let product;
let currentProd;
window.onload = function () {
    product = JSON.parse(localStorage.getItem('clickedProd'));
    console.log(product);

    fetch('../json/details.json').then((responce) => {
        return responce.json();
    }).then((data) => {
        console.log(data);
        data.forEach((elem) => {
            if (elem.name == product.name) {
                currentProd = elem;

                document.querySelectorAll('.prod-value').forEach((elem) => {
                    elem.innerText = currentProd.name;
                })

                JSON.parse(localStorage.getItem('categories')).forEach((elem) => {
                    if (elem.id == currentProd.categoryId) {
                        document.querySelectorAll('.categ-value').forEach((item) => {
                            item.innerText = elem.name;
                        })
                    }
                });
                document.querySelector('.photo-value').src = '../img/icon/' + currentProd.icon + '.png';
                let att = document.querySelectorAll('.addit-photo');
                for (let i = 0; i < att.length; i++) {
                    att[i].src = '../img/att/' + currentProd.attachments[0] + '.png';
                    att[i++].src = '../img/att/' + currentProd.attachments[1] + '.png';
                    att[i++].src = '../img/att/' + currentProd.attachments[2] + '.png';
                }
                document.querySelector('.desc-value').innerText = currentProd.description;

                if (currentProd.currency == 'usd') {
                    document.querySelectorAll('.price-value').forEach((elem) => {
                        elem.innerText = '$ ' + currentProd.price;
                    });
                }

                document.querySelector('.view-value').innerHTML += `<i class="fas fa-eye"></i> ${currentProd.view}`
                for (let i = 0; i < currentProd.rating; i++) {
                    document.querySelector('.rating-value').innerHTML += '<i class="fas fa-star"></i>';
                }
                document.querySelector('.rating-value').innerHTML += ` (${currentProd.voted})`;

                document.querySelector('.rate-value').innerText = currentProd.rating;
                document.querySelector('.time-value').innerText = currentProd.time_deliv;
                document.querySelector('.sales-value').innerText = currentProd.sales;

                document.querySelector('.name-value').innerText = currentProd.author.name;
                document.querySelector('.country-value').innerText = currentProd.author.location;
                document.querySelector('.lang-value').innerText = currentProd.author.Lang[0];
                document.querySelector('.bio-value').innerText = currentProd.author.Bio;

            }
        });
    });

}