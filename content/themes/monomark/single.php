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
  <div class="fullwidth">
    <img src="<?php echo $image_single; ?>">
    <h1><?php echo $title_single; ?></h1>
  </div>
  <article class="medium-2 medium-offset-1 columns">
    <h2><?php echo $text_large_single; ?></h2>
    <p><?php echo $text_small_single; ?></p>
  </article>
  
  <?php
  endwhile;

  else :
    echo '<h2>Sorry, but you are looking for something that is not here</h2>';
endif; wp_reset_postdata();

get_footer();
?>