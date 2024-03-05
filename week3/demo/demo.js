"use strict";
const arr = [1, 2, 3, 4, 5];

console.log(arr);
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNumbers(2, 4));

const arr2 = arr.map((elem) => elem * 10);
console.log(arr2.filter((elem) => elem === 30));

let num1 = 8;
let str1 = num1.toString();
let str2 = "23";
str2 = parseInt(str2);

const newArr = [...arr, ...arr2];
console.log(newArr);

const obj1 = {a: "1"}
const obj2 = {b: "2"}
console.log({...obj1, ...obj2});