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