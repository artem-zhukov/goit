$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(document).ready(function(){
  $("em").hide();
  var allInputs = $(":input");
  allInputs.hover(function(){
    $(this).next("em").animate({opacity: "show"}, "normal");
    $("em").queue("fx", []);
    console.log($("em").queue("fx"));
  }, function(){
    $(this).next("em").animate({opacity: "hide"}, "normal");
    $("em").queue("fx", []);
    console.log($("em").queue("fx"));
  });
});
