if $('html').length > 0
  header = $('header')
  
  header.waypoint (direction) ->
    header.toggleClass "stick"