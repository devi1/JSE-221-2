// let student = {
//     name: 'Rysbek',
//     age: 26,
//     courses: ['frontend', 'backend', 'design'],
//     hello(){
//         alert('Hello' );
//     },
//     future: undefined
// }

// let json = JSON.stringify(student);
// alert(JSON.stringify(student));

// alert(typeof json);
// alert(json);

// json = JSON.parse(student);

// alert(typeof json);
// alert(json);

// // alert(JSON.stringify([5, 6, 44, 5465]));

// let people = {
//     type: 'Homosapiense',
//     kazakhs: {
//         placement: 'Asia',
//         count: '18mln'
//     }
// }

// alert(JSON.stringify(people));

// let requestURL = 'https://jsonplaceholder.typicode.com/posts';
// let request = new XMLHttpRequest();

// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// smth = request.responseText;

// alert(smth);

// async function get(){
//     let url = 'https://jsonplaceholder.typicode.com/posts';
//     let obj = await(await fetch(url)).json();
//     console.log(obj);
// }
// get();

// let disciplines = "[1,2,3,4,5]";

// disciplines = JSON.parse(disciplines);
// alert(disciplines[3]);

// let userMassive = '{"name":"Rysbek","age":26,"courses":["frontend","backend","design"]}'

// userMassive = JSON.parse(userMassive);

// alert(userMassive.age);

// function changeByDoc(){
//     let request = new XMLHttpRequest();
//     request.onload = function(){
//         document.getElementById("change").innerHTML = this.responseText
//     }
//     request.open('GET', "change.txt");
//     request.send();
// }

// let request = new XMLHttpRequest();

// request.onload = function() {
//     let xmlReq = this.responseXML;
//     let tags = xmlReq.getElementsByTagName("TITLE");
//     let text = "";
//     console.log(tags);
//     for(let i = 0; i < tags.length; i++) {
//         text = text + tags[i].childNodes[0].nodeValue + "<br>";
//     }
//     document.getElementById("change").innerHTML = text;
// }
// request.open("GET", "catalog.xml");
// request.send();

// function changeDoc(){
//     let request = new XMLHttpRequest();
//     request.onload = function(){
//         readXml(this);
//     }
//     request.open("GET", "catalog.xml");
//     request.send();
// }

// function readXml(xml){
//     let xmlDoc = xml.responseXML;
//     let tags = xmlDoc.getElementsByTagName("CD");
//     let table = "<tr><th>Artists</th><th>Title</th></tr>"
//     for(let i=0; i<tags.length; i++){
//         table += "<tr><td>" + 
//         tags[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
//         "</td><td>" + 
//         tags[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
//         "</td></tr>";
//     }
//     document.getElementById("change").innerHTML = table;
// }

// Реализовать таблицу с 4 столбцами. Взять данные с XML файла