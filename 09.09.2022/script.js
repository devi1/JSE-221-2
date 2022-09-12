// document.addEventListener("keyup", function(ev){
//     if (ev.code == 'KeyA'){
//         alert('a');
//     }
// } )

// function hideText(){
//     let toogleHide = document.getElementById('hideme');
//     if (toogleHide.style.display == 'none'){
//         toogleHide.style.display = 'block';
//     }
//     else{
//         toogleHide.style.display = 'none';
//     }
    
// }

// let menuDiv = document.getElementById('toogle');
// let titleSpan = document.querySelector('.title');

// titleSpan.onclick = function() {
//     menuDiv.classList.toggle('open');
// }

let i = 0;

for(let li of slider1.querySelectorAll('li')){
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;top:0;left:0">${i}</span>`);
    i++;
}

let width = 130;
let cnt = 3;

let uList = slider1.querySelector('ul');
let uListEl = slider1.querySelectorAll('li');

let pos = 0;

slider1.querySelector('.prev').onclick = function() {
    pos += width * 3;
    pos = Math.min(pos,0);
    list.style.marginLeft = pos + 'px';
}

slider1.querySelector('.next').onclick = function() {
    pos -= width * 3;
    pos = Math.max(pos,-width*(uListEl.length-cnt));
    list.style.marginLeft = pos + 'px';
}