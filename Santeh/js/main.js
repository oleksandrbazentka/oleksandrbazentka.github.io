let headerBtn = document.querySelector('.header__button');
let footerBtn = document.querySelector('.footer__button');
let closePopup = document.querySelector('.popup__close');
let popupCheck = document.querySelector('.popup__checkbox');
let submit = document.querySelector('.form__submit');
let specBtn = document.querySelector('.install__btn');
let closePopupSpec = document.querySelector('.close__spec');
let checkboxSpec = document.querySelector('.popup__checkbox-spec');
let submitSpec = document.querySelector('.submit-spec');
let closeFooterPopup = document.querySelector('.popup__close-footer');
let installBtn = document.querySelector('.install__link');
let calculateBtn = document.querySelector('.calculate__btn'); 
let closePrice = document.querySelector('.popup__close-price');
let checkboxPrice = document.querySelector('.popup__checkbox-price');
let submitPrice = document.querySelector('.submit-price');
let headerBtnSm = document.querySelector('.header__button-sm');
let footerBtnSm = document.querySelector('.footer__button-sm');

headerBtn.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'flex';
}

headerBtnSm.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'flex';
}

footerBtn.onclick = function() {
	document.querySelector('.popup__cal-bg-footer').style.display = 'flex';
}

footerBtnSm.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'flex';
}

installBtn.onclick = function() {
	document.querySelector('.popup__price-bg').style.display = 'flex';
}

calculateBtn.onclick = function() {
	document.querySelector('.popup__price-bg').style.display = 'flex';
}

closePopup.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'none';
}

closePopupSpec.onclick = function() {
	document.querySelector('.popup__spec-bg').style.display = 'none';
}

closeFooterPopup.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'none';
}

closePrice.onclick = function() {
	document.querySelector('.popup__price-bg').style.display = 'none';
}

specBtn.onclick = function() {
	document.querySelector('.popup__spec-bg').style.display = 'flex';
}

submit.onclick = function() {
	if (popupCheck.getAttribute("type") === "checked") {
	return true;
} else {
	document.querySelector('.switch').style.boxShadow = '0px 0px 12px 9px rgba(253, 0, 0, 0.48)';
}
}

submitSpec.onclick = function() {
	if (checkboxSpec.getAttribute("type") === "checked") {
	return true;
} else {
	document.querySelector('.switch-spec').style.boxShadow = '0px 0px 12px 9px rgba(253, 0, 0, 0.48)';
}
}

submitPrice.onclick = function() {
	if (checkboxPrice.getAttribute("type") === "checked") {
	return true;
} else {
	document.querySelector('.switch-price').style.boxShadow = '0px 0px 12px 9px rgba(253, 0, 0, 0.48)';
}
}

jQuery(document).ready(function(){
    $('#tel').mask('+0 (000) 000 00 00', {placeholder: "Телефон"});
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    center: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true
        },
        600:{
            items:1,
            nav:false
        },
        768:{
            items:1,
            nav:false,
            loop:true,
            dots: true,
        },
        1200: {
        	nav:true,
        	items:1
        }
    }
});

$(document).ready(function () {

		$('.panel-heading').click(function () {
			$(this).toggleClass('in').next().slideToggle();
			$('.panel-heading').not(this).removeClass('in').next().slideUp();
        });

    });

// let panelItem = document.querySelectorAll('.panel__item');
// panelItem.onclick = function(e) {
// 	e.preventDefault();
// }

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.730138, 37.594238], // координаты центра на карте
    zoom: 7, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://yandex.ru/maps/43/kazan/?ll=49.107344%2C55.749161&mode=usermaps&source=constructorLink&um=constructor%3Aa455186c71dc407c040b691126ebd9627c257251c2d0a519b2dd5d1a3a9b8c39&z=17", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});