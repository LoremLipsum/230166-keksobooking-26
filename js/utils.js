const isEscapeKey = (e) => e.key === 'Escape';

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function getRandomFloat (a, b, size = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return result.toFixed(size);
};

const checkLength = (string, len = 10) => {
  return string.length <= len;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

function chunkArray(array, chunkSize) {
  const result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

function getRandomSet(min, max, size) {
  const res = new Set();

  while (res.size < size) {
    res.add(getRandomPositiveInteger(min, max));
  }

  return res;
}

function debounce(callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  getRandomPositiveInteger,
  checkLength,
  getRandomArrayElement,
  getRandomFloat,
  isEscapeKey,
  chunkArray,
  getRandomSet,
  debounce,
};
