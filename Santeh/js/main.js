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
    document.querySelector('html').style.overflowY = 'hidden';
}

headerBtnSm.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'flex';
    document.querySelector('html').style.overflowY = 'hidden';
}

footerBtn.onclick = function() {
	document.querySelector('.popup__cal-bg-footer').style.display = 'flex';
    document.querySelector('html').style.overflowY = 'hidden';
}

footerBtnSm.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'flex';
    document.querySelector('html').style.overflowY = 'hidden';
}

installBtn.onclick = function() {
	document.querySelector('.popup__price-bg').style.display = 'flex';
    document.querySelector('html').style.overflowY = 'hidden';
}

calculateBtn.onclick = function() {
	document.querySelector('.popup__price-bg').style.display = 'flex';
    document.querySelector('html').style.overflowY = 'hidden';
}

closePopup.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'none';
    document.querySelector('html').style.overflowY = 'scroll';
}

closePopupSpec.onclick = function() {
	document.querySelector('.popup__spec-bg').style.display = 'none';
    document.querySelector('html').style.overflowY = 'scroll';
}

closeFooterPopup.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'none';
    document.querySelector('html').style.overflowY = 'scroll';
}

closePrice.onclick = function() {
	document.querySelector('.popup__price-bg').style.display = 'none';
    document.querySelector('html').style.overflowY = 'scroll';
}

specBtn.onclick = function() {
	document.querySelector('.popup__spec-bg').style.display = 'flex';
    document.querySelector('html').style.overflowY = 'scroll';
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
    $('#tel').mask('+(000) 000 00 00', {placeholder: "Телефон"});
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