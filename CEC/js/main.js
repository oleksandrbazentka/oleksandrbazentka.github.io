$(document).ready(function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);

	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
    });

    $('.panel-heading-second').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading-second').not(this).removeClass('in').next().slideUp();
    });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const html = document.querySelector('html');
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
}

$('.responsive').slick({
	dots: true,
 	infinite: true,
 	speed: 300,
 	slidesToShow: 1,
  	slidesToScroll: 1,
  	responsive: [
    {
    	breakpoint: 768,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
        	dots: true,
    	}
    },
	{
	    breakpoint: 480,
	    settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	    }
    }
  ]
});

const btnOpenModal = document.querySelectorAll('.btn');
btnOpenModal.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		const modal = document.querySelector('.modal__show');
 		modal.classList.add('visible');
 		modal.classList.remove('hidden');
 		const html = document.querySelector('html');
 		html.style.overflowY = 'hidden';
	})
})

	const modalClose = document.querySelector('.modal__close');
	modalClose.addEventListener('click', function(event) {
		const modal = document.querySelector('.modal__show');
		modal.classList.add('hidden');
		modal.classList.remove('visible');
		const html = document.querySelector('html');
 		html.style.overflowY = 'scroll';
 		const modalWindow = document.querySelector('.modal');
	});

	jQuery(document).ready(function(){
	    $('#tel').mask('+380 (00) 000 00 00', {placeholder: "+380 (XX) XXX-XX-XX"});
	});	

	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 400);
	    return false;
	});

});