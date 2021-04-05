var ham = document.querySelector('.menu__list-ham');
var btnHam = document.querySelector('.header__hamburger');
var choose = document.querySelector('.main-profile__choose');
var btnExit = document.querySelector('.main-profile__exit');
var btnNo = document.querySelector('.choose__button_second');

btnHam.onclick = function() {
    ham.classList.toggle('dis-flex');
} 

btnExit.onclick = function() {
	btnExit.style.display = "none";
	choose.style.display = "flex";
}

btnNo.onclick = function() {
	btnExit.style.display = "block";
	choose.style.display = "none";
}