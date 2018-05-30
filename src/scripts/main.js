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
	$('.hotels-slider .slick-prev').addClass('icon-arrow-left');

	if ($(window).width() < 768) {
		$('.camp ul').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: true
		});
	}

	$('.check').change(function() {
		if ($('.check:checked').length && $('#firstName').val() !== '' && $('#lastName').val() !== '') {
			$('.form-btn').addClass('active');
		} else {
			$('.form-btn').removeClass('active');
		}
		$('.check')
			.prev('label')
			.removeClass('active');
		if ($('.check:checked')) {
			$(this)
				.prev('label')
				.addClass('active');
		}
	});
	$('input').blur(function() {
		if ($('.check:checked').length && $('#firstName').val() !== '' && $('#lastName').val() !== '') {
			$('.form-btn').addClass('active');
		} else {
			$('.form-btn').removeClass('active');
		}
	});
});
