let myArray = new Array(new Array());
myArray = [
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9]  //2 
];
alert(myArray[1][2]);
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

let number = +prompt("");

for (let i = 0; i < number; i++) {
    let value = +prompt("Enter a number: ");
    myArray.push(value);
}

alert(myArray);

1 2 3
4 5 6
7 8 9