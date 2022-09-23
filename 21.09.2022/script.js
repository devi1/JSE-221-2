let frm = document.querySelector(".createColor");
let colorName = document.querySelector("#colorName");
let colorType = document.querySelector("#colorType");
let colorCode = document.querySelector("#colorCode");

function alerting(){
    // localStorage.setItem(colorName.value, colorCode.value);
    // alert(localStorage.getItem(colorName.value));
    console.log(localStorage.getItem(colorName.value));
    let div = document.createElement("div");
    div.className = "colorClass";
    document.body.append(div);
    div.style.backgroundColor = localStorage.getItem(colorName.value);
}
