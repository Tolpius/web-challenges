console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries(formData));
    console.log(data);

    event.target.reset();
    event.target.elements.firstName.focus();
    console.log(`the age-badness-sum of ${data.firstName} is ${Number(data.age) + Number(data.badness)}`);
});