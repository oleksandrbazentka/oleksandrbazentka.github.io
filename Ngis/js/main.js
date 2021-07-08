window.addEventListener('load', function() {
	var swiper = new Swiper(".mySwiper", {
	    slidesPerView: 3,
	    slidesPerColumn: 2,
	    spaceBetween: 30,
	    loop: true,
	    // Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
					100: {
		        slidesPerView: 2,
		        spaceBetween: 30,
		      },
		      435: {
		      	slidesPerView: 3,
		        spaceBetween: 10,
		      },
					570: {
		        slidesPerView: 3,
		        spaceBetween: 20,
		      },
		      576: {
		        slidesPerView: 2,
		        spaceBetween: 20,
		      },
          768: {
            slidesPerView: 3,
	    			slidesPerColumn: 2,
	    			spaceBetween: 20,
          },
          992: {
          	slidesPerView: 3,
          },
        },
	});

	var swiper = new Swiper(".mySwiper-second", {
	    slidesPerView: 4,
	    spaceBetween: 30,
	    loop: true,
	    navigation: {
			nextEl: '.swiper-button-next-second',
			prevEl: '.swiper-button-prev-second',
		},
		breakpoints: {
					100: {
            slidesPerView: 1,
          },
          400: {
          	slidesPerView: 2,
          	spaceBetween: 20,
          },
					576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
          	slidesPerView: 3,
          },
          1200: {
          	slidesPerView: 4,
          },
        },
	});

	var swiper = new Swiper(".mySwiper-third", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-third",
          prevEl: ".swiper-button-prev-third",
        },
      });

		var swiper = new Swiper(".say__swiper", {
	    slidesPerView: 1,
	    slidesPerColumn: 2,
	    spaceBetween: 30,
	    // Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-say',
			prevEl: '.swiper-button-prev-say',
		},
	});

	var swiper = new Swiper(".say__swiper-second", {
	  slidesPerView: 2,
	  slidesPerColumn: 2,
	  spaceBetween: 20,
	  // Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-say-second',
			prevEl: '.swiper-button-prev-say-second',
		},
		breakpoints: {
					100: {
            slidesPerView: 1,
            slidesPerColumn: 2,
          },
          480: {
          	slidesPerView: 2,
            slidesPerColumn: 2,
          },
					576: {
            slidesPerView: 2,
            slidesPerColumn: 2,
          },
        },
	});

	let menu = document.querySelector('.menu');
	let links = menu.querySelectorAll('a');
	let scrollTimeOut;

	window.addEventListener('scroll', function() {
		clearTimeout(scrollTimeOut);
		scrollTimeOut = setTimeout(onScroll, 200);
	});

	menu.addEventListener('click', function(e){
		let link = e.target;

		if(link.classList.contains('menu__item')){
			e.preventDefault();
			scrollToTarget(link.hash);
		}
	});

	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});
		}
	}

	function onScroll() {
		let pos = window.pageYOffset;
		
		for(let i = links.length - 1; i >= 0; i--){
			let link = links[i];
			let target = document.querySelector(link.hash);
			
			if((pos + window.innerHeight / 2) > target.offsetTop){
				menu.querySelector('.menu__item-active').classList.remove('menu__item-active');
				link.classList.add('menu__item-active');
				break;
			}
		}
	};

	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 90
	    }, 400);
	    return false;
	});

});