import { turnAdFormOn, turnAdFormOff } from './form.js';
import {setUserFormSubmit} from './user-form.js';
import {initMap, setOnMapLoad, setOnMainPinMove, setAdPins} from './map.js';
import './slider.js';
import {getOffers} from './api.js';
import {createSuccessMessage, createErrorMessage} from './submit-message.js';

const centerCoordinates = {
  lat: 35.66376,
  lng: 139.7839,
};
const MAP_SCALE = 12;

setOnMapLoad(() => {
  turnAdFormOn();
  setOnMainPinMove();
  getOffers(setAdPins);
});

turnAdFormOff();
initMap(centerCoordinates, MAP_SCALE);

setUserFormSubmit(createSuccessMessage, createErrorMessage);

