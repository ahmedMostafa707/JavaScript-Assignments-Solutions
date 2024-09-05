function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100) {
    console.log("Age Out Of Range");
    return;
  }

  const monthsInYear = 12;
  const weeksInYear = 52;
  const daysInYear = 365;  // not considering leap years
  const hoursInYear = daysInYear * 24;
  const minutesInYear = hoursInYear * 60;
  const secondsInYear = minutesInYear * 60;

  console.log(`Age In Months ${theAge * monthsInYear}`);
  console.log(`Age In Weeks ${theAge * weeksInYear}`);
  console.log(`Age In Days ${theAge * daysInYear}`);
  console.log(`Age In Hours ${theAge * hoursInYear}`);
  console.log(`Age In Minutes ${theAge * minutesInYear}`);
  console.log(`Age In Secondes ${theAge * secondsInYear}`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

