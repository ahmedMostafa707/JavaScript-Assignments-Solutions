/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a[a.indexOf("Elzero")].toLowerCase() +
    a.substr(a.indexOf("lzero"), 5).toUpperCase() +
    a.substr(a.indexOf(" Web"), 4).toUpperCase() +
    a.substr(a.indexOf(" Schoo"), 6).toUpperCase() +
    a[a.indexOf("School") + 5].toLowerCase()
); // eLZERO WEB SCHOOl
