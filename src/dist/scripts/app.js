$(document).ready(function(){$(".stage-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,dots:!0}),$(".stage .slick-next").addClass("icon-arrow-right"),$(".stage .slick-prev").addClass("icon-arrow-left"),$(".hotels-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,dots:!0}),$(".hotels-slider .slick-next").addClass("icon-arrow-right"),$(window).width()<768&&$(".camp ul").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,dots:!0}),$(".btn-ajax").magnificPopup({type:"inline",enableEscapeKey:!0}),$(".form-btn").on("click",function(){$("input[type=radio]:checked").length<=0?$("input[type=radio]").addClass("error"):""===$("#firstName").val()?$("#firstName").addClass("error"):""===$("#lastName").val()?$("#lastName").addClass("error"):$(".form-btn").addClass("active")})});