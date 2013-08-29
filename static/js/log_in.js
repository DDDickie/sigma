function openme(){
	$(document).ready(function(){
		$(".login_div1").css("display","block");
		$(".login_div2").css("display","block");
	});
}
function closeme(){
	$(document).ready(function(){
		$(".login_div1").css("display","none");
		$(".login_div2").css("display","none");
	});
}

function log_in(){
	var judge=false;
	$(document).ready(function(){
		var username_length=$(".login_username").val().length;
		var password_length=$(".login_password").val().length;
		if(username_length==0&&password_length>0)
			alert("请输入用户名");
		else if(username_length>0&&password_length==0)
				alert("请输入密码");
			else if(username_length==0&&password_length==0)
					alert("请输入用户名和密码");
				else 
					{
						judge=true;
						closeme();
					}
	});
	return judge;
}

$(document).ready(function(){
	$(".login_x").click(function(){
		closeme();
	});
});

$(document).ready(function(){
	$(".login_menu").click(function(){
		openme();
	});
});

$(document).ready(function(){
	$(".login_exit_button").click(function(){
		closeme();
	});
});
