jQuery(window).load(function(){jQuery('.sub-menu').before('<span class="mobile_menu_toggle plus">+</span>');jQuery('.sub-menu').before('<span class="mobile_menu_toggle minus">-</span>');jQuery(".sub-menu").hide();jQuery(".mobile_menu_toggle").click(function(){jQuery(this).next().slideToggle('slow');jQuery(this).parent().toggleClass('active-menu');jQuery(this).toggleClass('icon');});});