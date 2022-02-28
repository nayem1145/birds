(function($) {
    "use strict"
    jQuery(document).ready(function() {

        //Mobile Menu 
        $(".mobile-menu-toggle").on("click", function(){
            $(".nft-mobile-menu").toggleClass("mobile-menu-active"); 
            $(this).toggleClass("active");
        });

        $(".nft-mobile-menu .close").on("click", function() {
            $(".nft-mobile-menu").removeClass("mobile-menu-active");
        });

        //NFT Birds Slider 
        $(".nft-slider-1").slick({
            slidesToShow: 10,
            centerMode: true,
            autoplay: true, 
            arrows: false, 
            dots: false,
            responsive: [
                {
                    breakpoint: 1200, 
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 880, 
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 650, 
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 540, 
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 400, 
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        $(".nft-slider-2").slick({
            slidesToShow: 10,
            centerMode: true,
            autoplay: true, 
            arrows: false, 
            dots: false,
            responsive: [
                {
                    breakpoint: 1200, 
                    settings: {
                        slidesToShow: 8,
                    }
                },
                {
                    breakpoint: 880, 
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 650, 
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 540, 
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 400, 
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        //Feedback Slider
        $(".feedback-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: false,
            dots: true,
            prevArrow: "<button type='button' class='prev-btn'><i class='fa fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 800, 
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        //Brand Slider
        $(".partner-brand-slider").slick({
            autoplay: true, 
            arrows: false, 
            dots: false,
            slidesToShow: 10,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1500, 
                    settings: {
                        slidesToShow: 8,
                    }
                },
                {
                    breakpoint: 1300, 
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 1100, 
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 900, 
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 700, 
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 500, 
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 400, 
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 350, 
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });


    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });
})(jQuery);
