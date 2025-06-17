console.clear();
const inputElement = document.querySelector("[data-js=first-input]");
const buttonElement = document.querySelector("[data-js=button-uppercase]");

buttonElement.addEventListener("click", () => {
  const inputValue = inputElement.value;
  const upperCaseValue = inputValue.toUpperCase();
  inputElement.value = upperCaseValue;
});