// alert(1) //popup window

// let myVar = prompt("Please enter your name", "");

// let day;
// switch (new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "thu";
//         break;
//     case 4:
//         day = "Friday";
//         break;
//     case 5:
//         day = "Saturday";
//         break;
//     case 6:
//         day = "Sunday";
//         break;
// }

// alert(day);

// First task

// let number = prompt("Enter number: ");

// alert(number**2);

// // Second task

// let firstNumber = +prompt("Enter first number: ");

// let secondNumber = +prompt("Enter second number: ");

// let mid = (firstNumber + secondNumber)/2
// alert(firstNumber**2);

// // Third task

// let squareNumber = +prompt("Enter number: ");

// alert(squareNumber**2);

// Fourth task

// let kilometrs = +prompt("Enterr kilometrs");

// const convertToMiles = 0.621371;

// let result = kilometrs*convertToMiles;

// alert(result);

// // Fifth task

// let number = +prompt("Enter number: ");
// let number2 = +prompt("Enter number: ");

// let umnozhenie = (number*number2); 
// let delenie = (number/number2); 
// let slozhenie = (number+number2); 
// let vichitanie = (number-number2);
// alert(umnozhenie); 
// alert(delenie); 
// alert(slozhenie);
// alert(vichitanie);

// // Sixth task

// let a = +prompt("Enter a: ")
// let b = +prompt("Enter b: ")

// let x = -(b)/a;

// alert(x);

// // Seventh task

// let hours = +prompt("Which  hour is now?");
// let minute = +prompt("Which  minute is now?");

// let result = 24*60 - (60*hours + minutes);

// var y = Math.floor(result / 60);
// var z = result % 60;
// alert(y);
// alert(z);

// // Eigth task

// let threeDigitNumber = +prompt("Enter number: ");

// alert(Math.floor((threeDigitNumber / 10) % 10));

// Ninth task

var x = +prompt("введите пятизначное число");
var y = x % 10;
var z = (x - y) / 10;
let a = y * 10000 + z;

alert(a);