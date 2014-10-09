<?php
get_header(); 

if( have_posts() ):
  while( have_posts() ): the_post();
  
  if( have_rows('page_elements') ):
    while( have_rows('page_elements') ): the_row();
    
    // Text
    if( get_row_layout() == 'text' ):
      include( locate_template('theme/elements/text.php') );
      
    // Gallery
    elseif( get_row_layout() == 'gallery' ):
      include( locate_template('theme/elements/gallery.php') );
    
    // Images
    elseif( get_row_layout() == 'image_normal' ):
      include( locate_template('theme/elements/images/image_normal.php') );
    elseif( get_row_layout() == 'image_fullwidth' ):
      include( locate_template('theme/elements/images/image_fullwidth.php') );
    elseif( get_row_layout() == 'image_grid' ):
      include( locate_template('theme/elements/images/image_grid.php') );
    endif;
    
    endwhile;
  endif;
  
  endwhile;

  else :
    echo '<h2>Sorry, but you are looking for something that is not here</h2>';
endif; wp_reset_postdata();

get_footer();
?>