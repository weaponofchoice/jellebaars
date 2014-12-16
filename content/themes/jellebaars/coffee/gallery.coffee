if $('.royalSlider').length > 0
  gallery = $('.royalSlider')
  
  # Determine sizes
  viewportWidth = window.innerWidth
  galleryWidth = gallery.width()
  
  gallery.css "height", galleryWidth / 2
  
  $(window).on 'resize', ->
    # Determine sizes
    viewportWidth = window.innerWidth
    galleryWidth = gallery.width()
    
    gallery.css "height", galleryWidth / 2