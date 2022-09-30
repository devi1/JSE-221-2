// let sum = (a, b) => a + b

// function sum(a, b){
//     return a+ b;
// }

// let sum = function(a, b){
//     return a+b;
// }

// alert(sum(5,6));

// Строка 1 == строки 3-5 == строки 7-9 == строки 35-38

// let square = n => n*n

// alert(square(4))

// let alertSmth = () => alert("hello world")

// alertSmth();

// let number = +prompt("Enter a number");

// let check = (number%2==0)?() => alert(`${number} is even`):() => alert(`${number} is odd`);

// check();

// function check() {
//     if(number%2==0) return alert(`${number} is even`);
//     else return alert(`${number} is odd`);
// }


// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// Строка 1 == строки 3-5 == строки 7-9 == строки 35-38

// alert(sum(5,4));

// // При наличии 2 или более передаваемых в функцию аргументов прописываются скобки. Внутрь этих скобок мы пишем наши аргументы.
// let sum = (a, b) => a + b;
// alert(sum(5,4)); // 9

// // При наличии только одного передаваемого аргумента скобки необязательно прописывать.
// let square = number => number*number;
// alert(square(5)); // 25

// Если нет никакого аргумента то прописываются просто пустые скобки
// let message = () => alert("You have some message");
// message(); // "You have some message"

// let arr = [1,2,3,4];

// let [a, b, c, d] = arr;
// let [numberOne, numberTwo, c, d, e] = [1,2,3,4];

// alert(numberOne);
// alert(numberTwo);
// alert(c);
// alert(d);
// alert(e);

// let str = "Some String with important information and a lot of random words.";

// // let [, , , word] = str.split(" ");

// // alert(word); // important

// let [firstWord, secondWord, ...rest] = str.split(" ");

// alert(firstWord); // Some
// alert(secondWord); // String
// alert(rest); // with,important,information,and,a,lot,of,random,words.

// let arr = [1,2,3,4];

// let f = (a, b, c, d) => a+b+c+d;

// alert(f(...arr));

// let [firstWord, secondWord] = [];

// alert(firstWord); // undefined
// alert(secondWord); // undefined

// let [firstWord="Hello", secondWord="world"] = [];

// alert(firstWord); // Hello
// alert(secondWord); // world

// function defaultParam(){
//     return "Default value for parameter"
// }

// let [firstWord, secondWord=defaultParam()] = ["hello"]

// alert(firstWord); // Hello
// alert(secondWord); // "Default value for parameter"

// let user = {
//     name: "Eugene",
//     surname: "skjdfhskjdf",
//     age: 36,
//     hobby: "modeling"
// }

// let {name:n, surname:s, age:vozrast, hobby} = user;

// alert(n);
// alert(s);
// alert(vozrast);
// alert(hobby);

// let user = {
//     parametrs:{
//         height: 170,
//         weight: 73
//     },
//     something:{
//         smth: "whatever",
//         idk: "reallyIDK"
//     },
//     likes: ["dounts", "playing", "smthElse"]
// }

// let {parametrs: {height, weight}, something: {smth, idk}, likes:[one, two, three]} = user;

// alert(height);
// alert(weight);
// alert(smth);
// alert(idk);
// alert(one);
// alert(two);
// alert(three);

// 1) Создать объект и массив с параметрами цветов и размеров. В Html созадть кнопку. 
// И при нажатий этой кнопки в стилях должны присваиваться те параметры которые были указаны в объекте и массиве. 
// Нужно работать и с массивом и с объектом. Функцию кнопки сделать через стрелочные функции

// 2) СОздать функцию которая будет менять цвет бэкграунда на рандомный цвет. При нажатий кнопки. И при нажатий кнопки клавиатуры

// 3) Создать функцию которая будет менять цвет бэкграунда при движений мыши.

// 4) СОздать функцию которая будет создаваь новый блоки и придавать значения (высота ширина, цвет и тд.) из деструктурированного массива.

// Стараейтесть все выполнить по стрелочным функциям