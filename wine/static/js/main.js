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
    title: 'Фруктовый сад',
    photos: ['./static/img/territory-popup/orchard-1.jpg', './static/img/territory-popup/orchard-2.jpg'],
    content: "<p class='txt'>Груши, инжир, хурма, вишни, кумкват — садовые деревья приглашают всех на сладкий пир. Наш сад — это концентрация вкусовых и обонятельных наслаждений. Он цветет и красуется перед гостями спелыми фруктами и ягодами больше 5 месяцев в году весной, летом и осенью.</p>"
  }, {
    id: 9,
    title: 'Магазин',
    photos: ['./static/img/territory-popup/store-1.jpg', './static/img/territory-popup/store-2.jpg'],
    content: "<p class='txt'>\u0412 \u043D\u0430\u0448\u0435\u0439 \u0432\u0438\u043D\u043E\u0442\u0435\u043A\u0435 \u043C\u044B \u0441\u043E\u0431\u0435\u0440\u0435\u043C \u043B\u0443\u0447\u0448\u0438\u0435 \u0432\u0438\u043D\u0430, \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438. \u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u043A\u0440\u043E\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0432\u0438\u043D\u043E\u0434\u0435\u043B\u0438\u044F.</p>\n         <p class='txt'>\u041A\u0440\u043E\u043C\u0435 \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0443\u0434\u0438\u0432\u0438\u0442\u044C \u0433\u043E\u0441\u0442\u0435\u0439 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u0441\u0443\u0432\u0435\u043D\u0438\u0440\u043E\u0432. \u0412 \u043D\u0438\u0445, \u043C\u044B \u0432\u0435\u0440\u0438\u043C, \u043E\u0442\u0440\u0430\u0437\u0438\u0442\u0441\u044F \u043D\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u0441\u0442\u044C \u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0432\u0438\u043D\u043E\u0434\u0435\u043B\u0438\u044E \u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u0440\u043D\u044F\u043C \u0438 \u0431\u0435\u0440\u0435\u0436\u043D\u043E\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043A \u043F\u0440\u0438\u0440\u043E\u0434\u0435.</p>"
  }, {
    id: 12,
    title: 'Башня',
    photos: ['./static/img/territory-popup/tower-1.jpg', './static/img/territory-popup/tower-2.jpg', './static/img/territory-popup/tower-3.jpg', './static/img/territory-popup/tower-4.jpg'],
    content: "<p class='txt'>\u0411\u0430\u0448\u043D\u044F \u0412\u0438\u043D\u043D\u043E\u0433\u043E \u043F\u0430\u0440\u043A\u0430 \u2014 \u044D\u0442\u043E \u043C\u0435\u0441\u0442\u043E, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0431\u044B\u0442\u044C \u0432 \u0443\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0438 \u0438 \u043D\u0430\u0441\u043B\u0430\u0434\u0438\u0442\u044C\u0441\u044F \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C \u0434\u0443\u0445 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u043C \u0432\u0438\u0434\u043E\u043C.</p>\n      <p class='txt'>\u0421\u043C\u043E\u0442\u0440\u043E\u0432\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u043D\u0430 \u0432\u044B\u0441\u043E\u0442\u0435 50 \u043C\u0435\u0442\u0440\u043E\u0432 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u044E \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u043D\u0430\u0448\u0435\u0433\u043E \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043D\u0438\u043A\u0430, \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0438\u043C\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0430\u043C\u0438 \u043C\u043E\u0440\u044F \u0441 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0438 \u0432\u0435\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0433\u043E\u0440\u0430\u043C\u0438 \u0441 \u0434\u0440\u0443\u0433\u043E\u0439.</p>\n      <p class='txt'>\u0418\u0434\u0438\u043B\u043B\u0438\u044E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442 \u0431\u043E\u043A\u0430\u043B \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0430 \u043E\u0442 \u043D\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u043C\u0435\u043B\u044C\u0435.</p>\n      </p>"
  }, {
    id: 10,
    title: 'Винная коллекция',
    photos: ['./static/img/territory-popup/wine-collection.jpg'],
    content: "<p class='txt'>\u0412 2020 \u0433\u043E\u0434\u0443 \u043C\u044B \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E \u043B\u0443\u0447\u0448\u0438\u0445 \u0432\u0438\u043D \u0441\u043E \u0432\u0441\u0435\u0433\u043E \u043C\u0438\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442 \u043D\u0430\u0448\u0438\u0445 \u0433\u043E\u0441\u0442\u0435\u0439 \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435.</p>\n      <p class='txt'>\u0411\u0443\u0442\u044B\u043B\u043A\u0438 \u0432\u0438\u043D\u0430, \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0432\u0438\u043D\u043E\u0434\u0435\u043B\u044C\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u0430\u043C\u0438 \u0440\u0430\u0437\u043D\u044B\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0438 \u044D\u043F\u043E\u0445 \u2014 \u043A\u0430\u0436\u0434\u0430\u044F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u0442 \u0441\u0432\u043E\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043D\u044F\u0442\u043D\u0430 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0430\u043C \u0438 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u044F\u043C. \u0410 \u043B\u044E\u0431\u043E\u0439 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0439\u0441\u044F \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439 \u043D\u0430 13 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0430\u0448\u043D\u0438 \u0434\u043B\u044F \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u0438.</p>"
  }, {
    id: 11,
    title: 'Водопад',
    photos: ['./static/img/territory-popup/waterfall.jpg'],
    content: "<p class='txt'>В нашем парке множество метафор и одну из них создал японский ландшафтный дизайнер Широ Нака-не: водопад олицетворяет жизнь человека, которая может начаться в считанные мгновения подобно тому, как вода только начинает срываться с обрыва, так и закончиться – как уже обрушившийся вниз водный поток.</p>"
  }, {
    id: 8,
    title: 'Зона торжеств',
    photos: ['./static/img/territory-popup/celebration-area.jpg'],
    content: "<p class='txt'>Площадка, которую можно будет арендовать для частных и корпоративных мероприятий. Наша зона торжеств отгорожена от глаз посторонних, но открыта потрясающим видам, чтобы важные события происходили в особенном месте.</p>"
  }, {
    id: 7,
    title: 'Виноградник',
    photos: ['./static/img/territory-popup/vineyard.jpg'],
    content: "<p class='txt'>В 2018 году мы высадили 2 международных сорта винограда Каберне Совиньон и Мурведр. Мы уверены, что терруарное вино делается на винограднике, а не в подвалах. Забота о естественной экосистеме и отсутствие химикатов помогает нам быть ближе к лозе и внимательно следовать ее потребностям.</p>"
  }, {
    id: 4,
    title: 'Грот',
    photos: ['./static/img/territory-popup/grotto-1.jpg'],
    content: "<p class='txt'>Каменный грот с ниспадающими потоками воды станет точкой притяжения в жаркие дни, вовлекая гостей парка в развлекательные активности. Здесь и зона, где можно спрятаться от солнца и место для игр с детьми. А буквально в нескольких шагах на склоне можно будет отдохнуть с прекрасным видом на море.</p>"
  }, {
    id: 3,
    title: 'Парящий мост',
    photos: ['./static/img/territory-popup/bridge.jpg'],
    content: "<p class='txt'>Легкий и минималистичный консольный мост, нависающий над склоном даже не заметен издалека. Освобожденный от лишнего, как пустая взлетная полоса, он зовет гостей парка в новое приключение.</p>"
  }, {
    id: 6,
    title: 'Пекарня',
    photos: ['./static/img/territory-popup/bakeshop.jpg'],
    content: "<p class='txt'>Ничто не может лучше передать тепло гостеприимства, чем аромат только что испеченного хлеба. Выбор нашей продукции будет разнообразным, чтобы подобрать идеальную пару к вину и сыру. Здесь же прекрасное соседство — гончарная мастерская, куда мы пригласим взрослых и детей на мастер-классы и раскроем тайну собственноручного изготовления керамической посуды.</p>"
  }, {
    id: 2,
    title: 'Амфитеатр',
    photos: ['./static/img/territory-popup/amphitheater-2.jpg', './static/img/territory-popup/amphitheater-1.jpg'],
    content: "<p class='txt'>Поэтические вечера, оживленные винные дискуссии, встречи с современными художниками и даже возможность примерить роль художника на себя, попав на настоящий пленер. Это место силы для творческого человека и зона искусств, где каждый сможет не только получить свою дозу сильных эмоций от профессиональных творцов, но и попасть на разные художественные мастер-классы.</p>"
  }, {
    id: 5,
    title: 'Кучук-Исар',
    photos: ['./static/img/territory-popup/kuchuk-isar.jpg'],
    content: "<p class='txt'>В непосредственной близости от виноградника находятся руины средневекового крепостного укрепления Кучук-Исар, что в переводе с татарского означает “малая крепость”. Когда-то тут кипела жизнь: археологи обнаружили кузницы, керамику, мелкие предметы быта. Прогулка к древним камням в нескольких шагах от современной винодельни как путешествие во времени на пять, а то и десять веков назад.</p>"
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
    $('.territory-popup__bottom .overflow-wrap').append('<!--<button class="b24-web-form-popup-btn-61 btn btn--primary visit">Хочу посетить</button>-->');
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

    var monthsLabel = decl(months, ['месяц', 'месяца', 'месяцев']);
    var daysLabel = decl(days, ['день', 'дня', 'дней']);
    var hoursLabel = decl(hours, ['час', 'часа', 'часов']);
    var minutesLabel = decl(minutes, ['минута', 'минуты', 'минут']);
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