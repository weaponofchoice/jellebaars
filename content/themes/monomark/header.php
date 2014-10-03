<?php
/**
 * @package WordPress
 * @subpackage bonanza
 */
?>
<!doctype html>
<!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Monomark</title>
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/app.css">

	<!-- WP_HEAD() -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> id="<?php echo the_title(); ?>">
	<div id="container">
    <!-- <div>
    <?php
    if( is_front_page() ){
      echo the_field('header_text', 'option');
      echo the_field('header_text_2', 'option');
    }
    ?>
  </div> -->
  <header>
    <img src="<?php bloginfo('template_directory'); ?>/img/logo.svg">
    <a class="hamburger"></a>
  </header>