import {isEscapeKey} from './util.js';

const successElementTemplate = document.querySelector('#success').content.querySelector('.success');
const errorElementTemplate = document.querySelector('#error').content.querySelector('.error');

const onMessageEscapeDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onDocumentClick = () => closeMessage();

const createSuccessMessage = () => {
  const successElement = successElementTemplate.cloneNode(true);
  document.body.append(successElement);
  document.addEventListener('keydown', onMessageEscapeDown);
  document.addEventListener('click', onDocumentClick);
  document.body.style.overflow = 'hidden';
};

const createErrorMessage = () => {
  const errorElement = errorElementTemplate.cloneNode(true);
  document.body.append(errorElement);
  document.addEventListener('keydown', onMessageEscapeDown);
  document.addEventListener('click', onDocumentClick);
  document.body.style.overflow = 'hidden';
};

function closeMessage () {
  const messageElement = document.querySelector('.error') || document.querySelector('.success');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscapeDown);
  document.removeEventListener('click', onDocumentClick);
  document.body.style.overflow = 'auto';
}

export {createSuccessMessage, createErrorMessage};
