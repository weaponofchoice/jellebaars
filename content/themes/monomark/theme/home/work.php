<?php
$cases = get_field('case_recent');

if( $cases ):
  foreach( $cases as $post ):
    
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
    
    // Loop into 'gallery or image'
    if( get_field('gallery_or_image') == 'Image' ){
      $image_home = get_field('image_home')['sizes']['thumbnail'];
    }
    
    setup_postdata( $post );
    ?>
    
    <div class="case case-featured">
      <p>TYPE: <?php echo $type; ?></p>
      <img src="<?php echo $image_home; ?>">
      <p>TITLE: <?php echo $title; ?></p>
      <a href="<?php echo $link; ?>">LINK TEXT: <?php echo $link_text; ?></a>
    </div>
  
    <?php
    wp_reset_postdata();
  endforeach;
endif;
?>