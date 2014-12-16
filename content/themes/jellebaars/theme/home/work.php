<ul class="content-section small-block-grid-1 medium-block-grid-3">
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
      $image = get_field('image_home');
      $image_url = $image['sizes']['medium'];
    }
    
    setup_postdata( $post );
    ?>
    
    <li class="case case-small">
      <p><?php echo $type; ?></p>
      <img class="thumb" src="<?php echo $image_url; ?>">
      <div class="case-info">
        <h3 class="title"><?php echo $title; ?></h3>
        <a href="<?php echo $link; ?>"><?php echo $link_text; ?></a>
      </div>
    </li>
  
    <?php
    wp_reset_postdata();
  endforeach;
endif;
?>
</ul>