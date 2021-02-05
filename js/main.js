var popup = document.querySelector('.popup-fade');
var careBtn = document.querySelector('.header__btn_care');
var noneSc = document.querySelector('.none-scroll');
var body = document.querySelector('body');

careBtn.onclick = function() {
	body.classList.add('none-scroll');
}

$(document).ready(function($) {
	$('.header__btn_care').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
			$('body').removeClass('none-scroll');					
		}
	});
});

const swiper = new Swiper('.swiper-container', {
  loop: true,

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