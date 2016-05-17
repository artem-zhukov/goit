$(document).ready(function() {

$('.carousel-arrow-right').click(function() {
    $(".carousel-list").animate({left: "-125px"}, 200);
			$(".carousel-list .carousel-element").eq(0).clone().appendTo(".carousel-list");
			$(".carousel-list .carousel-element").eq(0).remove();
			$(".carousel-list").css({"left":"0px"});
});

$(".carousel-arrow-left").click(function(){
		$(".carousel-list .carousel-element").eq(-1).clone().prependTo(".carousel-list");
		$(".carousel-list").css({"left":"-125px"});
		$(".carousel-list").animate({left: "0px"}, 300);
		$(".carousel-list .carousel-element").eq(-1).remove();
	});
});
