(function ($) {
    "use strict";
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