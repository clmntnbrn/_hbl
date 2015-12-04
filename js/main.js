$(document).ready(function(){

    //shrink header
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
    
    //responsive nav
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

    //dropdown
  //   // when I click on the international list item
  //   $('.primary-nav li').on('click', function(event){
  //   event.preventDefault();

  //     var target= $(this).find('a').attr('href');
  //     console.log(target);

  //     // if I click international again then
  //     if ( $(this).hasClass('active') ) {

  //       // remove the active class
  //       $(this).removeClass('active');
      
  //       // slide the mega nav up
  //       $('.slide-down').slideUp();
  //     }
  //     else {
  //       // remove the active class previous nav item
  //       $('.primary-nav li').removeClass('active')

  //       // add an active class to the item
  //       $(this).addClass('active');
  
  //       // hide all the sections
  //       $('.drop').hide();
  
  //       // show the international section
  //       $(target).show();
  
  //       // the mega nav slides down
  //       $('.slide-down').slideDown();
  //     }
  // });

  //asia
  // when I click on the asia list item
  $('.primary-nav .asia').on('click', function(event){
    event.preventDefault();

    // if I click asia again then
    if ( $('.primary-nav .asia').hasClass('active') ) {

      // remove the active class
      $('.primary-nav .asia').removeClass('active');
    
      // slide the mega nav up
      $('.slide-down').slideUp();
    }
    else {
      // remove the active class previous nav item
      $('.primary-nav li').removeClass('active');

      // add an active class to the item
      $('.primary-nav .asia').addClass('active');
  
      // hide all the sections
      $('.drop').hide();
  
      // show the asia section
      $('.slide-down .asia').show();
  
      // the mega nav slides down
      $('.slide-down').slideDown();
    }
  });
  //australasia
  $('.primary-nav .australasia').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .australasia').hasClass('active') ) {

      $('.primary-nav .australasia').removeClass('active');

      $('.slide-down').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('active');

      $('.primary-nav .australasia').addClass('active');

      $('.drop').hide();

      $('.slide-down .australasia').show();

      $('.slide-down').slideDown();
    }
  });
  //americas
  $('.primary-nav .americas').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .americas').hasClass('active') ) {

      $('.primary-nav .americas').removeClass('active');

      $('.slide-down').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('active');

      $('.primary-nav .americas').addClass('active');

      $('.drop').hide();

      $('.slide-down .americas').show();

      $('.slide-down').slideDown();
    }
  });
  //europe
  $('.primary-nav .europe').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .europe').hasClass('active') ) {

      $('.primary-nav .europe').removeClass('active');

      $('.slide-down').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('active');

      $('.primary-nav .europe').addClass('active');

      $('.drop').hide();

      $('.slide-down .europe').show();

      $('.slide-down').slideDown();
    }
  });
  //scandinavia
  $('.primary-nav .scandinavia').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .scandinavia').hasClass('active') ) {

      $('.primary-nav .scandinavia').removeClass('active');

      $('.slide-down').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('active');

      $('.primary-nav .scandinavia').addClass('active');

      $('.drop').hide();

      $('.slide-down .scandinavia').show();

      $('.slide-down').slideDown();
    }
  });
  //home
  $('.primary-nav .home').on('click', function(event){
    event.preventDefault();

    $('.primary-nav').hasClass('active');

    $('.primary-nav').removeClass('active');

    $('.slide-down').slideUp();
  });

  //remove margin
  $('.container').on('load', function(){

    if ( $('.primary-nav').hasClass('active') ) {
      $('.container').addClass('remove-margin');
    }
    else {
      $('.container').removeClass('remove-margin');
    }
  });
});










