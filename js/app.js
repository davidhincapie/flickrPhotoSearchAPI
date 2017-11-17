$(document).ready(function() {
   $('form').submit(function (event) {
     event.preventDefault();
   let $searchTerm = $('#search').val();
   
    let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let animal = $searchTerm;
    let flickrOptions = {
      tags: $searchTerm,
      format: "json"
    };
    function displayPhotos(data) {
      let photoHTML = '<ul>';
      $.each(data.items, function (i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    } //end function displayPhotos
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); //end submit
}); //end ready

