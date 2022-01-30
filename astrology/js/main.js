window.addEventListener('load', function() {
	// ЗАКРЫТИЕ КРУГЛОГО ПОПАПА
	const circleClose = document.querySelector('.btn-close');
	circleClose.addEventListener('click', () => {
		const circleSentence = document.querySelector('.result__sentence-wrap');
		circleSentence.classList.add('sentence-close');
	});
	//

	//PARALLAX
	const parallaxFunc = () => {
		var controller = new ScrollMagic.Controller();
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 425})
		.setPin("#pin1")
		.addTo(controller);
	};

	parallaxFunc();	
	//

	// ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 100
	    }, 400);
	    return false;
	});
	//

	// ДОБАВЛЕНИЕ К ШАПКЕ ФОНА
	window.addEventListener('scroll', headerScroll);
	function headerScroll() {
		let posTop = window.pageYOffset;
		{
			if(posTop > 50) {
				const header = document.querySelector('.header');
				header.classList.add('header-active');
			} else {
				header.classList.remove('header-active');
			}
		}
	};
	headerScroll();
	//

	// ОТКРЫТИЕ ПОПАПОВ
	const btnOpenModal = document.querySelector('.btn__modal');
	btnOpenModal.addEventListener('click', function(e) {
		e.preventDefault();
		const modal = document.querySelector('.modal__show');
 		modal.classList.add('visible');
 		modal.classList.remove('hidden');
 		const html = document.querySelector('html');
 		html.style.overflowY = 'hidden';
	});

	const btnOpenModalCourse = document.querySelectorAll('.btn-course');
	btnOpenModalCourse.forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			const modal = document.querySelector('.modal__show_second');
	 		modal.classList.add('visible');
	 		modal.classList.remove('hidden');
	 		const html = document.querySelector('html');
	 		html.style.overflowY = 'hidden';
		})
	});
	//

	// ЗАКРЫТИЕ ПОПАПОВ
	const modalClose = document.querySelectorAll('.modal__close');
	modalClose.forEach((close) => {
		close.addEventListener('click', function() {
			const modal = document.querySelectorAll('.modal__show');
			modal.forEach((popup) => {
				popup.classList.add('hidden');
				popup.classList.remove('visible');
			});
			const html = document.querySelector('html');
	 		html.style.overflowY = 'scroll';
	 		const modalWindow = document.querySelector('.modal');
		})
	});
	//

	// МЕНЮ ХАМБУРГЕР
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const html = document.querySelector('html');
	hamburger.addEventListener("click", mobileMenu);
	function mobileMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	}
	//

	// ПРИ ЗАКРЫТИЕ МЕНЮ ПРИ КЛИКЕ НА ССЫЛКУ-ЯКОРЬ
	const navLink = document.querySelectorAll(".list__item a");
	navLink.forEach(n => n.addEventListener("click", closeMenu));
	function closeMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	}
	//

	// ВЗАИМОДЕЙСТВИЕ С ВИДЕО
	$('.video-section__play').parent().click(function () {
	    if($(this).children(".video-section__play").get(0).paused){
	        $(this).children(".video-section__play").get(0).play();
	        $(this).children('.video-section__back').fadeOut();
	        $(this).children('.video-section__text').fadeOut();
	        $(this).children(".video-section__playpause").fadeOut();
	    }else{
	        $(this).children(".video-section__playpause").fadeIn();
	        $(this).children('.video-section__back').fadeIn();
	        $(this).children('.video-section__text').fadeIn();
	    }
	}); 
	//

	// СЛАЙДЕР
	$('.responsive').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  arrows: false,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
	});
	//

	const sliderBtns = document.querySelectorAll('.slider__btn');
	sliderBtns.forEach((element) => {
		element.addEventListener('click', function(e) {
			e.preventDefault();
			if(element.textContent == 'Читать дальше') {
				element.textContent = 'Скрыть';
			}	else {
				element.textContent = 'Читать дальше';
			}
		});
	}); 

	// СЛАЙДЕР НА ТЕЛЕФОНЕ
	$('.advantages__slider').slick({
		infinite: false
	});
	//

	// АНИМАЦИИ
	AOS.init({
	  disable: 'mobile'
	});
	//

	// DROPDOWN
	const dropdownBtn = document.querySelector('.btn-dropdown');
	dropdownBtn.addEventListener('click', dropdownFunc);
	function dropdownFunc() {
		let dropdownImg = document.querySelector('.btn-dropdown img');
		let items = document.querySelectorAll('.result__item-drop');
		for(let i = 0; i < items.length; i++) {
			let item = items[i];
			if(item.style.display == 'none'){
		  	item.style.display = "flex";
		  	dropdownImg.style.transform = 'rotate(180deg)';
		  } else{
		  	item.style.display = "none";
		  	dropdownImg.style.transform = 'rotate(0deg)';
		  }
		}
	};

	dropdownFunc();

	if(window.innerWidth > 992) {
		let items = document.querySelectorAll('.result__item-drop');
		for(let i = 0; i < items.length; i++) {
			items[i].removeAttribute('style');
		}
	}

	$(".slider__text").readMore({
    readMoreLabel: "Читать дальше",
    readLessLabel: "Скрыть",
    lines: 3,
  });
	
});