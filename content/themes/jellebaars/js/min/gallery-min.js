var gallery,galleryWidth,viewportWidth;$(".royalSlider").length>0&&(gallery=$(".royalSlider"),viewportWidth=window.innerWidth,galleryWidth=gallery.width(),gallery.css("height",galleryWidth/2),$(window).on("resize",function(){return viewportWidth=window.innerWidth,galleryWidth=gallery.width(),gallery.css("height",galleryWidth/2)}));