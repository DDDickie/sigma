$(document).ready(function(){
	$(".header p").css("cursor","pointer");
	$(".home").css("cursor","default");
	$(".home").addClass("menu_pointer");
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
											$("#right_block").fadeIn(0,function(){
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

//left_block detail show
$(document).ready(function(){
	$("#H").mouseover(function(){
		if(!$("#detail_1_H").is(":animated")){
			$("#detail_1_H").animate({width:"show"},200,function(){
				$("#detail_2_H").slideDown(150);
				$(this).children("p").fadeIn(150);
				
			});
		}
	});
});

$(document).ready(function(){
		$("#H").mouseout(function(){
			if($("#detail_1_H").is(":animated")) 
				$("#detail_1_H").stop(false,true);
			if($("#detail_2_H").is(":animated")) 
				$("#detail_2_H").stop(false,true);
			$("#detail_1_H").css("display","none");
			$("#detail_2_H").css("display","none");
			$("#detail_1_H").children("p").css("display","none");
		});
});


$(document).ready(function(){
		$("#I").mouseover(function(){
			if(!$("#detail_1_I").is(":animated")){
				$("#detail_1_I").animate({width:"show"},200,function(){
				$("#detail_2_I").slideDown(150);
				$(this).children("p").fadeIn(150);
				});
			}
		});
});

$(document).ready(function(){
	$("#I").mouseout(function(){
			if($("#detail_1_I").is(":animated")) 
				$("#detail_1_I").stop(false,true);
			if($("#detail_2_I").is(":animated")) 
				$("#detail_2_I").stop(false,true);
			$("#detail_1_I").css("display","none");
			$("#detail_2_I").css("display","none");
			$("#detail_1_I").children("p").css("display","none");
	});
});


$(document).ready(function(){
	$("#A").mouseover(function(){
		if(!$("#detail_1_A").is(":animated")){
			$("#detail_1_A").animate({width:"show"},200,function(){
				$("#detail_2_A").slideDown(80);
				$(this).children("p").fadeIn(150);
			});
		}
	});
});

$(document).ready(function(){
	$("#A").mouseout(function(){
			if($("#detail_1_A").is(":animated")) 
				$("#detail_1_A").stop(false,true);
			if($("#detail_2_A").is(":animated")) 
				$("#detail_2_A").stop(false,true);
			$("#detail_1_A").css("display","none");
			$("#detail_2_A").css("display","none");
			$("#detail_1_A").children("p").css("display","none");
	});
});


$(document).ready(function(){
	$("#P").mouseover(function(){
		if(!$("#detail_1_P").is(":animated")){
			$("#detail_1_P").animate({width:"show"},200,function(){
				$("#detail_2_P").slideDown(80);
				$(this).children("p").fadeIn(150);
			});
		}
	});
});

$(document).ready(function(){
	$("#P").mouseout(function(){
			if($("#detail_1_P").is(":animated")) 
				$("#detail_1_P").stop(false,true);
			if($("#detail_2_P").is(":animated")) 
				$("#detail_2_P").stop(false,true);
			$("#detail_1_P").css("display","none");
			$("#detail_2_P").css("display","none");
			$("#detail_1_P").children("p").css("display","none");	});
});






