$(function() {
   $(".form").submit(function() { //Change
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", //Change
	      data: th.serialize()
	    }).done(function() {
	      $('.popup__wrap').addClass('visible');
	      $('.main-section').addClass('back-none');
	      $('.main-section-img').addClass('back-none');
	      setTimeout(function() {
	        // Done Functions
	        th.trigger("reset");
	      }, 1000);
	    });
	    return false;
	  });
});
