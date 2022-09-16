window.addEventListener('load', function() {
	// ФУНКЦИОНАЛ ДЛЯ ВИДЕО
    $('.video__main-wrap video').parent().click(function () {
        $(this).children(".video__main-wrap video").get(0).play();
        $(this).children('.video__back').fadeOut();
        $(this).children(".video__btn-play").fadeOut();
    });

  //1 СЛАЙДЕР
  $('.gallery__slider').slick({
  	slidesToShow: 2,
  	slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  //2 СЛАЙДЕР
  $('.photo-gallery__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  //ПОДРОБНЕЕ
  let moreButton = document.querySelector('.dop-tariffs__button');
  moreButton.addEventListener('click', function() {
    let tableDopTariffs = document.querySelector('.dop-tariffs__table');
    tableDopTariffs.classList.toggle('table-none');
    let moreButtonArrow = document.querySelector('.dop-tariffs__button img');
    moreButtonArrow.classList.toggle('arrow-active');
  });

 //ПЛАВНАЯ ПРОКРУТКА К ЯКОРЮ
  var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

  $('.panel-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
  });
});
	