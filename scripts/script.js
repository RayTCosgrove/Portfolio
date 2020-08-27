/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbar").removeClass('scrolled-down').addClass('scrolled-up')
  } else {
    $("#navbar").removeClass('scrolled-up').addClass('scrolled-down')
  }
  prevScrollpos = currentScrollPos;
}