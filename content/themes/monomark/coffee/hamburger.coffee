if $('.hamburger').length > 0
  info = $('.header-info')
  hamburger = $('.hamburger')
  
  info_height = info.height()
  
  $(document).scroll ->
    if $(document).scrollTop() >= info_height + 30
      hamburger.addClass "show"
    else
      hamburger.removeClass "show"