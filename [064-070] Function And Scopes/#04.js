function specialMix(...data) {
  let reslt = 0;

  for(let i=0; i<data.length; i++) {
    reslt += parseInt(data[i]) || 0;
  }

  return reslt || "All Is Strings"
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings