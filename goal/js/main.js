var acc = document.getElementsByClassName("handbook__button");
var i;
var infoText = document.querySelector('.info__text');
var arrImg = document.querySelector('.arrow-img');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var handbookNone = document.querySelector('.handbook__none');
    if (handbookNone.style.maxHeight) {
      handbookNone.style.maxHeight = null;
      infoText.style.marginTop = '150px';
      arrImg.src = 'img/arrow.svg';
    } else {
      handbookNone.style.maxHeight = handbookNone.scrollHeight + "px";
      infoText.style.marginTop = '50px';
      arrImg.src = 'img/arrow-top.svg';
    }
  });
}

$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 700);
  e.preventDefault();
});