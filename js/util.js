const onError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = '100';
  errorContainer.style.position = 'absolute';
  errorContainer.style.left = '0';
  errorContainer.style.top = '0';
  errorContainer.style.right = '0';
  errorContainer.style.padding = '10px 3px';
  errorContainer.style.fontSize = '30px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = 'red';
  errorContainer.style.color = 'white';

  errorContainer.textContent = message;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, 5000);
};

function getMassiveRandom(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getMassiveRandom,
  getRandomPositiveInteger,
  getRandomArrayElement,
  getRandomPositiveFloat,
  isEscapeKey,
  onError
};
