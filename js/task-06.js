const inputEl = document.querySelector ('input#validation-input');

function onInputBlur (event, onInputBlurRemove){
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else if (event.currentTarget.value.length !== Number(inputEl.dataset.length)){
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}

inputEl.addEventListener ('blur', onInputBlur);