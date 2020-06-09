let a = 1234567890;
console.log(typeof a);
console.log(1e9); // 1 * 10 ^ 9
console.log(1e-9); // 0.0000000001

let b = 1 / 0; // infinity
let c;
console.log(typeof c); // undefined
console.log("a" / "b"); // NaN - not a number

// let number =+ prompt("Enter number");
let number = 10;
console.log(number + 10);

let str = "Hello";
str = "Other hello";
str = `Hello, ${number}`;
console.log(str);

console.log(number.toString() + 10);
// console.log(number.toString(2)); //двійкова система
// console.log(number.toString(16)); //шістнадцяткова система

console.log(12345677..toString());

// let flag = confirm("Перездали всі екзамени");
// console.log(flag);

for (let i = 0; i < 10; i++) {
    // document.writeln(i, "<br/>");
    document.writeln(i);
}

let i = 0;
while (i < 5) {
    console.log(i, ' ');
    i++
}

i = 10;
document.write("<hr/>");
do {
    document.write(i, " ");
    i++;
} while (i < 20);

let arr = [4, 7, 12, 9, 6, 34, 8];

let arr2 = new Array();
// digit type
// string
// boolean
// NaN, null, undefined
// array
// object