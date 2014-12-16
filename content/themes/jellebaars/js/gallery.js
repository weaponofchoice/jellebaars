// Generated by CoffeeScript 1.8.0
var gallery, galleryWidth, viewportWidth;

if ($('.royalSlider').length > 0) {
  gallery = $('.royalSlider');
  viewportWidth = window.innerWidth;
  galleryWidth = gallery.width();
  gallery.css("height", galleryWidth / 2);
  $(window).on('resize', function() {
    viewportWidth = window.innerWidth;
    galleryWidth = gallery.width();
    return gallery.css("height", galleryWidth / 2);
  });
}
