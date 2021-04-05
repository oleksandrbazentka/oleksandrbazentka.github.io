var error = document.querySelector('.form__error');
var restore = document.querySelector('.form__restore');

document.getElementById('check').onclick = function() {
	let login = document.getElementById('login');
	let password = document.getElementById('password');

	if(login == 'ivan' && password == '12345') {
		return true;
	}
	else {
		event.preventDefault();
		error.style.display = 'block';
		login.style.borderColor = '#FF4848';
		password.style.borderColor = '#FF4848';
		restore.style.display = 'block';
	}
}