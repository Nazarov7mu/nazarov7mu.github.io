(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 5.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        // var welcomeSlide = $('.hero-post-slides');
        var popularSlide = $('.neon_hero-game-slideshow');

        // welcomeSlide.owlCarousel({
        //     // items: 1,
        //     // margin: 0,
        //     loop: true,
        //     nav: true,
        //     navText: ['Prev Game', 'Next Game'],
        //     dots: false,
        //     autoplay: true,
        //     autoplayTimeout: 7000,
        //     smartSpeed: 1000
        // });

        // welcomeSlide.on('translate.owl.carousel', function () {
        //     var slideLayer = $("[data-animation]");
        //     slideLayer.each(function () {
        //         var anim_name = $(this).data('animation');
        //         $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        //     });
        // });

        // welcomeSlide.on('translated.owl.carousel', function () {
        //     var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        //     slideLayer.each(function () {
        //         var anim_name = $(this).data('animation');
        //         $(this).addClass('animated ' + anim_name).css('opacity', '1');
        //     });
        // });

        // $("[data-delay]").each(function () {
        //     var anim_del = $(this).data('delay');
        //     $(this).css('animation-delay', anim_del);
        // });

        // $("[data-duration]").each(function () {
        //     var anim_dur = $(this).data('duration');
        //     $(this).css('animation-duration', anim_dur);
        // });

        popularSlide.owlCarousel({
            items: 1,
            //margin: 30,
            center: true,
            nav: true,
            navText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            // responsive: {
            //     0: {
            //         items: 2
            //     },
            //     768: {
            //         items: 3
            //     },
            //     992: {
            //         items: 4
            //     },
            //     1200: {
            //         items: 6
            //     }
            // }
        });

        latestSlide.owlCarousel({
            items: 1,
            //margin: 30,
            center: true,
            nav: true,
            navText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            // responsive: {
            //     0: {
            //         items: 2
            //     },
            //     768: {
            //         items: 3
            //     },
            //     992: {
            //         items: 4
            //     },
            //     1200: {
            //         items: 6
            //     }
            // }
        });

        editorSlide.owlCarousel({
            items: 1,
            //margin: 30,
            center: true,
            nav: true,
            navText: ['<ion-icon name="arrow-back-outline"></ion-icon>', '<ion-icon name="arrow-forward-outline"></ion-icon>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            // responsive: {
            //     0: {
            //         items: 2
            //     },
            //     768: {
            //         items: 3
            //     },
            //     992: {
            //         items: 4
            //     },
            //     1200: {
            //         items: 6
            //     }
            // }
        });
    }

})(jQuery);