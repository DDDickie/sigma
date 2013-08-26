$(document).ready(function(){
	$(".home").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("menu_pointer");
		$(".home").addClass("menu_pointer");
		$(".every_block").removeClass("display_inline");
		$(".home_block").addClass("display_inline");
	});
	$(".download").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("menu_pointer");
		$(".download").addClass("menu_pointer");
		$(".every_block").removeClass("display_inline");
		$(".download_block").addClass("display_inline");
	});

	$(".outsource").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("menu_pointer");
		$(".outsource").addClass("menu_pointer");
		$(".every_block").removeClass("display_inline");
		$(".outsource_block").addClass("display_inline");
	});

	$(".recruit").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("menu_pointer");
		$(".recruit").addClass("menu_pointer");
		$(".every_block").removeClass("display_inline");
		$(".recruit_block").addClass("display_inline");
	});
});	