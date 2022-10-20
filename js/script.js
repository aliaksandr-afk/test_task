let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');

    menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})