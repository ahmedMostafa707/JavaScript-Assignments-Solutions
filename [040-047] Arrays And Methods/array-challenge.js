/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.length = ++counter;
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// zero = 0, counter = 4
console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

// zero = 1, counter = 3
console.log(my[zero].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"

// zero = 0, counter = 2
console.log(my[counter].slice(-counter, -(--counter)) + my[zero][zero]); // "rO"