let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 13;
let adultEarly = "9:30 am";
let adultLate = "11:00 am";
let allYouth = "12:30 am";

if (runnerAge > 18 && earlyRegistration == true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegistration == true) {
  console.log(
    `Your race time is ${adultEarly} and your race number is ${raceNumber}`
  );
} else if (runnerAge > 18 && earlyRegistration == false) {
  console.log(
    `Your race time is ${adultLate} and your race number is ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your race time is ${allYouth} and your race number is ${raceNumber}`
  );
} else {
  console.log("Please see registration desk");
}
