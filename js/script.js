let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');

    menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


////////////////

const selectSingle = document.querySelector('.form__select');
const selectSingle_title = selectSingle.querySelector('.form__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.form__select-label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}