let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
// result = 11 + 20 + 80 - 11 = 100

// a = 12, b = 21, c = 81
// console.log(`a = ${a}, b = ${b}, c = ${c}`);

console.log(++a + -b + +c++ - -a++ + +a);
// result = 13 + (-21) + 81 - (-13) + 14 = 100

// a = 14, b = 21, c = 82
// console.log(`a = ${a}, b = ${b}, c = ${c}`);

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// result = 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100

// a = 12, b = 22, c = 81
// console.log(`a = ${a}, b = ${b}, c = ${c}`);

/* 
  [++a]
  - explain: pre-increment

  [a++, b++, c++] 
  - explain: post-increment

  [--a, --c]
  explain: pre-decrement

  [+]
  - explain: addition operator

  [-]
  - explain: subtraction operator

  [*]
  - explain: multiplication operator

  [+a, +b, +c]
  - explain: unary plus operators

  [-a, -b]
  - explain: unary minus operators
*/
