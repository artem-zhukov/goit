$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
          console.log("left");
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        //if (currentLeftValue != minimumOffset) {
          console.log("right");
            currentLeftValue -= 125;
            elementsList.animate({left : currentLeftValue + "px"}, 500);
      //  }
    });
});


// (function($){
//   var leftUIEl = $('.slider-arrow-left');
//   var rightUIEl = $('.slider-arrow-right');
//   var elementsList = $('.slider-list');
//
//   var pixelsOffset = 125;
//   var currentLeftValue = 0;
//   var elementsCount = elementsList.find('li').length;
//   var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
//   var maximumOffset = 0;
// $.fn.carousel = function(){
//   console.log(this);
//   console.log(rightUIEl);
//   rightUIEl.click(function(){
//       alert("!!!");
//     if (currentLeftValue != minimumOffset) {
//         currentLeftValue -= 125;
//         elementsList.animate({ left : currentLeftValue + "px"}, 500);
//     }
//   return this;
//   });
// }
// })(jQuery);
//
//
// $('.carousel-arrow-right').carousel();
