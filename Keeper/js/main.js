$(document).ready(function(){
	$('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 576,
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
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.single-item').slick({
		infinite: true,
		dots: true
	});

	// Маска для телефона
	$('#tel').mask('+0 (000) 000 00 00', {placeholder: "Ваш телефон"});

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

	  btnPrev = document.querySelectorAll('.btn-prevent-def');
	  for( let i = 0; i < btnPrev.length; i++) {
	  	btnPrev[i].addEventListener('click', function(e) {
	  		e.preventDefault();
	  	});
	  }

	  // MUTE VIDEO
	  let muteVideo = document.querySelector('.video__btn_mute');
	  muteVideo.addEventListener('click', function() {
	  	if(this.classList.contains('volume-off')) {
	  		this.classList.remove('volume-off');
	  		this.classList.add('volume-on');
	  	} else {
	  		this.classList.remove('volume-on');
	  		this.classList.add('volume-off');
	  	}
	  	let video = document.querySelector('#bgvid');
	  	video.muted = !video.muted;
	  });

	  // РАССАДКА

	let locationTitle = document.querySelector('.location__title');
	locationTitle.addEventListener('click', function() {
		let locationImg = document.querySelector('#locationImg');
		var className = locationImg.className;
	    if( className.indexOf(' expanded') == -1 ){
	        className += ' expanded';
	    }
	    else {
	        className = className.replace(' expanded', '');
	    }
	    locationImg.className = className;
	    return false;
	});
});