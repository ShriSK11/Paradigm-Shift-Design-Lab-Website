(function ($) {
    "use strict";





    $(window).on("load", function() {
        $("#preloader").fadeOut(1200);
		$("#preloader-status").delay(200).fadeOut("slow");
        // changeHeight();
        // $(".footer-opener").addClass("active");
        resetfooter();
    });

    setTimeout(function() {
        $(".preloader-bg").addClass("preloader-bg-disappear");
        $(".ms-left, .ms-right").addClass("fadeIn");
    }, 1000);

    $(document).ready(function () {
        $('#myContainer').multiscroll({
            css3: true,
            navigation: true,
            navigationTooltips: ['Architecture', 'Interior Design', 'Dhi Wiser'],
            loopBottom: false,


            //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
            easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
        });

        $('.menuBtn').click(function() {
            $(this).toggleClass('act');
                if($(this).hasClass('act')) {
                    $('.mainMenu').addClass('act');
                }
                else {
                    $('.mainMenu').removeClass('act');
                }
        });

        $("#left-bg-1").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'kenburns',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/1-left1.png'
                },
                {
                    src: 'images/1-left2.png'
                },
                {
                    src: 'images/1-left3.png'
                }

            ]
        });

        $("#left-bg-2").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/2-left1.png'
                },
                {
                    src: 'images/2-left2.png'
                },
                {
                    src: 'images/2-left3.png'
                }

            ]
        });


        $("#left-bg-3").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/3-left1.jpg'
                },
                {
                    src: 'images/3-left2.jpg'
                }
                ,
                {
                    src: 'images/3-left3.jpg'
                }

            ]
        });

        $("#left-bg-4").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/4-left1.png'
                }
//                 {
//                     src: 'images/4-left2.png'
//                 },
//                 {
//                     src: 'images/4-left3.png'
//                 }

            ]
        });

        $("#left-bg-5").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/5-left1.jpg'
                }
            ]
        });



        $("#right-bg-1").vegas({
            transition: 'slideDown',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // Delay: 20000,
            // animation: 'kenburns',
            // animationDuration: 20000,
            slides: [{
                    src: 'images/1-right1.png'
                },
                {
                    src: 'images/1-right2.png'
                },
                {
                    src: 'images/1-right3.png'
                }

            ]
        });

        $("#right-bg-2").vegas({
            transition: 'slideDown',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            slides: [{
                    src: 'images/2-right1.png'
                },
                {
                    src: 'images/2-right2.png'
                },
                {
                    src: 'images/2-right3.png'
                }

            ]
        });

        $("#right-bg-3").vegas({
            transition: 'slideDown',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            slides: [{
                    src: 'images/3-right1.jpg'
                },
                {
                    src: 'images/3-right2.jpg'
                }
                ,
                {
                    src: 'images/3-right3.jpg'
                }

            ]
        });

        $("#right-bg-4").vegas({
            transition: 'slideDown',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            slides: [{
                    src: 'images/4-right1.png'
                }
//                 {
//                     src: 'images/4-right2.png'
//                 },
//                 {
//                     src: 'images/4-right3.png'
//                 }

            ]
        });

        $("#right-bg-5").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/5-right1.jpg'
                }
            ]
        });


        $("#section-bg-1").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'kenburns',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/1-sec1.jpg'
                },
                {
                    src: 'images/1-sec2.jpg'
                },
                {
                    src: 'images/1-sec3.jpg'
                }

            ]
        });





        $("#section-bg-2").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/2-sec1.jpg'
                },
                {
                    src: 'images/2-sec2.jpg'
                },
                {
                    src: 'images/2-sec3.jpg'
                }

            ]
        });

        $("#section-bg-3").vegas({
            transition: 'slideUp',
            // transitionDuration: 4000,
            timer: false,
            delay: 5000,
            cover: true,
            align: 'center',
            valign: 'right',
            // animation: 'random',
            // animationDuration: 20000,
            loop: true,
            slides: [{
                    src: 'images/4-left1.png'
                },
                {
                    src: 'images/4-left2.png'
                },
                {
                    src: 'images/4-left3.png'
                }

            ]
        });

        window.onload = changeHeight();
        
        $('.dropdown').click(function(){

            $('.m-submenu').toggleClass("active");
            $('.arrow').toggleClass("rotate");
        });





    });
    
})(jQuery);

jQuery(function($){
    $('.footer-opener').on('click', function(){
        $(this).toggleClass('active');
    });
})




