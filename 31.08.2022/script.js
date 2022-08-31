// function User(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const jake = new User('Jake', 'Lewis');

// alert(jake.firstName);
// alert(jake.lastName);

// const damir = new User('Damir', 'Yessenbek');

// alert(damir.firstName);
// alert(damir.lastName);

// class Human{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const helen = new Human('Helen', 'World');

// alert(helen.firstName);
// alert(helen.lastName);

// const Human = {
//     init(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const chris = Object.create(Human);
// chris.init('Chris', 'Blakwood');

// alert(chris.firstName + ' ' + chris.lastName);

// function Human(firstName, lastName) {
//     return{
//         firstName,
//         lastName
//     }
// }

// function User(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const jake = new User('Jake', 'Lewis');
// const lewis = Human('Lewis', 'Jake');

// let user = new Object();
// let user = {
//     name: "John",
//     surname: "John",
//     age: 25,
//     fullName: function(){
//         return this.name + ' ' + this.surname;
//     }
// }

// alert(user.fullName());

// function Human(firstName, lastName){
//     // Определяем свойства
//     this.firstName = firstName;
//     this.lastName = lastName;

//     // Определяем метод
//     this.fullName = function(){
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const damir = new Human('Damir', 'Yessenbek');
// alert(damir.fullName());

// let myObj = new Object();

// myObj = {
//     textNumber: function(number){
//         let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//             let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
//             let twentyToNinty = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];

//             if (number > 0 && number <= 9){
//                 return oneToNine[number - 1];
//             }
//             else if (number >= 10 && number < 20){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let secondDigit = str[1];
//                 return `${tenToTwenty[secondDigit]}`;
//             }
//             else if (number >= 20 && number <= 99){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let firstDigit = str[0];
//                 let secondDigit = str[1];
//                 return `${twentyToNinty[firstDigit -  2]} ${oneToNine[secondDigit - 1]}`;
//             }
//         }
// }

// alert(myObj.textNumber(5));
// alert(myObj.textNumber(20));
// alert(myObj.textNumber(55));

// class Human{
//     constructor(){       

//         this.textNumber = function(number){
//             let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//             let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
//             let twentyToNinty = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];

//             if (number > 0 && number <= 9){
//                 return oneToNine[number - 1];
//             }
//             else if (number >= 10 && number < 20){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let secondDigit = str[1];
//                 return `${tenToTwenty[secondDigit]}`;
//             }
//             else if (number >= 20 && number <= 99){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let firstDigit = str[0];
//                 let secondDigit = str[1];
//                 return `${twentyToNinty[firstDigit -  2]} ${oneToNine[secondDigit - 1]}`;
//             }
//         }
//     }
// }

// let textNum = new Human();

// alert(textNum.textNumber(25));










// function numberToText(number){
    // let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    // let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
    // let twentyToNinty = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];

    // if (number > 0 && number <= 9){
    //     return oneToNine[number - 1];
    // }
    // else if (number >= 10 && number < 20){
    //     let str = `${number}`;
    //     str = str.split('');
    //     let secondDigit = str[1];
    //     return `${tenToTwenty[secondDigit]}`;
    // }
    // else if (number >= 20 && number <= 99){
    //     let str = `${number}`;
    //     str = str.split('');
    //     let firstDigit = str[0];
    //     let secondDigit = str[1];
    //     if (number == 20){
    //         return `${twentyToNinty[firstDigit -  2]}`;
    //     }
    //     else{
    //         return `${twentyToNinty[firstDigit -  2]} ${oneToNine[secondDigit - 1]}`;
    //     }
    // }
// }

// alert(numberToText(20));


// function numberToText(number) {
//     let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
//     let twentyToNinty = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];

//     if (number > 0 && number <= 9) {
//         return oneToNine[number - 1];
//     }
//     else if (number >= 10 && number < 20) {
//         let str = `${number}`;
//         str = str.split('');
//         let secondDigit = str[1];
//         return `${tenToTwenty[secondDigit]}`;
//     }
//     else if (number >= 20 && number <= 99) {
//         let str = `${number}`;
//         str = str.split('');
//         let firstDigit = str[0];
//         let secondDigit = str[1];
//         if (secondDigit != 0) {
//             return `${twentyToNinty[firstDigit - 2]} ${oneToNine[secondDigit - 1]}`;
//         }
//         else {
//             return `${twentyToNinty[firstDigit - 2]} `;

//         }
//     }
// }alert(numberToText(20));

// let textObject = new Object();

// textObject = {
//     numberToText: function(number) {
//         let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//         let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
//         let twentyToNinty = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];

//         if (number > 0 && number <= 9){
//             return oneToNine[number - 1];
//         }
//         else if (number >= 10 && number < 20){
//             let str = `${number}`;
//             str = str.split('');
//             let secondDigit = str[1];
//             return `${tenToTwenty[secondDigit]}`;
//         }
//         else if (number >= 20 && number <= 99){
//             let str = `${number}`;
//             str = str.split('');
//             let firstDigit = str[0];
//             let secondDigit = str[1];
//             if (number == 20){
//                 return `${twentyToNinty[firstDigit -  2]}`;
//             }
//             else{
//                 return `${twentyToNinty[firstDigit -  2]} ${oneToNine[secondDigit - 1]}`;
//             }
//         }
//     }
// }

// alert(textObject.numberToText(5));
// alert(textObject.numberToText(15));
// alert(textObject.numberToText(55));

// class NumberToText{
//     constructor(){
//         this.numTotext = function(number){
//             let oneToNine = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//             let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen', 'Twenty];
//             let twentyToNinty = ['Twenty', 'Thirty', 'Fourty', 'Fivety', 'Sixty', 'Seventy', 'Eightty', 'Ninety'];

//             if (number > 0 && number <= 9){
//                 return oneToNine[number - 1];
//             }
//             else if (number >= 10 && number <= 20){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let secondDigit = str[1];
//                 return `${tenToTwenty[secondDigit]}`;
//             }
//             else if (number >= 20 && number <= 99){
//                 let str = `${number}`;
//                 str = str.split('');
//                 let firstDigit = str[0];
//                 let secondDigit = str[1];
//                 if (number == 20){
//                     return `${twentyToNinty[firstDigit -  2]}`;
//                 }
//                 else{
//                     return `${twentyToNinty[firstDigit -  2]} ${oneToNine[secondDigit - 1]}`;
//                 }
//             }
//         }
//     }
// }

// let numberConv = new NumberToText();

// alert(numberConv.numTotext(5));
// alert(numberConv.numTotext(15));
// alert(numberConv.numTotext(55));

