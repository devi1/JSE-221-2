// //First task

// let age = +prompt("Enter your age");

// if (age >= 0 && age <= 12){
//     alert("You a KID");
// }
// else if (age > 12 && age <= 18){
//     alert("You a TEEN");
// }
// else if (age > 18 && age <= 60){
//     alert("You an ADULT");
// }
// else{
//     alert("You a Grand aged");
// }

// // Second task

// let number = +prompt("Enter a number");

// switch (number) {
//     case 0:
//         alert(")");
//     case 1:
//         alert("!");
//     case 2:
//         alert("@");
//     case 3:
//         alert("#");
//     case 4:
//         alert("$");
//     case 5:
//         alert("%");
//     case 6:
//         alert("^");
//     case 7:
//         alert("&");
//     case 8:
//         alert("*");
//     case 9:
//         alert("(");
// }

// // Third task

// let str = prompt("Enter a 3-digit number: ");

// let text = "There is no same numbers";

// for (let i = 0; i < str.length; i++) {
//     if (str.split(str[i]).length > 2) {
//         text = "There are same numbers"
//         break;
//     }
// }

// alert(text);

// let number = +prompt("Enter a number");

// let firstDigit = Math.floor(number/100);
// let secondDigit = Math.floor(number/10)%10;
// let thirdDigit = number%10;

// if (firstDigit == secondDigit || firstDigit == thirdDigit || secondDigit== thirdDigit){
//     alert("There is same digits");
// } else{
//     alert("No same digits");

// }

// //Fourth task

// let year = +prompt("Enter a year");

// if (year%400 == 0) {
//     alert("it's a leap year");
// }
// else if (year%4 == 0 && year%100 != 0) {
//     alert("it's a leap year");
// } else{
//     alert("It's not a leap year");

// }

// //Fifth task

// let number = +prompt("Enterr a number...");

// let firstDigit = Math.floor(number / 10000);
// let secondDigit = Math.floor(number / 1000) % 10;
// let fourthDigit = Math.floor(number / 10) % 10;
// let fifthDigit = number % 10;

// if (firstDigit === fifthDigit && secondDigit === fourthDigit) {
//     alert("It's a palindorm");
// } else{
//     alert("It's not a palindorm");

// }


// let number = prompt("Enter a number...");

// let check = number.toString() == number.toString().split("").reverse().join("")

// if(check){
//     alert("It's a palindorm");
// } else{
//     alert("It's not a palindorm");
// }

// //Sixth task

// let dollars = +prompt("Enter your cash amount...");

// let currency= +prompt("Enter anotehr valut: 1 - EUR, 2 - UAN, 3 - AZN");

// const toEuro = 0.98;

// const toUan = 6.78;

// const toManat = 1.7;

// switch (currency) {
//     case 1:
//         alert(dollars*toEuro);
//         break;
//     case 2:
//         alert(dollars*toUan);
//         break;
//     case 3:
//         alert(dollars*toManat);
//         break;
// }

// // Seventh task


// let sum = +prompt("Enter total sum");

// if (sum >= 200 && sum < 300){
//     alert("you need to pay " + (sum - sum*0.03).toString());
// }
// else if (sum >= 300 && sum < 500){
//     alert("you need to pay " + (sum - sum*0.05).toString());
// }
// else if (sum >= 500){
//     alert("you need to pay " + (sum - sum*0.07).toString());
// }
// else{
//     alert("you need to pay " + sum.toString());

// }

// // Eight task

// let circleLength = +prompt("Enter circle length");
// let squarePerimeter = +prompt("Enter square perimeter");

// let diametre = circleLength/Math.PI;

// let squareSide = squarePerimeter/4;

// if (squareSide >= diametre){
//     alert("Circle fits into the square");
// }

// else{
//     alert("Circle doesn't fit into the square");
// }

// // Ninth task

// let cnt = 0;

// let firstQuestion = prompt("Год независимости Казахстана? a.1991 b.1992 c.1990");
// if (firstQuestion == "1991" || firstQuestion == "a"){
//     alert("You are right");
//     cnt++;
// } else{
//     alert("You are wrong");
// }


// let secondQuestion = prompt("Численоость КЗ? a.16млн b.18млн c.19млн");
// if (secondQuestion == "19" || secondQuestion == "c"){
//     alert("You are right");
//     cnt++;
// }else{
//     alert("You are wrong");
// }


// let thirdQuestion = prompt("Президент Казахстана? a.Масимов b.Назарбаев c.Токаев");
// if (thirdQuestion == "Токаев" || thirdQuestion == "c"){
//     alert("You are right");
//     cnt++;
// }else{
//     alert("You are wrong");
// }

// alert("You are in total earned: " + (cnt*2).toString() + " points");

// // Tenth Task

// let day = +prompt("Enterr a day");
// let month = +prompt("Enterr a month");
// let year = +prompt("Enterr a year");

// if (year%400 == 0 || year%4 == 0 && year%100 != 0){
//     if (month == 2){
//         if (day == 29){
//             month += 1;
//             day = 1;
//         }
//         else{
//             day += 1;
//         }
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11){
//         if (day == 30){
//             month += 1;
//             day = 1;
//         }
//         else{
//             day += 1;
//         }
//     }
//     else{
//         if (day == 31){
//             day += 1;
//         }
//         else{
//             day += 1;
//         }
//     }
// }

// else{
//     if (month == 2){
//         if (day == 28){
//             month += 1;
//             day = 1;
//         }
//         else{
//             day += 1;
//         }
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11){
//         if (day == 30){
//             month += 1;
//             day = 1;
//         }
//         else{
//             day += 1;
//         }
//     }
//     else{
//         if (day == 31){
//             day += 1;
//         }
//         else{
//             day += 1;
//         }
//     }
// }

// alert(day.toString() + "." + month.toString() + "." + year.toString());

// PART TWO

// Frst task

let a = +prompt('First number');
let b = +prompt('Second number');

function checkEqualOrnot(firstNumber, secondNumber) {
    if (firstNumber == secondNumber) {
        return 0;
    }
    else if(firstNumber > secondNumber) {
        return 1;
    }
    else{
        return -1;
    }

}

alert(checkEqualOrnot(a, b));