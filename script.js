$(function(){
  let article1 = $('#article-1');
  let article2 = $('#article-2');
  let article3 = $('#article-3');
  let article4 = $('#article-4');
  let article5 = $('#article-5');
  /*トップへ戻るボタン*/ 
  var topBtn = $('#to-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

  /*スクロールで各セクションが現れるようにする */
  let sH = window.innerHeight;/*ウィンドウの高さ*/
  let s = sH*0.6; /*出現タイミング用*/
    $(window).scroll(function(){
      if($(this).scrollTop()>article1.offset().top-s){
        article1.removeClass('hide').addClass('show');
      }
      if($(this).scrollTop()>article2.offset().top-s){
        article2.removeClass('hide').addClass('show');
      }
      if($(this).scrollTop()>article3.offset().top-s){
        article3.removeClass('hide').addClass('show');
      }
      if($(this).scrollTop()>article4.offset().top-s){
        article4.removeClass('hide').addClass('show');
      }
      if($(this).scrollTop()>article5.offset().top-s){
        article5.removeClass('hide').addClass('show');
      }
    });

  /*スライダ*/ 
  $('.main-slider').slick({
    infinite:true,
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    arrows:true,
  });
});
