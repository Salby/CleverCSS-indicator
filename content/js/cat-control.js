$(document).ready(function() {

  var indicatorPos_start = $('.cat-active').offset().left;
  $('.cat-indicator').css('left', indicatorPos_start);

  $('.button-cat').click(function() {
    $(this).siblings().removeClass('cat-active')
    $(this).addClass('cat-active')

    var indicatorPos = $(this).offset().left;
    $('.cat-indicator').css('left', indicatorPos);
  });

  $(window).resize(function() {
    $('.cat-indicator').css('left', indicatorPos_start);
  });

});
