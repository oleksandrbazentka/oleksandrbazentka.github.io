$(document).ready(function () {
	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
    });

	let arrow = document.querySelector('.arrow');
	arrow.addEventListener('click', function() {
		let langNone = document.querySelector('.lang-none');
		let line = document.querySelector('.head__tick');
		langNone.classList.toggle('lang-active');
		this.classList.toggle('arr-active');
		line.classList.toggle('tick-active');

	});
});