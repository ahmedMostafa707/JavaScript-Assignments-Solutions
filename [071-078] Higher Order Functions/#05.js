let nums = [2, 12, 11, 5, 10, 1, 99];

console.log(nums.reduce((acc, curr) => curr % 2 ? acc += curr : acc *= curr  , 1))  // 500