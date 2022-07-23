import { getData } from './api.js';
import { disactivatedAdForm, activatedAdForm, sendAdForm } from './ad-form.js';
import { disactivatedFilterForm, activatedFilterForm } from './filter-form.js';
import { createPins, createMainPin } from './map.js';
import { showError } from './show-error.js';

disactivatedAdForm();
disactivatedFilterForm();

getData(
  'https://26.javascript.pages.academy/keksobooking/data',
  (pins) => {
    activatedAdForm();
    activatedFilterForm();
    createPins(pins);
    createMainPin();
    sendAdForm();
  },
  (error) => {
    showError(error);
  }
);


