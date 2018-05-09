/**
 * Created by chenli on 2018/5/6.
 */

/*页面效果  星级*/
$(function () {
  //评分
  var starRating = 0;
  $('.high').hide();
  $('.photo span').on('mouseenter', function () {
    var index = $(this).index() + 1;
    $(this).prevAll().find('.high').show();
    $(this).find('.high').show();
    $(this).nextAll().find('.high').hide();
  });
  $('.photo').on('mouseleave', function () {
    $(this).find('.high').hide();
    var count = starRating / 2;
    if (count == 5) {
      $('.photo span').find('.high').show();
    } else {
      $('.photo span').eq(count).prevAll().find('.high').show();
    }
  })
  $('.photo span').on('click', function () {
    var index = $(this).index() + 1;
    $(this).prevAll().find('.high').show();
    $(this).find('.high').show();
    starRating = index * 2;
  })
  //取消评分
  $('.cancleStar').on('click', function () {
    starRating = 0;
    $('.photo span').find('.high').hide();
  })
  //确定评分
  $('#sub').on('click', function () {
    if (starRating === 0) {
      alert('最低一颗星！');
    } else {
      alert('评分：' + (starRating.toFixed(1) + '分'))
    }
  })
  
})
