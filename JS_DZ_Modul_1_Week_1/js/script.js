// // 1
// let name = prompt("Enter your name:");
// document.write(`<h1>Hello, ${name}! </h1>`);

// // 2
// const YEAR = 2020;
// let year = + prompt("Enter year your birthday:");
// document.write(`${name}, you is ${YEAR - year} years old`);

// // 3
// let side = + prompt("Enter side square:");
// document.write(`<br/><br/>P(squre with side = ${side}sm.) = ${side * 4}`);

// 4
// const PI = 3.14;
// let radius = + prompt("Enter radius your circle:(SM)");
// let S = 2 * PI * radius **
//     document.write(`The area of the circle is ${S}sm^2`);

// // 5 
// let lenght = + prompt("Enter some lenght between two city:");
// let time = + prompt(`Enter some hour, what you want pass ${lenght}km :`);
// document.write(`<br/><br/>Dear, Driver<br/>You should to go at a speed of ${lenght/time}km/hour`)

// 6
// const EURO = 0.88;
// let dolar =+ prompt("Enter how many dolars you have:");
// document.write(`<br/><br/>${dolar} dolar = ${dolar*EURO} euro`);

// 7
// const MB = 1000;
// let volume = + prompt("Enter volume your flesh: (ГБ)") * MB;
// if (volume > 820)
//     document.write(`<br/><br/>${(volume / 820).toFixed()} file => you can put on your flesh`);
// else {
//     document.write("ERROR!");
// } 

// 8
// const PRICE = 25;
// let money =+ prompt("Enter how many you have in your purse:");
// document.write(`<br/><br/>${(money/PRICE).toFixed()} pcs => you can buy`);

// 9 
// let digit = prompt("Enter some 3-digits:");

// document.write(`<br/><br/>${digit.split("").reverse().join("")}`);

// 10 
function Random(min, max) {
    return Math.trunc((Math.random() * (max - min)) + min);
}
let randomDigit = Random(1, 100);
let count = 1;
let sometimesDigit = 0;
let digits = [];
do {
    sometimesDigit = + prompt("Enter some digit, what you think is TRUE in this game..:");
    if (sometimesDigit == randomDigit) {
        console.log(`Uhyy! You win in this game!! Random digit is => ${randomDigit}! You won from ${count} attempts`)
        break;
    }
    else if (sometimesDigit <= 50) {
        console.log(`Ohh no.. You didn't guess the number... HINT! Your number is in the range from 1 to 50 Try again..!`);
    }
    else if (sometimesDigit > 51 ) {
        console.log("Ohh no.. You didn't guess the number... HINT! Your number is in the range from 51 to 100 Try again..!");
    }
    else {
        console.log(`Ohh no... You lost, you used all attempts, but did not guess! Your number was ${sometimesDigit}`);
    }
    digits.push(sometimesDigit);
    count++;
} while (count != 4);