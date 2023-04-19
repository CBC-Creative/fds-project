if (jQuery(window).width() >= 992) {
 
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

    $( document ).ready(function() {
      setHeightsunscribeform();
    });
	jQuery(window).resize(function() {
		setHeightsunscribeform();
	});
}