  </div><!-- end of container -->  

  <footer>
    <div class="medium-1 medium-offset-1 columns">
      <h3><?php the_field('footer_text', 'option'); ?></h3>
      <?php the_field('footer_text_2', 'option'); ?>
    </div>
  </footer>
  
  <?php wp_footer(); ?>
</body>
</html>