function pageStart_first()
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

function pageStart_other()
{
	$(document).ready(function(){
		$(".circle_H").show(0);
		$(".circle_I").show(0);
		$(".circle_A").show(0);
		$(".circle_P").show(0);
		$(".circle_small_1_white").show(0);
		$(".circle_small_2_white").show(0);
		$(".circle_small_3_white").show(0);
		$(".circle_small_4_white").show(0);
		$(".circle_small_5_white").show(0);
		$(".circle_big_white").show(0);
		$(".right_block").show(0);
		$(".right_block_text").show(0);
		$(".right_block_photo").show(0);
	});
};







