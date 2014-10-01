<?php
function enqueue_theme_scripts() {
  // Unregister standard jQuery and reregister as google code.
  wp_deregister_script('jquery');
  wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', null, false, true );
	wp_enqueue_script( 'jquery' );
	
	if( WP_DEBUG ):
		// Plugins
		// For example:
		wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/js/vendor/modernizr-2.6.2.min.js', 'jquery', false, true );
		wp_enqueue_script( 'sticky-footer', get_template_directory_uri() . '/js/sticky-footer.js', 'jquery', false, true );
 	else:
		// All concatenated and compressed JS in one file:
		wp_enqueue_script( 'app', get_template_directory_uri() . '/js/app.min.js', 'jquery', false, true );
 	endif;
}

add_action('wp_enqueue_scripts', 'enqueue_theme_scripts');
?>