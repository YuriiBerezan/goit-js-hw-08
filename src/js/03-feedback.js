import '../css/common.css';
import '../css/03-feedback.css'

import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-msg';
// const formData = {};
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
//   email: document.querySelector('.feedback-form input'),
  
// };
// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextareaInput, 200));
// populateTextarea();
 

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY)
  
// }


// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
//   console.log(message)
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
dataFromLocalStorage();
const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  // console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }

function dataFromLocalStorage() {
    
  let data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    
    if (data) {

    email.value = data.email;
    message.value = data.message;
     }
    
    // data = ' ';

};