$(window).scroll(function() {
    // top button controll
    if ($(this).scrollTop() > 500) {
        $('#topButton').fadeIn();
    } else {
        $('#topButton').fadeOut();
    }
});

$(document).ready(function() {
  // Top Button click event handler
  $("#topButtonImg").click(function() {
    $('html, body').animate({scrollTop:0}, '300');
  });
});