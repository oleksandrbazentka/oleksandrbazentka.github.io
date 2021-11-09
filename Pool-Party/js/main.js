window.addEventListener('load', function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 400);
	    return false;
	});

	let headerLink = document.querySelectorAll('.list-link');
	for( let i = 0; i < headerLink.length; i++) {
		let link = headerLink[i];
		link.addEventListener('click', function() {
			let headerNav = document.querySelector('.header__nav');
			let firstImg = document.querySelector('.first__img-block');
			firstImg.style.top = '205px';
			headerNav.style.paddingTop = '230px';
		});
		}

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

	//Маска для телефона
	$('#tel').mask('+0 (000) 000 00 00', {placeholder: "Ваш телефон"});
});