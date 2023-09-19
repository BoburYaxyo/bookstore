(function ($) {
    "use strict";

    /* workdo WT Product */
    var wt_product = function ($scope, n) {

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        var $_this = $scope.find('.wt-product-slider');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider');

        if ($slider == 'slider') {

            jQuery($currentID + " #woo-products .woo-carousel").each(function () {
                if (n(this).attr("id")) {

                    jQuery(this).find("ul.products").addClass("owl-carousel");
                    jQuery(this).find("ul.products").owlCarousel({
                        nav: false,
                        dots: false,
                        autoPlay: 3000,
                        navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                        responsive: {
                            0: {
                                items: 1,
                            },
                            449: {
                                items: 1,
                            },
                            641: {
                                items: 1,
                            },
                            768: {
                                items: 2,
                            },
                            980: {
                                items: 2,
                            },
                            1200: {
                                items: 3,
                            },
                            1600: {
                                items: $pagePerView,
                            }
                        }
                    });
                }
            });

        }
        jQuery($currentID + " #woo-products .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });

    }

    /* workdo accordion */
    var wt_accordion = function ($scope) {

        var $_this = $scope.find('.wt-accordion-main');
        var $currentID = '#' + $_this.attr('id');

        jQuery($currentID + " .wt-accordion.toggle").click(function () {

            //change icon
            jQuery(this).find(".tog").toggleClass('current');
            //slide show hide
            jQuery(this).find(".tab_content").slideToggle();

        });
    }

    /* winter woo category slider */
    var wt_woo_category_slider = function ($scope) {

        var $_this = $scope.find('.woo_categories_slider');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view');

        jQuery(".category-slick").addClass("woo-slick");
        jQuery($currentID + " .category-slick").slick({
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    vertical: true,
                    verticalSwiping: true,
                    arrows: true,
                    pagination: false,
                    centerMode: false,
                    infinite: true,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    responsive: [
                        {
                            breakpoint: 1380,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 4,
                                vertical: false
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                vertical: false
                            }
                        },
                        {
                            breakpoint: 460,
                            settings: {
                                slidesToShow: 3,
                                vertical: false
                            }
                        },
                        {
                            breakpoint: 425,
                            settings: {
                                slidesToShow: 2,
                                vertical: false
                            }
                        }
                    ]
        })

    }

    /* workdo blogs slider */
    var wt_blogslider = function ($scope) {

        var $_this = $scope.find('.blog-widget');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $dataSlider = $_this.data('slider');


        if ($dataSlider == 'slider') {
            jQuery(".blog-carousel").addClass("owl-carousel");

            jQuery($currentID + " .blog-carousel").owlCarousel({
                nav: true,
                dots: false,
                autoPlay: 3000,
                navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    767: {
                        items: 2,
                    },
                    980: {
                        items: 3,
                    },
                    1200: {
                        items: 3,
                    },
                    1600: {
                        items: $pagePerView,
                    }
                }

            })
        }

    }

    /* workdo testimonial */
    var wt_testimonial = function ($scope, n) {

        var $_this = $scope.find('.custom-testimonial');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view');

        n($currentID + " .testimonial-carousel").addClass("owl-carousel");
        n($currentID + " .testimonial-carousel").owlCarousel({
            nav:  true,
            dots: false,
            autoPlay: false,
            navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 3,
                },
                1350: {
                    items: $pagePerView,
                },
                1600: {
                    items: $pagePerView,
                }
            }

        })

    }

    /* workdo best selling product */
    var wt_best_selling_product = function ($scope, n) {

        var $_this = $scope.find('.best-selling-product');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider');

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        if ($slider == 'slider') {

            jQuery($currentID + " #woo-products .woo-slick.best_sell").each(function () {
                if (n(this).attr("id")) {
                    var e = n(this).attr("id").replace("_woo_slick", "");
                    var t = n(this).find("ul.products .product").length;
                    if (t > e) {
                        jQuery(this).find("ul.products").addClass("slick");
                    jQuery($currentID + " ul.products").slick({
                    infinite: false,
					autoplay: false,
    				autoplaySpeed: 2000,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 5,
                    rows: 1,
                    arrows: true,
                    pagination: false,
                    infinite: true,
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 1350,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 641,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 449,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
                    }
                }
            });
        }

        jQuery($currentID + " .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });
    }

    /* workdo WT Product Two Row */
    var wt_vertical_product = function ($scope) {

        var $_this = $scope.find('.product-two-row');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider'),
            $itemView = $_this.data('view-product');

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        if ($slider == 'slider') {
            jQuery($currentID + " #woo-products-var .woo-slick.two_row").each(function () {
                jQuery(this).find("ul.products").addClass("slick");
                jQuery($currentID + " ul.products").slick({
                    infinite: false,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    arrows: true,
                    pagination: false,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 425,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            });
        } else if ($slider == 'grid') {
            jQuery($currentID + ' .products li').hide();
            jQuery($currentID + ' .products li:lt(' + $itemView + ')').show();

            jQuery($currentID + ' button.woocount.loadgridlist ').on('click', function () {
                jQuery($currentID + ' .products li').show();
                jQuery(this).hide();
            });
        }
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });
    }

    /* workdo WT Product Two Row first */
    var wt_first_vertical_product = function ($scope) {

        var $_this = $scope.find('.product-two-row');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider'),
            $itemView = $_this.data('view-product');

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        if ($slider == 'slider') {
            jQuery($currentID + " #woo-products-var .woo-slick.two_row_first").each(function () {
                jQuery(this).find("ul.products").addClass("slick");
                jQuery($currentID + " ul.products").slick({
                    infinite: false,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    arrows: true,
                    pagination: false,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 449,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            });
        } else if ($slider == 'grid') {
            jQuery($currentID + ' .products li').hide();
            jQuery($currentID + ' .products li:lt(' + $itemView + ')').show();

            jQuery($currentID + ' button.woocount.loadgridlist ').on('click', function () {
                jQuery($currentID + ' .products li').show();
                jQuery(this).hide();
            });
        }
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });
    }

    /* workdo WT Product Two Row Second */
    var wt_second_vertical_product = function ($scope) {

        var $_this = $scope.find('.product-two-row');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider'),
            $itemView = $_this.data('view-product');

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        if ($slider == 'slider') {
            jQuery($currentID + " #woo-products-var .woo-slick.two_row_second").each(function () {
                jQuery(this).find("ul.products").addClass("slick");
                jQuery($currentID + " ul.products").slick({
                    infinite: false,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    arrows: true,
                    pagination: false,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 650,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 449,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            });
        } else if ($slider == 'grid') {
            jQuery($currentID + ' .products li').hide();
            jQuery($currentID + ' .products li:lt(' + $itemView + ')').show();

            jQuery($currentID + ' button.woocount.loadgridlist ').on('click', function () {
                jQuery($currentID + ' .products li').show();
                jQuery(this).hide();
            });
        }
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });
    }

    /* workdo Top Rated Product */
    var wt_top_rated_product = function ($scope, n) {

        var $_this = $scope.find('.top-rated-product');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider');

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        if ($slider == 'slider') {

            jQuery($currentID + " #woo-products .woo-slick.top-rat").each(function () {
                if (n(this).attr("id")) {
                    jQuery(this).find("ul.products").addClass("slick");
                    jQuery($currentID + " ul.products").slick({
                    infinite: false,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: $pagePerView,
                    rows: 1,
                    arrows: false,
                    pagination: false,
                    infinite: true,
                    arrows: true,
                    dots:false,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 650,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 449,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
                }
            });

        }

        jQuery($currentID + " #woo-products .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });
    }

    /* workdo product category tab */
    var wt_product_category_tab = function ($scope, n) {

        var $_this = $scope.find('.product-category-tab');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $slider = $_this.data('slider');

        //hide loader
        var delay = 300; //1 second
        setTimeout(function () {
            jQuery(".woocommerce ul.products li .product-loading").hide();
        }, delay);

        if ($slider == 'slider') {

            jQuery($currentID).each(function () {

                n(this).find("ul.products").addClass("slick");
                n(this).find("ul.products").slick({
                    infinite: false,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 2,
                    arrows: true,
                    pagination: false,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 650,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 449,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                })
            });
        }

        // this scripts for cart button
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".br_compare_button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".yith-wcqv-button").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
        });
        jQuery($currentID + " #woo-products-var .products .container-inner").find(".onsale").each(function (i) {
            jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
        });

        jQuery($currentID + " #categorytab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: true,
            closed: "accordion",
            activate: function (e) {
                var t = jQuery(this);
                var n = jQuery("#tabInfo");
                var r = jQuery("span", n);
                r.text(t.text());
                n.show()
            }
        })
    }


    /* workdo hot product */
    var wt_hot_product = function ($scope) {

        var $_this = $scope.find('.wt-hot-products');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view');

        jQuery($currentID + " .home-featured-carousel").addClass("owl-carousel");
        jQuery($currentID + ' .home-featured-carousel.owl-carousel').owlCarousel({
            //loop: true,
            items: 2,
            margin: 0,
            mouseDrag: true,
            touchDrag: false,
            nav: true,
            dots: false,
            navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                980: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
                1600: {
                    items: $pagePerView,
                }
            },
            afterAction: function (el) {
                this.$owlItems.removeClass('active');
                this.$owlItems.eq(this.currentItem + 1).addClass('active');
            }
        });

        jQuery($currentID + ' .countbox.hastime').each(function () {
            var countTime = jQuery(this).attr('data-time');
            jQuery(this).countdown(countTime, function (event) {
                jQuery(this).html(
                    '<span class="timebox day"><span class="timebox-inner"><strong>' + event.strftime('%D') + '</strong></span><span class="time day">days</span></span><span class="timebox hour"><span class="timebox-inner"><strong>' + event.strftime('%H') + '</strong></span><span class="time hour">hours</span></span><span class="timebox minute"><span class="timebox-inner"><strong>' + event.strftime('%M') + '</strong></span><span class="time min">mins</span></span><span class="timebox second"><span class="timebox-inner"><strong>' + event.strftime('%S') + '</strong></span><span class="time sec">secs</span></span>'
                );
            });
        });
    }

    /* workdo Product With Tab */
    var wt_product_with_tab = function ($scope, n) {

        var $_this = $scope.find('.product-with-tab');
        var $currentID = '#' + $_this.attr('id'),
            $pagePerView = $_this.data('page-per-view'),
            $productSelectedTab = $_this.data('tab'),
            $slider = $_this.data('slider');

        //hide loader
        var delay = 1000; //1 second
        setTimeout(function () {
            jQuery("ul.products li span.product-loading").hide();
        }, delay);

        if ($productSelectedTab != 0) {

            if ($slider == 'slider') {
                jQuery($currentID + " .woo-products-tabs .woo-carousel.best_sell ul.products").addClass("slick");
                jQuery($currentID + " .woo-products-tabs .woo-carousel.best_sell ul.products").slick({
                    infinite: false,
                    slidesToShow: $pagePerView,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    arrows: true,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    pagination: false,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 980,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 650,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 449,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            }

            jQuery($currentID + " .products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function (i) {
                jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
            });
            jQuery($currentID + " .products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function (i) {
                jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".wishlist-btn"));
            });
            jQuery($currentID + " .products .container-inner").find(".br_compare_button").each(function (i) {
                jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
            });
            jQuery($currentID + " .products .container-inner").find(".yith-wcqv-button").each(function (i) {
                jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
            });
            jQuery($currentID + " .products .container-inner").find(".onsale").each(function (i) {
                jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
            });

            //default filter
            jQuery($currentID + ".product-with-tab .product-tab-filter ul li:first-child").addClass('active');
            jQuery($currentID + ".product-with-tab .filter-div").hide();
            jQuery($currentID + ".product-with-tab .filter-div:first-child").show();

            //product filter tab list on click
            jQuery($currentID + ".product-with-tab .product-tab-filter ul li").on('click', function () {
                if (jQuery(this).hasClass("active") != true) {

                    // remove class active on filter list
                    jQuery($currentID + ".product-with-tab .product-tab-filter ul li").removeClass('active');

                    // add class active on click
                    jQuery(this).addClass('active');

                    //hide all product div
                    jQuery($currentID + ".product-with-tab .filter-div").hide();

                    //show related product div only
                    var clickTabText = jQuery(this).text(),
                        clickTabTextSet = clickTabText.replace(" ", "-").toLowerCase(),
                        showDiv = '.' + clickTabTextSet + '-main';
                    jQuery($currentID + ' ' + showDiv).show();

                    //on filter refresh slick function
                    jQuery($currentID + " .woo-products-tabs .woo-carousel.best_sell ul.products").slick("refresh");
                }
            });
        }

    }

    

    /* Elementor init Script call */
    $(window).on('elementor/frontend/init', function () {

        /* product Slider */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_product.default', wt_product);

        /* accordion */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_accordion.default', wt_accordion);

        /* woo category slider */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_woo_category_slider.default', wt_woo_category_slider);

        /* woo blog slider */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_blogs.default', wt_blogslider);

        /* workdo testimonial */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_testimonial.default', wt_testimonial);

        /* workdo best selling product */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_best_selling_product.default', wt_best_selling_product);

        /* workdo Product Two Row */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_vertical_product.default', wt_vertical_product);

        /* workdo Product Two Row */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_first_vertical_product.default', wt_first_vertical_product);

        /* workdo Product Two Row */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_second_vertical_product.default', wt_second_vertical_product);

        /* workdo Top Rated Product */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_top_rated_product.default', wt_top_rated_product);

        /* workdo product category tab */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_product_category_tab.default', wt_product_category_tab);

        /* workdo hot product */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_hot_product.default', wt_hot_product);

        /* workdo Product With Tab */
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_product_with_tab.default', wt_product_with_tab);

    });

})(jQuery);


jQuery(document).ready(function(){
    jQuery(function(){
        jQuery('.left_column.home-featured-carousel').addClass('owl-carousel');
        jQuery('.left_column.home-featured-carousel').owlCarousel({
                    nav: true,
                    items: 1,
                    dots: false,
                   navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    autoPlay: 3000,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        768: {
                            items: 1,
                        }
                    }  
        });  
    });

   jQuery(function(){
        jQuery('.blog-carousel.left_blog').addClass('owl-carousel');
        jQuery('.blog-carousel.left_blog').owlCarousel({
                    nav: true,
                    items: 1,
                    dots: false,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    autoPlay: 3000,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        768: {
                            items: 1,
                        }
                    }  
        });  
    });

   jQuery(function(){
        jQuery('.testimonial-carousel.left_testi').addClass('owl-carousel');
        jQuery('.testimonial-carousel.left_testi').owlCarousel({
                    nav:  true,
                    items: 1,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    dots: false,
                    autoPlay: 3000,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        576: {
                            items: 2,
                        },
                        768: {
                            items: 2    ,
                        }
                    }  
        });  
    });


   jQuery(function(){
        jQuery('.upsells ul.products').addClass('owl-carousel');
        jQuery('.upsells ul.products').owlCarousel({
                    nav: true,
                    items: 1,
                    dots: false,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    autoPlay: 3000,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        425: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        },
                        980: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        },
                        1351: {
                            items: 4,
                        }
                    }  
        });  
    });

   jQuery(function(){
        jQuery('.related ul.products').addClass('owl-carousel');
        jQuery('.related ul.products').owlCarousel({
                    nav: true,
                    items: 1,
                    dots: false,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    autoPlay: 3000,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        425: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        },
                        980: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        },
                        1351: {
                            items: 4,
                        }
                    }  
        });  
    });


    jQuery(function(){
        jQuery('.cross-sells ul.products').addClass('owl-carousel');
        jQuery('.cross-sells ul.products').owlCarousel({
                    nav: true,
                    items: 1,
                    dots: false,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    autoPlay: 3000,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        425: {
                            items: 2,
                        },
                        641: {
                            items: 3,
                        },
                        768: {
                            items: 3,
                        },
                        980: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        },
                        1351: {
                            items: 4,
                        }
                    }  
        });  
    });

    jQuery(function(){
        jQuery('.product .flex-control-thumbs').addClass('owl-carousel');
        jQuery('.product .flex-control-thumbs').owlCarousel({
                    nav: false,
                    items: 4,
                    dots: false,
                    navText: ['<svg><use xlink:href="#arleft"></use></svg>', '<svg><use xlink:href="#arright">'],
                    autoplay:false,
                    loop:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true,
                    mouseDrag: false,
                    touchDrag: false,
                    pullDrag: false,
                    rewind: true,
                    responsive: {
                        0: {
                            items: 3,
                        },
                        576: {
                            items: 4,
                        },
                        768: {
                            items: 4,
                        },
                        980: {
                            items: 4,
                        },
                        1200: {
                            items: 5,
                        },
                        1600: {
                            items: 5,
                        }
                    }  
        });  
    });

    // jQuery(".products .container-inner").find(".ajax_add_to_cart,.product_type_external,.product_type_grouped,.product_type_simple,.product_type_variable").each(function(i){
    //     jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".pro-btn"));
    // });    
    // jQuery(".products .container-inner").find(".yith-wcwl-add-to-wishlist").each(function(i){
    //     jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
    // });
    // jQuery(".products .container-inner").find(".br_compare_button ").each(function(i){
    //     jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
    // });
    // jQuery(".products .container-inner").find(".yith-wcqv-button").each(function(i){
    //     jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".product-block-hover"));
    // });
    // jQuery(".products .container-inner").find(".onsale").each(function(i){
    //     jQuery(this).appendTo(jQuery(this).parent().parent().parent().find(".image-block"));
    // });




});
