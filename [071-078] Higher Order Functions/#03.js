let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce((acc, curr) => acc += (Array.isArray(curr) ? curr.join("") : curr));

console.log(newArray); // Elzero
