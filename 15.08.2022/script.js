alert(1) //popup window

let myVar = prompt("Please enter your name", "");

let day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "thu";
        break;
    case 4:
        day = "Friday";
        break;
    case 5:
        day = "Saturday";
        break;
    case 6:
        day = "Sunday";
        break;
}

alert(day);