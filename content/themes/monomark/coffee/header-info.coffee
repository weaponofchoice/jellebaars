if $('.header-info').length > 0
  header_info = $('.header-info')
  hamburger = $('.hamburger')
  
  $(document).scroll ->
    if $(document).scrollTop() >= 50
      hamburger.addClass "show"
    else
      hamburger.removeClass "show"