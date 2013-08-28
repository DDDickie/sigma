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

function logo_in(){
	myform.action="{{ url_for('login') }}"
	myform.submit()
	closeme();
}

$(document).ready(function(){
	$(".login_x").click(function(){
		closeme();
	});
});

$(document).ready(function(){
	$(".log_in").click(function(){
		openme();
	});
});
