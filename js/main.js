/* Для слайдера Старт */
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      loop: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    });
/* Для слайдера Конец */

var mainBlock = document.querySelector('.main-block');
var turn = document.getElementById("turn");
var distance =  document.getElementById("distance");
var height =  document.getElementById("height");
var output1 = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var output5 = document.getElementById("demo5");
var output6 = document.getElementById("demo6");
var turn2 = document.getElementById("turn2");
var distance2 =  document.getElementById("distance2");
var height2 =  document.getElementById("height2");

output1.innerHTML = turn.value;

turn.oninput = function() {
  output1.innerHTML = this.value;
}

output2.innerHTML = height.value;

height.oninput = function() {
  output2.innerHTML = this.value;
}

output3.innerHTML = distance.value;

distance.oninput = function() {
  output3.innerHTML = this.value;
}

output4.innerHTML = turn2.value;

turn2.oninput = function() {
  output4.innerHTML = this.value;
}

output5.innerHTML = height2.value;

height2.oninput = function() {
  output5.innerHTML = this.value;
}

output6.innerHTML = distance2.value;

distance2.oninput = function() {
  output6.innerHTML = this.value;
}

/* Выбор Одежды и Корзина Старт */
var btnHat = document.querySelector('.btn-hat');
var shopHat = document.querySelector('.shop__cont-hat');
var shopCont = document.querySelector('.shop__cont');
var shopContSecond = document.querySelector('.shop__cont_second');
var shopContThird = document.querySelector('.shop__cont_third');
var backBtn = document.querySelector('.back__button');
var btnSuit = document.querySelector('.btn-suit');
var btnShirt = document.querySelector('.btn-shirt');
var btnShorts = document.querySelector('.btn-shorts');
var btnFWear = document.querySelector('.btn-f-wear');
var btnGauntlet = document.querySelector('.btn-gauntlet');
var btnGlasses = document.querySelector('.btn-glasses');
var btnJewel = document.querySelector('.btn-jewel');
var btnWatch = document.querySelector('.btn-watch');


btnHat.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnSuit.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnShirt.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnShorts.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnFWear.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnGauntlet.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}


btnGlasses.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnJewel.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

btnWatch.onclick = function() {
	shopCont.style.display = 'none';
	shopHat.style.display = 'block';
	shopContSecond.style.display = 'none';
	shopContThird.style.display = 'block';
}

backBtn.onclick = function() {
	shopCont.style.display = 'block';
	shopHat.style.display = 'none';
	shopContSecond.style.display = 'block';
	shopContThird.style.display = 'none';
}
/* Выбор Одежды и Корзина Конец */

var shop = document.querySelector('.shop');
var closeRange = document.querySelector('.shop__close');
var rangeNone = document.querySelector('.range__wrap');
var closeShop = document.querySelector('.shop__close_second');
var rangeNoneSecond = document.querySelector('.range__wrap_second');
var auto = document.querySelector('.auto');
var map = document.querySelector('.map');
var slider = document.querySelector('.auto-slide__container');
var autoClose = document.querySelector('.auto-params__close');
var diner = document.querySelector('.diner');
var dinerClose = document.querySelector('.diner__close');
var magazine = document.querySelector('.magazine');
var magazineClose = document.querySelector('.magazine__close');
var magazineRefill = document.querySelector('.magazine-around-refill');
var refillClose = document.querySelector('.magazine-around-refill__close');
var pharmacy = document.querySelector('.pharmacy');
var pharmacyClose = document.querySelector('.pharmacy__close');
var bank = document.querySelector('.bank');
var bankToMake = document.querySelector('.bank-to-make');
var btnToMake = document.querySelector('.button__to-make');
var bankToMakeClose = document.querySelector('.bank-to-make__close');
var bankTakeOff = document.querySelector('.bank-take-off');
var btnTakeOff = document.querySelector('.button__take-off');
var bankOperation = document.querySelector('.bank-operation');
var bankTakeOffClose = document.querySelector('.bank-take-off__close');
var bankBusiness = document.querySelector('.bank-business');
var bankBusinessClose = document.querySelector('.bank-business__close');
var btnBusiness = document.querySelector('.button__business');
var bankHouse = document.querySelector('.bank-house');
var bankHouseClose = document.querySelector('.bank-house__close');
var btnHouse = document.querySelector('.button__house');
var bankCard = document.querySelector('.bank-card');
var bankCardClose = document.querySelector('.bank-card__close');
var btnCard = document.querySelector('.button__card');
var btnNext = document.querySelector('.bank-house__button-next');
var bankCardNext = document.querySelector('.bank-card-next');
var bankCardNextClose = document.querySelector('.bank-card-next__close_second');

closeRange.onclick = function() {
	rangeNone.style.display = 'none';
	rangeNoneSecond.style.display = 'none';
}

closeShop.onclick = function() {
	shop.style.display = 'none';
	auto.style.display = 'block';
	mainBlock.style.background = 'url(img/auto-bg.jpg)';
	mainBlock.style.backgroundSize = '100% 100%';
	map.style.display = 'none';
	slider.style.visibility = 'visible';
	slider.style.height = '8.6vh';
}

autoClose.onclick = function() {
	slider.style.visibility = 'hidden';
	slider.style.height = '0px';
	mainBlock.style.background = 'url(img/bg.jpg)';
	mainBlock.style.backgroundSize = '100% 100%';
	auto.style.display = 'none';
	diner.style.display = 'flex';
	map.style.display = 'block';
}




// (Закрытие Закусочная №1) Открытие Магазин 24/7 Старт
dinerClose.onclick = function() {
	diner.style.display = 'none';
	magazine.style.display = 'flex';
}
// (Закрытие Закусочная №1) Открытие Магазин 24/7 Конец


// (Закрытие Магазин 24/7) Открытие Магазин у заправки Старт
magazineClose.onclick = function() {
	magazine.style.display = 'none';
	magazineRefill.style.display = 'flex';
}
// (Закрытие Магазин 24/7) Открытие Магазин у заправки Конец


// (Закрытие Магазин у заправки) Открытие Аптека Старт
refillClose.onclick = function() {
	magazineRefill.style.display = 'none';
	pharmacy.style.display = 'flex';
}
// (Закрытие Магазин у заправки) Открытие Аптека Конец


// (Закрытие Аптека) Открытие Банкомат Старт
pharmacyClose.onclick = function() {
	pharmacy.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Аптека) Открытие Банкомат Конец


// (Закрытие Банкомат) Открытие Внести средства Старт
btnToMake.onclick = function() {
	bank.style.display = 'none';
	bankToMake.style.display = 'flex';
}
// (Закрытие Банкомат) Открытие Внести средства Конец


// (Закрытие Банкомат) Открытие Вывести средства Старт
btnTakeOff.onclick = function() {
	bank.style.display = 'none';
	bankTakeOff.style.display = 'flex';
}
// (Закрытие Банкомат) Открытие Вывести средства Конец


// (Закрытие Банкомат) Открытие Бизнес Старт
btnBusiness.onclick = function() {
	bank.style.display = 'none';
	bankBusiness.style.display = 'flex';
}
// (Закрытие Банкомат) Открытие Бизнес Конец


// (Закрытие Банкомат) Открытие Оплатить за недвижимость Старт
btnHouse.onclick = function() {
	bank.style.display = 'none';
	bankHouse.style.display = 'flex';
}
// (Закрытие Банкомат) Открытие Оплатить за недвижимость Конец


// (Закрытие Банкомат) Открытие Перевести на карту Старт
btnCard.onclick = function() {
	bank.style.display = 'none';
	bankCard.style.display = 'flex';
}
// (Закрытие Банкомат) Открытие Перевести на карту Конец


// Вторая стадия перевода Старт
btnNext.onclick = function() {
	bankCard.style.display = 'none';
	bankCardNext.style.display = 'flex';
}
// Вторая стадия перевода конец


// (Закрытие Внести средства) Открытие Банкомат Старт
bankToMakeClose.onclick = function() {
	bankToMake.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Внести средства) Открытие Банкомат Конец


// (Закрытие Вывести средства) Открытие Банкомат Старт
bankTakeOffClose.onclick = function() {
	bankTakeOff.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Вывести средства) Открытие Банкомат Конец


// (Закрытие Бизнес) Открытие Банкомат Старт
bankBusinessClose.onclick = function() {
	bankBusiness.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Бизнес) Открытие Банкомат Конец


// (Закрытие Оплатить за недвижимость) Открытие Банкомат Старт
bankHouseClose.onclick = function() {
	bankHouse.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Оплатить за недвижимость) Открытие Банкомат Конец


// (Закрытие Перевести на карту) Открытие Банкомат Старт
bankCardClose.onclick = function() {
	bankCard.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Перевести на карту) Открытие Банкомат Конец


// (Закрытие Вторая стадия перевода) Открытие Банкомат Старт
bankCardNextClose.onclick = function() {
	bankCardNext.style.display = 'none';
	bank.style.display = 'flex';
}
// (Закрытие Вторая стадия перевода) Открытие Банкомат конец


// Для Input Type Number Start
jQuery(($) => {
    // input type number 
    // Уменьшаем на 1 
    $(document).on('click', '.input-number__minus', function () {
        let total = $(this).next();
        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
    });
    // Увеличиваем на 1 
    $(document).on('click', '.input-number__plus', function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });
    // Запрещаем ввод текста 
    document.querySelectorAll('.input-number__input').forEach(function (el) {
        el.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    });

     // input type number 
    // Уменьшаем на 1 
    $(document).on('click', '.auto-number__minus', function () {
        let total = $(this).next();
        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
    });
    // Увеличиваем на 1 
    $(document).on('click', '.auto-number__plus', function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });
    // Запрещаем ввод текста 
    document.querySelectorAll('.auto-number__input').forEach(function (el) {
        el.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    });
});
// Для Input Type Number End