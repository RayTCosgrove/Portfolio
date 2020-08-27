/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos && currentScrollPos> window.innerHeight*.75 ) {
    $("#navbar").removeClass('scrolled-up').addClass('scrolled-down')

  } else {
    $("#navbar").removeClass('scrolled-down').addClass('scrolled-up')
  }
  prevScrollpos = currentScrollPos;
}