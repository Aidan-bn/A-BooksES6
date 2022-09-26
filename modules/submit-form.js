import getLocalStorageData from './storage.js';

const submitForm = (title, author, awesomeBook, bookList) => {
  const data = JSON.parse(localStorage.getItem('bookdata'));
  if (data != null && data.length > 0) {
    bookList = data;
  }

  const data2 = { title, author };
  bookList.push(data2);
  localStorage.setItem('bookdata', JSON.stringify(bookList));
  document.getElementById('book-form').submit();
  getLocalStorageData(awesomeBook);
  window.location.reload(true);
};

export default submitForm;
