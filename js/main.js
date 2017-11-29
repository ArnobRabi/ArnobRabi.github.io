
$(document).ready(function(){
	// color piker
	$('.color-1').click(function(){
		$('body').addClass('color-bar-1').removeClass("color-bar-2 color-bar-3 color-bar-4");
	});
	
	$('.color-2').click(function(){
		$('body').addClass('color-bar-2').removeClass("color-bar-1 color-bar-3 color-bar-4");
	});
	
	$('.color-3').click(function(){
		$('body').addClass('color-bar-3').removeClass("color-bar-1 color-bar-2 color-bar-4");
	});
	
	$('.color-4').click(function(){
		$('body').addClass('color-bar-4').removeClass("color-bar-1 color-bar-2 color-bar-3");
	});
	 
	$(".piker_icon").click(function(event){
		event.preventDefault();
		if($(this).hasClass('in-out')){
			$('.color_piker_area').stop().animate({left:"-150px"}, 500);
		}else{
			$('.color_piker_area').stop().animate({left:"0px"}, 500);
		}
		$(this).toggleClass('in-out');
		return false;
	});
	
	
	// jQuery sticky menu
	$("#header").sticky({topSpacing: 0});


	// jQuery smooth scroll
	$('li.smoot-menu > a').bind('click', function(event) {
		var $anchor = $(this);
		var headerH = '55';
		$('html, body').stop().animate({
			scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".main_menu", offset: 60});
	
	// jQuery parallex scroll
	 $('.gooddesign_area').scrolly({bgParallax: true});
	    
	 $('#about').scrolly({bgParallax: true});
	
	 $('.less_area').scrolly({bgParallax: true});
	
	  

	// scroll top
	$("#scroll").click(function(){
		$('html,body').animate({scrollTop:0},1000);
	});
	
});        

$(function(){
	$('.protfolio_list').mixItUp();
});

// scroll top

$(window).scroll(function(){
	if($(window).scrollTop() > 350){
		$("#scroll").fadeIn();
	}
	else{
		$("#scroll").fadeOut();
	}
	return false;
});

// owlCarousel

jQuery(document).ready(function(){
	$('.blog_list').owlCarousel({
		items:3,
		loop:true,
		autoplay:8000,
		navigationText:["prev","next"],
		navigation:true
	});
});
  
$(document).ready(function(){
    $(".header-area > span").click(function(){
        $(".main_menu").slideToggle("slow");
    });
});