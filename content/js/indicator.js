$(document).ready(function() {

  var indicatorPos_start = $('.cat-active').offset().left;
  $('.cat-indicator').css('left', indicatorPos_start);

  $('.button-cat').click(function() {
    $(this).siblings().removeClass('cat-active')
    $(this).addClass('cat-active')

    var indicatorPos = $(this).offset().left;
    $('.cat-indicator').css('left', indicatorPos);

    //|||||||||||||||||||||||||||||||||||||||||//
    // SECTION MANAGEMENT --DO NOT INCLUDE--
    var target = $(this).data('target');
    $(target).siblings().addClass('cat-hide');
    $(target).removeClass('cat-hide');
    //|||||||||||||||||||||||||||||||||||||||||//
  });

});
