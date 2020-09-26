$(document).ready(function () {
	const thanksButton = document.querySelector('.form__submit');
	function thanks() {
		thanksButton.classList.add('display-none');
	}
	const popup = document.querySelector('#popup');
	const modal = document.querySelector('.modal');
	thanksButton.onclick = function () {
		thanksButton.classList.add('visibility');
		popup.classList.add('popup__open');

}

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = 'Выберите дату';


//E-mail Ajax Send
	$(".form-main").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "app/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form_phone").mask("(999) 999-9999");
})
