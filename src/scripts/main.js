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

	$('.hotels-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: true
	});

	$('.hotels-slider .slick-next').addClass('icon-arrow-right');

	if ($(window).width() < 768) {
		$('.camp ul').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: true
		});
	}

	$('.btn-ajax').magnificPopup({
		type: 'inline',
		enableEscapeKey: true
	});
});
