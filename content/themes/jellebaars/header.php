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
  <title>Jelle Baars</title>
  
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/app.css">
  <link rel="stylesheet" type="text/css" href="//cloud.typography.com/680076/679586/css/fonts.css" />
  
  <!-- WP_HEAD() -->
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> id="<?php echo the_title(); ?>">
  <header>
    <a class="logo logo-black" href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_directory'); ?>/img/logo-black.svg"></a>
    <a class="logo logo-white" href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_directory'); ?>/img/logo-white.svg"></a>
    <a href="javascript:;" class="trigger trigger-menu trigger-menuOpen">
      <div class="trigger-menu-line"></div>
      <div class="trigger-menu-line"></div>
      <div class="trigger-menu-line"></div>
    </a>
    <a href="javascript:;" class="trigger trigger-menu trigger-menuClose">
      <div class="trigger-menu-line"></div>
      <div class="trigger-menu-line"></div>
    </a>
  </header>
  
  <nav>
    <?php

    $nav = array(
      'theme_location'  => 'main_menu',
      'container_class' => '',
      'link_before'     => '<h4>',
      'link_after'      => '</h4>',
      'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>'
    );

    wp_nav_menu( $nav );

    ?>
  </nav>
  
  <?php
  if( is_front_page() ){
  ?>
  <div class="header-info">
    <div class="small-1 small-offset-1 medium-1 medium-offset-1 columns">
      <?php the_field('header_text', 'option'); ?>
    </div>
    <div class="small-1 medium-1 columns">
      <?php the_field('header_text_2', 'option'); ?>
    </div>
  </div>
    <?php
  }
    ?>
  
  <div id="container">
    <div class="grid">
      <div class="medium-1 columns"><div></div></div>
      <div class="medium-1 columns"><div></div></div>
      <div class="medium-1 columns"><div></div></div>
    </div>