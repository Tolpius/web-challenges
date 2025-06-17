console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function checkTos() {
  if (tosCheckbox.checked) {
    tosError.setAttribute("hidden", "");
    return true;
  } else {
    tosError.removeAttribute("hidden");
    return false;
  }
}

tosCheckbox.addEventListener("change", () => {
  checkTos();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries(formData));
  // --v-- write your code here --v--
  console.log(data);
  if (checkTos()) {
    // If the terms of service are accepted, show the success message
    successMessage.removeAttribute("hidden");
    form.reset();
    tosCheckbox.checked = false;
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
