$(document).on('ready', function(){ 
	
  $('.nav.navbar-nav a').click(function () { 
    var el = $(this).attr('href');
    $('html,body').animate({scrollTop: $(el).offset().top - 200}, 600);
    return false;
  });

  $(window).scroll(function(){    
    if ($(window).scrollTop() >= 100) {
        $('.navbar-ho').addClass('scroll');       
    } 
    if ($(window).scrollTop() < 100) {
      $('.navbar-ho').removeClass('scroll');       
  } 
  });

  //*****************



});