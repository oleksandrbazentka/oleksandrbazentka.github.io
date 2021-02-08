//DATE START
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});
//DATE END


// INPUT TYPE NUMBER START
jQuery(($) => {
    // input type number 
    // Уменьшаем на 1 
    $(document).on('click', '.quantity-number__minus', function () {
        let total = $(this).next();
        if (total.val() > 0) {
            total.val(+total.val() - 1);
        }
    });
    // Увеличиваем на 1 
    $(document).on('click', '.quantity-number__plus', function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });
    // Запрещаем ввод текста 
    document.querySelectorAll('.quantity__number').forEach(function (el) {
        el.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    });
});
//INPUT TYPE NUMBER END

// VALIDATE START
var element = document.getElementById('tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions); 
//VALIDATE END