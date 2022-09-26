import {
  formSec, contSec, listSec, listMenu, formMenu, contactMenu,
} from './declaration.js';

const navigationBar = () => {
  listMenu.addEventListener('click', () => {
    formSec.style.display = 'none';
    contSec.style.display = 'none';
    listSec.style.display = 'block';
  });

  formMenu.addEventListener('click', () => {
    formSec.style.display = 'block';
    contSec.style.display = 'none';
    listSec.style.display = 'none';
  });

  contactMenu.addEventListener('click', () => {
    formSec.style.display = 'none';
    contSec.style.display = 'block';
    listSec.style.display = 'none';
  });
};

export default navigationBar;
