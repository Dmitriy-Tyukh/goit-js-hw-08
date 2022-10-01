import throttle from 'lodash.throttle';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     input: document.querySelector('[name="email"]'),
//     textarea: document.querySelector('[name="message"]'),
// };

// refs.form.addEventListener('input', onFormInput);
// refs.form.addEventListener('submit', onFormSubmit);

// const STORAGE_KEY = 'feedback-form-state';

// onFormGetValue();

// function onFormInput(e) {
//     e.preventDefault();
    
//       const { elements: { email, message },} = e.currentTarget;
//       const formSubmitValue = { Email: email.value, Message: message.value };
    
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formSubmitValue));
// }
    
// function onFormSubmit(e) {
//     e.preventDefault();

//     const {elements: { email, message },} = e.currentTarget;

//         if (!email.value || !message.value) {
//             return alert('Все поля должны быть заполнены');
//         }
    
//     e.currentTarget.reset();
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//     localStorage.removeItem(STORAGE_KEY);
// }
    
// function onFormGetValue() {
//     const parseGetItem = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     if (parseGetItem.Email || parseGetItem.Message) {
//         refs.input.value = parseGetItem.Email;
//         refs.textarea.value = parseGetItem.Message;
//     }
// };

// ==================   Вариант с formData и trottle  ===========

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

function onFormInput(e) {
    e.preventDefault();
        formData [e.target.name] = e.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    
        if (!refs.input.value || !refs.textarea.value) {
            return alert('Все поля должны быть заполнены');
        }

    e.target.reset();
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        localStorage.removeItem(STORAGE_KEY);
}
    
if (localStorage.getItem(STORAGE_KEY)) {
    try {
        formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

        for (const key in formData) {
          refs.form.elements[key].value = formData[key];
        }
    } catch (err) {
        console.log('Parse error');
    }
}

// console.log(refs.form.elements);
// refs.form.elements[name];

//============ для всіх видів інпут (радіо кнопки та чекбокси)============

// if (localStorage.getItem(STORAGE_KEY)) {
//     formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     for (const key in formData) {
//     if (
//         refs.form.elements[key].type === 'checkbox' &&
//         formData[key] === 'on'
//     ) {
//         refs.form.elements[key].checked = true;
//     } else {
//         refs.form.elements[key].value = formData[key];
//     }
//     }
// }
