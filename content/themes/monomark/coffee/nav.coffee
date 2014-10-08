if $('nav').length > 0
  hamburger = $('.hamburger')
  closer = $('.closer')
  nav = $('nav')
  header = $('header')
  
  hamburger.click ->
    header.addClass "menu-active"
    nav.addClass "menu-active"
    
  closer.click ->
    header.removeClass "menu-active"
    nav.removeClass "menu-active"