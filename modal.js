const buttonOpen = document.querySelector('.search-hotels-button');
const buttonClose = document.querySelector('.modal-close-button');
const dialog = document.querySelector('.dialog');

buttonOpen.addEventListener('click', () => {
  dialog.showModal();
});

buttonClose.addEventListener('click', () => {
  dialog.close();
});
