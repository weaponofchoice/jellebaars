// Generated by CoffeeScript 1.8.0
var gallery, gallery_height, header, header_height, header_info;

if ($('html').length > 0) {
  header = $('header');
  header_info = $('.header-info');
  gallery = $('.royalSlider');
  header_height = header.height();
  gallery_height = $('.rsImg').height();
  header_info.css("margin-top", -header_height);
  gallery.css("height", gallery_height);
  $(window).on('resize', function() {});
  header_height = header.height();
  gallery_height = $('.royalSlider .rsMainSlideImage').height();
  header_info.css("margin-top", -header_height);
  gallery.css("height", gallery_height);
}