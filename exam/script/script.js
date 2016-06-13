function SendPost() {
  var tag = document.getElementById('inputSearchForm').value;
  $.ajax({
       url: 'https://pixabay.com/api/?key=2710566-be211b8e711ed56e6993dc077&q='+tag+'&image_type=photo',
      dataType : "jsonp",
      success: function (data, textStatus) {
       for (var i = 1; i < 8; i++) {
       var v = document.getElementById('Pic'+i)
       if (data.hits.length <8) {
         defaultImage();
         return;
       }
        v.style.backgroundImage="url("+data.hits[i].webformatURL+")";
        document.getElementById('h1'+i).innerHTML = data.hits[i].tags.split(',')[0];
      }
    }
  });
}

$(function () {
    defaultImage();
});

function defaultImage() {
  $.ajax({
      url: 'https://pixabay.com/api/?key=2710566-be211b8e711ed56e6993dc077&image_type=photo',
      dataType : "jsonp",
       success: function (data, textStatus) {
        for (var i = 1; i < 8; i++) {
        var v = document.getElementById('Pic'+i)
         v.style.backgroundImage="url("+data.hits[i].webformatURL+")";
         document.getElementById('h1'+i).innerHTML = data.hits[i].tags.split(',')[0];
       }
      }
  });
}

$(function () {
  var $ideas = $(".ideas").masonry({
     itemSelector:'.fstPic',
     columnWidth: 3,
     stamp:'article'
  });
    $ideas.imagesLoaded( function() {
      $ideas.masonry();
  });
});







$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
  });
});



$(function() {
     $(".searchForm").keydown(function(e) {
          if (e.keyCode == 13) {
            SendPost();
            return false;
          }
     });

     function getChar(e) {
       console.log(e);
     }
});
