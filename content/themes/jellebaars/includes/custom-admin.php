<?php
// Creating an extra admin page for header and footer information
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'General info',
		'menu_title'	=> 'General info',
		'menu_slug' 	=> 'general-info',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Header info',
		'menu_title'	=> 'Header',
		'parent_slug'	=> 'general-info',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Footer info',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'general-info',
	));
	
}
?>