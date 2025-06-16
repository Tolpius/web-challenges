console.clear();

function greetAlex(name) {
  if (typeof name !== "string") {
    throw new Error("name must be a String.");
  }

  console.log(`Hello ${name}`);
  console.log(`Nice to meet you ${name}`);
  console.log(`Goodbye ${name}`);
}

greetAlex("Alex"); // <-- runde Klammern heißen "führe deinen Code aus"
greetAlex("Noa");
// greetAlex();
greetAlex("asdfasdf");

function addNumbers(a, b) {
  const sum = a + b;
  return sum;
}

const returnValue = addNumbers(6, 2);
console.log(returnValue);

console.log(`34 + 8 is equal to ${addNumbers(34, 8)}`);

function pythagoras(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

const arrowPythagoras = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2);
};

const shortArrowPythagoras = (a, b) => Math.sqrt(a ** 2 + b ** 2);

console.log(shortArrowPythagoras(12, 13));
console.log(shortArrowPythagoras(3, 4));

button.addEventListener("click", () => {});
