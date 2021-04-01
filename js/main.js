$('.big-slider__items').slick({
  dots: false,
  appendArrows: false,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

jQuery(function(f){
	var element = f('#blfix');
	f(window).scroll(function(){
	    element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](500);           
	});
}); 


$(function() {
  $("#selectBackground ul li a").click(function(e) {
    e.preventDefault();
    $("#selectBackground ul li a").removeClass('active');
    $(this).addClass('active');
  })
});

$(function() {
	$(".info__btn").click(function(e) {
		$('.info__btn').removeClass('info__active');
		$(this).addClass('info__active');
	})

	$("#info-1").click(function(e) {
		$('.text-2').css('display', 'none');
		$('.text-3').css('display', 'none');
		$('.text-4').css('display', 'none');
		$('.text-5').css('display', 'none');
		$('.text-1').css('display', 'block');
	})

	$("#info-2").click(function(e) {
		$('.text-1').css('display', 'none');
		$('.text-3').css('display', 'none');
		$('.text-4').css('display', 'none');
		$('.text-5').css('display', 'none');
		$('.text-2').css('display', 'block');
	})

	$("#info-3").click(function(e) {
		$('.text-1').css('display', 'none');
		$('.text-2').css('display', 'none');
		$('.text-4').css('display', 'none');
		$('.text-5').css('display', 'none');
		$('.text-3').css('display', 'block');
	})

	$("#info-4").click(function(e) {
		$('.text-1').css('display', 'none');
		$('.text-2').css('display', 'none');
		$('.text-3').css('display', 'none');
		$('.text-5').css('display', 'none');
		$('.text-4').css('display', 'block');
	})

	$("#info-5").click(function(e) {
		$('.text-1').css('display', 'none');
		$('.text-2').css('display', 'none');
		$('.text-3').css('display', 'none');
		$('.text-4').css('display', 'none');
		$('.text-5').css('display', 'block');
	})
});



