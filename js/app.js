// JS

$(document).ready(function(){
	$('.menu-more-info').hide(); 
	$('.menu-icon-wrapper').click(function(){
		$(this).toggleClass('open');
		$('.menu-more-info').fadeToggle();
	});
});