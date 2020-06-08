document.bgColor = "green";
console.log("Outer file!");

document.write("<p>Hello world!");

// ES5
a = 13;
document.write("a = ", a);
console.log(a, " -> ", typeof (a));

a = "Iryna"
document.write(" a = ", a);
console.log(a, " -> ", typeof (a));

var b = 12;
{
    var b = 100;
    console.log(b);
}
console.log(b);

let number = 23;
{
    let number = 123;
    console.log(number);
}
console.log(number);

const days_a_week = 7;
// days_a_week = 8; // ERROR days_a_week is const
console.log(days_a_week, "-> ", typeof (days_a_week));

// let hello = prompt("Enter your name"); // prompt - модальне вікно для вводу даних
// console.log("Hello, ", hello);

a = parseInt(prompt("Enter number a", "default text"));
b = parseInt(prompt("Enter number b", "default text"));

number = a + b;
console.log(a, "+", b, "=", number);

let flag = false;
console.log("flag: ", flag, " =>", typeof (flag));

if (a > b) {
    document.write("<br/>", a, ">", b);
}
else if (a < b) {
    document.write("<br/>", a, "<", b);
}
else {
    document.write("<br/>", a, "=", b);
}


if (a === b) {
    console.log("true");
}
else {
    console.log("false");
}

a++;
console.log(a);

number = a ** b;
console.log(number);
console.log(a % 2);

let d = 345.678;
console.log(typeof (d));

a = parseInt(prompt("Enter number of day"));
switch (a) {
    case 1: 
       console.log("Sunday");
       break;
    case 2: 
       console.log("Monday");
       break;
    default:
       console.log("Other");
}