/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
console.log(currentScrollPos)
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    if(currentScrollPos!=0){
    document.getElementById("navbar").style.boxShadow = "rgba(2, 12, 27, 0.05) 0px 10px 30px -10px";
    }else{
      document.getElementById("navbar").style.boxShadow = "";

    }
  } else {
    if(currentScrollPos>50){
    document.getElementById("navbar").style.top = "-60px";
    }
  }
  prevScrollpos = currentScrollPos;
}

window.onload = function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  $("#topwave").css("top", window.innerHeight);
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.getElementById("socials-left").style.left = "30px";
document.getElementById("socials-right").style.right = "30px";
document.getElementById("raymie").style.right = "20%";

  

  $("a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');

 
});




};

window.onresize = function() {

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

 if(window.innerWidth>515) {
 $("#topwave").css("top", window.innerHeight);
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
 }
}