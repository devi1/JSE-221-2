// function clickButton(){
//     let inputValue = document.someform.clcikButton.value;
//     let inputName = document.someform.clcikButton.name;
//     document.getElementById("divForm").innerHTML = "You've clicked me! My name is " + inputName + "! In my value is " + inputValue + "!"; 
// }  // Функция которая вызывается после клика на инпут(button) и получает от формы значение нашей кнопки и имя кнопки которое мы задали. И выводит все это

// function chageStateOfCheckbox(){
//     document.switchState.checkbox.click();
// } // Функция которая меняет состояние чекбокса(Флажка) с true на false и обратно.

// function clickButton(){   // Функция клика по кнопке
//     if(document.radioSwitch.gender[0].checked){  // проверка состояния переключателя
//         document.radioSwitch.gender[1].click();  // Изменение состояния переключателя
//     }
//     else{
//         document.radioSwitch.gender[0].click();  // Изменение состояния переключателя
//     }
// }

// function inpsectValue(){
//     let index = document.selects.items.selectedIndex;
//     let someText = "Length:" + document.selects.items.length + 
//     "\nSelected: " + document.selects.items.options[index] + 
//     "\nValue: " + document.selects.items.options[index].value + 
//     "\nIndex: " + document.selects.items.options[index].index;
//     alert(someText);
// }

// function showAllInfo(){
//     let allInfo = "Surname: " + document.tables.surname.value + 
//     "\nName: " + document.tables.name.value +
//     "\nAge: " + document.tables.age.value;
//     alert(allInfo);
// }

//let dynamicalMessage = "It shows to you some message that appears from first radio button";

// function radioEdit(form, value){
//     if(value=="dynamical"){
//         form.letter.value = "It shows to you some message that appears from first radio button";
//     }
//     else{
//         form.letter.value = "Now I clicked on a radio button with value statival";
//     }
// }

function logIn(){
    if(document.test.pass.value == document.test.pass1.value){
        //alert("welcome: " + document.test.id.value + "\n Your pass is: " + document.test.pass.value);
        alert(`Welcome: ${document.test.id.value}  Your pass is: ${document.test.pass.value}`);
    }
    else{
        alert("Try one more time");
    }
}