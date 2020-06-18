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
        recipe[0].children[0].src = "../img/dessert.jpg";
    }
    else if (newRecipe.type == "FirstDish") {
        recipe[0].children[0].src = "../img/first-dish.jpg";
    }
    else if (newRecipe.type == "SecondDish") {
        recipe[0].children[0].src = "../img/second-dish.jpg";
    }
    else if (newRecipe.type == "Salat") {
        recipe[0].children[0].src = "../img/salad.jpg";
    }

    recipe[0].children[2].innerText = newRecipe.name;
    recipe[0].children[3].innerText = newRecipe.decription;
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