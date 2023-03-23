const getOffers = (onSuccess, onFail) => fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((offers) => onSuccess(offers))
  .catch(() => {
    onFail('Произошла ошибка при загрузке. Попробуйте снова.');
  });

const sendData = (onSuccess, onFail, body) =>
  fetch('https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: body,
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      onSuccess();
    })
    .catch(() => onFail());

export {getOffers, sendData};
