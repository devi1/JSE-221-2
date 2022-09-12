// let a = document.getElementById("myBtn")//.addEventListener('click', function(){alert("Button was clicked!");});
// console.log(a);
// let x = document.getElementsByClassName("buttons");
// console.log(x);
//x[0].addEventListener("click", eventFunction());

// for(let i in x){
//     i.addEventListener("click", eventFunction);
// }
// function eventFunction(){
//     console.log("Button was clicked!");
// }

// let x = document.querySelectorAll('button');
// console.log(x);

// x[0].addEventListener("click", function(){
//     alert("Click!");
// });

// for(let i = 0; i < x.length; i++) {
//     x[i].addEventListener("click", function(){alert("Click!");});
// }

// for(let i in x){
//     i.addEventListener("click", function(){
//         alert("Click!");
//     })
// }

// x.forEach(function(){
//     alert("Click!");
// })

function addEvent(){
    document.getElementById("myDiv").addEventListener("mousemove", mouseRand);
}

function mouseRand(){
    document.getElementById("paragraphRand").innerHTML = Math.random();
}

function removeEvent(){
    document.getElementById("myDiv").removeEventListener("mousemove", mouseRand);
    document.getElementById("paragraphRand").innerHTML = "";
}