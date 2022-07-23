import { getData, sendData } from 'api.js';
// import { generateAds } from './data.js';
// import { renderAds } from './render-ads.js';
import {
  disactivatedAdForm,
  disactivatedFiltresForm,
  activatedAdForm,
  activatedFiltresForm
} from './form.js';
import './validate.js';
import { createPins } from './map.js';

// const ads = generateAds();
// renderAds(ads[0]);


disactivatedAdForm();
disactivatedFiltresForm();

getData(
  'https://26.javascript.pages.academy/keksobooking/data',
  (pins) => {
    activatedAdForm();
    activatedFiltresForm();
    createPins(pins);
    console.log(pins);
  },
  (error) => {
    console.log(error);
  }
);
createPins();

