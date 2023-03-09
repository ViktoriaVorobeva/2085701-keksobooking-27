const getOffers = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((responce) => responce.json())
    .then((offers) => onSuccess(offers));
};

export {getOffers};
