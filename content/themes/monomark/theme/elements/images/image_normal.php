<?php
$image = get_sub_field('image');
$image_url = $image['sizes']['large'];
?>
<img class="image" src="<?php echo $image_url; ?>">