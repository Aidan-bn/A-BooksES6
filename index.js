import navigationBar from './modules/route.js';
import getLocalStorageData from './modules/storage.js';
import submitForm from './modules/submit-form.js';
import deleteBooks from './modules/remove-book.js';
import dateDisplay from './modules/getDate.js';

const bookList = [];
const awesomeBook = document.getElementById('awesome-book');
awesomeBook.style.display = 'none';

document.getElementById('bttn').onclick = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  submitForm(title.value, author.value, awesomeBook, bookList);
};

if (localStorage.getItem('bookdata') != null) {
  getLocalStorageData(awesomeBook);
}

const deleteBookObj = document.querySelectorAll('.remove-book');
deleteBookObj.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    deleteBooks(trigger.dataset.bookid, awesomeBook);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  navigationBar();
});

window.onload = dateDisplay();
