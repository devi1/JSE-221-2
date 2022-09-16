
// let newStr = [];


// let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '\n'];

// for(let i = 0; i < str.length; i++){
    //     for(let j = 0; j < arrEn.length; j++){
//         if(str[i] == arrEn[j]){
//             newStr.push(str[i]);
//         }
//     }
// }

// alert(newStr);

// newStr = newStr.join("");

// alert(newStr);


// let ex = document.getElementById('example');
// let ctx = ex.getContext("2d");
// ex.width = 600;
// ex.height = 600;
// ctx.moveTo(0,0);
// ctx.lineTo(200, 100);

// ctx.stroke();

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, Math.PI * 2);

let str = `1 tasdasd
2 from asdasd 8
3 to asdasd 99`

// let reg = /^[a-zA-z]+$/gmi;

// alert(str.match([reg]));

// let str = "Lorem ipsum dolor sit amet, consectetur  adipiscing elit";

let text = /\d/;

let re = new RegExp(text, 'gmi');

let res = str.match(re);

for(let i = 0; i < str.length; i++) {
    if(res!= null){
        str.replace(/\d/gmi, "")
    }
}
alert(res);

alert(res);

alert(str)