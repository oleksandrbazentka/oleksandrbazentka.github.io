window.addEventListener('load', function() {
	// Нажатие на кнопку - открытие расписания
	$('.table__arrow').click(function () {
		if($(this)) {
			$(this).toggleClass('in');
			$('.items-none').slideToggle();
		} else {	
			$('.table__arrow').not(this).removeClass('in');
			$('.items-none').slideUp();
		}
    });

	// Маска для телефона
	// $('#tel').mask('+0 (000) 000 00 00', {placeholder: "Ваш телефон"});
});