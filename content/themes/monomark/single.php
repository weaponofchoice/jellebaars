<?php
get_header(); 

if( have_posts() ):
  while( have_posts() ): the_post();
  
  $image_single = get_field('image_single')['url'];
  $title_single = get_field('title_single');
  
  // Loop into text_large repeater
  if( have_rows('text_large_single') ):
    while( have_rows('text_large_single') ): the_row();
      $text_large_single = get_sub_field('text');
    endwhile;
  endif;
  
  // Loop into text_small repeater
  if( have_rows('text_small_single') ):
    while( have_rows('text_small_single') ): the_row();
      $text_small_single = get_sub_field('text');
    endwhile;
  endif;
  
  ?>
  
  <!-- <img src="<?php echo $image_single; ?>"> -->
  <h2><?php echo $title_single; ?></h2>
  <p>TEXT LARGE: <?php echo $text_large_single; ?></p>
  <p>TEXT SMALL: <?php echo $text_small_single; ?></p>
  
  <?php
  endwhile;

  else :
    echo '<h2>Sorry, but you are looking for something that is not here</h2>';
endif; wp_reset_postdata();

get_footer();
?>