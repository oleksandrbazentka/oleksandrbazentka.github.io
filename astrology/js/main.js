window.addEventListener('load', function() {
	const circleClose = document.querySelector('.btn-close');
	circleClose.addEventListener('click', () => {
		const circleSentence = document.querySelector('.result__sentence-wrap');
		circleSentence.classList.add('sentence-close');
	});

	const parallaxFunc = () => {
		var controller = new ScrollMagic.Controller();
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
		.setPin("#pin1")
		.addTo(controller);
	};

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

	$('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  arrows: false,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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

	parallaxFunc();	
});