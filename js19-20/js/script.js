//Slider
$(document).ready(function() {
 $(".slider").each(function () {
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on");
 });
});
function sliderJS (obj, sl) {
 var ul = $(sl).find("ul");
 var bl = $(sl).find("li.slider"+obj);
 var step = $(bl).width();
 $(ul).animate({marginLeft: "-"+step*obj}, 500);
}
$(document).on("click", ".slider .nav span", function() {
 var sl = $(this).closest(".slider");
 $(sl).find("span").removeClass("on");
 $(this).addClass("on");
 var obj = $(this).attr("rel");
 sliderJS(obj, sl);
 return false;
});

//Accordion
$(document).ready(function() {
  var previousId = null;
$('.main__info__banners__panel--body').hide();
$('.main__banners__panel').click(function(){
    if ($(previousId).hasClass('opened') && previousId != this) {
      $(previousId).toggleClass('opened').toggleClass('closed').next().slideToggle();
      $closeSlide(previousId.id)
    }
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    previousId = this;
    if($(this).hasClass('opened')) {
        $('#'+this.id+'Span').html('-')
        document.getElementById(this.id+"Mark").style.border = 'none';
        document.getElementById(this.id+"Mark").style.background ="#f4b60d";
        document.getElementById(this.id+"Title").style.background ="#f4b60d";
        document.getElementById(this.id+"Title").style.border = 'none';
        document.getElementById(this.id+"Mark").style.borderRight = '1px solid #f6c53d';
        document.getElementById(this.id+"Span").style.color = "#fff";
        document.getElementById(this.id+"SpanTitle").style.color = "#fff";
    }
    else {
        $closeSlide(this.id)
    }
  });
});


$closeSlide = function (elementId) {
  $('#'+elementId+'Span').html('+')
  document.getElementById(elementId+"Mark").style.border = '1px solid #e8e8e8';
  document.getElementById(elementId+"Mark").style.background ="#fff";
  document.getElementById(elementId+"Title").style.background ="#fff";
  document.getElementById(elementId+"Title").style.border = '1px solid #e8e8e8';
  document.getElementById(elementId+"Span").style.color = "#2a2d32";
  document.getElementById(elementId+"SpanTitle").style.color = "#2a2d32";
}
