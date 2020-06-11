let str = "Hello, to \"all\", bye, \\today";
console.log(str);
console.log(str.length);

document.body.style.backgroundColor = "lightyellow";

// document.body.innerText = "Hello";  // втавляє текст як текст
// document.body.innerHTML = "<h1>Hello my world!</h1>";
document.body.innerHTML += "<h1 class='test'>" + str + "</h1>";

let str2 = new String("hello everybody"); // typeof object
console.log(typeof str2);
console.log(str.replace("o", "O"));

console.log(str.concat(" ", str2));
console.log(str.toUpperCase());
console.log(str.indexOf("t"));
console.log(str.lastIndexOf("t"));
console.log(str.search("t"));
let arr = str.split("");
let numbers = [15, 12, 3, 24, 5];
let res = numbers.reduce((a, b) => a + b);
console.log(res);
// numbers.forEach(function (item) { // анонімна функція
//     console.log(item * 10);
// });
// console.log(numbers);

function myFunc(item) {
    return item *= 10;
}
numbers.forEach(myFunc);
console.log(numbers);


let temp = numbers.map(myFunc);
console.log(temp);


console.log(numbers.sort()); // sort for string
// numbers = numbers.sort((a, b) => {
//     if (a > b) return 1;
//     else if (a == b) return 0;
//     else return -1;
// }); // sort for digits

console.log(numbers);

console.log(numbers.sort((a, b) => a - b)); // від меншого до більшого
console.log(numbers.sort((a, b) => b - a)); // від більшого до меншого

let obj = [
    {
        brand: "audi",
        year: 2012
    },

    {
        brand: "BMW",
        year: 2017
    },

    {
        brand: "Skoda",
        year: 2011
    }
];

let sorted = obj.sort((a, b) => a.year - b.year);
console.log(sorted);

// спосіб пошуку кількості букв які є у рядочку
let searched = arr.filter((item) => item == "t");
console.log(searched.length);


// межі рандому 
function Random(min, max) {
    return Math.trunc((Math.random() * (max - min)) + min);
}


function changeBg() {
    document.body.style.backgroundColor = "pink";
    first.style.width = "100px";
    first.style.height = "100px";
    first.style.backgroundColor = "red";

    let elem = document.getElementById("first");
    elem.style.borderRadius = "50%";
    elem.style.display = "flex";
    elem.style.alignItems = "center";
    elem.style.justifyContent = "center";
    elem.innerHTML = "<p>After click</p>";
}

// setInterval(() => console.log(Random(-10, 10)), 1000);

// function nameFunc(item, item2)
// {
//     return Math.trunc(Math.random()*10);
// }
// setInterval(()=>console.log(nameFunc()), 1000);