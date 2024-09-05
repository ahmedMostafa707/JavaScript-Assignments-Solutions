let start = 0;
let swappedName = "elZerO";

// Output
// "ELzERo"

swappedName = swappedName.split("");

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    swappedName[i] = swappedName[i].toUpperCase();
  } else {
    swappedName[i] = swappedName[i].toLowerCase();
  }
}

console.log(swappedName.join(""));
