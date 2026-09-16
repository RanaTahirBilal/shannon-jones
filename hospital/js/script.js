/* Shannon W. Jones III site script.
   Trimmed from the MegaOne hospital demo: owl carousels, isotope filtering,
   hover-direction effects and progress bars are removed with the sections that used them. */

$(window).on("load", function () {
    "use strict";
    setTimeout(function () { $(".loader").fadeOut("slow"); }, 500);
});

jQuery(function ($) {
    "use strict";

    /* The demo toggled position:fixed on the nav after 300px, which made the page jump.
       The header is now position:sticky in CSS, so no script is needed. */

    /* Full-screen menu */
    function closeBroad() {
        $("header .broad").removeClass('start-animation').addClass('end-animation');
        $(".close_side_menu").removeClass('d-inline');
        setTimeout(function () { $("header .broad").removeClass('broad-nav broad-rem'); }, 800);
    }
    function openBroad() {
        $("header .broad").removeClass('end-animation').addClass('broad-nav start-animation');
        $(".close_side_menu").addClass('d-inline');
    }
    $(".toggle-btn").on("click", openBroad).on("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBroad(); } });
    $(".close-nav").on("click", closeBroad).on("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); closeBroad(); } });
    $(".close_side_menu, .broad .nav-link").on("click", closeBroad);

    /* Smooth scroll with offset for the fixed bar */
    $("a.scroll").on("click", function (event) {
        var target = $(this.hash);
        if (!target.length) { return; }
        event.preventDefault();
        $("html,body").animate({scrollTop: target.offset().top - 70}, 800);
    });
});
