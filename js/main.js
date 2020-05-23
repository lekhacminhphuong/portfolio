// Custom cursor
const cursor = document.querySelector(".cursor")

document.addEventListener('mousemove', e => {
	cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})
document.addEventListener('mouseover', e => {
	cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})
document.addEventListener('click', () => {
	cursor.classList.add("cursorClick");
	setTimeout(() => {
		cursor.classList.remove("cursorClick")
	}, 400)
})


;(function () {
	
	'use strict';

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function() {
		var owl2 = $('.owl-carousel');
		owl2.owlCarousel({
			animateOut: 'transition',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav: true,
		   dots: false,
		   autoHeight: true,
		   mouseDrag: false,
		   autoplayHoverPause: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl3 = $('.owl-carousel3');
		owl3.owlCarousel({
			animateOut: 'transition',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav: false,
		   dots: true,
		   autoHeight: true,
		   mouseDrag: false,
		   autoplayHoverPause: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});	
	};

	


	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		owlCarouselFeatureSlide();
	});


}());