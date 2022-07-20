import { getRandomArrayElement, getRandomPositiveInteger, getRandomFloat } from './utils.js';

const COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const generateUsers = () => {
  const users = Array.from({length: COUNT}, (_, i) => ({
    id: i++,
    offerId: getRandomPositiveInteger(0, COUNT - 1),
    avatar: `img/avatars/user${ i < 10 ? `0${i}` : `${i}` }.png`
  }));

  const offers = Array.from({length: COUNT}, (_, i) => ({
    id: i,
    userId: i,
    title: 'Title Offer',
    price: getRandomPositiveInteger(0, Infinity),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(0, 10),
    guests: getRandomPositiveInteger(0, 20),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: getRandomArrayElement(FEATURES),
    description: 'Description',
    photos: getRandomArrayElement(PHOTOS),
  }));

  const locations = Array.from({length: COUNT}, (_, i) => ({
    id: i,
    offerId: i,
    lat: getRandomFloat(35.65000, 35.70000),
    lng: getRandomFloat(139.70000, 139.80000)
  }));

  users.forEach((user) => {
    user.offer = offers.filter((offer) => offer.id === user.offerId)[0];
    user.offer.location = locations.filter((location) => location.offerId === user.offerId)[0];
    user.offer.addres = `${user.offer.location.lat}, ${user.offer.location.lng}`;
  });

  return users;
}

export { generateUsers };
