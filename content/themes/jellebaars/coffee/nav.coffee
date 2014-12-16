if $('nav').length > 0
  trigger = $('.trigger-menuOpen')
  closer = $('.trigger-menuClose')
  nav = $('nav')
  header = $('header')
  container = $('#container')
  
  trigger.click ->
    container.prepend "<div class='overlay'></div>"
    header.addClass "menu-active"
    nav.addClass "menu-active"
    
  closer.click ->
    overlay = $('.overlay')
    overlay.remove()
  
    header.removeClass "menu-active"
    nav.removeClass "menu-active"
      
  container.click ->
    overlay = $('.overlay')
    overlay.remove()
    
    header.removeClass "menu-active"
    nav.removeClass "menu-active"