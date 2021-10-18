window.addEventListener('load', function() {
	// Нажатие на кнопку - открытие расписания
	$('.table__arrow').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.line-none').toggleClass('line-active');
		$('.table__arrow').not(this).removeClass('in').next().slideUp();
    });

	// Маска для телефона
	$('#tel').mask('+0 (000) 000 00 00', {placeholder: "Ваш телефон"});
});