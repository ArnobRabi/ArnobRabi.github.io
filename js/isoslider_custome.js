$(document).ready(function() {
	
				$('.iosSlider').iosSlider({
					desktopClickDrag: true,
					snapToChildren: true,
					infiniteSlider: true,
					responsiveSlideWidth: true,
					navSlideSelector: '.sliderContainer .slideSelectors .item',
					navNextSelector: '.iosSlider .next',
      				navPrevSelector: '.iosSlider .prev',
					onSlideComplete: slideComplete,
					onSliderLoaded: sliderLoaded,
					onSlideChange: slideChange,
					autoSlide: true,
					scrollbar: true,
					scrollbarContainer: '.sliderContainer .scrollbarContainer',
					scrollbarMargin: '0',
					scrollbarBorderRadius: '0',
					keyboardControls: true
				});
			
			});
			
			function slideChange(args) {
						
				$('.sliderContainer .slideSelectors .item').removeClass('selected');
				$('.sliderContainer .slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
			
			}
			
			function slideComplete(args) {
				
				if(!args.slideChanged) return false;
				
				/****************************************
				****************   .slide-skin  slideComplete    ****************
				****************************************/
				
				$(args.sliderObject).find('.slide-skin > h1, .slide-skin > h2, .slide-skin > h3').attr('style', '');
				$(args.currentSlideObject).find('.slide-skin > h1').animate({
					top: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin > h3').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 500, 'easeOutQuint');
				
				/****************************************
				****************   .slide-skin-2  slideComplete    ****************
				****************************************/
				
				$(args.sliderObject).find('.slide-skin-2 > h1, .slide-skin-2 > h2,.slide-skin-2 > h3').attr('style', '');
				$(args.currentSlideObject).find('.slide-skin-2 > h1').animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-2 > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-2 > h3').delay(100).animate({
					bottom: '135px',
					opacity: '1'
				}, 1500, 'easeOutQuint');
				
				/****************************************
				****************   .slide-skin-3  slideComplete    ****************
				****************************************/
				
				$(args.sliderObject).find('.slide-skin-3 > h1, .slide-skin-3 > h2, .slide-skin-3 > h3').attr('style', '');
				$(args.currentSlideObject).find('.slide-skin-3 > h1').animate({
					top: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-3 > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-3 > h3').delay(100).animate({
					left: '0px',
					opacity: '1'
				}, 1500, 'easeOutQuint');
				
				/****************************************
				****************   .slide-skin-4  slideComplete    ****************
				****************************************/
				
				$(args.sliderObject).find('.slide-skin-4 > h1, .slide-skin-4 > h2, .slide-skin-4 > h3').attr('style', '');
				$(args.currentSlideObject).find('.slide-skin-4 > h1').animate({
					top: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-4 > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-4 > h3').delay(100).animate({
					left: '0%',
					opacity: '1'
				}, 1500, 'easeOutQuint');
				
			}
			
			function sliderLoaded(args) {
				
				/****************************************
				****************   .slide-skin  sliderLoaded    ****************
				****************************************/
					
				$(args.sliderObject).find('.slide-skin > h1, .slide-skin > h2, .slide-skin > h3').attr('style', '');
				
				$(args.currentSlideObject).find('.slide-skin > h1').animate({
					top: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin > h3').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 500, 'easeOutQuint');
				slideChange(args);
				
				/****************************************
				****************   .slide-skin-2  sliderLoaded    ****************
				****************************************/
					
				$(args.sliderObject).find('.slide-skin-2 > h1, .slide-skin-2 > h2, .slide-skin-2 > h3').attr('style', '');
				
				$(args.currentSlideObject).find('.slide-skin-2 > h1').animate({
					left: '0%',
					opacity: '1'
				}, 800, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-2 > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-2 > h3').delay(200).animate({
					bottom: '135px',
					opacity: '1'
				}, 1500, 'easeOutQuint');
				slideChange(args);
				
				/****************************************
				****************   .slide-skin-3  sliderLoaded    ****************
				****************************************/
					
				$(args.sliderObject).find('.slide-skin-3 > h1, .slide-skin-3 > h2, .slide-skin-3 > h3').attr('style', '');
				
				$(args.currentSlideObject).find('.slide-skin-3 > h1').animate({
					top: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-3 > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-3 > h3').delay(200).animate({
					left: '0px',
					opacity: '1'
				}, 1500, 'easeOutQuint');	
				slideChange(args);
				
				/****************************************
				****************   .slide-skin-4  sliderLoaded    ****************
				****************************************/
					
				$(args.sliderObject).find('.slide-skin-4 > h1, .slide-skin-4 > h2, .slide-skin-4 > h3').attr('style', '');
				
				$(args.currentSlideObject).find('.slide-skin-4 > h1').animate({
					top: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-4 > h2').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1000, 'easeOutQuint');
				
				$(args.currentSlideObject).find('.slide-skin-4 > h3').delay(200).animate({
					left: '0%',
					opacity: '1'
				}, 1500, 'easeOutQuint');
				
				slideChange(args);
				
			}