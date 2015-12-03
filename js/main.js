$(document).ready(function(){

$(function(){
  var shrinkHeader = 200;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
        $('.header-content').addClass('shrink');
      }
      else {
        $('.header-content').removeClass('shrink');
      }
});

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

  $('.burger').on('click', function(event){
      event.preventDefault();
      $('.site-nav ul').slideToggle();
  });
  $(window).on('resize', function(){
      if ($(window).width() > 860) {
        $('.site-nav ul').show();
        $('.nav-icon').hide();
      }
      else {
        $('.site-nav ul').hide();
        $('.nav-icon').show();
      }
  });

});

