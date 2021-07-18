window.addEventListener('load', function() {
	let indexHtml = document.querySelector('.index-file');
	let shopHtml = document.querySelector('.shop-file');
	let signUpFile = document.querySelector('.registration-file');
	let readMoreHtml = document.querySelector('.read-more-file');
	let $page = $('html, body');
	if(shopHtml || signUpFile || readMoreHtml) {
		$('a[href*="#"]').click(function() {
		    $page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 500);
		    return false;
		});
	}
	if(indexHtml) {
			/* INDEX.HTML START */
			$('a[href*="#"]').click(function() {
		    $page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top - 100
		    }, 500);
		    return false;
		});
		$('.fade').slick({
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
		  autoplaySpeed: 1900,
		  arrows: false,
		});

		$('.about__slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        dots: true
	      }
	    }
	  ]
		});

		//APP
		$('.app__btn').click(function(event) {
			$('.app__interact-block-wrap').removeClass('block-active')
			var num = $(this).attr('data-num');
			$('#app__block'+num).addClass('block-active');
			if(!($('.app__btn').hasClass('app__btn_active'))) {
				$('.app__btn').removeClass('app__btn_active');	
			} else {
				$('.app__btn').removeClass('app__btn_active');
				$(this).addClass('app__btn_active');
			}
		});

		let menu = document.querySelector('.header__list');
		let links = menu.querySelectorAll('.header__item');
		let scrollTimeout;

		window.addEventListener('scroll', function(){
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(onScroll, 200);
		});

		menu.addEventListener('click', function(e){
			let link = e.target;

			if(link.classList.contains('header__item')){
				e.preventDefault();
				scrollToTarget(link.hash);
			}
		});

		if(location.hash !== ''){
			scrollToTarget(location.hash);
		}

		function scrollToTarget(id){
			let target = document.querySelector(id);

			if(target !== null){
				let pos = target.offsetTop;

				window.scrollTo({
					top: pos,
					behavior: 'smooth'
				});
			}
		}

		function onScroll(){
			let pos = window.pageYOffset;
			for(let i = links.length - 1; i >= 0; i--){
				let link = links[i];
				let target = document.querySelector(link.hash);
				
				if((pos + window.innerHeight / 2) > target.offsetTop){
					menu.querySelector('.item-active').classList.remove('item-active');
					link.classList.add('item-active');
					break;
				}
			}
		}

		//E-mail Ajax Send
	  $("form").submit(function() { //Change
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", //Change
	      data: th.serialize()
	    }).done(function() {
	      alert("Спасибо!");
	      setTimeout(function() {
	        // Done Functions
	        th.trigger("reset");
	      }, 1000);
	    });
	    return false;
	  });
		/* INDEX.HTML END */
}
	/* SHOP.HTML START */
if(shopHtml) {
		$('.shop-first__slider').slick({
		  infinite: false,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  arrows: true,
		  responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
		});

	$('.categories__btn').click(function() {
		$('.categories__list-wrap').slideToggle();
	});

	let categoriesBtn = document.querySelector('.categories__btn');
	categoriesBtn.addEventListener('click', function() {
		let categoriesBtnImg = document.querySelector('.categories__btn-img');
		if(categoriesBtnImg.classList.contains('img-active')) {
			categoriesBtnImg.classList.remove('img-active');
		} else {
			categoriesBtnImg.classList.add('img-active');
		}
	});
}
	/* SHOP.HTML END */

	/* READ-MORE.HTML START */
	if(readMoreHtml) {
		$('.philosophy__slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true
	});
	}
	/* READ-MORE.HTML END */

	/* REGISTRATION.HTML START */	
	if(signUpFile) {
		showHidePassword = document.querySelector('.password-control');
		showHidePasswordTest = document.querySelector('.password-control-two');
		showHidePassword.addEventListener('click', function() {
			var input = document.querySelector('.sign-up__form-password-main');
			if (input.getAttribute('type') == 'password') {
			this.classList.add('view');
			input.setAttribute('type', 'text');
		} else {
			this.classList.remove('view');
			input.setAttribute('type', 'password');
		}
		return false;
	});

		$(".sign-up__form").submit(function() { //Change
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", //Change
	      data: th.serialize()
	    }).done(function() {
	      $('.modal-show-done').addClass('visible');
	      $('.modal-show-done').removeClass('visible');
	      $('html').css('overflow-y', 'hidden')
	      setTimeout(function() {
	        // Done Functions
	        th.trigger("reset");
	      }, 1000);
	    });
	    return false;
	  });

	let modalCloseTwo = document.querySelector('.modal__close-two');
	modalCloseTwo.addEventListener('click', function(event) {
		const modal = document.querySelector('.modal__show-done');
		modal.classList.add('hidden');
		modal.classList.remove('visible');
		const html = document.querySelector('html');
		html.style.overflowY = 'scroll';
	});

	showHidePasswordTest.addEventListener('click', function() {
			var input = document.querySelector('.sign-up__form-password-test-main');
			if (input.getAttribute('type') == 'password') {
			this.classList.add('view');
			input.setAttribute('type', 'text');
		} else {
			this.classList.remove('view');
			input.setAttribute('type', 'password');
		}
		return false;
	});

	// PASSWORD VALIDATION
	let signUpPass = document.querySelector('.sign-up__form-password-main');
	let signUpPassTest = document.querySelector('.sign-up__form-password-test-main');
	let passwords = document.querySelectorAll('.sing-up__passwords');
	const modalClose = document.querySelector('.modal__close');
	let form = document.querySelector('.sign-up__form');
	form.addEventListener('submit', function(e) {
		if(!(signUpPass.value == signUpPassTest.value)) {
			e.preventDefault();
			const modal = document.querySelector('.modal__show');
			modal.classList.add('visible');
			modal.classList.remove('hidden');
			const html = document.querySelector('html');
	 		html.style.overflowY = 'hidden';
	 		const modalClose = document.querySelectorAll('.modal__close');
	 		for(i = 0; i < modalClose.length; i++) {
	 			let modalCl = modalClose[i];
	 			modalCl.addEventListener('click', function(event) {
				const modal = document.querySelector('.modal__show');
				modal.classList.add('hidden');
				modal.classList.remove('visible');
				const html = document.querySelector('html');
		 		html.style.overflowY = 'scroll';
		 		const modalWindow = document.querySelector('.modal');
			});
	 		}
			
		}
	});

		for(i = 0; i < passwords.length; i++) {
			let passes = passwords[i];
			passes.addEventListener('input', function(e) {
				if(!(signUpPass.value == signUpPassTest.value) || this.value.length < 8) {
					signUpPass.classList.add('invalid');
					signUpPassTest.classList.add('invalid');
				} else {
					signUpPass.classList.remove('invalid');
					signUpPassTest.classList.remove('invalid');
				}
			});
			passes.addEventListener('contextmenu', function() {
				return false;
			});
		}

	// SELECT STYLE
		$('.sign-up__form-select').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 500;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: 'Service type'
		}).insertAfter($this);
		
		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');
		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});	
	});
	}
	/* REGISTRATION.HTML END */
});