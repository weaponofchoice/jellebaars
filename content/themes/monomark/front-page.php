<?php
get_header(); 

if( have_posts() ):
  while( have_posts() ): the_post();
  
  include( locate_template('theme/home/text.php') );
  include( locate_template('theme/home/featured.php') );
  include( locate_template('theme/home/work.php') );
  
  endwhile;

  else :
    echo '<h2>Sorry, but you are looking for something that is not here</h2>';
endif; wp_reset_postdata();

get_footer();
?>