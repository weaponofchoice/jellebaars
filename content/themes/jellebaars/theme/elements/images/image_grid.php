<ul class="content-section small-block-grid-1 medium-block-grid-2 xlarge-block-grid-3">
<?php
$images = get_sub_field('images');

if( $image ):
  foreach( $images as $image ):
    $image_url = $image['sizes']['medium'];
?>
    
    <li><img src="<?php echo $image_url; ?>"></li>

<?php
  endforeach;
endif;
?>
</ul>