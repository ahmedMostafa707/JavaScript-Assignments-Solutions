let myString = "EElllzzzzzzzeroo";

let newArray = myString.split("").filter((curr, idx, arr) => arr.indexOf(curr) == idx).join("");

console.log(newArray);  // Elzero