<?php
$featured = get_field('case_featured');

if( $featured ):
  foreach( $featured as $post ):
    
    $type = get_field('type_home');
    $text = get_field('text_home');
    $link_text = get_field('link_text');
    
    if( get_field('custom_title_home') ){
      $title = get_field('title_home');
    } else {
      $title = get_the_title($post);
    }
  
    if( get_field('custom_link_home') ){
      $link = get_field('link_home');
    } else {
      $link = get_permalink($post);
    }
    
    setup_postdata( $post );
    ?>
    
    <div class="case case-featured">
      <p>TYPE: <?php echo $type; ?></p>
      <div class="gallery">
        <?php
        if( get_field('gallery_or_image') == 'Gallery' ){
          $images = get_field('gallery_home');
      
          if( $images ):
            foreach( $images as $image ):
              $image_gallery_home = $image['sizes']['large']; ?>
            
              <img src="<?php echo $image_gallery_home; ?>">
            
              <?php
            endforeach;
          endif;
          
        }
        ?>
      </div>
      <p>TITLE: <?php echo $title; ?></p>
      <p>TEXT: <?php echo $text; ?></p>
      <p>LINK: <?php echo $link; ?></p>
      <a href="<?php echo $link; ?>">LINK TEXT: <?php echo $link_text; ?></a>
    </div>
  
    <?php
    wp_reset_postdata();
  endforeach;
endif;
  ?>