$(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  //image size
  $(function(){
    let pagetop = $('#page_top');
    //unshow button
    pagetop.hide();
    // display to scroll 80px
    $(window).scroll(function (){
      if ($(this).scrollTop() > 150) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function(){
      $('body, html').animate({ scrollTop: 0},500);
      return false;
    });
  });

  $('.gallery-img').click(function(){
    $("#grayDisplay").html($(this).prop("outerHTML"));
    $("#grayDisplay").fadeIn(200);
    $('body,html').css('overflow-y', 'hidden');
    return false;
  });
  
  $("#grayDisplay").click(function (){
    $("#grayDisplay").fadeOut(200);
    $('body,html').css('overflow-y', 'visible');
    return false;
  });