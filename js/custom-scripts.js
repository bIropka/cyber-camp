$(window).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    /* the pre-loader */

    var pre = $('.pre-loader');

    $('.pre-loader img').fadeIn(200);

    if($(window).width() > $(window).height()) {

        pre.css({
            'width' : $(window).width(),
            'height' : $(window).width(),
            'top' : $(window).height() / 2 - $(window).width() / 2,
            'bottom' : 'auto'
        });

    } else {

        pre.css({
            'width' : $(window).height(),
            'height' : $(window).height(),
            'left' : $(window).width() / 2 - $(window).height() / 2,
            'right' : 'auto'
        });

    }

    setTimeout(function(){

        $('.pre-loader img').fadeOut(0);

        pre.css('border-radius', '50%');

        if($(window).width() > $(window).height()) {

            pre.animate({
                top: $(window).height() / 2,
                width: 0,
                height: 0
            }, 400);

        } else {

            pre.animate({
                left: $(window).width() / 2,
                width: 0,
                height: 0
            }, 400);

        }

    }, 3000);

    /* the end of the pre-loader */

    $(window).scroll(function() {

        if($(window).width() > 1260) {

            if($(window).scrollTop() > 50) {

                $('header[role="banner"]').addClass('narrow');

            } else {

                $('header[role="banner"]').removeClass('narrow');

            }

        }

    });

    if($(window).width() < 1260) {
        $('header[role="banner"]').removeClass('narrow');
        $('nav').appendTo('.mobile-nav');
    } else {
        $('nav').insertBefore('.to-buy');
        if($(window).scrollTop() > 50) {
            $('header[role="banner"]').addClass('narrow');
        }

    }

    if($(window).width() < 768) {
        $('header[role="banner"] .phone-block').prependTo('.mobile-nav');
        $('#music').remove();
    } else {
        $('.mobile-nav .phone-block').insertAfter('.logo-header');
    }

    $(window).resize(function() {

        if($(window).width() < 1260) {
            $('header[role="banner"]').removeClass('narrow');
            $('nav').appendTo('.mobile-nav');
        } else {
            $('nav').insertBefore('.to-buy');
            if($(window).scrollTop() > 50) {
                $('header[role="banner"]').addClass('narrow');
            }

        }

        if($(window).width() < 768) {
            $('header[role="banner"] .phone-block').prependTo('.mobile-nav');
        } else {
            $('.mobile-nav .phone-block').insertAfter('.logo-header');
        }

    });

    /*******************************************************************************************************************
     *********** clicks
     ******************************************************************************************************************/

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('.mobile-nav').toggleClass('active');

    });

    $('nav ul li a').click(function() {

        var currentLink = $(this).attr('href');

        if (!$(this).hasClass('active')) {

            if($(window).width() > $(window).height()) {

                pre.animate({
                    width : $(window).width(),
                    height : $(window).width(),
                    top : $(window).height() / 2 - $(window).width() / 2
                }, 400);

                setTimeout(function() {
                    pre.css('border-radius', 0);
                }, 400);

            } else {

                pre.animate({
                    width : $(window).height(),
                    height : $(window).height(),
                    left : $(window).width() / 2 - $(window).height() / 2
                }, 400);

                setTimeout(function() {
                    pre.css('border-radius', 0);
                }, 400);

            }

            setTimeout(function() {
                location.href = currentLink;
            }, 500);

        }

        return false;

    });

    $('.music-control').click(function() {

        if($(this).hasClass('paused')) {
            $(this).removeClass('paused');
            document.getElementById('music').play();
        } else {
            $(this).addClass('paused');
            document.getElementById('music').pause();
        }

    });

    $('.callback').click(function() {
        $('.window').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    /*******************************************************************************************************************
     *************** slick
     ******************************************************************************************************************/

    $('.slider').slick({
        slidesToShow: 7,
        appendArrows: '.slider-control',
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next',
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*******************************************************************************************************************
     *********** countdown
     ******************************************************************************************************************/

    var clock;
    var diff = (24 * 60 *60 * 2);// период для счетчика, в миллисекундах, установлено двое суток

    // Instantiate a coutdown FlipClock
    clock = $('.countdown').FlipClock(diff, {
        language: 'ru',
        clockFace: 'DailyCounter',
        clockFaceOptions: {
            countdown: true
        }
    });
    clock.setCountdown(true);
    clock.face.on('stop', function() {
        // add 24 hours worth of seconds to the clock face
        clock.setFaceValue(24 * 60 * 60);
        clock.start();
    });




});