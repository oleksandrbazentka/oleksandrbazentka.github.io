window.addEventListener('load', function() {
	let htmlDoc = document.querySelector('html');

	// Аккордеон
	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
    });

	// Меню гамбургер
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const html = document.querySelector('html');
	hamburger.addEventListener("click", mobileMenu);
	function mobileMenu() {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
	    html.classList.toggle('overflow');
	}

	// Спойлер (dropdown)
	let linkDropDown = document.querySelector('.link-dropdown');
	linkDropDown.addEventListener('click', function(e) {
		e.preventDefault();
		let dropDown = document.querySelector('.dropdown');
		dropDown.classList.toggle('dropdown-active');
	});

	// Спойлер на телефонах, планшетах (dropdown-sm)
	let linkDropDownSm = document.querySelector('.link-dropdown-sm');
	linkDropDownSm.addEventListener('click', function(e) {
		e.preventDefault();
		let dropDownSm = document.querySelector('.dropdown-sm');
		dropDownSm.classList.toggle('dropdown-active');
	});

	if(htmlDoc.classList.contains('all-courses-html')) {
		// Переменные для кнопок чтобы переключать табы
		let switchFirst = document.querySelector('.switch-first');
		let switchSecond = document.querySelector('.switch-second');
		let switchThird = document.querySelector('.switch-third');
		let switchTab = document.querySelectorAll('switch-tab');
		let tab = document.querySelectorAll('.tab-wrap');
		
		// Цикл для табов
		function forTab() {
			for(let i = 0; i < tab.length; i++) {
				let tabs = tab[i];
				tabs.classList.add('tab-none');
				tabs.classList.remove('tab-active');
			}
		}

		// Открытие таба
		switchFirst.addEventListener('click', function() {
			let tabFirst = document.querySelector('.tab-wrap__first');
			forTab();
			tabFirst.classList.add('tab-active');
			switchSecond.classList.remove('switch-second-active');
			switchThird.classList.remove('switch-third-active');
			this.classList.add('switch-first-active');
		});	

		// Открытие таба
		switchSecond.addEventListener('click', function() {
			let tabSecond = document.querySelector('.tab-wrap__second');
			forTab();
			tabSecond.classList.add('tab-active');		
			switchFirst.classList.remove('switch-first-active');
			switchThird.classList.remove('switch-third-active');
			this.classList.add('switch-second-active');
		});

		// Открытие таба
		switchThird.addEventListener('click', function() {
			let tabThird = document.querySelector('.tab-wrap__third');
			forTab();
			tabThird.classList.add('tab-active');	
			switchFirst.classList.remove('switch-first-active');
			switchSecond.classList.remove('switch-second-active');
			this.classList.add('switch-third-active');
		});
	}

	if(htmlDoc.classList.contains('contacts-html')) {
		$('#tel').mask('+0 (000) 000 00 00', {placeholder: "Телефон"});
	};
});
