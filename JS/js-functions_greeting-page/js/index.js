console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 13) {
    return "Good Morning";
  } else if (hour >= 13 && hour < 19) {
    return "Good Afternoon";
  } else if (hour >= 19 && hour < 23) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  const day = new Date().getDay();
  switch (day) {
    case 0: // Sunday
    case 6: // Saturday
      return "hotpink";
    case 1: // Monday
      return "darkgray";
    default: // Tuesday - Friday
      return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
