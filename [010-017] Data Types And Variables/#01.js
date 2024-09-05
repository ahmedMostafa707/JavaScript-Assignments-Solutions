let NumberOne = 10,
    NumberTow = 20;

// Ouput
console.log(NumberOne + "" + NumberTow); // Normal Concatenate => 1020
console.log(typeof (NumberOne + "" + NumberTow)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTow}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTow}`); // Template Literals Way => String

console.log(NumberTow + "\n" + NumberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberTow}\n${NumberOne}`);
/*
  Template Literals Way
  20
  10
*/
