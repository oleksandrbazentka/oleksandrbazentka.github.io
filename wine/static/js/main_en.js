"use strict";

console.log('🛠 js/main.js');
$(document).ready(function () {
  $('.preloader').addClass('hided');
  $('main').addClass('loaded'); // Territory

  $(".territory a[href='#show-map']").click(function (e) {
    e.preventDefault();
    $('.territory').addClass('show-map');
  });
  $(".territory a[href='#back-map']").click(function (e) {
    e.preventDefault();
    $('.territory').removeClass('show-map');
  }); // Show popup

  var popupContents = [{
    id: 1,
    title: 'Orchard',
    photos: ['../static/img/territory-popup/orchard-1.jpg', '../static/img/territory-popup/orchard-2.jpg'],
    content: "<p class='txt'>Pears, figs, persimmons, cherries, kumquat - garden trees invite everyone to a sweet feast. Our garden is a concentration of taste and olfactory pleasures. It blooms and shows off in front of guests with ripe fruits and berries for more than 5 months of the year during spring, summer and autumn.</p>"
  }, {
    id: 9,
    title: 'Vinotheque',
    photos: ['../static/img/territory-popup/store-1.jpg', '../static/img/territory-popup/store-2.jpg'],
    content: "<p class='txt'>\u0049\u006e \u006f\u0075\u0072 \u0076\u0069\u006e\u006f\u0074\u0068\u0065\u0071\u0075\u0065 \u0077\u0065 \u0077\u0069\u006c\u006c \u0063\u006f\u006c\u006c\u0065\u0063\u0074 \u0074\u0068\u0065 \u0062\u0065\u0073\u0074 \u0077\u0069\u006e\u0065\u0073 \u0070\u0072\u006f\u0064\u0075\u0063\u0065\u0064 \u0069\u006e \u0052\u0075\u0073\u0073\u0069\u0061\u002e \u0055\u006e\u0069\u0071\u0075\u0065 \u0073\u0061\u006d\u0070\u006c\u0065\u0073 \u0074\u0068\u0061\u0074 \u0077\u0069\u006c\u006c \u0072\u0065\u0076\u0065\u0061\u006c \u0074\u0068\u0065 \u0068\u0069\u0067\u0068\u0065\u0073\u0074 \u006c\u0065\u0076\u0065\u006c \u006f\u0066 \u0052\u0075\u0073\u0073\u0069\u0061\u006e \u0077\u0069\u006e\u0065\u006d\u0061\u006b\u0069\u006e\u0067 \u0061\u0073 \u006d\u0075\u0063\u0068 \u0061\u0073 \u0070\u006f\u0073\u0073\u0069\u0062\u006c\u0065\u002e \u003c\u0062\u0072\u003e \u0049\u006e \u0061\u0064\u0064\u0069\u0074\u0069\u006f\u006e\u002c \u0077\u0065 \u0068\u006f\u0070\u0065 \u0074\u006f \u0073\u0075\u0072\u0070\u0072\u0069\u0073\u0065 \u006f\u0075\u0072 \u0067\u0075\u0065\u0073\u0074\u0073 \u0077\u0069\u0074\u0068 \u0061 \u0076\u0061\u0072\u0069\u0065\u0074\u0079 \u006f\u0066 \u0073\u006f\u0075\u0076\u0065\u006e\u0069\u0072\u0073\u002e \u0054\u0068\u0065\u0079\u002c \u0077\u0065 \u0062\u0065\u006c\u0069\u0065\u0076\u0065\u002c \u0072\u0065\u0066\u006c\u0065\u0063\u0074 \u006f\u0075\u0072 \u0070\u0061\u0073\u0073\u0069\u006f\u006e \u0066\u006f\u0072 \u006f\u0072\u0067\u0061\u006e\u0069\u0063 \u0077\u0069\u006e\u0065\u006d\u0061\u006b\u0069\u006e\u0067 \u0061\u006e\u0064 \u0074\u0068\u0065 \u0076\u0061\u006c\u0075\u0065 \u006f\u0066 \u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0069\u006e\u0067 \u0074\u0068\u0065 \u0072\u006f\u006f\u0074\u0073 \u0061\u006e\u0064 \u0072\u0065\u0073\u0070\u0065\u0063\u0074 \u0066\u006f\u0072 \u006e\u0061\u0074\u0075\u0072\u0065\u002e </p>"
  }, {
    id: 12,
    title: 'Tower',
    photos: ['../static/img/territory-popup/tower-1.jpg', '../static/img/territory-popup/tower-2.jpg', '../static/img/territory-popup/tower-3.jpg', '../static/img/territory-popup/tower-4.jpg'],
    content: "<p class='txt'>\u0054\u0068\u0065 \u0057\u0069\u006e\u0065\u0070\u0061\u0072\u006b \u0074\u006f\u0077\u0065\u0072 \u0069\u0073 \u0061 \u0070\u006c\u0061\u0063\u0065 \u0077\u0068\u0065\u0072\u0065 \u0079\u006f\u0075 \u0063\u0061\u006e \u0062\u0065 \u0069\u006e \u0070\u0072\u0069\u0076\u0061\u0063\u0079 \u0061\u006e\u0064 \u0065\u006e\u006a\u006f\u0079 \u0061 \u0062\u0072\u0065\u0061\u0074\u0068\u0074\u0061\u006b\u0069\u006e\u0067 \u0070\u0061\u006e\u006f\u0072\u0061\u006d\u0069\u0063 \u0076\u0069\u0065\u0077\u002e\u003c\u0062\u0072\u003e\u0041\u006e \u006f\u0062\u0073\u0065\u0072\u0076\u0061\u0074\u0069\u006f\u006e \u0064\u0065\u0063\u006b \u0061\u0074 \u0061\u006e \u0061\u006c\u0074\u0069\u0074\u0075\u0064\u0065 \u006f\u0066 \u0035\u0030 \u006d \u0077\u0069\u006c\u006c \u0068\u0065\u006c\u0070 \u0074\u006f \u0065\u0078\u0061\u006d\u0069\u006e\u0065 \u0069\u006e \u0064\u0065\u0074\u0061\u0069\u006c \u0074\u0068\u0065 \u0067\u0065\u006f\u006d\u0065\u0074\u0072\u0079 \u0063\u006f\u006d\u0070\u006c\u0065\u0078\u0069\u0074\u0079 \u006f\u0066 \u006f\u0075\u0072 \u0076\u0069\u006e\u0065\u0079\u0061\u0072\u0064\u002c \u0073\u0075\u0072\u0072\u006f\u0075\u006e\u0064\u0065\u0064 \u0062\u0079 \u0065\u006e\u0064\u006c\u0065\u0073\u0073 \u0065\u0078\u0070\u0061\u006e\u0073\u0065\u0073 \u006f\u0066 \u0074\u0068\u0065 \u0073\u0065\u0061 \u006f\u006e \u006f\u006e\u0065 \u0073\u0069\u0064\u0065 \u0061\u006e\u0064 \u006d\u0061\u006a\u0065\u0073\u0074\u0069\u0063 \u006d\u006f\u0075\u006e\u0074\u0061\u0069\u006e\u0073 \u006f\u006e \u0074\u0068\u0065 \u006f\u0074\u0068\u0065\u0072\u002e \u0041 \u0067\u006c\u0061\u0073\u0073 \u006f\u0066 \u0065\u0078\u0063\u0065\u006c\u006c\u0065\u006e\u0074 \u0077\u0069\u006e\u0065 \u0066\u0072\u006f\u006d \u006f\u0075\u0072 \u0073\u006f\u006d\u006d\u0065\u006c\u0069\u0065\u0072 \u0077\u0069\u006c\u006c \u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065 \u0074\u0068\u0065 \u0069\u0064\u0079\u006c\u006c\u002e \n	</p>"
  }, {
    id: 10,
    title: 'Wine сollection',
    photos: ['../static/img/territory-popup/wine-collection.jpg'],
    content: "<p class='txt'>In 2020, we begin to collect the world's best wines, which will send our guests on a journey through time and space. Wine bottles surrounded by wine artifacts from different regions and eras - each one will tell its own story, which will be clear to both professionals and amateurs. Any instance you like can be taken with you to the 13th level of tower for an ideal tasting.</p>"
  }, {
    id: 11,
    title: 'Waterfall',
    photos: ['../static/img/territory-popup/waterfall.jpg'],
    content: "<p class='txt'>There are many metaphors in our park, and one of them was created by the Japanese landscape designer Shiro Nakane: a waterfall personifies a human life, which can begin in a moment like a water just starts to break off a cliff, and end like a water stream that has already fallen down.</p>"
  }, {
    id: 8,
    title: 'Celebration area',
    photos: ['../static/img/territory-popup/celebration-area.jpg'],
    content: "<p class='txt'>A venue that can be rented for private and corporate events. Our celebration area is hidden from strangers' eyes so that all the important events take place in a special area.</p>"
  }, {
    id: 7,
    title: 'Vineyard',
    photos: ['../static/img/territory-popup/vineyard.jpg'],
    content: "<p class='txt'>In 2018, we planted 2 international grape sorts Cabernet Sauvignon and Mourvedre. We are sure that terroir wine is made in vineyard not in cellars. Caring for the natural ecosystem and lack of chemicals helps us to be closer to the vine and carefully follow its needs.</p>"
  }, {
    id: 4,
    title: 'Grotto',
    photos: ['../static/img/territory-popup/grotto-1.jpg'],
    content: "<p class='txt'>A stone grotto with flowing streams of water will become a point of attraction on hot days, involving park guests in recreational activities. Here is also a zone where you can hide from the sun and a place for games with children. And just a few steps on the slope you can relax by a beautiful sea view.</p>"
  }, {
    id: 3,
    title: 'Floating bridge',
    photos: ['../static/img/territory-popup/bridge.jpg'],
    content: "<p class='txt'>The lightweight and minimalistic cantilever bridge overhanging the slope is not easy to notice from a distance. Freed from excess, like an empty runway, it calls the guests of the park on a new adventure.</p>"
  }, {
    id: 6,
    title: 'Bakery',
    photos: ['../static/img/territory-popup/bakeshop.jpg'],
    content: "<p class='txt'>Nothing can convey better the warmth of hospitality than the aroma of freshly baked bread. The selection of our products will be diverse in order to find a perfect match for wine and cheese. Here is a wonderful neighborhood - a pottery workshop, where we will invite adults and children to master classes and discover the secret of hand-made ceramic dishes.</p>"
  }, {
    id: 2,
    title: 'Amphitheater',
    photos: ['../static/img/territory-popup/amphitheater-2.jpg', '../static/img/territory-popup/amphitheater-1.jpg'],
    content: "<p class='txt'>Poetry evenings, lively wine discussions, meetings with modern artists and even the opportunity to try on the role of artist in a plein air. This is a place of strength for a creative person and an art zone where everyone can not only get their dose of strong emotions from professional creators, but also try various art master classes.</p>"
  }, {
    id: 5,
    title: 'Kuchuk-Isar',
    photos: ['../static/img/territory-popup/kuchuk-isar.jpg'],
    content: "<p class='txt'>In the immediate vicinity of the vineyard there are the ruins of the medieval fortification of Kuchuk-Isar, which means “small fortress” in Tatar. There were times when life was in full swing: archaeologists discovered forges, ceramics, and small household items. A walk to the ancient stones just a few steps from the modern winery is a journey through time for five or even ten centuries ago.</p>"
  }];
  var popupSlider = new Swiper('.territory-popup__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  $('.territory-map svg g[map-dot]').click(function (e) {
    var popupId = $(this).attr('map-id');
    var currentSlide = popupContents.filter(function (c) {
      return c.id == popupId;
    }).pop();
    $('.territory-popup__slider .swiper-pagination').remove();
    $('.territory-popup__slider .swiper-button-next').remove();
    $('.territory-popup__slider .swiper-button-prev').remove();
    popupSlider.destroy();
    var photos = currentSlide.photos.map(function (p) {
      return "<div class='swiper-slide' style='background-image: url(" + p + ")'></div>";
    });
    $('.territory-popup .territory-popup__slider').append('<div class="swiper-pagination"></div>');
    $('.territory-popup .territory-popup__slider .handle').html(photos.join(''));
    $('.territory-popup .territory-popup__slider').append('<div class="swiper-button-next"><svg viewbox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6 18L23 18.6563L28.8 25L23 31.3437L23.6 32L30 25L23.6 18Z" fill="white"></path><circle cx="25" cy="25" r="24.5" transform="rotate(-90 25 25)" stroke="white"></circle></svg></div>');
    $('.territory-popup .territory-popup__slider').append('<div class="swiper-button-prev"><svg viewbox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.4 32L27 31.3437L21.2 25L27 18.6563L26.4 18L20 25L26.4 32Z" fill="white"></path><circle cx="25" cy="25" r="24.5" transform="rotate(90 25 25)" stroke="white"></circle></svg></div>');
    popupSlider = new Swiper('.territory-popup__slider', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    $('.territory-popup .territory-popup__title').html(currentSlide.title);
    $('.territory-popup .overflow-wrap').html(currentSlide.content);
    $('.territory-popup__bottom .overflow-wrap').append('<!--<a class="btn btn--primary visit">Visit</a>-->');
    $('.territory-popup').addClass('show');
  }); // Hide popup

  $('.territory-popup .territory-popup__close').click(function (e) {
    e.preventDefault();
    $('.territory-popup').removeClass('show').removeClass('show-more');
    popupSlider.destroy();
    $('.territory-popup__slider .swiper-pagination').remove();
  }); // Scroll popup to bottom

  $('.territory-popup .territory-popup__more').click(function (e) {
    e.preventDefault();
    $('.territory-popup').addClass('show-more');
  }); // Scroll popup back to top

  $('.territory-popup .territory-popup__back').click(function (e) {
    e.preventDefault();
    $('.territory-popup').removeClass('show-more');
  }); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  function initCustomSlider(block) {
    $("".concat(block, " .slide:eq(0)")).addClass('active').next().addClass('active-next');
    $("".concat(block, " .slide:last-child")).addClass('active-prev');
    var timeout = null;

    function clearClasses() {
      $("".concat(block, " .slide")).removeClass('active-prev').removeClass('active').removeClass('active-next');
    } // Next slide


    $("".concat(block, " .btn-next")).click(function () {
      var currentSlide = $("".concat(block, " .slide.active"));
      clearClasses(); // If current slide is last

      if (currentSlide.index() == $("".concat(block, " .slide")).length - 1) {
        currentSlide.addClass('active-prev');
        $("".concat(block, " .slide:eq(0)")).addClass('active').next().addClass('active-next');
      } else {
        if (currentSlide.index() == $("".concat(block, " .slide")).length - 2) {
          currentSlide.addClass('active-prev').next().addClass('active');
          $("".concat(block, " .slide:eq(0)")).addClass('active-next');
        } else {
          currentSlide.addClass('active-prev').next().addClass('active').next().addClass('active-next');
        }
      }
    }); // Prev slide

    $("".concat(block, " .btn-prev")).click(function () {
      var currentSlide = $("".concat(block, " .slide.active"));
      clearClasses(); // If current slide is last

      if (currentSlide.index() == 0) {
        currentSlide.addClass('active-next');
        $("".concat(block, " .slide:last-child")).addClass('active').prev().addClass('active-prev');
      } else {
        if (currentSlide.index() == 1) {
          currentSlide.addClass('active-next').prev().addClass('active');
          $("".concat(block, " .slide:last-child")).addClass('active-prev');
        } else {
          currentSlide.addClass('active-next').prev().addClass('active').prev().addClass('active-prev');
        }
      }

      $("".concat(block, " .slide.active-prev")).css('transition', '0s');
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $("".concat(block, " .slide")).css('transition', '.3s ease');
      }, 300);
    });
  }

  initCustomSlider('#exposition');
  initCustomSlider('#gravity-winery');
  initCustomSlider('#cheese_factory');
  initCustomSlider('#restaurant');
  initCustomSlider('#sommelier-robot'); // init swiper slider

  var sliderInit = function sliderInit(className, opt) {
    $(className).each(function sliderInitClasses() {
      $(this).addClass('swiper-container');
      $(this).children('.slider__wrap').addClass('swiper-wrapper');
      $(this).find('.slider__item').addClass('swiper-slide');
    });
    return new Swiper(className, opt);
  };

  if ($('.cheese_factory .infoblock-slider').length) {
    var opt = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    sliderInit('.cheese_factory .infoblock-slider', opt);
  }

  if ($('.sommelier-robot-slider').length) {
    var _opt = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    sliderInit('.sommelier-robot-slider', _opt);
  }

  if ($('.infoblock-slider').length) {
    var _opt2 = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    sliderInit('.infoblock-slider', _opt2);
  }

  if ($('.tariffs-slider').length) {
    var _opt3 = {
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1440: {
          slidesPerView: 3
        }
      }
    };
    sliderInit('.tariffs-slider', _opt3);
  }

  if ($('.main-slider').length) {
    var _opt4 = {
      direction: 'vertical',
      mousewheel: {
        releaseOnEdges: true
      },
      speed: 500,
      slidesPerView: 1,
      simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return "<span class=\"".concat(className, "\"><span class=\"page-num\">0").concat(index + 1, "</span></span>");
        }
      }
    };
    var mainSlider = sliderInit('.main-slider', _opt4);
    $('.main-slider .swiper-pagination-bullet:first-child').css({
      display: 'none'
    });
    mainSlider.on('slideChange', function () {
      if (mainSlider.activeIndex !== 0) {
        $('.main-slider .swiper-pagination').css({
          display: 'block'
        });
      } else {
        $('.main-slider .swiper-pagination').css({
          display: 'none'
        });
      }

      if (mainSlider.activeIndex === 1) {
        $('.main-slider .swiper-pagination-bullet').addClass('swiper-pagination-bullet-white');
        $('.main-slider .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-black');
      } else {
        $('.main-slider .swiper-pagination-bullet').addClass('swiper-pagination-bullet-black');
        $('.main-slider .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-white');
      }

      $(mainSlider.slides[mainSlider.activeIndex]).addClass('animated');
      $(mainSlider.slides[mainSlider.activeIndex + 1]).removeClass('animated');

      if (mainSlider.activeIndex !== 6) {
        $('.sommelier-robot-slider').css({
          display: 'none'
        });
      } else {
        $('.sommelier-robot-slider').css({
          display: 'block'
        });
      }
    });

    if (mainSlider.activeIndex !== 6) {
      $('.sommelier-robot-slider').css({
        display: 'none'
      });
    }

    if (window.innerWidth >= 768) {
      document.addEventListener('scroll', function (event) {
        var scrollNow = window.pageYOffset;

        if (scrollNow > 0) {
          $('.main-slider').addClass('disabled');
        } else {
          $('.main-slider').removeClass('disabled');
        }

        if (mainSlider.activeIndex > 0) {
          $('.main-slider .swiper-pagination').css({
            display: 'block'
          });
        } else {
          $('.main-slider .swiper-pagination').css({
            display: 'none'
          });
        }
      }, true);
    } else {
      mainSlider.destroy();
      $('.main .main-slider').removeClass('swiper-container');
      $('.main-slider .slider__wrap').removeClass('swiper-wrapper');
      $('.main-slider .slider__item').removeClass('swiper-slide');
    }
  } // // Canvas video
  // const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
  // if (isIOS) {
  //   const canvasVideo = new CanvasVideoPlayer({
  //     videoSelector: '.video',
  //     canvasSelector: '.canvas',
  //     timelineSelector: false,
  //     autoplay: true,
  //     makeLoop: true,
  //     pauseOnClick: false,
  //     audio: false,
  //   });
  // } else {
  //   $('.header-canvas')[0].style.display = 'none';
  // }
  //Timer


  var countDownDate = new Date('2020', '09', '1', '0', '0', '0').getTime();
  var timer = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var months = Math.floor(distance / (1000 * 60 * 60 * 24) / 30);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24) - months * 30);
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    $('.timer__value--item:nth-child(1) .timer__value__number').html(months);
    $('.timer__value--item:nth-child(2) .timer__value__number').html(days);
    $('.timer__value--item:nth-child(3) .timer__value__number').html(hours);
    $('.timer__value--item:nth-child(4) .timer__value__number').html(minutes);

    function decl(number, titles) {
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    }

    var monthsLabel = decl(months, ['month', 'months', 'months']);
    var daysLabel = decl(days, ['day', 'days', 'days']);
    var hoursLabel = decl(hours, ['hour', 'hours', 'hours']);
    var minutesLabel = decl(minutes, ['minute', 'minutes', 'minutes']);
    $('.timer__value--item:nth-child(1) .timer__value__label').html(monthsLabel);
    $('.timer__value--item:nth-child(2) .timer__value__label').html(daysLabel);
    $('.timer__value--item:nth-child(3) .timer__value__label').html(hoursLabel);
    $('.timer__value--item:nth-child(4) .timer__value__label').html(minutesLabel);

    if (distance < 0) {
      clearInterval(timer);
    }
  }, 1000); //scroll on block

  function activateAnimation(block) {
    $(window).scroll(function () {
      var y = $(window).scrollTop(),
          x = $("".concat(block)).offset().top - 500;

      if (y > x) {
        $("".concat(block)).addClass('animated');
      } else {
        $("".concat(block)).removeClass('animated');
      }
    });
  } //activated Animation


  if (window.innerWidth < 768) {
    activateAnimation('#1.slider__item');
    activateAnimation('#2.slider__item');
    activateAnimation('#3.slider__item');
    activateAnimation('#4.slider__item');
    activateAnimation('#5.slider__item');
    activateAnimation('#6.slider__item');
    activateAnimation('#7.slider__item');
  }

  activateAnimation('.video');
  activateAnimation('.partners');
  activateAnimation('.partners-animation');
  activateAnimation('.info-partners-animation');
  activateAnimation('.tariffs');
  activateAnimation('.map');
  activateAnimation('.footer'); //video play

  $('.btn--play').click(function (e) {
    e.preventDefault();
    $('#video')[0].play();
    $('#video').attr('controls', 'auto');
    $(this).css({
      display: 'none'
    });
  });
  $('.lan-item.active').click(function (e) {
    e.preventDefault();
  }); //main slider

  if ($('.main-slider').length) {
    var _opt5 = {
      direction: 'vertical',
      mousewheel: {
        releaseOnEdges: true
      },
      speed: 500,
      slidesPerView: 1,
      simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return "<span class=\"".concat(className, "\"><span class=\"page-num\">0").concat(index + 1, "</span></span>");
        }
      }
    };

    var _mainSlider = sliderInit('.main-slider', _opt5);

    $('.main-slider .swiper-pagination-bullet:first-child').css({
      display: 'none'
    });

    _mainSlider.on('slideChange', function () {
      if (_mainSlider.activeIndex !== 0) {
        $('.main-slider .swiper-pagination').css({
          display: 'block'
        });
      } else {
        $('.main-slider .swiper-pagination').css({
          display: 'none'
        });
      }

      if (_mainSlider.activeIndex === 1) {
        $('.main-slider .swiper-pagination-bullet').addClass('swiper-pagination-bullet-white');
        $('.main-slider .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-black');
      } else {
        $('.main-slider .swiper-pagination-bullet').addClass('swiper-pagination-bullet-black');
        $('.main-slider .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-white');
      }

      $(_mainSlider.slides[_mainSlider.activeIndex]).addClass('animated');
      $(_mainSlider.slides[_mainSlider.activeIndex + 1]).removeClass('animated');

      if (_mainSlider.activeIndex !== 6) {
        $('.sommelier-robot-slider').css({
          display: 'none'
        });
      } else {
        $('.sommelier-robot-slider').css({
          display: 'block'
        });
      }
    });

    if (_mainSlider.activeIndex !== 6) {
      $('.sommelier-robot-slider').css({
        display: 'none'
      });
    }

    if (window.innerWidth >= 768) {
      document.addEventListener('scroll', function (event) {
        var scrollNow = window.pageYOffset;

        if (scrollNow > 0) {
          $('.main-slider').addClass('disabled');
        } else {
          $('.main-slider').removeClass('disabled');
        }

        if (_mainSlider.activeIndex > 0) {
          $('.main-slider .swiper-pagination').css({
            display: 'block'
          });
        } else {
          $('.main-slider .swiper-pagination').css({
            display: 'none'
          });
        }
      }, true);
    } else {
      _mainSlider.destroy();

      $('.main .main-slider').removeClass('swiper-container');
      $('.main-slider .slider__wrap').removeClass('swiper-wrapper');
      $('.main-slider .slider__item').removeClass('swiper-slide');
    }
  }
});