/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */
( function( $ ) {
	"use strict";
	var body    = $( 'body' ),
		_window = $( window );
	// Enable menu toggle for small screens.
	( function() {
		var nav = $( '#site-navigation' ), button, menu;
		if ( ! nav ) {
			return;
		}
		button = nav.find( '.menu-toggle' );
		if ( ! button ) {
			return;
		}
		// Hide button if menu is missing or empty.
		menu = nav.find( '.mega-menu' );
		if ( ! menu || ! menu.children().length ) {
			button.hide();
			return;
		}
	} )();
	/*
	 * Makes "skip to content" link work correctly in IE9 and Chrome for better
	 * accessibility.
	 *
	 * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
	 */
	_window.on( 'hashchange.Workdo', function() {
		var element = document.getElementById( location.hash.substring( 1 ) );
		if ( element ) {
			if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
				element.tabIndex = -1;
			}
			element.focus();
			// Repositions the window on jump-to-anchor to account for header height.
			window.scrollBy( 0, -80 );
		}
	} );
	$( function() {
		"use strict";
		// Focus styles for menus.
		$( '.primary-navigation, .secondary-navigation' ).find( 'a' ).on( 'focus.Workdo blur.Workdo', function() {
			$( this ).parents().toggleClass( 'focus' );
		} );
	} );
	// Arrange footer widgets vertically.
	if ( $.isFunction( $.fn.masonry ) ) {
		$( '#footer-sidebar' ).masonry( {
			itemSelector: '.widget',
			columnWidth: function( containerWidth ) {
				return containerWidth / 4;
			},
			gutterWidth: 0,
			isResizable: true,
			isRTL: $( 'body' ).is( '.rtl' )
		} );
	}

} )( jQuery );