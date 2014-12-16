if $('.trigger-menuOpen').length > 0
  info = $('.header-info')
  trigger = $('.trigger-menuOpen')
  
  info_height = info.height()
  
  $(document).scroll ->
    if $(document).scrollTop() >= info_height + 30
      trigger.addClass "is-visible"
    else
      trigger.removeClass "is-visible"