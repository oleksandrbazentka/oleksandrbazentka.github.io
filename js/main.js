var popup = document.querySelector('.popup-fade');
var careBtn = document.querySelector('.header__btn_care');
var noneSc = document.querySelector('.none-scroll');
var body = document.querySelector('body');

careBtn.onclick = function() {
	body.classList.add('none-scroll');
}

$(document).ready(function($) {
	$('.header__btn_care').click(function() {
		$('.popup-fade').show();
		return false;
	});	
	
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').hide();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).hide();
			$('body').removeClass('none-scroll');					
		}
	});
});

const swiperBig = new Swiper('.swiper-container-big', {
  autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});


const swiper = new Swiper('.swiper-contaner-second', {
	loop: true,
  	autoplay: {
	   delay: 4000,
	   disableOnInteraction: false,
	 },

 	// If we need pagination
  	pagination: {
   		el: '.swiper-pagination',
  	},

  	// Navigation arrows
  	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	}
});

var switchBtn = document.querySelector('.check');
var map = document.querySelector('.map');
var mapSecond = document.querySelector('.map__second');

switchBtn.onclick = function() {
	document.getElementById('map').classList.toggle('dis-none');
	document.getElementById('mapSecond').classList.toggle('dis-block');
	document.querySelector('.buy__text').classList.toggle('grey-size');
	document.querySelector('.buy__text-second').classList.toggle('white-size');
}