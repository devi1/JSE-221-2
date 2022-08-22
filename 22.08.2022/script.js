// let a = +prompt("Enter number a: ");
// let b = +prompt("Enter your number: ");

// function myFunction(a, b) {
//     return a+b;   
// }


// alert(myFunction(a, b))

// let someNumber = +prompt("Enter your number: ");

// function factorial(n){
//     return n?n*factorial(n-1):1 ;
// }

// alert(factorial(someNumber));

// //Task number one

// function myFunction(a, b){
//     if (a<b){
//         return a;
//     } else{
//         return b;
//     }
// }

// alert(myFunction(1, 2));

// Task number two

// let number = +prompt("Enter your number: ");
// let power = +prompt("Enter your power: ");

// function myFunction(a, b) {
//     return a**b;
// }

// alert(myFunction(number, power));

// // task number three

// let fNumber = +prompt("Enter your number: ");
// let sNumber = +prompt("Enter your number: ");

// let sign = prompt("Enter '+', '-', '*' or '/' sign: ");

// function myFunction(a, b, c) {
//     if (c == "+"){
//         return a + b;
//     }
//     else if(c == "-"){
//         return a - b;
//     }
//     else if(c == "*"){
//         return a * b;
//     }
//     else if(c == "/"){
//         return a / b;
//     }
//     else{
//         return "There is wrong sign";
//     }
// }

// alert(myFunction(fNumber, sNumber, sign));


// // task number four

// let n = +prompt("Enter your number: ");

// function isPrime(number){
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             return false;
//         }
//     }
//     return n > 1;
// }

// if(isPrime(n)){
//     alert("Number is prime");
// } else {
//     alert("Number is not prime");
// }

// task number five

// let myArr = new Array();
// myArr = [];


// function table(number){
//     for(let i = 1; i <= 9; i++){
//         let arrEl = number + "*" + i + "=" + number*i +"\n";
//         myArr.push(arrEl);
//     }
// }

// table(2);
// table(3);
// table(4);
// table(5);
// table(6);
// table(7);
// table(8);
// table(9);

// alert(myArr);

// // task number six

// let fNumber = +prompt("Enter your number: ");
// let sNumber = +prompt("Enter your number: ");

// function mod(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         if (firstNumber - Math.floor(firstNumber/secondNumber)*secondNumber == 0){
//             return 0;
//         }
//         else {
//             return firstNumber - Math.floor(firstNumber/secondNumber)*secondNumber;
//         }
//     }
//     else{
//         if (secondNumber - Math.floor(secondNumber/firstNumber)*firstNumber == 0){
//             return 0;
//         }
//         else {
//             return secondNumber - Math.floor(secondNumber/firstNumber)*firstNumber;
//         }
//     }
// }

// alert(mod(fNumber, sNumber));

// // task number seven

// function sum(n){
//     return n ? n + sum(n-1) : 0;
// }

// alert(sum(5));

// function sum(one, two, three, four, five){
//     return one+two+three+four+five;
// }

// alert(sum(1, 2, 3, 4, 5));

// // task number eight 
// function maximum(one, two, three, four, five){
//     return Math.max(one, two, three, four, five);
// }

// alert(maximum(1,2,3,4,5));

// // task number nine 

// let fNumber = +prompt("Enter first number: ");
// let sNumber = +prompt("Enter second number: ");

// let check = true;

// let arrOdd = new Array();
// arrOdd = [];
// let arrEven = new Array();
// arrEven = [];

// function oddOrEven(fNumber, sNumber){
//     for(let i = fNumber; i <= sNumber; i++){
//         if(i%2 == 0){
//             arrEven.push(i);
//             //return true;
//         }
//         else{
//             arrOdd.push(i);
//             //return false;
//         }
//     }
// }

// oddOrEven(fNumber, sNumber);

// alert(arrEven);
// alert(arrOdd);

// // Task number ten

// let day = +prompt("Enter which day");
// let month = +prompt("Enter month");
// let year = +prompt("Enter year");

// function leapYear(year){
//     if (year%400 == 0){
//         return true;
//     } 
//     else if(year%4 == 0 && year%100 != 0){
//         return true
//     }
//     else{
//         return false;
//     }
// }

// function nextDay(day, month, year){
//     if(month == 2 && leapYear(year)){
//         if(day != 29){
//             day++;
//             return day +"."+month+"."+year;
//         }
//         else{
//             day = 1;
//             month++;
//             return day +"."+month+"."+year;
//         }
//     }
//     else if(month == 2 && !leapYear(year)){
//         if(day != 28){
//             day++;
//             return day +"."+month+"."+year;
//         }
//         else{
//             day = 1;
//             month++;
//             return day +"."+month+"."+year;
//         }
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11 && day != 30){
//         day++;
//         return day +"."+month+"."+year;
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11 && day == 30){
//         day = 1;
//         month++;
//         return day +"."+month+"."+year;
//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day != 31){
//         day++;
//         return day +"."+month+"."+year;
//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day == 31){
//         day= 1;
//         month++;
//         return day +"."+month+"."+ year;
//     }
// }

// alert(nextDay(day, month, year));

// let fNumber = +prompt("Enter your number: ");
// let sNumber = +prompt("Enter your number: ");

// function myFunction(a, b){
//     if(a < b){
//         return -1;
//     }
//     else if(a > b){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }

// alert(myFunction(fNumber, sNumber));

// function myFunction(a, b, c){
//     return a+ "" + b+"" + c;
// }

// alert(myFunction(1, 2, 3));

// let fNumber = +prompt("Enter your number: ");
// let sNumber = +prompt("Enter your number: ");

// let arr = new Array();

// function isPerfect(number){
//     let temp = 0;
//     for(let i=1; i<=number/2; i++){
//         if(number%i==0){
//             temp += i;
//         }
//     }
//     if(temp == number){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function twoNumbers(fNumber, sNumber){
//     for (let i=fNumber; i<=sNumber; i++){
//         if(isPerfect(i)){
//             arr.push(i);
//         }
//         else{
//             continue;
//         }
//     }
// }

// twoNumbers(fNumber, sNumber);
// alert(arr);