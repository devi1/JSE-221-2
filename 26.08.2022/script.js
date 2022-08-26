// let myArray = new Array(new Array());
// myArray = [
//     [1,2,3], //0
//     [4,5,6], //1
//     [7,8,9]  //2 
// ];
// alert(myArray[1][2]);
//   0 1 2
// myArray.push(5);
// myArray.push(4);
// myArray.push(3);
// myArray.push(2);
// myArray.push(1);
// myArray.push(0);
// myArray.push(8);

// alert(myArray);

// myArray.shift();

// alert(myArray);

// myArray.unshift(3);

// alert(myArray);

// // push - добавляет элемент в конец
// // pop - удаляет последний элемент
// // shift - удаляет первый элемент
// // unshift - добавляет элемент в начало

// myArray.push("one", "two", "three");


// myArray.unshift("one", "two", "three");
// alert(myArray);

// let number = +prompt("");

// for (let i = 0; i < number; i++) {
//     let value = +prompt("Enter a number: ");
//     myArray.push(value);
// }

// alert(myArray);

// Task one

// let myArray = new Array();
// myArray = [];

// for (let i = 0; i < 10; i++){
//     let number = +prompt("Enter a number: ");
//     myArray.push(number);
// }

// alert(Math.max(...myArray));
// alert(Math.min(...myArray));

// function Arrays(){
//     let arr=[1,33,22,44,1];
//     let max_number=0;
//     let min_number=0;
//   for(let i=0; i<arr.length;i++){
//     if (arr[i]>max_number)
//     max_number=arr[i];
//     if (arr[i]<min_number);
//     min_number=arr[i];
//   };
//   alert("Максимальное значение = "+max_number+" Минимальное значение ="+min_number);
//   };

// // Task two

// let myArray = new Array();
// myArray = [];

// let sum = 0;

// for (let i = 0; i < 5; i++){
//     let number = +prompt("Enter a number: ");
//     myArray.push(number);
// }

// for (let i = 0; i < myArray.length; i++){
//     sum+=myArray[i];
// }
// alert(sum);
// alert(sum/myArray.length);

// // Task three

// let firstArray = new Array();
// firstArray = [];
// let secondArray = new Array();
// secondArray = [];

// for (let i = 0; i < 7; i++) {
//     let firstNumber = +prompt("Enter a first number: ");
//     let secondNumber = +prompt("Enter a second number: ");
//     firstArray.push(firstNumber);
//     secondArray.push(secondNumber);
// }

// alert(firstArray);
// alert(secondArray);

// for (let i = 0; i < 7; i++){
//     if (firstArray[i] == secondArray[i]){
//         alert(firstArray[i] +  ' are match with '+ secondArray[i]);
//     }
//     else{
//         alert(firstArray[i] + " doesn't match with " + secondArray[i]);
//     }
// } 

// //task five

// let firstArray = new Array();
// firstArray = [];
// let secondArray = new Array();
// secondArray = [];

// for(let i = 0; i < 10; i++){
//     let number = +prompt("Enter a number, please: ");
//     firstArray.push(number);
//     if(number%2==0){
//         secondArray.push(number);
//     }
// }

// alert(firstArray);

// // for(let i = 0; i < firstArray.length; i++){
// //     if(firstArray[i]%2==0){
// //         secondArray.push(firstArray[i]);
// //     }
// // }

// alert(secondArray);

// // Пример бесконечного ввода пока пользщователь не захочет остановится сам

// let firstArray = new Array();
// firstArray = [];

// let check = true

// while(check){
//     let number = +prompt("Enter a number, please:  (If you enter '0', input will be stop");
//     if(number!=0){
//         firstArray.push(number);
//     }
//     else{
//         break;
//     }
// }

// alert(firstArray);