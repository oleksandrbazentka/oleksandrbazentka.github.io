window.addEventListener('load', function() {
	//TABS
	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
	});	

	//SLIDER
	$('.responsive').slick({
	  dots: true,
      arrows: true,
      appendDots: $(".slide-m-dots"),
      prevArrow: $(".slide-m-prev"),
      nextArrow: $(".slide-m-next"),
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	// ПРОВЕРКА ОБЪЕКТА
	let checkObjectBtn = document.querySelector('.first__submit');
	checkObjectBtn.addEventListener('click', function(e) {
		e.preventDefault();
		let preload = document.querySelector('.found__preload-block');
		let objects = document.querySelector('.found__block');
		preload.classList.add('preload-active');

		if(!(objects.classList.contains('found-active'))) {
			let b = new Promise(function( resolve, reject ) {
				setTimeout(function(){
					resolve(preload.classList.remove('preload-active'));
				}, 4000);
			});
			b.then(function() {
				objects.classList.add('found-active');
			});
		} else {
			objects.classList.remove('found-active');
			let b = new Promise(function( resolve, reject ) {
				setTimeout(function(){
					resolve(preload.classList.remove('preload-active'));
				}, 4000);
			});
			b.then(function() {
				objects.classList.add('found-active');
			});
		}
	});

	//MENU-GAMBURGER
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const html = document.querySelector('html');
	hamburger.addEventListener("click", mobileMenu);
	function mobileMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	};
});