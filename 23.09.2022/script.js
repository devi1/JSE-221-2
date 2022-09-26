// let tempName = new RegExp();
// tempName = /[^\s]$/;

// let tempNameRGB = new RegExp();
// tempNameRGB = /(\s*\d+\s*,){2}\s*[\d]+/;

// let tempNameRGBA = new RegExp();
// tempNameRGBA = /(\s*\d+\s*,){3}\s*[\d\.]+/;

// 123456789 
// /\d/
// 1

// /\d/g
// "12 4 85 9999 3"
// 1 2 4 8 5 9 9 9 9 3

// /\d+/
// 12 4 85 9999 3

// let tempNameHEX = new RegExp();
// tempNameHEX = /[a-zA-Z0-9]{6}/;

// let container = document.querySelector('.container')

// // container.addEventListener('click', function() {
// //     let colorType = document.querySelector('.selected').value;
// //     let colorCode = document.querySelector('.colorCode');
// //     if(colorType == 'RGB'){
// //         colorCode.placeholder = "0-255, 0-255, 0-255";
// //     }
// //     else if(colorType == 'RGBA'){
// //         colorCode.placeholder = "0-255, 0-255, 0-255, 0-1";
// //     }
// //     else if(colorType == 'HEX'){
// //         colorCode.placeholder = "00-FF, 00-FF, 00-FF";
// //     }
// // })

// function formTest(){
//     let codeValue = document.querySelector('.colorCode');
//     let colorType = document.querySelector('.selected').value;
//     let colorName = document.querySelector('.colorName').value;
//     let alertingSpan = document.querySelector('.alertingSpan');
//     if(!tempName.test(colorName)){
//         document.querySelector('.alertingSpan').innerHTML = "Enter just letters or/and numbers";
//         return false;
//     }
//     if(colorType == 'RGB'){
//         if(!tempNameRGB.test(codeValue)){
//             alertingSpan.innerHTML = "Enter just numbers from 0 to 255";
//             return false;
//         }
//     }
//     else if(colorType == 'RGBA'){
//         if(!tempNameRGBA.test(codeValue)){
//             alertingSpan.innerHTML = "Enter just numbers from 0 to 255 and 0-1";
//             return false;
//         }
//     }
//     else if(colorType == 'HEX'){
//         if(!tempNameHEX.test(codeValue)){
//             alertingSpan.innerHTML = "Enter just numbers or letters from 00 to FF";
//             return false;
//         }
//     }
//     else {
//         return true;
//     }

//     let spanNameColor = document.createElement('span');
//     let spanTypeColor = document.createElement('span');
//     let spanCode = document.createElement('span');
//     let divColor = document.createElement('div');

//     spanNameColor.textContent = colorName;
//     spanTypeColor.textContent = colorType;
//     spanCode.textContent = codeValue;

//     divColor.append(spanNameColor);
//     divColor.append(spanTypeColor);
//     divColor.append(spanCode);

//     divColor.className = 'divColor';
//     document.querySelector('newBoxes').append(divColor);

//     switch (colorType) {
//         case 'RGB':
//             divColor.style.backgroundColor = `rgb(${codeValue})`
//             break;
//         case 'RGBA':
//             divColor.style.backgroundColor = `rgba(${codeValue})`
//             break;
//         case 'HEX':
//             divColor.style.backgroundColor = `#${codeValue}`
//             break;
//     }
// }

// \w
// \s \t \n
// \d
// let str = 'some kind of word 44'

// let regex = /\s\w\d/

// alert(str.match(regex));


// [a-z]
// [A-Z]
// [0-9]

alert("Woila".match(/W[oi]la/g)); 
// [0-9] = \d
// [^0-9] = \D
// [a-zA-Z0-9_] = \w
// [^\s] = \S
// [^oi] все кроме o и i;
