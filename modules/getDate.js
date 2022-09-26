import { DateTime } from './luxon.js';

const dateDisplay = () => {
  document.querySelector('.date').innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
};

export default dateDisplay;
