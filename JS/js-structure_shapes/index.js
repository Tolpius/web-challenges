import { getRandomColor } from "./utils/randomColor.js"



console.clear();



const root = document.getElementById("root");

function Circle () {
const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
});
return circle;
}



function Square() {
const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});
return square;
}

function Pentagon() {
const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});
return pentagon;
}

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();
root.append(circleElement, squareElement, pentagonElement);
