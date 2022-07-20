const adFormNode = document.querySelector('.ad-form');
const fieldsetAdFormNodes = adFormNode.querySelectorAll('.ad-form__element');
const filtresNode = document.querySelector('.map__filters');
const filtresSelectNodes = filtresNode.querySelectorAll('.map__filter');
const filtresFeaturesNode = filtresNode.querySelector('.map__features');

const disactivatedAdForm = () => {
  adFormNode.classList.add('ad-form--disabled');

  fieldsetAdFormNodes.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const disactivatedFiltresForm = () => {
  filtresNode.classList.add('map__filtres--disabled');
  filtresFeaturesNode.disabled = true;

  filtresSelectNodes.forEach((select) => {
    select.disabled = true;
  });
};

const activatedAdForm = () => {
  adFormNode.classList.remove('ad-form--disabled');

  fieldsetAdFormNodes.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const activatedFiltresForm = () => {
  filtresNode.classList.remove('map__filtres--disabled');
  filtresFeaturesNode.disabled = false;

  filtresSelectNodes.forEach((select) => {
    select.disabled = false;
  });
};

export {
  disactivatedAdForm,
  disactivatedFiltresForm,
  activatedAdForm,
  activatedFiltresForm
};

