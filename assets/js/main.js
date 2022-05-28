/* ---------------------------------------
=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header takes the Full Height of the window
3 - Color Switcher && Changing Colors
4 - Sticky Menu
5 - Start Slick Slider Plugin in Slider Section
6 - About Section Skill Bars
7 - Hide menu after clicking on a link
8 - Jquery Smooth Scroll
9 - jquery scroll spy
10 - Parallax Effect
11 - Start numbers animate at fun-facts section
12 - Wow Js Active Jquery
13 - Start Isotop Plugin in Portfolio Section
14 - Start Owl Carousel Plugin in Client Section
15 - Jquery Go Down Button

--------------------------------------- */

(function($) {

    "use strict";

	/* ---------------------------------------------------
        1 - Adjust Loading Page
	----------------------------------------------------- */
    $(window).on("load", function () {
        $(".loading .loading-wrapper").delay(500).animate({
            top: "-100%"
        }, 1000, "easeInQuart");
        $(".loading").delay(1100).fadeOut(1500);
    });

    /* ----------------------------------------------------------
        2 - Make Header takes the Full Height of the window
    ------------------------------------------------------------ */
    var homeSec = $("#home");
    homeSec.height($(window).height());

    $(window).on("resize", function() {
        homeSec.height($(window).height());
    });
 
    /* --------------------------------------------------------
        3 - Color Switcher && Changing Colors
    ---------------------------------------------------------- */
    /* Variables */
    var colorSwitcher 	= $(".color-switcher"),
        switcherBtn 	= $(".switcher-btn"),
        colorSlot 		= $(".color-switcher .color-slot");
    /* Show/Hide color switcher on clicking on switcher button */
    
    switcherBtn.on("click", function(e) {
        e.preventDefault();
        if(colorSwitcher.hasClass("closed")) {
            colorSwitcher.removeClass("closed").animate({
                left: "0px"
            }, 300, "easeInOutSine");
        } else {
            colorSwitcher.animate({
                left: "-200px"
            }, 300, "easeInOutSine").addClass("closed");
        }
    });

    /* Giving every color-slot it background color */
    colorSlot.css("background-color", function() {
        return $(this).attr("data-background");
    });

    /* Changing color when clicking on color-slot  */
    colorSlot.on("click", function() {
        var dataTarget = $(this).attr("data-target");
        $("link[href*='color-']").attr("href", dataTarget);		
    });
    
    /* ---------------------------------------------------
        4 - Sticky Menu
    ----------------------------------------------------- */
    $(".header-area").sticky({topSpacing:0});
    
    /* ---------------------------------------------------
        5 - Start Slick Slider Plugin in Slider Section
    ----------------------------------------------------- */
    $(window).on("load", function () {
        function heroSlider() {

            function slideAnimation(elem) {
                var animEndEv = 'webkitAnimationEnd animationend';
                elem.each(function() {
                    var $this = $(this),
                    $animationType = $this.data('animation');

                    $this.css('opacity', '1').addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                    });
                });
            }
            var $heroSlider = $('.hero-slider'),
                $sliderContent = $('.hero-slider-content'),
                $firstSlideAnimation = $heroSlider.find('.slice:first').find("[data-animation ^= 'animated']");

            $heroSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                var slide = $(slick.$slides.get(currentSlide));
                var $caption = slide.find("[data-animation ^= 'animated']").css('opacity', '0');
            });
            $heroSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
                var slide = $(slick.$slides.get(currentSlide));
                var $caption = slide.find("[data-animation ^= 'animated']");
                slideAnimation($caption);
            });

            $(".hero-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                useCSS: true,
                autoplay: true,
                autoplaySpeed: 7000,
                arrows: true,
                cssEase: 'ease-in-out',
                lazyLoad: 'progressive',
                dots: false,
                fade: true,
                infinite: true,
                pauseOnHover: false,
                prevArrow: $('.prev'),
                nextArrow: $('.next')
            }); 

            slideAnimation($firstSlideAnimation);
        }

        heroSlider();
    });
    
    /* ---------------------------------------------------
        6 - About Section Skill Bars  
    ----------------------------------------------------- */
    $(".about").appear(function () {
          $(".skillbar").skillBars();
    }, {
          accX: 0,
          accY: -350
    });
    
    /* ---------------------------------------------------
        7 - Hide menu after clicking on a link 
    ----------------------------------------------------- */
    $("ul.nav li a").on("click", function () {
        $("#myNavbar").collapse("hide");
    });

    /* ---------------------------------------------------
        8 - Jquery Smooth Scroll
    ----------------------------------------------------- */
    $("li.smooth-menu > a").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '56';
        $("html, body").stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });       

    /* ---------------------------------------------------
        9 - jquery scroll spy
    ----------------------------------------------------- */
    $(window).on("scroll", function () {
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 94
        }); 
    });

    /* ---------------------------------------------------
        10 - Parallax Effect
    ----------------------------------------------------- */
    var parallaxHome 	    = $("#home.parallax"),
        parallaxFacts 	    = $("#fun-facts.parallax"),
        parallaxTest 	    = $("#client.parallax");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        parallaxHome.css({"background-attachment": "scroll"});
        parallaxFacts.css({"background-attachment": "scroll"});
        parallaxTest.css({"background-attachment": "scroll"});
    } else {
        parallaxHome.parallax("50%", 0.3);
        parallaxFacts.parallax("50%", 0.3);
        parallaxTest.parallax("50%", 0.2);
    }
    
    /* ---------------------------------------------------
        11 - Start numbers animate at fun-facts section 
    ----------------------------------------------------- */
    $(".fun-facts").appear(function () {
          $(".timer").countTo();
    }, {
          accX: 0,
          accY: -350
    });

    /* ---------------------------------------------------
        12 - Wow Js Active Jquery
    ----------------------------------------------------- */
    var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();  
    
    /* ---------------------------------------------------
        13 - Start Isotop Plugin in Portfolio Section
    ----------------------------------------------------- */
    //active isotop js
    $('.porfolio-items').isotope({
        itemSelector: '.single-porfolio',
        layoutMode: 'fitRows',
    });

    //isoptop click function
    $(".portfolio-filter > ul.nav > li").on("click", function () {
        $(".portfolio-filter > ul.nav > li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".porfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
    
    /* ---------------------------------------------------
        14 - Start Owl Carousel Plugin in Client Section
    ----------------------------------------------------- */
    $(".client-group").owlCarousel({
        navigation : false,
        autoPlay: 3000,
        slideSpeed : 1500,
        pagination: true,
        paginationSpeed : 1500,
        singleItem: true 
    });
    
    /* ---------------------------------------------------
        15 - Jquery Go Down Button
    ----------------------------------------------------- */
    $("a.scroll-link").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '56';
        $("html, body").stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

})(jQuery);