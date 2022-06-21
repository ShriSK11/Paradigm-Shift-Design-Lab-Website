/**
 * multiscroll.js 0.1.6 Beta
 * https://github.com/alvarotrigo/multiscroll.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
! function (a) {
  a.fn.multiscroll = function (b) {
    function m() {
      var b = window.location.hash.replace("#", ""),
        c = b;
      if (c.length) {
        var d = a(".ms-left").find('[data-anchor="' + c + '"]'),
          e = "undefined" == typeof lastScrolledDestiny;
        (e || c !== lastScrolledDestiny) && p(d)
      }
    }

    function n() {
      h = a(window).height(), a(".ms-tableCell").each(function () {
        a(this).css({
          height: B(a(this).parent())
        })
      }), o(), a.isFunction(b.afterResize) && b.afterResize.call(this)
    }

    function o() {
      b.css3 ? (t(a(".ms-left"), "translate3d(0px, -" + a(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), t(a(".ms-right"), "translate3d(0px, -" + a(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (a(".ms-left").css("top", -a(".ms-left").find(".ms-section.active").position().top), a(".ms-right").css("top", -a(".ms-right").find(".ms-section.active").position().top))
    }

    function p(d) {
      var g = d.index(),
        h = a(".ms-right").find(".ms-section").eq(e - 1 - g),
        j = d.data("anchor"),
        k = a(".ms-left .ms-section.active"),
        l = k.index() + 1,
        m = x(d);
      f = !0, y(j);
      var n = {
        left: d.position().top,
        right: h.position().top
      };
      if (h.addClass("active").siblings().removeClass("active"), d.addClass("active").siblings().removeClass("active"), b.css3) {
        a.isFunction(b.onLeave) && b.onLeave.call(this, l, g + 1, m);
        var o = "translate3d(0px, -" + n.left + "px, 0px)",
          p = "translate3d(0px, -" + n.right + "px, 0px)";
        t(a(".ms-left"), o, !0), t(a(".ms-right"), p, !0), setTimeout(function () {
          a.isFunction(b.afterLoad) && b.afterLoad.call(this, j, g + 1), setTimeout(function () {
            f = !1
          }, c)
        }, b.scrollingSpeed)
      } else a.isFunction(b.onLeave) && b.onLeave.call(this, l, g + 1, m), a(".ms-left").animate({
        top: -n.left
      }, b.scrollingSpeed, b.easing, function () {
        a.isFunction(b.afterLoad) && b.afterLoad.call(this, j, g + 1), setTimeout(function () {
          f = !1
        }, c)
      }), a(".ms-right").animate({
        top: -n.right
      }, b.scrollingSpeed, b.easing);
      lastScrolledDestiny = j, w(j), v(j, g)
    }

    function q() {
      document.addEventListener ? (document.removeEventListener("mousewheel", s, !1), document.removeEventListener("wheel", s, !1)) : document.detachEvent("onmousewheel", s)
    }

    function r() {
      document.addEventListener ? (document.addEventListener("mousewheel", s, !1), document.addEventListener("wheel", s, !1)) : document.attachEvent("onmousewheel", s)
    }

    function s(b) {
      b = window.event || b;
      var c = Math.max(-1, Math.min(1, b.wheelDelta || -b.deltaY || -b.detail));
      return f || (c < 0 ? a.fn.multiscroll.moveSectionDown() : a.fn.multiscroll.moveSectionUp()), !1
    }

    function t(a, b, c) {
      a.toggleClass("ms-easing", c), a.css(u(b))
    }

    function u(a) {
      return {
        "-webkit-transform": a,
        "-moz-transform": a,
        "-ms-transform": a,
        transform: a
      }
    }

    function v(c, d) {
      b.navigation && (a("#multiscroll-nav").find(".active").removeClass("active"), c ? a("#multiscroll-nav").find('a[href="#' + c + '"]').addClass("active") : a("#multiscroll-nav").find("li").eq(d).find("a").addClass("active"))
    }

    function w(c) {
      b.menu && (a(b.menu).find(".active").removeClass("active"), a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
    }

    function x(b) {
      var c = a(".ms-left .ms-section.active").index(),
        d = b.index();
      return c > d ? "up" : "down"
    }

    function y(a) {
      b.anchors.length && (location.hash = a)
    }

    function z() {
      var b, a = document.createElement("p"),
        c = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
      document.body.insertBefore(a, null);
      for (var d in c) void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
      return document.body.removeChild(a), void 0 !== b && b.length > 0 && "none" !== b
    }

    function A(a) {
      a.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + B(a) + 'px" />')
    }

    function B(a) {
      var c = h;
      if (b.paddingTop || b.paddingBottom) {
        var d = parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom"));
        c = h - d
      }
      return c
    }

    function C() {
      var b = window.location.hash.replace("#", ""),
        c = a('.ms-left .ms-section[data-anchor="' + b + '"]');
      b.length && p(c)
    }
    b = a.extend({
      verticalCentered: !0,
      scrollingSpeed: 700,
      easing: "easeInQuart",
      menu: !1,
      sectionsColor: [],
      anchors: [],
      navigation: !1,
      navigationPosition: "right",
      navigationColor: "#000",
      navigationTooltips: [],
      loopBottom: !1,
      loopTop: !1,
      css3: !1,
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      normalScrollElements: null,
      keyboardScrolling: !0,
      touchSensitivity: 5,
      sectionSelector: ".ms-section",
      leftSelector: ".ms-left",
      rightSelector: ".ms-right",
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null
    }, b);
    var c = 600;
    "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
    ".ms-right" !== b.rightSelector && a(b.rightSelector).addClass("ms-right"), ".ms-left" !== b.leftSelector && a(b.leftSelector).addClass("ms-left");
    var g, e = a(".ms-left").find(".ms-section").length,
      f = !1,
      h = a(window).height();
    if (r(), b.css3 && (b.css3 = z()), a("html, body").css({
        overflow: "hidden",
        height: "100%"
      }), ".ms-section" !== b.sectionSelector && a(b.sectionSelector).each(function () {
        a(this).addClass("ms-section")
      }), b.navigation) {
      a("body").append('<div id="multiscroll-nav"><ul></ul></div>'), g = a("#multiscroll-nav"), g.css("color", b.navigationColor), g.addClass(b.navigationPosition);
      for (var i = 0; i < a(".ms-left .ms-section").length; i++) {
        var j = "";
        b.anchors.length && (j = b.anchors[i]);
        var k = b.navigationTooltips[i];
        k = void 0 !== k && "" !== k ? k : "";
        var l = '<li><a class="link-nav" href="#' + j + '"><span>' + ("" !== k ? '<div class="multiscroll-tooltip ' + b.navigationPosition + '">' + k + "</div>" : "") + "</span></a></li>";
        g.find("ul").append(l)
      }
    }
    a(".ms-right, .ms-left").css({
      width: "50%",
      position: "absolute",
      height: "100%"
    }), a(".ms-right").css({
      right: "1px",
      top: "0"
    }), a(".ms-left").css({
      left: "0",
      top: "0"
    }), a(".ms-left .ms-section, .ms-right .ms-section").each(function () {
      var c = a(this).index();
      if ((b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0"), "undefined" != typeof b.sectionsColor[c] && a(this).css("background-color", b.sectionsColor[c]), "undefined" != typeof b.anchors[c] && a(this).attr("data-anchor", b.anchors[c]), b.verticalCentered && A(a(this)), a(this).closest(".ms-left").length && b.navigation) {
        var d = "";
        b.anchors.length && (d = b.anchors[c]);
        var e = b.navigationTooltips[c];
        "undefined" == typeof e && (e = "")
      }
    }), a(".ms-right").html(a(".ms-right").find(".ms-section").get().reverse()), a(".ms-left .ms-section, .ms-right .ms-section").each(function () {
      var c = a(this).index();
      a(this).css({
        height: "100%"
      }), !c && b.navigation && g.find("li").eq(c).find("a").addClass("active")
    }).promise().done(function () {
      a(".ms-left .ms-section.active").length || (a(".ms-right").find(".ms-section").last().addClass("active"), a(".ms-left").find(".ms-section").first().addClass("active")), a.isFunction(b.afterRender) && b.afterRender.call(this), o(), a(window).on("load", function () {
        C()
      })
    }), a(window).on("hashchange", m), a(document).keydown(function (c) {
      if (40 != c.which && 38 != c.which || c.preventDefault(), b.keyboardScrolling && !f) switch (c.which) {
        case 38:
        case 33:
          a.fn.multiscroll.moveSectionUp();
          break;
        case 40:
        case 34:
          a.fn.multiscroll.moveSectionDown();
          break;
        case 36:
          a.fn.multiscroll.moveTo(1);
          break;
        case 35:
          a.fn.multiscroll.moveTo(a(".ms-left .ms-section").length);
          break;
        default:
          return
      }
    }), a(document).mousedown(function (a) {
      if (1 == a.button) return a.preventDefault(), !1
    }), a(document).on("click", "#multiscroll-nav a", function (b) {
      b.preventDefault();
      var c = a(this).parent().index();
      p(a(".ms-left .ms-section").eq(c))
    }), b.normalScrollElements && (a(document).on("mouseenter", b.normalScrollElements, function () {
      a.fn.multiscroll.setMouseWheelScrolling(!1)
    }), a(document).on("mouseleave", b.normalScrollElements, function () {
      a.fn.multiscroll.setMouseWheelScrolling(!0)
    })), a(window).on("resize", n), a.fn.multiscroll.moveSectionUp = function () {
      var c = a(".ms-left .ms-section.active").prev(".ms-section");
      !c.length && b.loopTop && (c = a(".ms-left .ms-section").last()), c.length && p(c)
    }, a.fn.multiscroll.moveSectionDown = function () {
      var c = a(".ms-left .ms-section.active").next(".ms-section");
      !c.length && b.loopBottom && (c = a(".ms-left .ms-section").first()), c.length && p(c)
    }, a.fn.multiscroll.moveTo = function (b) {
      var c = "";
      c = isNaN(b) ? a('.ms-left [data-anchor="' + b + '"]') : a(".ms-left .ms-section").eq(b - 1), p(c)
    }, a.fn.multiscroll.setKeyboardScrolling = function (a) {
      b.keyboardScrolling = a
    }, a.fn.multiscroll.setMouseWheelScrolling = function (a) {
      a ? r() : q()
    }, a.fn.multiscroll.setScrollingSpeed = function (a) {
      b.scrollingSpeed = a
    };
    a.fn.multiscroll.destroy = function () {
      a.fn.multiscroll.setKeyboardScrolling(!1), a.fn.multiscroll.setMouseWheelScrolling(!1), a("#right-1").insertAfter("#left-1"), a("#right-2").insertAfter("#left-2"), a("#right-3").insertAfter("#left-3"), a("#right-4").insertAfter("#left-4"), a(window).off("hashchange", m).off("resize", n)
    }, a.fn.multiscroll.build = function () {
      a.fn.multiscroll.setKeyboardScrolling(!0), a.fn.multiscroll.setMouseWheelScrolling(!0), a("#right-1").prependTo("#right-part"), a("#right-2").prependTo("#right-part"), a("#right-3").prependTo("#right-part"), a("#right-4").prependTo("#right-part"), a(window).on("hashchange", m).on("resize", n)
    }
  }
}(jQuery);