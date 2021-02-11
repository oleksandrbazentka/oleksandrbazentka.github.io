var hamBtn = document.querySelector('.hamburger-btn');

hamBtn.onclick = function() {
	document.querySelector('.hamburger-menu').classList.toggle('dis-none');
}

$(document).ready(function() {
	$("#phone").mask("(999) 999-9999");
})