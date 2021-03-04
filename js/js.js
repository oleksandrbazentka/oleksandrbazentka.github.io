//++F U N C T I O N

// ++T A B S (tabs)

//++DESCRIPTION
//	Табы, открыть/закрыть конкретное содержимое по клику,
//	отображая при этом только один блок с содержимым из группы
//		Возможность разбрасывать компоненты по странице )
//
//	Для работы плагина достаточно двух компонетов:
//	1. tabs__e - элемент плагина табы (кнопка)
//	2. tabs__in - содержимое таба (inset вкладка)
//
//	act - active(активная) кнопка/вкладка, 
//		  ставится у отображаемой вкладки, а также у кнопки
//	
//	Два атрибута для установки соответсвий:
//	1. data-tabs-group - всем компонентам экземпляра(tabs)
//	ставится одно значение для обработки клика только в его пределах
//	2. data-tabs-href - ссылка на вкладку
//		Подробно:
//			Значение атрибута строится из названия группы(т.к поиск глобальный)
//			+ имя вкладки.
//			Кнопка связана с вкладкой через равное значение
//			атрибута ссылки.
			
	
function tabs(){	
	if($(".tabs__e").length){
		$(".tabs__e").click(function(){
			if(!$(this).closest(".tabs__e").hasClass("act")){
				var group = $(this).closest(".tabs__e").data("tabs-group");
				var href = $(this).closest(".tabs__e").data("tabs-href");
				$("[data-tabs-group = "+group+"]").removeClass("act");
				$("[data-tabs-href = "+href+"]").addClass("act");
			}
			return false;
		});
	}	
}


//++ T I C K E T
function ticket(){
	var i = 1;
	var c = $('.b5-b');
	$('.b5-b3').hover(function(){
		var n = $(this).index()+1;
		c.attr('class','').addClass('b5-b');
		c.addClass('b5-b_2');
		$('.b5-b').css('background-image','url(img/b5-1-'+n+'.jpg');
		$('.b5-h').css('background', 'rgba(255, 255, 255, 0.4)');
		$('.b5-b3').css('text-shadow', '0 0 8px black');
	});
}

//++ P R O G R A M S
function programs(){
	$('.b7-h1-1').click(function(){
		$('.b7-b.dn').removeClass('dn');
		$(this).hide();
	});
}
 // 	if()
	// $('.burger').hover(function(){
	// 	$('.burger__line').css('background', 'blue');
	// })


// C O U N T D O W N
function cdn(){
	var ar = $(".cnn");
	
//	function color_gr(){
//		setTimeout(function(){
//			ar.find(".cnn__colon").css("color","#666");
//			console.log("timer");
//			color_r();
//		},1000);
//	};
//	function color_r(){
//		setTimeout(function(){
//			ar.find(".cnn__colon").css("color","red");
//			color_gr();
//		},1000);
//	};
//	color_r();
	
	
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

// M E N U - T O P
// function menuT(){
// 	$('.hr-bn1').click(function(){
// 		$('.hr-ul').toggleClass('act');
// 		$(this).toggleClass('act');
// 	});
// }

//--F U N C T I O N S

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.hr-b2');
	const menuCloseItem = document.querySelector('.header-menu__close');
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header-menu__active');
		burgerItem.style.visibility = 'hidden';

	})
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header-menu__active');
		burgerItem.style.visibility = 'visible';
	})
}());


$(document).ready(function () {
	// menuT();
	cdn();
	programs();
	ticket();
	
	tabs();
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
	        dots: false
	      }
	    },

	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: false
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
	      breakpoint: 0,
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


	$('.b4-b-c').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	  	{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 550,
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

	if($('.crl').length){
		$('.crl1').owlCarousel({
			items:1,
	//        autoWidth: true,
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
		
	// 	$('.crl2').owlCarousel({
	// 		items:4,
	// //        autoWidth: true,
	// 		dots: false,
	// 		arrows: false,
	// 		nav: false,
	// 		loop : true,
	// 		autoplay:false,
	// 		autoplayTimeout:5000,
	// 		responsive : {
	// 		0 : {
	// 			items: 1
	// 		},

	// 		576 : {
	// 			items: 1
	// 		},

	// 		578 : {
	// 			items: 2
	// 		},	
	// 		768 : {
	// 			items: 2
	// 		},
	// 		992 : {
	// 			items: 3
	// 		},

	// 		1400: {
	// 			items: 3
	// 		},

	// 		1470: {
	// 			items: 4
	// 		}
	// 		}
	// 	});
	}		
});

$(window).on('load',function(){
	
});

$(window).resize(function(){
});