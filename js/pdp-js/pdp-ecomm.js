    
    $('.product-image-list img').click(function(){
        var selectedPath = $(this).attr("src");

        $('.product-banner-image  img').attr('src', selectedPath);
 });