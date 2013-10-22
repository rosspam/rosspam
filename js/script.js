//@prepros-append jquery.scrollTo.js
//@prepros-append jquery.localScroll.js
//@prepros-append jquery.pursuingsnav.js

//@prepros-append log.js

$(document).ready(function(){
	$('nav.navbar').pursuingsnav();
	$('.nav a').click(function(){
		var href = $(this).attr('href');
		if(href && href != '#'){
			$.scrollTo(href,300);
		}
	});
	$('.baner-tab:not(:first)').hide();
	$('.show-tab').click(function(){
		var tab = $(this).attr('href');
		$('.baner-tab:not('+tab+')').hide();
		$(tab).show();
		return false;
	});
});