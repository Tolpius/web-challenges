console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toastMessage = document.createElement("li");
  toastMessage.classList.add("toast-container__message");
  toastMessage.textContent = `Toast message ${toastContainer.children.length + 1}`;
  toastContainer.appendChild(toastMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = '';
  // Exercise: Clear the stack of toast messages
});
asd