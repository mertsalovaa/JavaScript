var recipe ;
function ChangeAll() {
  recipe = document.getElementsByClassName("listRecipe");
    let elemForm = document.getElementById("form");
    elemForm.style.display = "none";
    CreateRecipe();
    recipe[0].style.visibility = "visible";
}
function CreateRecipe() {
    
    let type = document.getElementById("select");
    let newRecipe = {
        type: SearchType(),
        name: document.getElementById("nameRecipe").value,
        ingradients: document.getElementById("ingradient").value,
        time: document.getElementById("time").value,
        complexity: SearchComplexity(),
        decription: document.querySelector("textarea").value
    };
    if (newRecipe.type == "Dessert") {
        recipe[0].children[0].src = "https://media-cdn.tripadvisor.com/media/photo-s/08/9e/d5/98/perkins-restaurant-bakery.jpg";
    }
    else if (newRecipe.type == "FirstDish") {
        recipe[0].children[0].src = "https://img3.goodfon.ru/wallpaper/big/1/2c/pervoe-blyudo-sup-pyure-gribnoy.jpg";
    }
    else if (newRecipe.type == "SecondDish") {
        recipe[0].children[0].src = "https://lh3.googleusercontent.com/proxy/zcwTAqY5laycMZWjfPMu7vtEa3R7abegolsMtzc5JdoXpAWO_SG68iHPEJtv3dXMyuAbHouXEpMlJyGrzvnSW8U6CghhRi32tDr9O0DtjQGUR_j3HRabB-rVpycs1smN8WDM4HNGsNx6dOimNmtg2Vfnkl1g";
    }
    else if (newRecipe.type == "Salat") {
        recipe[0].children[0].src = "https://2.bp.blogspot.com/-kae1zuGM31I/XJ9itQPr6cI/AAAAAAAACH0/Ylj3atNBx4APqAz38Dz7lrPKGi_kXix1gCEwYBhgL/s1600/Screenshot_106.png";
    }

    recipe[0].children[2].innerText = newRecipe.name;
    document.getElementById("cookingTime").innerHTML += " " + newRecipe.time;
    document.getElementById("difficulty").innerHTML += " " + newRecipe.complexity;
    recipe[0].children[3].innerText = newRecipe.decription;
    recipe[0].children[4].innerText = "Ingradients:  " + newRecipe.ingradients;
}



function SearchComplexity() {
    let search = document.querySelectorAll("input[type='radio'");
    for (let index = 0; index < search.length; index++) {
        if (search[index].checked) {
            return search[index].value;
        }
        else {
            return;
        }
    }
}
function SearchType() {
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