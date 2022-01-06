$(function () {
    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            00
        );
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }

        if (scrolling > 150) {
            $(".main_nav").addClass("nav_sticky");
        } else {
            $(".main_nav").removeClass("nav_sticky");
        }
    });
    //============================scroll to top section end============================//

    //====================================slick slider start====================================//
    $(".banner_slider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        prevArrow: ".banner_prev_arrow",
        nextArrow: ".banner_next_arrow",
        autoplay: true,
        autoplaySpeed: 4000,
    });


    $(".service_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        prevArrow: ".service_prev_arrow",
        nextArrow: ".service_next_arrow",
        centerMode: true,
        centerPadding: "0",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".testimonial_slider_for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".testimonial_slider_nav",
    });

    $(".testimonial_slider_nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".testimonial_slider_for",
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0",
        prevArrow: ".testimonial_prev_arrow",
        nextArrow: ".testimonial_next_arrow",
        focusOnSelect: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                },
            },
        ],
    });

    $(".team_slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    //====================================slick slider end====================================//

    //====================================counter up start====================================//
    $(".counter").counterUp({
        delay: 30,
        time: 2000,
    });

    //====================================slick slider end====================================//

    //============================animation scroll section start============================//

    function scrollNav() {
        $('nav a').click(function () {
            $(".active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 90
            }, 00);
            return false;
        });
    }
    scrollNav();

    //============================animation scroll section end============================//
});