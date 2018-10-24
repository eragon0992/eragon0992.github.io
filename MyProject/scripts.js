$(document).ready(function() {
            $('#HeaderLogo').addClass('animated fadeInLeft');
            $('#HeaderTitle').addClass('animated fadeInRight');
            $('#HeaderLogo').css("visibility", "visible");
            $('#HeaderTitle').css("visibility", "visible");
});

$("#Title").hover(function(){
	$("#Title").addClass('animated pulse');
	$('#HeaderTitle').css("visibility", "visible");
})

$('.carousel').carousel({
  interval: 3500
})

$('.carousel-control-prev-icon').click(function() {
  $('#carouselExampleFade').carousel('prev');
});

$('.carousel-control-next-icon').click(function() {
  $('#carouselExampleFade').carousel('next');
});