<ul class="medium-block-grid-2">
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