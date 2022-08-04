import '../css/common.css';
import '../css/03-feedback.css'

import throttle from 'lodash.throttle';

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
    // data = '';
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  let email = document.querySelector('.feedback-form input');
    let message = document.querySelector('.feedback-form textarea');
  // data = '';
  // if (data) {
    if (email != ' ' & message != ' ') {
      email.value = data.email;
      message.value = data.message;
    // }
  }
  
  
    
     
    
    // data = ' ';

};