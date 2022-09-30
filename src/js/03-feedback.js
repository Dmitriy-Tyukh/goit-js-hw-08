import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('input', throttle(onFormInput), 500);
refs.form.addEventListener('submit', onFormSubmit);

const FEEDBACK = 'feedback-form-state';

onFormGetValue();

function onFormInput(e) {
    e.preventDefault();
    
      const { elements: { email, message },} = e.currentTarget;
      const formSubmitValue = { Email: email.value, Message: message.value };
    
    localStorage.setItem(FEEDBACK, JSON.stringify(formSubmitValue));
}
    
function onFormSubmit(e) {
    e.preventDefault();

    const {elements: { email, message },} = e.currentTarget;

        if (!email.value || !message.value) {
            return alert('Все поля должны быть заполнены');
        }
    
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK)));
    localStorage.removeItem(FEEDBACK);
}
    
function onFormGetValue() {
    const parseGetItem = JSON.parse(localStorage.getItem(FEEDBACK));

    if (parseGetItem.Email || parseGetItem.Message) {
        refs.input.value = parseGetItem.Email;
        refs.textarea.value = parseGetItem.Message;
    }
};

// ==================   Вариант с formData   ===========
// const formData = {};
// function onFormInput(e) {
//     formData [e.target.name] = e.target.value;
//     localStorage.setItem(FEEDBACK, JSON.stringify(formData));
// }