$(document).ready(function(){
	$(".header p").css("cursor","pointer");
	$(".home").addClass("active");
	$(".home_block").addClass("display_inline");

});

function pageStart()
{
	$(document).ready(function(){
		$(".circle_H").fadeIn(200,function(){
			$(".circle_I").fadeIn(195,function(){
				$(".circle_A").fadeIn(190,function(){
					$(".circle_P").fadeIn(185,function(){
						$(".circle_small_1_white").fadeIn(175,function(){
							$(".circle_small_2_white").fadeIn(165,function(){
								$(".circle_small_3_white").fadeIn(155,function(){
									$(".circle_small_4_white").fadeIn(145,function(){
										$(".circle_small_5_white").fadeIn(135,function(){
											$(".circle_big_white").fadeIn(300);
											$(".right_block").fadeIn(0,function(){
												$(".right_block_text").slideDown(180,function(){
													$(".right_block_photo").slideDown(120);
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
};








