$(document).ready(function() {
	$('.stage-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: true
	});

	if ($(window).width() < 768) {
		$('.stage .slick-next').addClass('icon-arrow-right-mobile');
		$('.stage .slick-prev').addClass('icon-arrow-left-mobile');
	} else {
		$('.stage .slick-next').addClass('icon-arrow-right');
		$('.stage .slick-prev').addClass('icon-arrow-left');
	}

	$('.hotels-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		dots: true
	});

	if ($(window).width() < 768) {
		$('.hotels-slider .slick-next').addClass('icon-arrow-right-mobile');
		$('.hotels-slider .slick-prev').addClass('icon-arrow-left-mobile');
	} else {
		$('.hotels-slider .slick-next').addClass('icon-arrow-right');
		$('.hotels-slider .slick-prev').addClass('icon-arrow-left');
	}

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
		if (
			$('.check:checked').length &&
			$('form .error').length === 0 &&
			$('#name').val() !== '' &&
			$('#email').val() !== ''
		) {
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

	$('#name').blur(function() {
		if ($('#name').val() === '') {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}

		if ($('#name').val() !== '' && $('form .error').length === 0 && $('#email').val() !== '') {
			$('.form-btn').addClass('active');
		} else {
			$('.form-btn').removeClass('active');
		}
	});

	$('#email').blur(function() {
		if ($('#email').val() === '') {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}

		if (
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val()) &&
			$('form .error').length === 0 &&
			$('#name').val() !== '' &&
			$('form .error').length === 0
		) {
			$('.form-btn').addClass('active');
		} else {
			$('.form-btn').removeClass('active');
		}
	});

	$('#privacyPolicy').change(function() {
		if ($('#privacyPolicy:checked').length === 0) {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}

		if ($('#name').val() !== '' && $('#privacyPolicy:checked').length !== 0 && $('#email').val() !== '') {
			$('.form-btn').addClass('active');
		} else {
			$('.form-btn').removeClass('active');
		}
	});
});
