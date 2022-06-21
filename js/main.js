(function($) {
	"use strict";
	
	
	// WINDOW.LOAD FUNCTION start
	$(window).on("load", function() {
		
		// preloader
		$("#preloader").fadeOut(1200);
		$("#preloader-status").delay(200).fadeOut("slow");
		
		// elements.Timeout
		setTimeout(function() {
			$(".preloader-bg").addClass("preloader-bg-disappear");
			$(".ms-left, .ms-right").addClass("fadeIn");
		}, 1000);
		setTimeout(function() {
			$(".hero-center-container-right, .social-icons-wrapper-share, .border-left, .corner").removeClass("left-position");
		}, 1200);
		setTimeout(function() {
			$(".hero-center-container-left, .menu-btn, .border-right").removeClass("right-position");
		}, 1200);
		setTimeout(function() {
			$(".border-top").removeClass("top-position");
		}, 1200);
		setTimeout(function() {
			$(".border-bottom").removeClass("bottom-position");
		}, 1200);
		setTimeout(function() {
			$(".border-middle-left, .border-middle-right").removeClass("fade-position");
		}, 1400);
	
	});
	// WINDOW.LOAD FUNCTION end
	
	
	// DOCUMENT.READY FUNCTION start
	$(document).on("ready", function() {
		
		// vegas backgrounds
		// slider IMG left
		$("#left-bg-1")({
			timer: false,
			delay: 5000,
			cover: true,
			align: 'center',
			valign: 'right',
			transition: 'slideUp',
			slides: [{
				src: "images/image_part_001.png"
			}, {
				src: "images/image_part_001.png"
			}, {
				src: "images/image_part_001.png"
			}, {
				src: "images/image_part_001.png"
			}]
		});
		

		
		// single IMG left
		$("#left-bg-1-2").vegas({
			cover: true,
			align: 'center',
			valign: 'right',
			slides: [{
				src: "img/background/left-bg-1-2.jpg"
			}]
		});
		// slider IMG left BLUR effect
		$("#left-bg-1-3").vegas({
			timer: false,
			delay: 5000,
			cover: true,
			align: 'center',
			valign: 'right',
			transition: 'blur',
			slides: [{
				src: "img/background/slide-left-1.jpg"
			}, {
				src: "img/background/slide-left-2.jpg"
			}, {
				src: "img/background/slide-left-3.jpg"
			}, {
				src: "img/background/slide-left-4.jpg"
			}]
		});
		// slider IMG KENBURNS effect
		$("#left-bg-1-4").vegas({
			timer: false,
			delay: 5000,
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/slide-left-1-2.jpg"
			}, {
				src: "img/background/slide-left-2-2.jpg"
			}, {
				src: "img/background/slide-left-3-2.jpg"
			}, {
				src: "img/background/slide-left-4-2.jpg"
			}],
			animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
		});
		// single IMG left CLOUDS
		$("#left-bg-1-7").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/left-bg-1-7.jpg"
			}]
		});
		// single IMG left VARIOUS
		$("#left-bg-1-8").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/left-bg-1-8.jpg"
			}]
		});
		// about IMG left
		$("#left-bg-2").vegas({
			cover: true,
			align: 'center',
			valign: 'right',
			slides: [{
				src: "img/background/left-bg-2.jpg"
			}]
		});
		// about IMG left VARIOUS
		$("#left-bg-2-2").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/left-bg-2-2.jpg"
			}]
		});
		// services IMG
		$("#left-bg-3").vegas({
			cover: true,
			align: 'center',
			valign: 'right',
			slides: [{
				src: "img/background/left-bg-3.jpg"
			}]
		});
		// services IMG VARIOUS
		$("#left-bg-3-2").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/left-bg-3-2.jpg"
			}]
		});
		// contact IMG left
		$("#left-bg-4").vegas({
			cover: true,
			align: 'center',
			valign: 'right',
			slides: [{
				src: "img/background/left-bg-4.jpg"
			}]
		});
		// contact IMG left VARIOUS
		$("#left-bg-4-2").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/left-bg-4-2.jpg"
			}]
		});
		// slider IMG right
		$("#right-bg-1").vegas({
			timer: false,
			delay: 5000,
			cover: true,
			align: 'center',
			valign: 'left',
			transition: 'slideDown',
			slides: [{
				src: "/images/image_part_001.png"
			}, {
				src: "/images/image_part_001.png"
			}, {
				src: "/images/image_part_001.png"
			}, {
				src: "/images/image_part_001.png"
			}]
		});
		// single IMG right
		$("#right-bg-1-2").vegas({
			cover: true,
			align: 'center',
			valign: 'left',
			slides: [{
				src: "img/background/right-bg-1-2.jpg"
			}]
		});
		// slider IMG right BLUR effect
		$("#right-bg-1-3").vegas({
			timer: false,
			delay: 5000,
			cover: true,
			align: 'center',
			valign: 'left',
			transition: 'blur',
			slides: [{
				src: "img/background/slide-right-1.jpg"
			}, {
				src: "img/background/slide-right-2.jpg"
			}, {
				src: "img/background/slide-right-3.jpg"
			}, {
				src: "img/background/slide-right-4.jpg"
			}]
		});
		// single IMG right RAIN
		$("#right-bg-1-5").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/right-bg-1-5.jpg"
			}]
		});
		// single IMG right FOG
		$("#right-bg-1-6").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/right-bg-1-6.jpg"
			}]
		});
		// single IMG right VARIOUS
		$("#right-bg-1-7").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/right-bg-1-7.jpg"
			}]
		});
		// about IMG right
		$("#right-bg-2").vegas({
			cover: true,
			align: 'center',
			valign: 'left',
			slides: [{
				src: "img/background/right-bg-2.jpg"
			}]
		});
		// about IMG right VARIOUS
		$("#right-bg-2-2").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/right-bg-2-2.jpg"
			}]
		});
		// works IMG
		$("#right-bg-3").vegas({
			cover: true,
			align: 'center',
			valign: 'left',
			slides: [{
				src: "img/background/right-bg-3.jpg"
			}]
		});
		// works IMG VARIOUS
		$("#right-bg-3-2").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/right-bg-3-2.jpg"
			}]
		});
		// contact IMG right
		$("#right-bg-4").vegas({
			cover: true,
			align: 'center',
			valign: 'left',
			slides: [{
				src: "img/background/right-bg-4.jpg"
			}]
		});
		// contact IMG right VARIOUS
		$("#right-bg-4-2").vegas({
			cover: true,
			align: 'center',
			valign: 'center',
			slides: [{
				src: "img/background/right-bg-4-2.jpg"
			}]
		});
	
	});
	// DOCUMENT.READY FUNCTION end
	
	
	// multiScroll
	var onMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		onMobile = true;
	}
	if ((onMobile === false)) {
		$("#ms-wrapper").multiscroll({
			anchors: ['home', 'about', 'services', 'contact'],
			navigation: true,
			navigationTooltips: ['Home', 'About', 'Services', 'Contact'],
			loopBottom: true,
			loopTop: true
		});
	} else {
		$("#ms-wrapper").multiscroll({
			anchors: ['home', 'about', 'services', 'contact'],
			navigation: true,
			navigationTooltips: ['Home', 'About', 'Services', 'Contact'],
			loopBottom: true,
			loopTop: true
		});
		$("#ms-wrapper").multiscroll.destroy();
	}
	
	// contact form
	$("form#form").submit(function() {
		$("form#form .error").remove();
		var s = !1;
		if ($(".requiredField").each(function() {
				if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass("inputError"), s = !0;
				else if ($(this).hasClass("email")) {
					var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass("inputError"), s = !0);
				}
			}), !s) {
			$("form#form input.submit").fadeOut("normal", function() {
				$(this).parent().append("");
			});
			var r = $(this).serialize();
			$.post($(this).attr("action"), r, function() {
				$("form#form").slideUp("fast", function() {
					$(this).before('<div class="success">Your email was sent successfully.</div>');
				});
			});
		}
		return !1;
	});
	
	// newsletter form
	$("form#subscribe").submit(function() {
		$("form#subscribe .subscribe-error").remove();
		var s = !1;
		if ($(".subscribe-requiredField").each(function() {
				if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
					$(this).addClass("inputError"), s = !0;
				else if ($(this).hasClass("subscribe-email")) {
					var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'), $(this).addClass("inputError"),
						s = !0);
				}
			}), !s) {
			$("form#subscribe input.submit").fadeOut("normal", function() {
				$(this).parent().append("");
			});
			var r = $(this).serialize();
			$.post($(this).attr("action"), r, function() {
				$("form#subscribe").slideUp("fast", function() {
					$(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
				});
			});
		}
		return !1;
	});
	
	// morphext
	$("#js-rotating").Morphext({
		animation: "pulse",
		separator: "|",
		speed: 4000,
		complete: function() {}
	});
	
	// owlCarousel ABOUT slider, owlCarousel SERVICES slider
	$(".about-gallery-slider, .services-gallery-slider").owlCarousel({
		autoPlay: true,
		navigation: true,
		pagination: true,
		transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
		singleItem: true,
		items: 1,
		autoHeight: false,
		stopOnHover: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});
	
	// owlCarousel PHOTOS slider
	$(".photos-gallery-slider").owlCarousel({
		autoPlay: false,
		navigation: true,
		pagination: true,
		transitionStyle: false,
		singleItem: false,
		items: 2,
		autoHeight: true,
		stopOnHover: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});
	
	// countdown setup start
	$("#countdown").countdown({
		date: "05 May 2025 12:00:00", // countdown target date settings
		format: "on"
	}, function() {});
	
	// menu button
	$(".menu-btn").on("click", function() {
		$(this).toggleClass("opened");
	});
	$(".closer, .main-menu li, .closer-photo").on("click", function() {
		$(".menu-btn").removeClass("opened");
	});
	
	// menu content
	$(".open-menu-content, .main-menu li, .closer-photo").on("click", function() {
		$(".menu-overlay").delay(300).fadeIn(600);
		$(".menu-logo-wrapper, .main-menu, .social-icons-wrapper, .full-screen-wrapper, .menu-heading").delay(250).fadeIn(500);
		if ($(".menu-container-right, .menu-container-left").hasClass("open")) {
			$(".menu-container-right, .menu-container-left").removeClass("open");
			$(".menu-container-right, .menu-container-left").addClass("close");
			$(".menu-overlay, .menu-logo-wrapper, .main-menu, .social-icons-wrapper, .full-screen-wrapper, .menu-heading").fadeOut(100);
		} else {
			$(".menu-container-right, .menu-container-left").removeClass("close");
			$(".menu-container-right, .menu-container-left").addClass("open");
		}
	});
	
	// menu active state
	$(".menu-item").on("click", function() {
		$(".menu-item").removeClass("active");
		$(this).addClass("active");
	});
	
	// intense IMG
	var elements = document.querySelectorAll(".template-image");
	Intense(elements);
	
	// social icons share
	$(".social-toggle-wrap").hover(function() {
		$(this).find(".social-widgets-wrap").stop().fadeIn("slow");
	}, function() {
		$(this).find(".social-widgets-wrap").stop().delay(50).fadeOut("slow");
	});
	
	// YTPlayer
	$(function() {
		$(".player").mb_YTPlayer();
	});
	
	// snow
	$(function() {
		$("#snow").each(function() {
			snowBind();
		});
	});


})(jQuery);


// styleswitch [for demonstration purposes only]
$(document).on("ready", function() {
	$(".corner").on("click", function() {
		$("#customizer").toggleClass("s-open");
	});

	function swapStyleSheet(sheet) {
		document.getElementById("general-css").setAttribute("href", sheet);
	}
});


// GOOGLE ANALYTICS [for demonstration purposes only]
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3033286-18']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();