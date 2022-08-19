// let number = +prompt("Enter a random number: ");

// let myArray = new Array(new Array());

// myArray = [];

// for (let i = 0; i < number; i++) {
//     let pushNumber = prompt("Introduce yourself: ");
//     if (pushNumber%2 != 0) {
//         myArray.push(pushNumber);
//     }else{
//         continue;
//     }
// }
// alert(myArray);
// let numberOne = +prompt('First number');
// let numberTwo = +prompt('Second number');
// function gcd(a,b) {
//     a = Math.abs(a);
//     b = Math.abs(b);
//     if (b > a) {let temp = a; a = b; b = temp;}
//     while (true) {
//         if (b == 0) return a;
//         a %= b;
//         if (a == 0) return b;
//         b %= a;
//     }
// }

// alert(gcd(numberOne, numberTwo));


// Используем декримент
//  решение через цикл
// let number = +prompt("Enter number: ");

// let result = 1;

// while(number!=0){
//     result *= number--;
// }

// alert(result);

// рещение чрез рекурсию



// function factorial(n){
//     return (n!=1) ? n * factorial(n-1) : 1;
// }

// alert(factorial(number));
// let num = +prompt("2+2*2= ?");
// if(num != 2+2*2){
//     do{
//         num = +prompt("2+2*2= ?");
//     } while(num != 2+2*2);
// }


// let number= 1000;
// let cnt = 0;

// // let numberSave = number;
// do{
//     number = number/2;
//     cnt++;
//     alert(number);
//     alert(cnt)
// } while(number >=s 50 );

// alert(number);
// alert(cnt);

// let number = +prompt('Enter your number: ');
// let arrayOfNumbers = new Array();
// for(let i=1; i<=100; i++){
//     if(number%i==0){
//         arrayOfNumbers.push(i);
//     }
//     else{
//         continue;
//     }
// }

// alert(arrayOfNumbers);

// let firstNumber = +prompt('Enter your first number: ');
// let secondNumber = +prompt('Enter your second number: ');

// let arrayOfNumbers = new Array();

// let substraction = secondNumber - firstNumber;

// for(let i=0; i <= substraction; i++){
//     arrayOfNumbers.push(firstNumber);
//     firstNumber++;
// }

// alert(arrayOfNumbers);
// let arrayOfFourthNumbers = new Array();

// for (let i = 1; i <= substraction; i++) {
//     if (i%4==0){
//         arrayOfFourthNumbers.push(arrayOfNumbers[i]);
//     }
//     else{
//         continue;
//     }
// }

// alert(arrayOfFourthNumbers);

let number = +prompt("Enter a number: ");

if (number ==2 || number == 1){
    alert("Number is PRIME");
}
else{
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number%i==0){
            alert("Number is not PRIME");
        }
        else {
            alert("Number is PRIME");
        }
        i++;
    }
}