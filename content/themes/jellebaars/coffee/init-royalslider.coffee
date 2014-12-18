if $('.royalSlider').length > 0
  slider = $('.royalSlider')
  
  slider.royalSlider
    # options go here
    keyboardNavEnabled: true,
    imageScaleMode: 'fill',
    imageAlignCenter: true,	
    autoScaleSlider: false,
    slidesSpacing: 0,
    loop: true,
    transitionSpeed: 200,
    controlNavigation: 'bullets',
    arrowsNavHideOnTouch: false,
    transitionType: 'fade',
    autoHeight: true