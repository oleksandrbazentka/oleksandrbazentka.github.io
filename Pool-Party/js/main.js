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
			firstImg.classList.add('top');
			headerNav.classList.add('nav-active');
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

    //ЯНДЕКС БИЛЕТЫ
    /* Настройка */
    var dealerName = 'YandexTicketsDealer';
    var dealer = window[dealerName] = window[dealerName] || [];

    dealer.push(['setDefaultClientKey', 'bca054c7-09fb-4daf-970a-74b14267883d']);
    dealer.push(['setDefaultRegionId', 11470]);

    /* Загрузка */
    (function () {
        var rnd = '?' + new Date().getTime() * Math.random();
        var script = document.createElement('script');
        var target = document.getElementsByTagName('script')[0];
        script.async = true;
        script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js' + rnd;
        target.parentNode.insertBefore(script, target);
    })();

	//Маска для телефона
	$('#tel').mask('+0 (000) 000 00 00', {placeholder: "Ваш телефон"});

	//E-mail Ajax Send
	  $("form").submit(function() { //Change
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", //Change
	      data: th.serialize()
	    }).done(function() {
	      alert("Спасибо!");
	      setTimeout(function() {
	        // Done Functions
	        th.trigger("reset");
	      }, 1000);
	    });
	    return false;
	  });
});