window.addEventListener('load', function() {
	let hamBtn = document.querySelector('.hamburger-btn');
	hamBtn.addEventListener('click', function() {
		let hamImg = document.querySelector('.hamburger-btn__img');
		let hamMenu = document.querySelector('.hamburger-list');
		let html = document.querySelector('html');
		hamMenu.classList.toggle('ham-active');
		hamImg.classList.toggle('ham-img-active');
		html.classList.toggle('html-overflow-y-hide');
	});
});