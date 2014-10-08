if $('html').length > 0
  header = $('header')
  header_info = $('.header-info')
  
  # Determine heights
  header_height = header.height()
  
  # Applys heights
  header_info.css "margin-top", -header_height
  
  $(window).on 'resize', ->
  # Recalculate heights  
  header_height = header.height()
    
  # Applys heights