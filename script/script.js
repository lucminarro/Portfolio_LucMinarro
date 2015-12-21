//--TOUCH SLIDE TOOLS
$(document).ready(function() {
 
  var owl = $("#tool-list");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 7],
        [700, 9],
        [1000, 10],
        [1200, 12],
        [1400, 13],
        [1600, 15]
      ],
      navigation : true
 
  });
 
});

//-- MENU PLEINE PAGE

$(function(){
	$(".menu-opener").click(function(e){
		e.preventDefault();

		$("body").toggleClass("menu--open");
		setTimeout(function(){
			$(".menu ul").toggleClass("animated fadeInDown");
			$(".menu-opener").toggleClass("menu--exit");
		}, 100);
	})

	$(".menu-sidebar a").click(function(e){
		e.preventDefault();
		$("body").toggleClass("menu--open");
		$(".menu-opener").toggleClass("menu--exit");

		$('html, body').animate({
		    scrollTop: $($(this).attr("href")).offset().top
		}, 600);
	})
})

//-- LANCEMENT DE L'ANIMATION SVG AU SCROLL

$(window).scroll(function(){
		if($(window).scrollTop() > $('.bgs-3').offset().top - 600)
    {
			$("#pen").css("animation-play-state", "running");
		}
	});

//--ROTATION LGOG HEADER

var deg = 0;
setInterval(function()
{
  deg += 90;
  $('.logo-elements').css('transform', 'rotate(-'+deg+'deg)');
}, 10000);