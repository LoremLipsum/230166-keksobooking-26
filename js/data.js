import { getRandomArrayElement, getRandomPositiveInteger, getRandomFloat, getRandomArray } from './utils.js';

const COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const Coords = {
  LAT: {
    min: 35.65000,
    max: 35.70000
  },
  LNG: {
    min: 139.70000,
    max: 139.80000
  }
};

const generateAds = () => {
  const location = {
    lat: getRandomFloat(Coords.LAT.min, Coords.LAT.max),
    lng: getRandomFloat(Coords.LNG.min, Coords.LNG.max)
  };

  const adds = Array.from({length: COUNT}, (_, i) => ({
    user: {
      avatar: `img/avatars/user${ i < 10 ? `0${i}` : `${i}` }.png`
    },
    offer: {
      title: 'Title Offer',
      price: getRandomPositiveInteger(0, 100),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 20),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArray(FEATURES, getRandomPositiveInteger(0, FEATURES.length)),
      description: 'Description',
      photos: getRandomArray(PHOTOS, PHOTOS.length),
      address: `${location.lat}, ${location.lng}`
    },
    location
  }));

  return adds;
};

export { generateAds };
