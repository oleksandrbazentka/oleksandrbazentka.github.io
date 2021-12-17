window.addEventListener('load', function() {
	const $page = $('html, body');
	$('.nav__item').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 95
	    }, 400);
	    return false;
	});

	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const html = document.querySelector('html');
	const btnOpenModalFirst = document.querySelectorAll('.btn__modal_first');
	const btnOpenModalSecond = document.querySelector('.btn__modal_second');

	for(let i = 0; i < btnOpenModalFirst.length; i++) {
		btnOpenModalFirst[i].addEventListener('click', openModalFirst);
	}

	btnOpenModalSecond.addEventListener('click', openModalSecond);

	function openModalFirst(e) {
		e.preventDefault();
		const modal = document.querySelector('.modal-first');
	 	modal.classList.add('modal-active');
	 	const html = document.querySelector('html');
	 	const overlay = document.querySelector('.overlay');
	 	overlay.classList.add('over-active');	
	 	html.style.overflowY = 'hidden';
	 	hamburger.style.display = 'none';	
	};

	function openModalSecond(e) {
		e.preventDefault();
		const modal = document.querySelector('.modal-second');
	 	modal.classList.add('modal-active');
	 	const overlay = document.querySelector('.overlay');
	 	overlay.classList.add('over-active');	
	 	const html = document.querySelector('html');
	 	html.style.overflowY = 'hidden';
	 	hamburger.style.display = 'none';		
	};

	const modalClose = document.querySelectorAll('.modal__close');
	for(let i = 0; i < modalClose.length; i++) {
		modalClose[i].addEventListener('click', function(event) {
			const modal = document.querySelectorAll('.modal');
			for(let j = 0; j < modal.length; j++) {
				modal[j].classList.remove('modal-active');
			};
			const overlay = document.querySelector('.overlay');
		 	overlay.classList.remove('over-active');
			const html = document.querySelector('html');
	 		html.style.overflowY = 'scroll';
	 		hamburger.style.display = 'block';	
		});
	}

	const overlay = document.querySelector('.overlay');
	overlay.addEventListener('click', function() {
	 	this.classList.remove('over-active');	
		const modal = document.querySelectorAll('.modal');
		for(let j = 0; j < modal.length; j++) {
			modal[j].classList.remove('modal-active');
		};
		const html = document.querySelector('html');
 		html.style.overflowY = 'scroll';
 		hamburger.style.display = 'block';	
	});

	hamburger.addEventListener("click", mobileMenu);
	function mobileMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	}

	const navLink = document.querySelectorAll(".nav-item a");
	navLink.forEach(n => n.addEventListener("click", closeMenu));
	function closeMenu() {
	    hamburger.classList.remove("active");
	    navMenu.classList.remove("active");
	    html.style.overflowY = 'scroll';
	};
});