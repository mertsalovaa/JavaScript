let openedList = document.querySelectorAll(".main-button");
let arrow = document.querySelectorAll('#arrow');
openedList.forEach((x) => x.onclick = function () {
    this.querySelector(".added-ul").classList.toggle("display");
    if (this.querySelector('.added-ul').classList.contains('display')) {
        arrow.forEach(elem => {
            elem.classList.remove("fa-arrow-up");
            elem.classList.add("fa-arrow-down");
        });
    }
    else {
        arrow.forEach(elem => {
            elem.classList.add("fa-arrow-up");
            elem.classList.remove("fa-arrow-down");
        });
    }
});

function SomeInfoLang() {
    document.querySelector('.div1').classList.toggle('display');
}