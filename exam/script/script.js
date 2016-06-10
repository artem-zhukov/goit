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
  $(".ideas").masonry({
    itemSelector:'.fstPic',
    columnWidth: 1,
    stamp:'article'
  });
});


$(function () {
  $('.fstPic').imagefill({target:'.background-image'});
});


  $(function () {
        $('.wrapper--content').flexslider({
            animation: 'fade',
        });
    });
