// JS

$(document).ready(function(){
	$('.menu-more-info').hide(); 
	$('.menu-icon-wrapper').click(function(){ // click on "more info" button
		// opens menu
		$('.menu').toggleClass('open'); // gives whole menu the "open" class
		$('.menu-more-info').fadeToggle(); // show "more info" menu

		// replaces "more info" with "close"
		if ($('.menu').hasClass('open')) {
			$('.menu-cta').html('<span>close</span>'); 
		} else {
			$('.menu-cta').html('<span>more info</span>'); 
		}
	});
});