// 1
// let hour = + prompt("Enter hour:");
// let min = + prompt("Enter minute:");
// let sec = + prompt("Enter second:");

// if (hour > 0 && hour <= 24) {
//     if (min > 0 && min <= 60) {
//         if (sec > 0 && sec <= 60) {
//             document.write("1. TRUE");
//         }
//     }
// }
// else {
//     document.write("1. FALSE");
// }


// 2 
// let x = + prompt("Enter X:");
// let y = + prompt("Enter Y:");
// document.write("<br/> 2.")
// if (x >= 0 && y >= 0)
// {
//     document.write(" 1 четверть");
// }
// else if (x < 0 && y >= 0)
// {
//     document.write(" 2 четверть");
// }
// else if (x < 0 && y < 0)
// {
//     document.write(" 3 четверть");
// }
// else if(x >=0 && y <0)
// {
//     document.write(" 4 четверть");
// }


// 3 
// let count = + prompt("Enter some number");
// document.write("<br/> 3. ");
// while (count != 0) {
//     document.write("# ");
//     count--;
// }


// 4
// let number =+ prompt("Enter some number:");
// document.write("<br/> 4. ");
// while (number !=0) {
//     document.write(number, " ");
//     number--;
// }

// 5 
// let number =+ prompt("Enter some number for factorial:");
// let arr = [], result =1;
// document.write("<br/> 5. ");
// while (number!=0) {
//     arr.push(number);
//     number--;
// }
// for(let i = 0; i< arr.length; i++)
// {
//     result*=arr[i];
// }
// document.write(`factorial -> ${result}`);


// 6 
let number =+ prompt("Enter some number:");
document.write("<br/> 6. ");
if(number%1==0)
{    
    document.write(`This is number '${number} isn't simple`);    
}
else{
    document.write(`This is number '${number} is simple`);
}