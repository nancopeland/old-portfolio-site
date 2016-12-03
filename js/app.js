// JS

$(document).ready(function(){
	$('.menu-button').click(function(){ // click on "more info" button
		// opens menu
		$('.menu').toggleClass('open'); // gives whole menu the "open" class
		$('.menu-about').fadeToggle(); // show "more info" menu

		// replaces "more info" with "close"
		if ($('.menu').hasClass('open')) {
			$('.menu-cta').html('<span>close</span>'); 
		} else {
			$('.menu-cta').html('<span><i class="twa twa-sparkles"></i>about<i class="twa twa-sparkles"></i></span>'); 
		}
	});

});