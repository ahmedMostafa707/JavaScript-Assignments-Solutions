let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newArray = numsAndStrings.filter(curr => !isNaN(+curr)
).map(curr => -curr);

console.log(newArray)// [-1, -10, 10, 20, -5, -3]