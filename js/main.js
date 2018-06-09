jQuery(document).ready(function($){
	$('#nav').slicknav();
	$("#responsive-video").fitVids();
	$(".client_crousel").owlCarousel({
		items: 6,
		itemsDesktop: [1199,6],
		itemsDesktopSmall: [991,4],
		pagination: false,
		theme: "rrf-angle-only",
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
	$(".testimonial_list").owlCarousel({
		singleItem: true,
		pagination: true,
		theme: "rrf-angle-paged",
		autoPlay :	true
	});
});
