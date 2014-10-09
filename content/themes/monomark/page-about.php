<?php
get_header();

if( have_posts() ):
  while( have_posts() ): the_post();
  
  $image = get_field('image')['url'];
  $text_about = get_field('text_about');
  $text_contact = get_field('text_contact');
  
  endwhile;
endif;
?>
<div class="fullwidth">
  <img src="<?php echo $image; ?>">
</div>
<article class="medium-2 medium-offset-1 columns">
  <p id="about"><?php echo $text_about; ?></p>
  <p id="contact"><?php echo $text_contact; ?></p>
</article>

<?php get_footer(); ?>