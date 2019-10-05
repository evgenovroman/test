'use strict';

let woo = 12;

console.log(4/0);
console.log('string'*9);

let persone = {
    name: "Jonh",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum', 'png' , 'apple.bmp'];

console.log(arr[1]);

// alert("Hello,world!");

// let answer = confirm("Are you here?");
// console.log(answer);

let answer = +prompt("Есть ли вам 18?", "Да");
console.log(typeof (answer));

console.log("array" + "-it's object");