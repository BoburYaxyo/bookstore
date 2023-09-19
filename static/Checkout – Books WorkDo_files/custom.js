// Workdo Start
"use strict";
var e = jQuery.noConflict();
var t = jQuery.noConflict();
var n = jQuery.noConflict();
var e = jQuery.noConflict();
var n = jQuery.noConflict();
var $owl_carousel=jQuery.noConflict();  

// Countdown
function timecounter() {
    "use strict";
    jQuery('.countbox.hastime').each(function(){
        var countTime = jQuery(this).attr('data-time');
        jQuery(this).countdown(countTime, function(event) {
            jQuery(this).html(
                '<span class="timebox day"><span class="timebox-inner"><strong>'+event.strftime('%D')+'</strong></span><span class="time day">days</span></span><span class="timebox hour"><span class="timebox-inner"><strong>'+event.strftime('%H')+'</strong></span><span class="time hour">hours</span></span><span class="timebox minute"><span class="timebox-inner"><strong>'+event.strftime('%M')+'</strong></span><span class="time min">mins</span></span><span class="timebox second"><span class="timebox-inner"><strong>'+event.strftime('%S')+'</strong></span><span class="time sec">secs</span></span>'
                );
        });
    });
}
jQuery(window).load(function() {
    "use strict";
    timecounter();

    jQuery('.main-blog-page').masonry({
       itemSelector: '.blog-post-content',
    }); 

   jQuery('.blog-list-container').masonry({
       itemSelector: '.item',
    });

});
jQuery(window).resize(function() {
    "use strict";
    timecounter();
});



 // JS for product loading          
jQuery(window).load(function() {
    "use strict";
    var delay = 300; //1 second
    setTimeout(function() {
        jQuery("ul.products li span.product-loading").hide();
    }, delay);

});

/* loader */

jQuery(window).load(function() {
    "use strict";
        // Animate loader off screen
        jQuery('#page-preloader').removeClass('visible');     

    });


function isotopAutoSet() {
    "use strict";
    var e = jQuery.noConflict();
    e(function() {
        "use strict";
        var t = e("#container .masonry");
        e("#container .masonry").css("display", "block");
        e("#container .loading").css("display", "none");
        t.isotope({})
    });
    t(function() {
        "use strict";
        var e = t("#box_filter");
        t("#container #box_filter").css("display", "block");
        t("#container .loading").css("display", "none");
        e.isotope({});
        var n = t("#blog_filter_options .option-set"),
            r = n.find("a");
        r.on( "click", function() {
            var n = t(this);
            if (n.hasClass("selected")) {
                return false
            }
            var r = n.parents(".option-set");
            r.find(".selected").removeClass("selected");
            n.addClass("selected");
            var i = {},
                s = r.attr("data-option-key"),
                o = n.attr("data-option-value");
            o = o === "false" ? false : o;
            i[s] = o;
            if (s === "layoutMode" && typeof changeLayoutMode === "function") {
                changeLayoutMode(n, i)
            } else {
                e.isotope(i)
            }
            return false
        })
    }); 
}
// JS for calling Mega Menu
function callMegaMenu() {
    "use strict";
    var e,menucolumn;
    if (jQuery(window).width() >= 767 && jQuery(window).width() <= 980 ) {menucolumn = 2;}  else{menucolumn = 4;}
    if (jQuery(window).width() >= 767) {
        e = "hover";
        jQuery(".mega-menu .mega, .contactmega").dcMegaMenu({
            rowItems: menucolumn,
            speed: "fast",
            effect: "slide",
            event: e,
            fullWidth: false,
            mbarIcon: true
        })
    }   
}
jQuery(window).load(function() {"use strict";callMegaMenu()});
jQuery(window).resize(function() {"use strict"; callMegaMenu()});


jQuery(document).ready(function() {
    "use strict";
    jQuery("#secondary").find(".has_no_widget").each(function(i){
       jQuery(this).find(jQuery(this).parent().parent().addClass("has_no_sidebar"));
});
   
    
   
    jQuery(".primary-sidebar .tagcloud,.primary-sidebar .widget_shopping_cart_content").addClass("toggle-block");
    jQuery(".primary-sidebar .calendar_wrap").addClass("toggle-block");
    jQuery(".primary-sidebar .widget select").addClass("toggle-block");
    jQuery(".postform").addClass("toggle-block");
    jQuery(".primary-sidebar .price_slider_wrapper").addClass("toggle-block");    
    jQuery(".menu-header-custom-links-container").addClass("toggle-block");
    jQuery(".tagcloud").addClass("toggle-block");
    jQuery(".primary-sidebar .widget ul,.primary-sidebar .menu-menu-container, #footer-widget-area .menu").addClass("toggle-block");
    jQuery(".product-categories ul,ul.sidebar-category-inner").addClass("toggle-block");
    jQuery(".home-category ul").addClass("toggle-block");
    jQuery( '.category,.product,.gallery-item,.single-portfolio,.portfolios li, .portfolios li:hover .other-box ,.cms-banner-inner,.brand-carousel .product-block ,.widgets-cms ,.follow-us a ,.counter,.service-content').doubleTapToGo();
    jQuery('.widget_nav_menu ul li').filter(function() {return jQuery(this).text() == '';}).remove();
    jQuery(".box-category-heading").on( "click",function() { 
         jQuery(".home-category.widget_product_categories").slideToggle("slow");
    });
    jQuery(".header-toggle").on( "click",function(){    
        jQuery(this).parent().toggleClass('active');
    });
    jQuery(".header-custom-links-toggle").on('click',function() { 
         jQuery(".menu-header-custom-links-links-container").slideToggle("slow");
    });
    jQuery('.mega_menu .block-title').on( "click",function() {
        jQuery('.product-categories').slideToggle("slow");
    });
    Shadowbox.init({
        overlayOpacity: .8
    }, setupDemos);
    jQuery("br", ".liststyle_content").remove();
    jQuery("select.orderby").customSelect();
    jQuery("ul li:empty").remove();
    jQuery("br", ".brand_block").remove();
    jQuery("br", ".pricing-content-inner").remove();
    jQuery("br", "#vertical_tab .tabs").remove();



    jQuery("p").each(function() {
        var e = jQuery(this);
        if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
    });
    e(".nav-button").on( "click",function() {   e(".nav-button, .primary-nav").toggleClass("open") });
    jQuery(".page-description").prependTo(jQuery(".main_inner .page-title-inner"));
    jQuery(".woocommerce-breadcrumb").prependTo(jQuery(".main_inner .woocommerce-notices-wrapper"));
    jQuery(".wntr_breadcrumbs").appendTo(jQuery(".main_inner .page-title-inner"));
    jQuery(".breadcrumb-inner").appendTo(jQuery(".main_inner .page-title-inner"));
    jQuery(".gridlist-toggle").prependTo(jQuery("#primary #content"));
    jQuery(".woocommerce-result-count").wrap(" <div class='category-toolbar'> </div>");
    jQuery(".woocommerce-ordering").appendTo(".category-toolbar");
    if (jQuery(window).width() <= 979) {
        jQuery(".header-menu").prependTo(".hdr-menu");  
        jQuery(".searchsec").prependTo(".search-apd");  
    }
    jQuery(".gridlist-toggle").prependTo(".category-toolbar");  
    jQuery( "<div class='single-pro-inner'></div>" ).insertBefore( ".single-product-sidebar .woocommerce-product-gallery" );
    jQuery( ".single-product-sidebar .summary.entry-summary" ).prependTo( ".single-pro-inner" );
    jQuery( ".single-product-sidebar .woocommerce-product-gallery" ).prependTo( ".single-pro-inner" );
    jQuery( "<div class='single-pro-inner'></div>" ).insertBefore( ".single-product-full .woocommerce-product-gallery" );
    jQuery( ".single-product-full .summary.entry-summary" ).prependTo( ".single-pro-inner" );
    jQuery( ".summary.entry-summary" ).appendTo( ".single-pro-inner" );
    jQuery( ".single-product-full .woocommerce-product-gallery" ).prependTo( ".single-pro-inner" );
    jQuery( ".single_img_des" ).appendTo( ".single-product-full .single-pro-inner" );
    jQuery( ".woocommerce .summary .product_meta" ).appendTo( ".single-product-full .single-pro-inner .singles-image" );
    jQuery( ".single-img" ).appendTo( ".single-pro-inner" );
    // jQuery( ".single_pro" ).prependTo( ".single-img" );
    jQuery( ".woocommerce-product-gallery" ).appendTo( ".single-pro-inner" );
    if (jQuery(window).width() <= 979) {
        jQuery(".single_img_des").appendTo(".single-resimg"); 
    }
    jQuery( ".count-down" ).insertAfter( ".entry-summary .price" );
    jQuery(".products .product-category").wrapInner(" <div class='container-inner'> </div>");
    jQuery(".accordion.style5 .single_accordion").each(function(e) { jQuery(this).addClass("accord-" + (e + 1)) });
    jQuery(".quantity.buttons_added").find("input.input-text").attr({ type: "text" });
    jQuery(".home-quantity").find("input.input-text").attr({ type: "text" });
    jQuery(".nav-menu:first > li").each(function(e) {  jQuery(this).addClass("main-li")});
    jQuery("#woo-small-products p img").each(function(e) { jQuery(this).wrap("<div class='image-block'> </div>") });
    
    jQuery(".sub-container .inner-image").each(function(e) {  jQuery(this).addClass("image-" + (e + 1)) });
    jQuery('.singleproduct-sidebar').insertBefore(".woocommerce-tabs");
    jQuery(".widget_product_categories").each(function(e) {  jQuery(this).addClass("home-category")});

    jQuery(".primary-sidebar .widget .widget-title,.content-sidebar .widget .widget-title,.site-footer .widget-title").each(function(e) { jQuery(this).wrap("<div class='title-outer'> </div>") });
    jQuery(".footer-category-list").prependTo(".footer-menu-links");

    

//JS for calling horizontalTab
    jQuery(document).ready(function() {
    "use strict";
    jQuery("#horizontalTab").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: true,
        closed: "accordion",
        activate: function(e) {
            var t = jQuery(this);
            var n = jQuery("#tabInfo");
            var r = jQuery("span", n);
            r.text(t.text());
            n.show()
        }
    })
    });  
    
    (function(e) {
        "use strict";
        var t;
        var n = false;
        var r = e("#to_top");
        var i = e(window);
        var s = e(document.body).children(0).position().top;
        e("#to_top").on( "click",function(t) {
            t.preventDefault();
            e("html, body").animate({
                scrollTop: 0
            }, "slow")
        });
        i.scroll(function() {
            window.clearTimeout(t);
            t = window.setTimeout(function() {
                if (i.scrollTop() <= s) {
                    n = false;
                    r.fadeOut(500)
                } else if (n == false) {
                    n = true;
                    r.stop(true, true).show().on( "click",function() {
                        r.fadeOut(500)
                    })
                }
            }, 100)
        })
    })(jQuery);

    (function(e) {
        "use strict";
        e(".togg div.tog").on('click',function(t) {
            var n = e(this).parent().find(".tab_content");
            e(this).parent().find(".tab_content").not(n).slideUp();
            if (e(this).hasClass("current")) {
                e(this).removeClass("current")
            } else {
                e(this).addClass("current")
            }
            n.stop(false, true).slideToggle().css({
                display: "block"
            });
            t.preventDefault()
        })
    })(jQuery);


    jQuery('.widget_products ul, .widget_recent_reviews ul, .widget_recently_viewed_products ul').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 2,
                    autoplay: true,
                    navigation: true,
                    pagination: false,
                    responsive: [
                        {
                          breakpoint: 768, 
                          settings: {
                            slidesToShow: 2,
                          }
                        },
                        {
                          breakpoint: 576, 
                          settings: {
                            slidesToShow: 1,
                          }
                        },
                        {
                          breakpoint: 320, 
                          settings: {
                            slidesToShow: 1,
                          }
                        }
                      ]
    });

    jQuery('.wp-mega-sub-menu .widget_recent_entries ul').slick({
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    autoplay: true,
                    navigation: true,
                    pagination: false,
                    responsive: [
                    	{
                          breakpoint: 1200, 
                          settings: {
                            slidesToShow: 3,
                          }
                        },
                        {
                          breakpoint: 768, 
                          settings: {
                            slidesToShow: 2,
                          }
                        },
                        {
                          breakpoint: 576, 
                          settings: {
                            slidesToShow: 1,
                          }
                        },
                        {
                          breakpoint: 320, 
                          settings: {
                            slidesToShow: 1,
                          }
                        }
                      ]
    });
    jQuery('.widget_top_rated_products ul').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 2,
                    autoplay: true,
                    navigation: true,
                    pagination: false,
                    responsive: [
                        {
                          breakpoint: 768, 
                          settings: {
                            slidesToShow: 2,
                          }
                        },
                        {
                          breakpoint: 576, 
                          settings: {
                            slidesToShow: 2,
                          }
                        },
                        {
                          breakpoint: 320, 
                          settings: {
                            slidesToShow: 1,
                          }
                        }
                      ]
    });

});
document.createElement("div");
document.createElement("section");
// jQuery(window).load(function() {  "use strict";  isotopAutoSet()});
// jQuery(window).resize(function() { "use strict"; isotopAutoSet()});
// JS toggle for sidebar and footer
function SidebarFooterToggle(){ 
"use strict";   
jQuery('.primary-sidebar .title-outer,.site-footer .title-outer,.toggle-content .title-outer, .cate-list.title-outer').on( "click",function () {
if(jQuery(this).parent().hasClass('toggled-on')){      
        jQuery(this).parent().removeClass('toggled-on');
        jQuery(this).parent().addClass('toggled-off');
}else {
        jQuery(this).parent().addClass('toggled-on');
        jQuery(this).parent().removeClass('toggled-off');
}
return (false);
});
}
jQuery(document).ready(function() { "use strict";  SidebarFooterToggle()});
// JS for adding treeview in navigationMenu sidebar product category
function leftCatMenu(){
    "use strict";
    jQuery('.primary-sidebar .widget_nav_menu ul li,.primary-sidebar .widget_categories').addClass('treeview-list');
    jQuery(".primary-sidebar .widget_nav_menu.treeview-list,.primary-sidebar .widget_categories .treeview-list").treeview({
        animated: "slow",
        collapsed: true,
        unique: true
    });
    jQuery('.treeview-list a.active').parent().removeClass('expandable');
    jQuery('.treeview-list a.active').parent().addClass('collapsable');
    jQuery('.treeview-list .collapsable ul').css('display','block');

   
}
jQuery(document).ready(function() { "use strict";  leftCatMenu()});
jQuery(document).ready(function(){
if (jQuery(".primary-sidebar ul.product-categories li").hasClass("current-cat-parent")) {   
jQuery('.primary-sidebar .product-categories li.current-cat-parent').removeClass('expandable');
jQuery('.primary-sidebar .product-categories li.current-cat-parent').addClass('collapsable');
jQuery('.primary-sidebar .product-categories li.current-cat-parent > .hitarea').removeClass('expandable-hitarea');
jQuery('.primary-sidebar .product-categories li.current-cat-parent > .hitarea').addClass('collapsable-hitarea');
}
});
// JS for adding treeview in Mobile Menu
function mobilenavigationMenu() {
    "use strict";
    jQuery('.mobile-menu .mobile-menu-inner').addClass('treeview-list');
    jQuery(".mobile-menu .mobile-menu-inner.treeview-list").treeview({
        animated: "slow",
        collapsed: true,
        unique: true
    });
}
jQuery(window).load(function() { "use strict";  mobilenavigationMenu()});
// JS for treeview for sidebar product category,widget category
function navigationMenu(){
    "use strict";
    jQuery('.widget_nav_menu,.widget_categories').addClass('treeview-list');
    jQuery(".widget_nav_menu.treeview-list,.widget_categories.treeview-list").treeview({
        animated: "slow",
        collapsed: true,
        unique: true        
    });
    jQuery('.treeview-list a.active').parent().removeClass('expandable');
    jQuery('.treeview-list a.active').parent().addClass('collapsable');
    jQuery('.treeview-list .collapsable ul').css('display','block');
}
jQuery(window).load(function() {
    "use strict";
    navigationMenu()
});
// JS for treeview for sidebar page list
function leftPageMenu(){
    "use strict";
    jQuery("#secondary .widget_pages ul").addClass('page-list');
    jQuery("#secondary .widget_pages ul.page-list").treeview({
        animated: "slow",
        collapsed: true,
        unique: true        
    });
}
jQuery(window).load(function() { "use strict";  leftPageMenu()});
// JS for calling Owl Carousel
jQuery(window).load(function() {
    "use strict";  
    jQuery('.aboutus .slides').owlCarousel({    
        items: 1,
        autoPlay: 5000,
        singleItem: true,
        navigation: false,
        pagination: true,
        transitionStyle: 'fade'
  });
        jQuery('.banner-slider-container .slides').owlCarousel({    
        items: 1,
        autoPlay: 3000,
        singleItem: true,
        navigation: false,
        pagination: true,
        transitionStyle: 'fade'
  });
});
    
// JS for move the cross sale section   
function preloadFunc(){
    "use strict";
    jQuery(".product_list_widget li:last-child").addClass("last");  
}
jQuery(document).ready(function() { "use strict";  preloadFunc();});
// JS for adding active class in Mobile Menu
function mobileMenu(){  
"use strict";
    if (jQuery(window).width() < 768){
            jQuery('.mega-menu .mega').attr('id', 'menu-menu');
            jQuery('#menu-all-pages').removeClass('mega');      
            jQuery('.mega-menu > ul').removeClass('mega');                  
    }else {
        jQuery('.mega-menu .mega > ul').addClass('mega');
        jQuery('.mega-menu .mega > ul').attr('id', 'menu-menu');
    }
        if (jQuery(window).width() < 768){
            jQuery('#menu-header-custom-links-links').addClass('treeview-list');
            jQuery("#menu-header-custom-links-links.treeview-list").treeview({
                animated: "slow",
                collapsed: true,
                unique: true        
            });
    }
    
    jQuery(".nav-top").addClass('toggled-on');       
    jQuery('.menu-toggle').on( "click", function(){
            if ( jQuery(this).parent().hasClass('active') ) {           
                jQuery(this).parent().removeClass('active');                
            } else {
            jQuery('.menu-toggle').parent().removeClass('active');
                    jQuery(this).parent().addClass('active');                    
            }
        });
    jQuery('.close-menu').on( "click", function(){
        if ( jQuery(this).parent().parent().hasClass('active') ) {          
                jQuery(this).parent().parent().removeClass('active');               
            } else {                                
            jQuery('.close-menu').parent().parent().removeClass('active');
                    jQuery(this).parent().parent().addClass('active');                   
        }
    });
}
jQuery(document).ready(function() { "use strict"; mobileMenu();});



jQuery(document).ready(function () {
    var max_elem = 10;

    if(jQuery(window).width() <=1599){ max_elem = 8;}
    if(jQuery(window).width() <=1350){ max_elem = 7;}
    if(jQuery(window).width() <=1199){ max_elem = 5;}

    var itemstop = jQuery('.widget_wpmegamenu_widget #wpmm-wrap-megamenu > ul#wpmega-menu-megamenu > li.menu-item');
    if (itemstop.length > max_elem) {
        jQuery('.widget_wpmegamenu_widget #wpmm-wrap-megamenu > ul#wpmega-menu-megamenu').append('<li><div class="more-wrap"><span class="more-view">More Categories</span></div></li>');
    }
    jQuery('.widget_wpmegamenu_widget #wpmm-wrap-megamenu > ul#wpmega-menu-megamenu .more-wrap').on("click", function () {
        if (jQuery(this).hasClass('active')) {
            itemstop.each(function (i) {
                if (i >= max_elem) {
                    jQuery(this).slideUp(600);
                }
            });
            jQuery(this).removeClass('active');
            //$(this).children('div').css('display', 'block');
            jQuery('.more-wrap').html('<span class="more-view">More Categories</span>');
        } else {
            itemstop.each(function (i) {
                if (i >= max_elem) {
                    jQuery(this).slideDown(600);
                }
            });
            jQuery(this).addClass('active');
            jQuery('.more-wrap').html('<span class="more-view">Less Categories</span>');
        }
    });
    itemstop.each(function (i) {
        if (i >= max_elem) {
            jQuery(this).css('display', 'none');
        }
    });
});




// category block
function catmenu()
{
    if (jQuery(window).width() < 980){
        jQuery(document).ready(function(){
                                   
            jQuery('.home-category .product-categories').addClass('treeview-list');
            jQuery(".home-category .treeview-list").treeview({
                animated: "slow",
                collapsed: true,
                unique: true        
            });
            jQuery('.home-category .treeview-list a.active').parent().removeClass('expandable');
            jQuery('.home-category .treeview-list a.active').parent().addClass('collapsable');
            jQuery('.home-category .treeview-list .collapsable ul').css('display','block');
        });
    }
}
jQuery(document).ready(function () {catmenu();});
/*end*/
// JS for adding menu more link in navigation
function moreTab() {
    "use strict";
    var max_elem = 7 ;
    if (jQuery(window).width() > 1024) {
        var max_elem = 7 ;
        jQuery('#site-navigation').addClass('more');
        jQuery('#site-navigation.more .mega > li').first().addClass('home_first');
        var items = jQuery('#site-navigation.more .mega > li');
        var surplus = items.slice(max_elem, items.length);  
        surplus.wrapAll('<li class="cat-item level-0 hiden_menu cat-parent"><ul class="children">');
        jQuery('.hiden_menu').prepend('<a href="#" class="level-0  activSub">More</a>');    
    }   
    if ((jQuery(window).width() >= 768) && (jQuery(window).width() <= 1024)) {  
        var max_elem = 6 ;
        jQuery('#site-navigation').addClass('more');
        jQuery('#site-navigation.more .mega > li').first().addClass('home_first');
        var items = jQuery('#site-navigation.more .mega > li');
        var surplus = items.slice(max_elem, items.length);  
        surplus.wrapAll('<li class="cat-item level-0 hiden_menu cat-parent"><ul class="children">');
        jQuery('.hiden_menu').prepend('<a href="#" class="level-0  activSub">More</a>');    
    }   
    
}
jQuery(document).ready(function() {"use strict";  moreTab()});


jQuery(document).ready(function() {
    "use strict"; 
    var j = 1;                          
    jQuery("ul.product-categories > .cat-item").each(function(i){
       jQuery(this).addClass("cat-item-"+j);
       j = j + 1;  if(j==17) {j=1; }
     });
});
// JS for Sticky Header
function StickyHeader(){    
    "use strict";  
        jQuery(window).on('scroll', function () {
            if (jQuery(window).scrollTop() > 50) {
                jQuery('.header-fix .header-bottom').addClass('sticky-menu');
            } else {
                jQuery('.header-fix .header-bottom').removeClass('sticky-menu'); 
            }
        })
}
jQuery(document).ready(function() { "use strict";   StickyHeader()});
jQuery(window).resize(function() {  "use strict";   StickyHeader()});
// JS for calling account toggle,top bar link toggle and responsive menu toggle
jQuery(document).ready(function() {
    "use strict";
    jQuery('.account-toggle').on('click',function(){
        jQuery(".account-container").slideToggle("medium");             
    });
    jQuery('.topbar-link').on('click',function(){
        jQuery(".topbar-link-wrapper").slideToggle("medium");                
    }); 
});
// JS for home accordian shortcode
jQuery(document).ready(function() {
    "use strict";
    jQuery('#accordion.style-1').find('.accordion-toggle').on( "click",function(){  
      //Expand or collapse this panel
      jQuery(this).next().slideToggle('fast');    
      //Hide the other panels
      jQuery(".style-1 .accordion-content").not(jQuery(this).next()).slideUp('fast');
    });
});
/*JS for Sidebar Category block*/
jQuery(".hiden_menu a").on( "click",function() { 
     jQuery(".hiden_menu ul").slideToggle("slow");
});

jQuery(window).load(function() {
    "use strict";
   
    jQuery(".products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function(i){
        jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
    });    
    jQuery(".products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function(i){
        jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
    });
    jQuery(".products .container-inner").find(".br_compare_button ").each(function(i){
        jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
    });
    jQuery(".products .container-inner").find(".yith-wcqv-button").each(function(i){
        jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
    });
    jQuery(".products .container-inner").find(".onsale").each(function(i){
        jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
    });
});


// add to cart button added
jQuery(document).ready(function() {
"use strict";                   
jQuery(".add_to_cart_button").on( "click",function() {
         var rows = jQuery(".pro-btn .add_to_cart_button");
          setTimeout(function() {
         rows.removeClass("added");
   },6000);
    });
});
// JS for calling account toggle,top bar link toggle and responsive menu toggle
jQuery(document).ready(function () {
    "use strict";
    jQuery(".header-toggle").on("click", function () {
        jQuery('.search-overlay .search-field').attr('autofocus', 'autofocus').focus();
    });
});

// JS for quantity 
jQuery(document).ready(function(){
   "use strict";                            
   jQuery('.quantity').on('click', '.plus', function(e) {
        var input = jQuery(this).prev('input.qty');
        var val = parseInt(input.val());
        var step = input.attr('step');
        step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
        input.val( val + step ).change();
    });
    jQuery('.quantity').on('click', '.minus', 
        function(e) {
        var input = jQuery(this).next('input.qty');
        var val = parseInt(input.val());
        var step = input.attr('step');
        step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
        if (val > 0) {
            input.val( val - step ).change();
        } 
    });
});

jQuery(document).ready(function(){
    "use strict";                            
    jQuery('.home-quantity').on('click', '.plus', function(e) {
         var input = jQuery(this).prev('input.home-qty');
         var val = parseInt(input.val());
         var step = input.attr('step');
         step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
         input.val( val + step ).change();
     });
     jQuery('.home-quantity').on('click', '.minus', 
         function(e) {
         var input = jQuery(this).next('input.home-qty');
         var val = parseInt(input.val());
         var step = input.attr('step');
         step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
         if (val > 0) {
             input.val( val - step ).change();
         } 
     });
 });


jQuery(document).ready(function() {
    "use strict"; 
   jQuery(document).on('click', '.category-list .widget-title', function() {
       jQuery(".menu-foomenu1-container").toggleClass('wb-active');
   });

   jQuery(document).on('click', '.footer-category-list .title-outer', function() {
       jQuery(".menu-foomenu2-container").toggleClass('wb-active');
   });
   
});

jQuery(document).ready(function() {
 "use strict"; 
jQuery(".normal-title h1").html(function(){
  var text= jQuery(this).text().trim().split(" ");
  var first = text.shift();
  return (text.length > 0 ? "<span class='colour'>"+ first + "</span> " : first) + text.join(" ");
});

jQuery( ".cart-collaterals .cross-sells" ).appendTo( ".woocommerce .cart-page" ); 

});


jQuery(document).ready(function(){
    jQuery('.closeButton').on('click', function(e) {
        jQuery(".topbar-outer").slideToggle('slow');
    });
});

// single page testimonial js 
jQuery(document).ready(function() {
    jQuery('.testimonial-slider').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        vertical: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '120px',
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright"></use></svg>'],
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: '74px'
                }
              },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '0',
                vertical: false,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '0',
                  vertical: false,
                }
            }
        ]
    });

// home page counter    
jQuery('.add').click(function () {   
    var th = jQuery(this).closest('.home-quantity').find('.count');     
    th.val(+th.val() + 1);
    });
    jQuery('.sub').click(function () {
    var th = jQuery(this).closest('.home-quantity').find('.count');     
      if (th.val() > 1) th.val(+th.val() - 1);
    });
}); 




