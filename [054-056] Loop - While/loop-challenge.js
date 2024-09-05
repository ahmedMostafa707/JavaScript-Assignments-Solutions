/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

myAdmins.push("Stop"); // Case of no "Stop" in myAdmins arry
document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div><hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;

  let count = 1;
  document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
  document.write(`<div>`);
  document.write(`<h3>Team Members: </h3>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p>- ${count++} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`<hr>`);
  document.write(`</div>`);
}

