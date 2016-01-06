$(document).ready(function(){
  $('#nav-container').append('<ul>' +
      '<li><a id="home" href="index.html">home</a></li>' +
      '<li><a id="asia" href="asia.html">asia</a></li>' +
      '<li><a id="australasia" href="australasia.html">australasia</a></li>' +
      '<li><a id="eastern-europe" href="eastern-europe.html">eastern europe</a></li>' +
      '<li><a id="europe" href="europe.html">europe</a></li>' +
      '<li><a id="north-america" href="north-america.html">north america</a></li>' +
      '<li><a id="south-america" href="south-america.html">south america</a></li>' +
      '<li><a id="scandinavia" href="scandinavia.html">scandinavia</a></li>' +
      '<li><a id="other-places" href="other-places.html">other places</a></li>' +
   '</ul>');

  //active class
  var currentPage = $('body').data('current-page');
  $('#' + currentPage).addClass('active');
});