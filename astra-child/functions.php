<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

// Tilføj en handling, der kører når WordPress admin initialiseres
add_action('admin_init', function () {
    // Omdiriger enhver bruger, der forsøger at få adgang til kommentarsiden
    global $pagenow;
    
    // Hvis den nuværende side er edit-comments.php, omdiriger brugeren til admin dashboard
    if ($pagenow === 'edit-comments.php') {
        wp_safe_redirect(admin_url());
        exit;
    }

    // Fjern kommentarer metabox fra dashboardet
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

    // Deaktiver understøttelse af kommentarer og trackbacks i indlægstyper
    foreach (get_post_types() as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
});

// Luk kommentarer på front-end
// Tilføj et filter, der returnerer falsk når WordPress tjekker om kommentarer er åbne
add_filter('comments_open', '__return_false', 20, 2);
// Tilføj et filter, der returnerer falsk når WordPress tjekker om pings er åbne
add_filter('pings_open', '__return_false', 20, 2);

// Skjul eksisterende kommentarer
// Tilføj et filter, der returnerer et tomt array når WordPress henter kommentarer til en post
add_filter('comments_array', '__return_empty_array', 10, 2);

// Fjern kommentar side i menuen
// Tilføj en handling, der fjerner kommentar siden fra admin menuen når admin menuen bygges
add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
});

// Fjern kommentar links fra admin baren
// Tilføj en handling, der fjerner kommentar menuen fra admin baren når WordPress initialiseres
add_action('init', function () {
    // Tjekker først, om admin baren vises
    if (is_admin_bar_showing()) {
        // Hvis den gør, fjernes kommentar menuen fra admin baren
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
});

// Tilføj en handling, der kører når WordPress tilføjer scripts og styles til køen
// Denne funktion tilføjer barn tema styles til køen efter forældre tema styles
add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );
