<?php
$image = get_sub_field('image');
$image_url = $image['sizes']['large'];
$title = get_sub_field('title');
?>
<div class="fullwidth">
  <img src="<?php echo $image_url; ?>">
  <h1><?php echo $title; ?></h1>
</div>