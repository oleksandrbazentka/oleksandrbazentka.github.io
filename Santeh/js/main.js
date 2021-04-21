!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
document.addEventListener('DOMContentLoaded', function() {
    var modalButtons = document.querySelectorAll('.popup__button'),
    closeButtons = document.querySelectorAll('.popup__close');

    modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.popup-bg[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         document.querySelector('html').style.overflowY = 'hidden';
      });
   });

   closeButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.popup-bg');
         parentModal.classList.remove('active');
         document.querySelector('html').style.overflowY = 'scroll';
      });
   });
});

jQuery(document).ready(function(){
    $('#tel').mask('+ 7 (000) 000-0000', {placeholder: "Телефон"});
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