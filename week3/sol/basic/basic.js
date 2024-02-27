"use strict"
/*
* 
*/

// undefined = 1
// console.log(undefined);

/*
* variable type and conversion
*/
const num = 2222;
let str1 = "blablabla";
let num1 = "23";
num1 = parseInt(num1);
str1 = num1.toString();
console.log(str1, num1);

/**
 * functions and arrow functions
 */

function addTwoNumber(num1, num2) {
    return num1 + num2;
}

const sum2Num = (num1, num2) => {
    return num1 + num2;
}

/**
 * array
 */
const numbers = [1,2,3,4,5]
const seq = Array(5).fill(1); // [1] * 5 in python
console.log(numbers.filter(num => num !== 3));
console.log(numbers.map(num => num*2));
numbers.forEach(num => {
    console.log(num + "?");
});

for (const [i, val] of numbers.entries()) {
    console.log(i, val);
}

const maps = new Map();
maps.set(1, "hi");
maps.set(2, "hello");
for (const [key, val] of maps.entries()) {
    console.log(key, val);
}

/**
 * spread operator
 */
const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 3,
    d: 4
}
console.log({...obj1, ...obj2});

const copyObj1 = {...obj1};
const copyObj2 = JSON.parse(JSON.stringify(obj1));
