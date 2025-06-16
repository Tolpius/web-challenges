console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

window.addEventListener("load", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  output.textContent = calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  output.textContent = calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  output.textContent = calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here
const calculatePizzaGain = (pizza1Input, pizza2Input) => {
  let area1 = Math.PI * Math.pow(pizza1Input / 2, 2);
  let area2 = Math.PI * Math.pow(pizza2Input / 2, 2);
  return Math.round(((area2 - area1) / area1) * 100);
};
// Task 2: Define the function `updatePizzaDisplay` here
const updatePizzaDisplay = (pizzaElement, newSize) => {
  pizzaElement.style.width = `${(newSize / 24) * 100}px`;
};

// Task 3: Define the function `updateOutputColor` here
const updateOutputColor = (size1, size2) => {
  if (Number(size2) < Number(size1)) {
    outputSection.style.backgroundColor = "var(--red)";
  } else if (Number(size2) > Number(size1)) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "gray";
  }
};
