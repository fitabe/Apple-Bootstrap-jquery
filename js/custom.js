$(document).ready(function () {
  $(".footer-links-wrapper h3").on("click", function () {
    if ($(window).width() <= 780) {
      $(this).next("ul").slideToggle();
      $(this).toggleClass("expand");
    }
  });
  $(window).on("resize", function () {
    location.reload();
  });
});
