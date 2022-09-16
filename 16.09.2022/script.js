// let str = prompt("What do you want to find?")

// regexp = new RegExp(`${str}`);

let str = `1 tasdasd 9
2 from asdasd 8
3 to asdasd 99`


// alert(str)
// alert(str.match(/./gim)); 

// let newStr = [];

// let newStrDigits = str.match(/\d/gm);
// let newStrAll = str.match(/./gm)
// alert(newStrAll);
// alert(newStrDigits);

alert(str.length)

let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
alert(arrEn.length);
function getMax(numberOne, numberTwo){
    if(numberOne > numberTwo) return numberOne;
    else return numberTwo;
}

alert(getMax(str.length, arrEn.length));

// for(let i = 0; i < getMax(str.length, arrEn.length); i++) {

// }

// for(let i = 0; i < str.length; i++){
//     if(str.match(/./gm)[i] != str.match(/\d/gm)){
//         newStr.push(str[i]);
//     }
// }

// alert(newStr);