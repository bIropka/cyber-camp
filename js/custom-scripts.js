$(window).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

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

    $('nav ul li a.active').click(function() {
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