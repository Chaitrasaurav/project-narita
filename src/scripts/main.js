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
			$('#email').val() !== '' &&
			$('#privacyPolicy:checked').length
		) {
			$('.form-btn')
				.addClass('active')
				.removeAttr('disabled');
		} else {
			$('.form-btn')
				.removeClass('active')
				.prop('disabled', true);
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

		if (
			$('#name').val() !== '' &&
			$('form .error').length === 0 &&
			$('#email').val() !== '' &&
			$('#privacyPolicy:checked').length
		) {
			$('.form-btn')
				.addClass('active')
				.removeAttr('disabled');
		} else {
			$('.form-btn')
				.removeClass('active')
				.prop('disabled', true);
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
			$('form .error').length === 0 &&
			$('#privacyPolicy:checked').length
		) {
			$('.form-btn')
				.addClass('active')
				.removeAttr('disabled');
		} else {
			$('.form-btn')
				.removeClass('active')
				.prop('disabled', true);
		}
	});

	$('#privacyPolicy').change(function() {
		if ($('#privacyPolicy:checked').length === 0) {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}

		if ($('#name').val() !== '' && $('#privacyPolicy:checked').length !== 0 && $('#email').val() !== '') {
			$('.form-btn')
				.addClass('active')
				.removeAttr('disabled');
		} else {
			$('.form-btn')
				.removeClass('active')
				.prop('disabled', true);
		}
	});

	if ($(window).width() < 768) {
		$('.sche1-wrapper .right-side .first-section-right').insertBefore(
			$('.sche1-wrapper .left-side .first-section-left')
		);
		$('.sche1-wrapper .right-side .last-section-right').insertBefore($('.sche1-wrapper .left-side .day2'));
		$('.sche2-wrapper .right-side .first-section-right').insertBefore($('.sche2-wrapper .left-side .day2'));
		$('.sche2-wrapper .left-side .last-section-left').insertAfter(
			$('.sche2-wrapper .right-side .last-section-right')
		);
		$('.section-yume .yume-contact .last-section img').insertBefore(
			$('.section-yume .yume-contact .first-section')
		);
		$('.section-museum .museum-contact .last-section img').insertBefore(
			$('.section-museum .museum-contact .first-section')
		);
	}

	var popup = document.getElementById('popup');
	var btn = document.getElementById('popup-button');
	var closeButton = document.getElementsByClassName('close')[0];
	btn.onclick = function() {
		popup.style.display = 'block';
		$('body, html').addClass('not-scrollable');
	};
	closeButton.onclick = function() {
		popup.style.display = 'none';
		$('body, html').removeClass('not-scrollable');
	};
	window.onclick = function(event) {
		if (event.target == popup) {
			popup.style.display = 'none';
			$('body, html').removeClass('not-scrollable');
		}
	};
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			popup.style.display = 'none';
			$('body, html').removeClass('not-scrollable');
		}
	});
});
