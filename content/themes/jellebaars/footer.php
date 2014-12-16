  </div><!-- end of container -->  

  <footer>
    <div class="medium-3 medium-offset-0 large-1 large-offset-1 columns">
      <h3><?php the_field('footer_text', 'option'); ?></h3>
      <?php the_field('footer_text_2', 'option'); ?>
      <div>
        <a href=""><img src="<?php bloginfo('template_directory'); ?>/img/linkedin_black.svg"></a>
        <a href=""><img src="<?php bloginfo('template_directory'); ?>/img/vimeo_black.svg"></a>
        <a href=""><img src="<?php bloginfo('template_directory'); ?>/img/tumblr_black.svg"></a>
        <a href=""><img src="<?php bloginfo('template_directory'); ?>/img/behance_black.svg"></a>
      </div>
    </div>
  </footer>
  
  <?php wp_footer(); ?>
</body>
</html>