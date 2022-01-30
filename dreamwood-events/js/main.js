window.addEventListener('load', function() {
	let $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top + 220
	    }, 400);
	    return false;
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin:20,
		center: true,
		autoWidth: true
	});

	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const html = document.querySelector('html');
	const mainTitle = document.querySelector('.tematic__title');
	hamburger.addEventListener("click", mobileMenu);
	function mobileMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	    mainTitle.classList.toggle('z-index-low');
	}

	const navLink = document.querySelectorAll(".list__item a");
	navLink.forEach(n => n.addEventListener("click", closeMenu));
	function closeMenu() {
	    hamburger.classList.remove("active");
	    navMenu.classList.remove("active");
	    html.style.overflowY = 'scroll';
	}
});