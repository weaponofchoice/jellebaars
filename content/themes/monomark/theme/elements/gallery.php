<div class="gallery content-section heightfix">
  <div class="royalSlider rsDefault">
  <?php
  $images = get_sub_field('images');

  if( $images ):
    foreach( $images as $image ):
      $image_url = $image['sizes']['large']; ?>
     
      <img class="rsImg" src="<?php echo $image_url; ?>">
    
      <?php
    endforeach;
  endif;
  ?>
  </div>
</div>