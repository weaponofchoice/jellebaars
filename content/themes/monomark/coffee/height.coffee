if $('html').length > 0
  header = $('header')
  header_info = $('.header-info')
  gallery = $('.royalSlider')
  
  # Determine heights
  header_height = header.height()
  gallery_height = $('.rsImg').height()
  
  # Applys heights
  header_info.css "margin-top", -header_height
  # gallery.css "height", gallery_height
  
  $(window).on 'resize', ->
    # Recalculate heights  
    header_height = header.height()
    gallery_height = $('.rsImg').height()
    
    # Applys heights
    header_info.css "margin-top", -header_height
    # gallery.css "height", gallery_height