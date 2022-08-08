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
  let data = JSON.parse(localStorage.getItem('feedback-form-state'));

  let email = document.querySelector('.feedback-form input');

  // console.log(data)
  let message = document.querySelector('.feedback-form textarea');
  // email.value = ' ';
  // console.log (data.email, data.message)
  // message.value = ' ';

  // if (email == ' ') {
  //   email.value = ' ';
     
  // }
  // if (message == ' ') {
  //   message.value = ' ';
  // }
  if (email == ' ') {
    email.value = ' ';
    message.value = data.message;
  }
  // if (message == ' ') {
  //   message.value = ' ';
  //   email.value = data.email;
  // }
  message.value = data.message;
  // email.value = data.email;
  // if (data.email == undefined) {
  //   email.value = ' ';
  //   message.value = data.message;
  // // console.log (data.email, data.message)
  // }
  // if (data.message == undefined) {
  //   message.value = ' ';
  //   email.value = data.email;
  // // console.log (data.email, data.message)
  // }

};