window.onload = function () {
    showCategories();
}


let categ;
function showCategories() {
    let categories = document.querySelector('.categories');
    categ = JSON.parse(localStorage.getItem('categories'));
    console.log(categ);

    let result = categ.map((elem) => {
        let name = document.createElement('button');
        name.innerText = elem.name;

        // name.setAttribute('value', elem.name);
        // name.setAttribute('class', 'nameCateg');
        // name.addEventListener('click', getProductsById);

        return name;
    });

    result.forEach((elem) => {
        categories.append(elem);
    });
}
