const clearButton = document.querySelector('[data-form-clear]');
const form = document.querySelector('[data-form]');
const message = document.querySelector('.message');

clearButton.addEventListener('click', () => {
    form.reset();
    const submitButton = document.querySelector('.submit__btn');
    submitButton.disabled = true;
    message.textContent = '';
});