/**
 * Initialise le filter list
 */
$.fn.collapsable = function (collapsed) {
		
	return this.each(function() {
		
		let collapser = $(this);
		collapser.addClass('plugin_collapsable_collapser');
		collapser.addClass('plugin_collapsable_notcollapsed');
		
		collapser.click(() => {
			
			if (collapser.hasClass('plugin_collapsable_notcollapsed')) {
				collapser.removeClass('plugin_collapsable_notcollapsed');
				collapser.addClass('plugin_collapsable_collapsed');
				$(collapsed).hide();
			} else {
				collapser.removeClass('plugin_collapsable_collapsed');
				collapser.addClass('plugin_collapsable_notcollapsed');
				$(collapsed).show();
			}
		});
	});
}