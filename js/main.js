$(document).ready(function(){

    //shrink header
    $(function(){
      var shrinkHeader = 800;
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


    //filter
    // $('.sort').click(function(event) {
    //   event.preventDefault();
    //   $('.mix').hide()
    //   $('.mix').removeClass('display-image')
    //   if ($(this).attr('id') === 'asia') {
    //     $('.asia').show();
    //     $('.mix').addClass('display-image')
    //   }
    // });


    //dropdown
  //   // when I click on the international list item
  //   $('.primary-nav li').on('click', function(event){
  //   event.preventDefault();

  //     var target= $(this).find('a').attr('href');
  //     console.log(target);

  //     // if I click international again then
  //     if ( $(this).hasClass('display') ) {

  //       // remove the display class
  //       $(this).removeClass('display');
      
  //       // slide the mega nav up
  //       $('.sub-nav').slideUp();
  //     }
  //     else {
  //       // remove the display class previous nav item
  //       $('.primary-nav li').removeClass('display')

  //       // add an display class to the item
  //       $(this).addClass('display');
  
  //       // hide all the sections
  //       $('.drop').hide();
  
  //       // show the international section
  //       $(target).show();
  
  //       // the mega nav slides down
  //       $('.sub-nav').slideDown();
  //     }
  // });

  //asia
  // when I click on the asia list item
  $('.primary-nav .asia').on('click', function(event){
    event.preventDefault();

    // if I click asia again then
    if ( $('.primary-nav .asia').hasClass('display') ) {

      // remove the display class
      $('.primary-nav .asia').removeClass('display');
    
      // slide the mega nav up
      $('.sub-nav').slideUp();
    }
    else {
      // remove the display class previous nav item
      $('.primary-nav li').removeClass('display');

      // add an display class to the item
      $('.primary-nav .asia').addClass('display');
  
      // hide all the sections
      $('.drop').hide();
  
      // show the asia section
      $('.sub-nav .asia').show();
  
      // the mega nav slides down
      $('.sub-nav').slideDown();
    }
  });
  //australasia
  $('.primary-nav .australasia').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .australasia').hasClass('display') ) {

      $('.primary-nav .australasia').removeClass('display');

      $('.sub-nav').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('display');

      $('.primary-nav .australasia').addClass('display');

      $('.drop').hide();

      $('.sub-nav .australasia').show();

      $('.sub-nav').slideDown();
    }
  });
  //americas
  $('.primary-nav .americas').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .americas').hasClass('display') ) {

      $('.primary-nav .americas').removeClass('display');

      $('.sub-nav').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('display');

      $('.primary-nav .americas').addClass('display');

      $('.drop').hide();

      $('.sub-nav .americas').show();

      $('.sub-nav').slideDown();
    }
  });
  //europe
  $('.primary-nav .europe').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .europe').hasClass('display') ) {

      $('.primary-nav .europe').removeClass('display');

      $('.sub-nav').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('display');

      $('.primary-nav .europe').addClass('display');

      $('.drop').hide();

      $('.sub-nav .europe').show();

      $('.sub-nav').slideDown();
    }
  });
  //scandinavia
  $('.primary-nav .scandinavia').on('click', function(event){
    event.preventDefault();

    if ( $('.primary-nav .scandinavia').hasClass('display') ) {

      $('.primary-nav .scandinavia').removeClass('display');

      $('.sub-nav').slideUp();
    }
    else {
      $('.primary-nav li').removeClass('display');

      $('.primary-nav .scandinavia').addClass('display');

      $('.drop').hide();

      $('.sub-nav .scandinavia').show();

      $('.sub-nav').slideDown();
    }
  });

  //remove margin
  // $('.container').on('load', function(){

  //   if ( $('.primary-nav').hasClass('display') ) {
  //     $('.container').addClass('remove-margin');
  //   }
  //   else {
  //     $('.container').removeClass('remove-margin');
  //   }
  // });
});










