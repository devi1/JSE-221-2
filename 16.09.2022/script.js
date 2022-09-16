let str = `1 tasdasd 9
2 from asdasd 8
3 to asdasd 99`

let newStr = [];


let arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '\n'];

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < arrEn.length; j++){
        if(str[i] == arrEn[j]){
            newStr.push(str[i]);
        }
    }
}

alert(newStr);

newStr = newStr.join("");

alert(newStr);