// let name = prompt("What is your name?");
// let age = +prompt("How old are you?");

// let str = `Hi, ${name}, you are ${age} years old`;

// let str = "asfasdasdas asd"

// // alert(str.substring(0, 4));
// // alert(str.substring(3));
// alert(str.slice(2, -2));

// let str = "                 laskfjaklsfjs                          ";
// alert(str.trimRight());

// let str = " asfasdasdas";

// alert(str.indexOf("b"));

// let str = "asd asd gfdf sff";
// let array = new Array(str.length);
// array = str.split("f");
// alert(array);

// let str = "aaa@gnb@dwqd";
// alert(str.replace(/@/g, ' '));


// let str = "asd asd gfdf sff";

// let x = [1,2,3,"a","b","c","d","e","f"];
// let a = x.join(" ");
// alert(a);


// Task one

// let str = "asdasda"

// function chageCase(str){
//     if (str == str.toUpperCase()) return str.toLowerCase();
//     else return str.toUpperCase();
// }

// alert(chageCase(str));


// Task two

// let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"

// function divideSymbol(str){
//     return str.split("");
// }
// function divideWord(str){
//     return str.split(" ");
// }

// alert(divideSymbol(str));
// alert(divideWord(str));

// function sentenceOrSymbol(str){
//     let sign = prompt("What do you want? + by Symbols; - by Words")
//     if(sign =="+"){
//         return str.split("");
//     }
//     else if(sign =="-"){
//         return str.split(" ");
//     }
//     else{
//         return "Invalid sign"
//     }
// }

// alert(sentenceOrSymbol(str));

// Task three

// let str = "some string without a capital words";

// function capitalizeFirstLetter(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// function capitalizeFirstLetter(str){
//     return str[0].toUpperCase() + str.slice(1);
// }

// alert(capitalizeFirstLetter(str));

// Task four

// let str = "some string without a capital words";

// let arr = str.split(" ");

// function capitalizeFirstLetter(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function capitalizeWords(str, arr){
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = capitalizeFirstLetter(arr[i]);
//     }
//     return arr.join(" ");
    
// }

// alert(capitalizeWords(str, arr));



// HOMEWORK 

// Task one

Создавть функцию которая меняет регистр
К примеру из строки:
SoMe SeNtEnCe WiTh CaMeL CaSe

сделать:
sOmE sEnTeNcE wItH cAmEl cAsE


// Task two

Создать функцию которая перевернет строку. К примеру из HELLO сделает OLLEH
Реализация должна иметь 2 версии. Через функцию и строки. И через цикл for