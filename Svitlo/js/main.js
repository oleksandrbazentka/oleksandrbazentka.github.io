window.addEventListener('load', function() {
	// menu hamburger
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

	// first slider
	let ways = document.querySelector('.ways');
	var swiper = new Swiper(".mySwiper", {
		on: {
      slideChange: function () {
        // Получить текущий активный индекс
        var index = this.realIndex;
        if(window.matchMedia("(max-width: 768px)").matches) {
					(index == 1) ? ways.style.marginTop = '0px' : ways.style.marginTop = '-150px';
				} else if(window.matchMedia("(max-width: 480px)").matches) {
					(index == 1) ? ways.style.marginTop = '0px' : ways.style.marginTop = '-190px';
				} else if(window.matchMedia("(min-width: 769px)").matches) {
					ways.style.marginTop = '0px';
				}
      }
    },
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
	});

	// margin for first slider
	window.addEventListener('resize', function() {
		let slideFirst = document.querySelector('.swiper-slide-first');
		let slideThird = document.querySelector('.swiper-slide-third');
		if(this.matchMedia("(max-width: 768px)").matches) {
			ways.style.marginTop = '0';
			if(slideFirst.classList.contains('swiper-slide-active') || slideThird.classList.contains('swiper-slide-active')) {
				ways.style.marginTop = '-150px';
			} 
		} 
		else if(this.matchMedia("(max-width: 480px)").matches) {
			ways.style.marginTop = '0';
			if(slideFirst.classList.contains('swiper-slide-active') || slideThird.classList.contains('swiper-slide-active')) {
				ways.style.marginTop = '-190px';
			} 
		}
		else if(this.matchMedia("(min-width: 769px)").matches) {
			ways.style.marginTop = '0';
		}
	});

	// header fixed, absolute
	(window.matchMedia("(max-width: 1460px)").matches) ? header.style.position = 'fixed' : header.style.position = 'absolute';
	window.addEventListener('scroll', function() {
		let posTop = window.pageYOffset;
		let imgSvitlo = document.querySelector('.section__img_left-wrap');
		let navMenu = document.querySelector('.links');
		let header = document.querySelector('.header');
		(posTop > 1050) ? (imgSvitlo.classList.add('section__img_left-fixed'), navMenu.classList.add('links-fixed'))
		:
		( imgSvitlo.classList.remove('section__img_left-fixed'), navMenu.classList.remove('links-fixed'));
		(window.matchMedia("(max-width: 1460px)").matches) ? header.style.position = 'fixed' : header.style.position = 'absolute';
	});

	// Slider brands
	var swiperBrands = new Swiper(".client__swiper", {
		slidesPerView: 1,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
		loop: true,
		spaceBetween: 20,
		navigation: {
			nextEl: ".client__swiper-button-next",
			prevEl: ".client__swiper-button-prev",
		},
		breakpoints: {
					576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
				 	768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,
        	slidesPerGroup: 4,
          },
        },
  	});

	// Accordeon
	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
    });
});