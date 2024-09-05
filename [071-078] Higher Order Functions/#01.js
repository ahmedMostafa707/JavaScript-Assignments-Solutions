let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArray = mix.map((curr) => isNaN(+curr) ? curr : ""
).reduce((acc, curr) => acc += curr);

console.log(newArray);  // Elzero