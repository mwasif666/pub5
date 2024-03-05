$(".navigation-list").clone().appendTo(".mobile-menu-body");

$(".hamburger").on("click", function () {
  if (!$(".mobile-menu").hasClass("mobile-view")) {
    $(".mobile-menu").addClass("mobile-view");
  } else {
    $(".mobile-menu").removeClass("mobile-view");
  }
});

AOS.init({
  disable: function () {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  },
});
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});
$("#menu-close").on("click", function () {
  $(".mobile-menu").removeClass("mobile-view");
  $(".dropdown-li").removeClass("open");
  $(".dropdown-li").find(">.dropdown-list").hide(200);
});

$(".mobile-menu .dropdown-li>a").append('<i class="fa fa-angle-right"></i>');

$(".mobile-menu .dropdown-li>a").click(function () {
  const parent = $(this).parent(".dropdown-li");
  if (!parent.hasClass("open")) {
    const ulParent = parent.parent();
    ulParent.find(".dropdown-li.open").find(">.dropdown-list").hide(200);
    ulParent.find(".dropdown-li.open").removeClass("open");
    parent.addClass("open");
    parent.find(">.dropdown-list").show(200);
  } else {
    parent.removeClass("open");
    parent.find(">.dropdown-list").hide(200);
  }
});

$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    4000
  );
  $(this).text($(this).attr("data-progress") + "%");
});

// Owl Carousel
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      dots: false,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
var swiper = new Swiper(".myCard-1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3, // For large screens (lg), display 3 slides
    },
    992: {
      slidesPerView: 2, // For medium-sized screens (md), display 2 slides
    },
    300: {
      slidesPerView: 1, // For small screens, display 1 slide
    },
  },
});

// Button
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
// End
