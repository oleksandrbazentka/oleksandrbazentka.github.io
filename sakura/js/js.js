$( "#btn-more" ).click(function() {
  $( '.fun__cards-none' ).fadeIn();
  $('.fun__cards-none' ).css('display', 'contents');
  $(this).css('display', 'none');
});

// C O U N T D O W N
function cdn(){
	var ar = $(".cnn");

	$.each(ar,function(){
		var ths = $(this);
		var days = $(this).find("[data-countdown = days]");
		var hours = $(this).find("[data-countdown = hours]");
		var minets = $(this).find("[data-countdown = minets]");
		var seconds = $(this).find("[data-countdown = seconds]");
		var d = new Date();
		var end = $(this).find("[data-countdown = end]");
		end = end.html().split('.');
		end[1]=end[1]-1;
		var dE = new Date(end[0],end[1],end[2],end[3],end[4],end[5]);
//		console.log(end[1]);
//		console.log(d.getMonth());
		var yearE = Math.abs(end[0]-d.getFullYear());
		var monthE = Math.abs(end[1]-d.getMonth());
		if(end[1]>d.getMonth()){
			var d1 = new Date(end[0],end[1],0).getDate();
			var daysE = Math.abs(+end[2]+(d1-d.getDate()));
		}else{
			var daysE = Math.abs(end[2]-d.getDate());
		}
		var hoursE = Math.abs(end[3]-d.getHours()-1);
		var minetsE = Math.abs(end[4]-d.getMinutes());
		var secondsE = Math.abs(end[5]-d.getSeconds());
		var boolean = true;
//		console.log('yearE: ',yearE);
//		console.log('monthE: ',monthE);
//		console.log('daysE: ',daysE);
//		console.log('hoursE: ',hoursE);
//		console.log('minetsE: ',minetsE);
//		console.log('secondsE: ',secondsE);
		if(daysE<10){
			days.val("0"+daysE);
		}else{
			days.val(daysE);
		}
		if(hoursE<10){
			hours.val("0"+hoursE);
		}else{
			hours.val(hoursE);
		}
		if(minetsE<10){
			minets.val("0"+minetsE);
		}else{
			minets.val(minetsE);
		}
		seconds.val(secondsE);
		
		function count(){
			setTimeout(function(){
//              если есть и секунды (!нужный коммент)
//              
				if(seconds.val()>0){
					seconds.val(seconds.val()-1);
					count();
				}
				else
				{
					seconds.val(59);
					if(minets.val()>0){
						if(minets.val()<=10){
							minets.val("0"+(minets.val()-1));
						}
						else
						{
							minets.val(minets.val()-1);
						}
						count();
					}
					else
					{
						minets.val(59);
						if(hours.val()>0){
							if(hours.val()<=10){
								hours.val("0"+(hours.val()-1));
							}
							else
							{
								hours.val(hours.val()-1);
							}
							count();
						}
						else
						{
							hours.val(23);
							if(days.val()>0){
								days.val(days.val()-1);
								count();
							}
							else
							{
								ths.closest(".cnn-c").hide();
							}
						}
					}
				}
			},1000);
		}
		count();
	});
	
}

//--F U N C T I O N S

	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.hr-b2');
	const menuCloseItem = document.querySelector('.header-menu__close');
(function () {
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header-menu__active');
		burgerItem.style.visibility = 'hidden';
	})
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header-menu__active');
		burgerItem.style.visibility = 'visible';
	})
}());

let burgerBtn = document.querySelector('.header__burger');
let burgerClose = document.querySelector('.header-menu__close');
let htmlDoc = document.querySelector('html');

burgerBtn.onclick = function() {
	document.querySelector('.b8-b1').style.position = 'relative';
	document.querySelector('.b8-b1').style.zIndex = '-1';
	document.querySelector('.b9-back').style.position = 'relative';
	document.querySelector('.b9-back').style.zIndex = '-1';
	document.querySelector('.telegramim_button').style.zIndex = '-1';
	document.querySelector('.link__programme').style.zIndex = '-1';
	htmlDoc.style.overflowY = 'hidden';
}

burgerClose.onclick = function() {
	document.querySelector('.b8-b1').style.position = 'relative';
	document.querySelector('.b8-b1').style.zIndex = '2';
	document.querySelector('.telegramim_button').style.zIndex = '9999999';
	document.querySelector('.b9-back').style.position = 'static';
	document.querySelector('.b9-back').style.zIndex = 'auto';
	document.querySelector('.link__programme').style.zIndex = '99';
	htmlDoc.style.overflowY = 'scroll';
}	

let pageLink = document.querySelectorAll('.hr-a');
for(let i = 0; i < pageLink.length; i++) {
	pageLink[i].addEventListener('click', function() {
		document.querySelector('.b8-b1').style.position = 'relative';
		document.querySelector('.b8-b1').style.zIndex = '2';
		document.querySelector('.b9-back').style.position = 'static';
		document.querySelector('.b9-back').style.zIndex = 'auto';
		document.querySelector('.telegramim_button').style.zIndex = '9999999';
		document.querySelector('.link__programme').style.zIndex = '99';
		htmlDoc.style.overflowY = 'scroll';
		menu.classList.remove('header-menu__active');
		burgerItem.style.visibility = 'visible';
	});
}


// ТАБЫ
var $tabs = function (target) {
var
  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
  _eventTabsShow,
  _showTab = function (tabsLinkTarget) {
    var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tab-show');
    // если следующая вкладка равна активной, то завершаем работу
    if (tabsLinkTarget === tabsLinkActive) {
      return;
    }
    // удаляем классы у текущих активных элементов
    if (tabsLinkActive !== null) {
      tabsLinkActive.classList.remove('tabs__link_active');
    }
    if (tabsPaneShow !== null) {
      tabsPaneShow.classList.remove('tab-show');
    }
    // добавляем классы к элементам (в завимости от выбранной вкладки)
    tabsLinkTarget.classList.add('tabs__link_active');
    tabsPaneTarget.classList.add('tab-show');
    document.dispatchEvent(_eventTabsShow);
  },
  _switchTabTo = function (tabsLinkIndex) {
    var tabsLinks = _elemTabs.querySelectorAll('.tab-link');
    if (tabsLinks.length > 0) {
      if (tabsLinkIndex > tabsLinks.length) {
        tabsLinkIndex = tabsLinks.length;
      } else if (tabsLinkIndex < 1) {
        tabsLinkIndex = 1;
      }
      _showTab(tabsLinks[tabsLinkIndex - 1]);
    }
  };

_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

_elemTabs.addEventListener('click', function (e) {
  var tabsLinkTarget = e.target;
  // завершаем выполнение функции, если кликнули не по ссылке
  if (!tabsLinkTarget.classList.contains('tab-link')) {
    return;
  }
  // отменяем стандартное действие
  e.preventDefault();
  _showTab(tabsLinkTarget);
});

return {
  showTab: function (target) {
    _showTab(target);
  },
  switchTabTo: function (index) {
    _switchTabTo(index);
  }
}

};

$tabs('.tabs');


$(document).ready(function () {
	cdn();
	
	// СЛАЙДЕР
	$('.responsive').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	   	{
	      breakpoint: 1600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
		{
		   breakpoint: 1200,
		    settings: {
		      dots: true,
		      slidesToShow: 3,
	  			slidesToScroll: 3,
		    }
		   },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	         dots: true
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 0,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: true
	      }
	    }
	  ]
	});


	// OWL-CAROUSEL - СЛАЙДЕР
	if($('.crl').length){
		$('.crl1').owlCarousel({
			items:1,
			dots: true,
			arrows: true,
			nav: true,
			loop : true,
			autoplay:false,
			autoplayTimeout:5000,
			responsive : {
			0 : {
				items: 1
			}}
		});
		
		function sliderN(){
			var i = 1;
			$('.crl1.owl-theme .owl-dots .owl-dot').each(function(){
				$(this).html(i);
				i++;
			});
		}	
		sliderN();
	}	

	// FAQ
	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
  });

	// ЯНДЕКС АФИША (БИЛЕТЫ)
  /* Настройка */
  var dealerName = 'YandexTicketsDealer';
  var dealer = window[dealerName] = window[dealerName] || [];

  dealer.push(['setDefaultClientKey', 'bca054c7-09fb-4daf-970a-74b14267883d']);
        dealer.push(['setDefaultRegionId', 11470]);

  YandexTicketsDealer.push(['getDealer', function (dealer) {
    const widget = dealer.Widget('246975', 'event', {
      target: document.getElementById('ya-widget-frame'),
      onRequestClose: function() {
        widget.unmount();
        widget.destroy();
      },
    });

    widget.mount({ style: { height: '600px' } });
  }]);

  /* Загрузка */
  (function () {
    var rnd = '?' + new Date().getTime() * Math.random();
    var script = document.createElement('script');
    var target = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js'+rnd;
    target.parentNode.insertBefore(script, target);
  })();	
});