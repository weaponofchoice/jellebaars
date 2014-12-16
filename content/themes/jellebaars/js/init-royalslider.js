// Generated by CoffeeScript 1.8.0
var slider;

if ($('.royalSlider').length > 0) {
  slider = $('.royalSlider');
  slider.royalSlider({
    keyboardNavEnabled: true,
    imageScaleMode: 'fill',
    imageAlignCenter: true,
    autoScaleSlider: false,
    slidesSpacing: 0,
    loop: true,
    transitionSpeed: 200,
    controlNavigation: 'bullets',
    arrowsNavHideOnTouch: true,
    transitionType: 'fade'
  }, {
    autoHeight: true
  });
}