const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


const onInputChange = (event) =>
    inputEl.value !== ''
        ? spanEl.textContent = inputEl.value
        : spanEl.textContent = "Anonymous";

inputEl.addEventListener('input', onInputChange);