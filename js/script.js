$(document).ready(function() {
    $('#myContainer').multiscroll({
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        css3: true,
        
        //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
});





(function ($) {
    "use strict";


    

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
                },
                {
                    src: 'images/4-left2.png'
                },
                {
                    src: 'images/4-left3.png'
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
                },
                {
                    src: 'images/4-right2.png'
                },
                {
                    src: 'images/4-right3.png'
                }

            ]
        });


       

})(jQuery);




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
            src: 'images/1-left2.png'
        },
        {
            src: 'images/1-left3.png'
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


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});





