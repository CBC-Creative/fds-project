if (jQuery(window).width() >= 992) {
  $( document ).ready(function() {
    function setHeightsunscribeform() {
      var maxHeight = -1;
      jQuery('.laminating-box').each(function() {
        maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
      });
      jQuery('.laminating-box').each(function() {
        jQuery(this).height(maxHeight);
      });
    };
    setHeightsunscribeform();
});
	
	jQuery(window).resize(function() {
		setHeightsunscribeform();
	});
}