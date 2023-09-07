// Day of the week program

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsay",
  "Friday",
  "Saturday",
];
const today = new Date();
const dayOfTheWeek = today.getDay();

document.addEventListener("DOMContentLoaded", () => {
  const currentDayOfWeekElement = document.getElementById("dayOfWeek");
  currentDayOfWeekElement.innerText = daysOfTheWeek[dayOfTheWeek];
});

// UCT Time

const UTCTimeInMilliseconds = Date.now();

document.addEventListener("DOMContentLoaded", () => {
  const UTCTimeElement = document.getElementById("UTCTime");
  UTCTimeElement.innerText = UTCTimeInMilliseconds
});
