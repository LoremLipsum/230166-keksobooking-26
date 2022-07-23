const filterFormNode = document.querySelector('.map__filters');
const filtresSelectNodes = filterFormNode.querySelectorAll('.map__filter');
const filtresFeaturesNode = filterFormNode.querySelector('.map__features');

const disactivatedFilterForm = () => {
  filterFormNode.classList.add('map__filtres--disabled');
  filtresFeaturesNode.disabled = true;

  filtresSelectNodes.forEach((select) => {
    select.disabled = true;
  });
};

const activatedFilterForm = () => {
  filterFormNode.classList.remove('map__filtres--disabled');
  filtresFeaturesNode.disabled = false;

  filtresSelectNodes.forEach((select) => {
    select.disabled = false;
  });
};

export { disactivatedFilterForm, activatedFilterForm };

