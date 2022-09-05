document.write("kladfsd");


let a = document.getElementsByClassName("one");
console.log(a);

let b = document.getElementsByTagName("div");

console.log(b);

let hColor = document.getElementsByClassName("change");

//hColor[0].style.backgroundColor = '#FF00FF';

for(let i = 0; i < hColor.length; i++){
    hColor[i].style.backgroundColor = '#FF00FF';
}

let str = "asd";

alert(str[4]);