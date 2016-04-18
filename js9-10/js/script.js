$(document).ready(function(){

$("ul").mouseenter(
  function () {
	$(this).animate({
  	backgroundColor:"#FF4500",
    }, 500 );
});

$("ul").mouseleave(function() {
	$(this).animate({
		backgroundColor:"#8B2500",
    }, 500 );
});
});
