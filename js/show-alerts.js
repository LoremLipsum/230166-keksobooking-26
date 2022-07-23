import { isEscapeKey } from './utils.js';

const bodyNode = document.querySelector('body');

const showSuccessAlert = () => {
  const template = document.querySelector('#success').content.querySelector('.success');
  const element = template.cloneNode(true);

  const close = () => {
    element.remove();
    document.removeEventListener('keydown', onEscKeydown);
  };

  function onEscKeydown(e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }

  const onBodyClick = () => {
    close();
  };

  bodyNode.append(element);
  bodyNode.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorAlert = () => {
  const template = document.querySelector('#error').content.querySelector('.error');
  const cencelNode = template.querySelector('.error__button');
  const element = template.cloneNode(true);

  const close = () => {
    element.remove();
    document.removeEventListener('keydown', onEscKeydown);
  };

  function onEscKeydown(e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }

  const onCencelClick = () => {
    close();
  };

  const onBodyClick = () => {
    close();
  };

  bodyNode.append(element);
  bodyNode.addEventListener('click', onBodyClick);
  cencelNode.addEventListener('click', onCencelClick);
  document.addEventListener('keydown', onEscKeydown);
};

export { showSuccessAlert, showErrorAlert };
