const isEscapeKey = (e) => e.key === 'Escape';

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomFloat = (a, b, size = 5) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return result.toFixed(size);
};

const checkLength = (string, len = 10) => string.length <= len;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const chunkArray = (items, chunkSize) => {
  const chunks = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }

  return chunks;
};

const getRandomSet = (min, max, size) => {
  const items = new Set();

  while (items.size < size) {
    items.add(getRandomPositiveInteger(min, max));
  }

  return items;
};

const getRandomArray = (items, size) => {
  const arr = getRandomSet(0, items.length - 1, size);
  const randomItems = [];

  arr.forEach((index) => {
    randomItems.push(items[index]);
  });

  return randomItems;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getRandomPositiveInteger,
  checkLength,
  getRandomArrayElement,
  getRandomFloat,
  isEscapeKey,
  chunkArray,
  getRandomSet,
  getRandomArray,
  debounce,
};
