$(function(){
  var $panel = $('#js-popout-panel'); //パネル
  //メニューボタンのイベント
  $('#js-popout').on('click', function(){
    $panel.addClass('is-visible');
  });
  //閉じるボタンのイベント
  $('#js-popout-close, .nav-item').on('click', function(){
    $panel.removeClass('is-visible');
  });
});


$(function(){
  function setWindowHeight(){
    $('.l-section-top').css({
      height: $(window).height()
    });
  }

  setWindowHeight();

  $(window).on('resize',function(){
    setWindowHeight();
  });
});
