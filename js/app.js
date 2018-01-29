$(document).ready(function() {
  $('.dropdown-button').dropdown('open');
  $('.dropdown-button').dropdown('close');
  var height = $(window).height();
  
  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var pixels = scrollTop / 70;
    if (scrollTop < height) {
      $('#forest-background').css({
        '-webkit-filter': 'blur(' + pixels + 'px)',
        'background-position': 'center -' + pixels * 10 + 'px'
      });
      $('div-header').fadeOut();
    }
  });
});