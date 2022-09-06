
// let div = document.createElement('div');
// div.className = "container";
// div.innerHTML = "<strong>Good evening!</strong><br> Nice to meet you";

// ol.before(div); 
// ol.after('Smth after OL');

// let liFirstCHild = document.createElement('li');
// liFirstCHild.innerHTML = 'I am the first LI';
// ol.prepend(liFirstCHild);


// let liSecondCHild = document.createElement('li');
// liSecondCHild.innerHTML = 'I am the second LI';
// ol.append(liSecondCHild);

// let div = document.createElement('div');
// div.className = "container";
// div.innerHTML = "Good evening";

// document.body.append(div);

// let div = document.createElement('div');
// div.className = "removeContainer";
// div.innerHTML = "After 1 sec this div will be removed";

// document.body.append(div);

// let num = +prompt("Please enter a number...");

// if(num == 4) {
//     div.remove();
// }

// setTimeout(() => div.remove(), 5000);

// two.before(one);


// let div2 = meeting.cloneNode(true);
// div2.querySelector('strong').innerHTML = "Good morning";
// meeting.after(div2);

// setTimeout(() => document.write("asdasd"), 2000);

// Созадем кнопку закрытия

let myNodeList = document.getElementsByTagName('li');
for(let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    myNodeList[i].appendChild(span);
}


// Добавляем функцию удаления

let close = document.getElementsByClassName('close');
for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


// Добавляем проверку checked 

let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle('checked');
    }
}, false);


// Создание нового элемента

function newElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.append(t);
    if (inputValue === ''){
        alert('Please enter something!');
    }else{
        document.getElementById('myUl').append(li);
    }
    document.getElementById('myInput').value = "";
    
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(txt);
    li.append(span);

    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}