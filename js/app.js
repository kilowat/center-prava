c_p= function(){
	return {
		sliderResize:function(){
			var q = innerWidth/500;
			var sHeadW = $('.slide-head').width();
			var sSeeW = $('.see-detail').width();
			var w = window.innerWidth;
			var wCenter = $('header .container').width()/2;
			var wContainer = $('.wrapper').width();
			$('.slide-head').css('left',w/2-wContainer/2-33 +'px');
			$('.see-detail').css('left',w/2-wContainer/2+60 +'px');
			$('.slide-description').css('left',w/2-wContainer/2+90 +'px');
			$('.swiper-button-next').css('right',w/2-wContainer/2+68 +'px');
			$('.swiper-button-prev').css('right',w/2-wContainer/2+'px');
			$('.swiper-pagination').css('left',w/2+'px');
			$('.swiper-container').height(window.innerWidth/q);	
		},
		miniSliderResize:function(){
			var count = 4;
			if(window.innerWidth<=960)
				count = 3;
			if(window.innerWidth<=720)
				count = 2;
			if(window.innerWidth<=480)
				count = 1;
		
			$('.slider-mini').slick({
			  slidesToShow: count,
			});
		}
	}
}
window.onresize = function(){
	c_p().sliderResize();
};

$(document).ready(function(){
	c_p().sliderResize();
});
