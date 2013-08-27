$(document).ready(function(){
	$(".home").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("active");
		$(".home").addClass("active");
		$(".every_block").removeClass("display_inline");
		$(".home_block").addClass("display_inline");
	});
	$(".download").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("active");
		$(".download").addClass("active");
		$(".every_block").removeClass("display_inline");
		$(".download_block").addClass("display_inline");
	});

	$(".outsource").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("active");
		$(".outsource").addClass("active");
		$(".every_block").removeClass("display_inline");
		$(".outsource_block").addClass("display_inline");
	});

	$(".recruit").click(function(){
		$(".header p").css("cursor","pointer");
		$(".header p").removeClass("active");
		$(".recruit").addClass("active");
		$(".every_block").removeClass("display_inline");
		$(".recruit_block").addClass("display_inline");
	});
});	