$(document).ready(function() { 

	(function ($) { 
		$('.products-tab ul.products-tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.products-tab ul.products-tabs li a').click(function (g) { 
			var tab = $(this).closest('.products-tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.products-tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);

});