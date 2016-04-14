$( document ).ready(function() {
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});


var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
  header = document.getElementById("rowNav");
  didScroll = false,
  changeHeaderOn = 300;
  changeTwoOn = 1100;
  var barra = document.getElementById("nav");
  var logoNav = document.getElementById("logoNav");
  var buttonUp = document.getElementById("btn-up-hide");

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 400 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();

    if ( sy >= changeHeaderOn) {
      logoNav.setAttribute("src", "images/logo.png");
      barra.setAttribute("class", "white z-depth-1 nav-dos");
      buttonUp.setAttribute("class", "");
    }
    else {
      logoNav.setAttribute("src", "");
      barra.setAttribute("class", "z-depth-0 nav-uno");
      buttonUp.setAttribute("class", "hide");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();
