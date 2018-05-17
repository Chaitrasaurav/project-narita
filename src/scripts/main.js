$(document).ready(function() {
	$('.stage-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: true
	});

	$('.stage .slick-next').addClass('icon-arrow-right');
	$('.stage .slick-prev').addClass('icon-arrow-left');
});
