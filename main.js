const btnShare = document.querySelector('#btn_share');
const card = document.querySelector('.card');
const share_popover=document.querySelector(".share-popover")

btnShare.addEventListener('click', () => {
  card.classList.toggle('card--share-open');
share_popover.classList.add('share-btn--popup')
});
