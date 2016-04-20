jQuery(document).ready(function(){

jQuery("ul").mouseenter(
  function () {
	jQuery(this).animate({
		backgroundColor:"#CD3333",
    }, 500 );
});

jQuery("ul").mouseleave(function() {
	jQuery(this).animate({
		backgroundColor:"#FA8072",
    }, 500 );
});

});
