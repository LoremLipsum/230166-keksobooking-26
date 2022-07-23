const adFormNode = document.querySelector('.ad-form');

// pristine.addValidator(elem, function(value) {
//   // here `this` refers to the respective input element
//   if (value.length && value[0] === value[0].toUpperCase()){
//       return true;
//   }
//   return false;
// }, "The first character must be capitalized", 2, false);

const validateAdForm = () => {
  // const pristine = new Pristine(adFormNode, {
  //   classTo: 'ad-form__element',
  //   errorTextParent: 'ad-form__element',
  //   errorTextClass: 'field-error'
  // });

  // return pristine.validate();
};

export { validateAdForm };
