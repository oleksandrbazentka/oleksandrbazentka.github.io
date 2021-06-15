$(document).ready(function () {
	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});