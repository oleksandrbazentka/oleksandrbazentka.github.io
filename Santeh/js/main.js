let headerBtn = document.querySelector('.header__button');
let closePopup = document.querySelector('.popup__close');
let popupCheck = document.querySelector('.popup__checkbox');
let submit = document.querySelector('.form__submit');
let specBtn = document.querySelector('.install__btn');
let closePopupSpec = document.querySelector('.close__spec');
let checkboxSpec = document.querySelector('.popup__checkbox-spec');
let submitSpec = document.querySelector('.submit-spec');

headerBtn.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'flex';
}

closePopup.onclick = function() {
	document.querySelector('.popup__call-bg').style.display = 'none';
}

closePopupSpec.onclick = function() {
	document.querySelector('.popup__spec-bg').style.display = 'none';
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
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true,
            dots: true,
    		center: true
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