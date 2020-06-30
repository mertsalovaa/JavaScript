let div = document.querySelector(".div-style");
console.log(div.classList);
div.classList.add("shadow");
// div.classList.remove("display");

let btn = document.querySelector("button");
btn.onclick = function () {
    // if (div.classList.contains("display")) {
    //     div.classList.remove("display");
    // }
    // else {
    //     div.classList.add("display");
    // }

    div.classList.toggle("display");
}

btn.addEventListener("click", addImg);

function addImg(event) {
    console.log(event);
    let img = div.querySelector("img");
    // img.src = "img/mountines.jfif";
    img.setAttribute("src", "img/mountines.jfif");
    img.setAttribute("class", "shadow");
    img.removeAttribute("class");
    console.log(img.getAttribute("alt"));
    
}

let img = div.querySelector("img");
img.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.classList.add("opacity");
});
img.addEventListener("mouseout", function() {
    this.classList.remove("opacity");
    this.style.transform = "scale(1)";
});