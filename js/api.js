import {setAdPins} from './map.js';

const getOffers = () => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((offers) => setAdPins(offers));
};

export {getOffers};
