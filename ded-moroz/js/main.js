window.addEventListener('load', function() {
	const btnOpenModalFirst = document.querySelectorAll('.btn__modal_first');
	const btnOpenModalSecond = document.querySelector('.btn__modal_second');

	for(let i = 0; i < btnOpenModalFirst.length; i++) {
		btnOpenModalFirst[i].addEventListener('click', openModalFirst);
	}

	btnOpenModalSecond.addEventListener('click', openModalSecond);
	function openModalFirst() {
		const modal = document.querySelector('.modal-first');
	 	modal.classList.add('visible');
	 	modal.classList.remove('hidden');
	 	const html = document.querySelector('html');
	 	html.style.overflowY = 'hidden';	
	};

	function openModalSecond() {
		const modal = document.querySelector('.modal-second');
	 	modal.classList.add('visible');
	 	modal.classList.remove('hidden');
	 	const html = document.querySelector('html');
	 	html.style.overflowY = 'hidden';	
	};

	const modalClose = document.querySelectorAll('.modal__close');
	for(let i = 0; i < modalClose.length; i++) {
		modalClose[i].addEventListener('click', function(event) {
			const modal = document.querySelectorAll('.modal__show');
			for(let j = 0; j < modal.length; j++) {
				modal[j].classList.add('hidden');
				modal[j].classList.remove('visible');
			};
			const html = document.querySelector('html');
	 		html.style.overflowY = 'scroll';
		});
	}

	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const html = document.querySelector('html');
	hamburger.addEventListener("click", mobileMenu);
	function mobileMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	}
});