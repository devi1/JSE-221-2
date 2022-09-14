// document.cookie = "user=Assyls"

// alert(document.cookie);

// let name = "name";
// let value = "James Bond";

// document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);


// let date =  new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=Azamat; expires="+date;

// alert(document.cookie);

// document.cookie = "user=Azamat; max-age=60; path=/catalog; domain=tilda.com; samesite=strict";

// alert(document.cookie);

// setItem(key, value);
// getItem(key);
// removeItem(key);
// clear();
// key(index);
// length;

// localStorage.setItem("test", 1);
// localStorage.setItem("test2", 2);
// localStorage.setItem("test3", 3);
// localStorage.setItem("test4", 4);


// for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     alert(`${key}: ${localStorage.getItem(key)}`);
// }

// for(let key in localStorage) {
//     alert(key);
// }


for(let key in localStorage) {
    if(!localStorage.hasOwnProperty(key)){
        continue;
    }
    alert(`${key}: ${localStorage[key]}`);
}


// sessionStorage.setItem("test", 1);

// alert(sessionStorage.getItem("test"));