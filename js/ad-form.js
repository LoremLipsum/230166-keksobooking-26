// import { validateAdForm } from './validate-ad-form.js';
import { sendData } from './api.js';
import { showSuccessAlert, showErrorAlert } from './show-alerts.js';

const adFormNode = document.querySelector('.ad-form');
const fieldsetAdFormNodes = adFormNode.querySelectorAll('.ad-form__element');

const onAdFormSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  sendData(
    'https://26.javascript.pages.academy/keksobooking',
    () => {
      showSuccessAlert();
    },
    () => {
      showErrorAlert();
    },
    formData
  );
};

const activatedAdForm = () => {
  adFormNode.classList.remove('ad-form--disabled');

  fieldsetAdFormNodes.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const disactivatedAdForm = () => {
  adFormNode.classList.add('ad-form--disabled');

  fieldsetAdFormNodes.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const sendAdForm = () => {
  // if (validateAdForm()) {
    adFormNode.addEventListener('submit', onAdFormSubmit);
  // }
};

export { activatedAdForm, disactivatedAdForm, sendAdForm };
