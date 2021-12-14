window.addEventListener('load', function() {
	// Нажатие на кнопку - открытие расписания
	$('.table__arrow').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.table__img-none').toggleClass('table__img-active');
		$('.table__arrow').not(this).removeClass('in').next().slideUp();
    });

	// Маска для телефона
	$('#tel').mask('+0 (000) 000 00 00', {placeholder: "Ваш телефон"});

	// ЯНДЕКС БИЛЕТЫ
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

	  //МОДАЛЬНОЕ ОКНО
		const html = document.querySelector('html');
		const modalWindow = document.querySelector('.modal');
		const modal = document.querySelector('.modal__show');
		const modalOpen = document.querySelectorAll('.modal-open');

		for(let i = 0; i < modalOpen.length; i++) {
			modalOpen[i].addEventListener('click', function(event) {
				modal.classList.add('visible');
				modal.classList.remove('hidden');
	 			html.style.overflowY = 'hidden';
			});
		};

		const modalClose = document.querySelector('.modal__close');
		modalClose.addEventListener('click', function(event) {
			modal.classList.add('hidden');
			modal.classList.remove('visible');
	 		html.style.overflowY = 'scroll';
		});

		const modalBtn = document.querySelector('.modal-btn');
		modalBtn.addEventListener('click', function(event) {
			modal.classList.add('hidden');
			modal.classList.remove('visible');
	 		html.style.overflowY = 'scroll';
		});
});