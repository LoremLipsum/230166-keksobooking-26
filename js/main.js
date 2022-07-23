import { getData } from './api.js';
import {
  disactivatedAdForm,
  disactivatedFiltresForm,
  activatedAdForm,
  activatedFiltresForm
} from './form.js';
import './validate.js';
import {
  createPins,
  createMainPin
} from './map.js';
import { showError } from './show-error.js';

disactivatedAdForm();
disactivatedFiltresForm();

getData(
  'https://26.javascript.pages.academy/keksobooking/data',
  (pins) => {
    activatedAdForm();
    activatedFiltresForm();
    createPins(pins);
    createMainPin();
    console.log(pins);
  },
  (error) => {
    showError(error);
  }
);


