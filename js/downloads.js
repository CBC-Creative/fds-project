$(".filter-btn-mobile").click(function () {
	$(".mobile-filters").toggleClass("show");
});

$(".list-view-unselected").click(function () {
	//alert(this)
	$(".list-view-unselected").removeClass("active");
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
	} else {
		$(this).addClass("active");
	}
});

var searchfilter = $(".desktop-search-filter-to-get-html").html();
$(".mobile-search-filters").append(searchfilter);

var filterleft = $(".desktop-filters-to-get-html").html();
$(".mobile-filters").append(filterleft);

$(".slider-icons").click(function () {
	var dataName = $(this).attr("data-name");
	sessionStorage.setItem("data-name", dataName);
	window.location.href = "downloads-icon-view.html";
});

$(function () {
	window.myvar = "";
	var getName = sessionStorage.getItem("data-name");
	var checkcheck;
	$(".slider-icons-list").each(function (index) {
		var x = index + 1;
		$(this).addClass("item" + x);
		$(this).attr("data-item-num", index);

		var ListIconAttrValue = $(this).attr("data-name");

		if (ListIconAttrValue == getName) {
			$(this).addClass("active");

			if ($(this).attr("data-item-num") > 6) {
				checkcheck = 1;
			} else {
				checkcheck = 0;
			}
			var activeClass = $(this).attr("class").split(" ");
			var activeItemClass = activeClass[2];
			window.myvar = activeItemClass;
			window.k = $(this);
		}
	});

	if ($(window).width() >= 993) {
		if (checkcheck == 1) {
			$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(6)");
		} else {
			$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(7)");
		}
 } else if($(window).width() >= 521 && $(window).width() <= 992){
	
	if (checkcheck == 1) {
		$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(3)");
	} else {
		$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(4)");
	}
} else if ($(window).width() >= 461 && $(window).width() <= 520){
	
	if (checkcheck == 1) {
		console.log('test521');	
		$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(1)");
	} else {
		$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(2)");
	}
} else{
	if (checkcheck == 1) {
		$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(1)");
	} else {	
		$("." + window.myvar).insertAfter(".slider-icons-list:nth-child(1)");
	}
}	
});
