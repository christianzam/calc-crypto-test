document.querySelector(function() {
    
    "use strict";
    

    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
     
    
    //  Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Slick

    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.testimonial-active-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.client-active').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.testimonial-active-4').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

   
    
    //=====  AOS
    
    new WOW().init();
    
    
    //===== 
   
    
});