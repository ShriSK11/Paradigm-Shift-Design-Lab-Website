(function ($) {
    "use strict";

    $(window).on("load", function() {
        $("#preloader").fadeOut(1200);
        $("#preloader-status").delay(200).fadeOut("slow");
        });
    
        setTimeout(function() {
        $(".preloader-bg").addClass("preloader-bg-disappear");
        $(".ms-left, .ms-right").addClass("fadeIn");
        }, 1000);


    $(document).ready(function(){
        // menu click event
        $('.menuBtn').click(function() {
            $(this).toggleClass('act');
                if($(this).hasClass('act')) {
                    $('.mainMenu').addClass('act');
                }
                else {
                    $('.mainMenu').removeClass('act');
                }
        });
    });

    
    $('.dropdown').click(function(){

        $('.m-submenu').toggleClass("active");
        $('.arrow').toggleClass("rotate");
    });
    
})(jQuery);
