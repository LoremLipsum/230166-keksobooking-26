const TipesLocal = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const createAd = ({user, offer}) => {
  const templateFragment = document.querySelector('#card').content;
  const template = templateFragment.querySelector('.popup');
  const card = template.cloneNode(true);
  const features = card.querySelector('.popup__features');
  const photos = card.querySelector('.popup__photos');
  const description = card.querySelector('.popup__description');

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = TipesLocal[offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__avatar').src = user.avatar;

  features.innerHTML = '';
  photos.innerHTML = '';

  if (offer.features) {
    offer.features.forEach((feature) => {
      const item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add(`popup__feature--${feature}`);
      features.append(item);
    });
  }

  if (offer.photos) {
    offer.photos.forEach((photo) => {
      const item = document.createElement('img');
      item.classList.add('popup__photo');
      item.src = photo;
      photos.append(item);
    });
  }

  if (offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }

  return card;
};

export { createAd };

