  </div><!-- end of container -->  

  <footer>
    <div class="medium-3 medium-offset-0 large-1 large-offset-1 columns">
      <h3><?php the_field('footer_text', 'option'); ?></h3>
      <?php the_field('footer_text_2', 'option'); ?>
    </div>
  </footer>
  
  <?php wp_footer(); ?>
</body>
</html>