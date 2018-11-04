$('#button-menu').click(function(){
    if($('#button-menu').attr('class') == 'bars icon'){
        $('#button-menu').removeClass('bars icon').addClass('times icon');
        $('.side-nav .side-navbar').css({'left':'0px'})
        $('.side-nav').css({'width': '100%' ,'background':'rgba(0,0,0,.6)'});
    }else{
        $('#button-menu').removeClass('times icon').addClass('bars icon')
        $('.side-nav .side-navbar').css({'left':'-320px'})
        $('.side-nav').css({'width': '0%' ,'background':'rgba(0,0,0,0)'});
    }
})


$('.item-submenu a').click(function(){
    var positionMenu = $(this).parent().attr('menu')
   $('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0'})
})

$('.navegacion .submenu li.go-back').click(function(){
    $(this).parent().css({'left':'-320px'})
})

$(function() {
    $(window).scroll(function() {
  if ($(window).scrollTop() < 50) {
    $('.side-nav span.side-nav-icon').css({'width':'0vh','background-color': 'transparent'}); 
  } else {
    $('.side-nav span.side-nav-icon').css({'width':'100vh','background-color': 'rgb(61, 61, 61)'});
  }
    });
  });

  $(function() {
    $(window).scroll(function() {
  if ($(window).scrollTop() < 80) {
        $('.nav').removeClass('nav-fixed ')
  } else {
    $('.nav').addClass('nav-fixed')
  }
    });
  });