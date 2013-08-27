var name_right=false;
var stu_id_right=false;
var phone_num_right=false;
var email_right=false;

$(document).ready(function(){
	$(".input_name").blur(function(){
		var name_length=$(".input_name").val().length;
		if(name_length==0) name_right=false;
		else name_right=true;
	});

	$(".input_stu_id").focus(function(){
		$(".student_ID").addClass("display_none");
	});

	$(".input_stu_id").blur(function(){
		var first_u=$(".input_stu_id").val().indexOf("u");
		var first_U=$(".input_stu_id").val().indexOf("U"); 
		var stu_id=$(".input_stu_id").val();
		var id_except_u=stu_id.substring(1);
		var length_id=$(".input_stu_id").val().length;
		if((first_U!=0&&first_u!=0)
			||isNaN(id_except_u)
			||length_id!=10)
		{
			$(".student_ID").removeClass("display_none");
			stu_id_right=false;
		}
		else stu_id_right=true;

	});


	$(".input_phone_num").focus(function(){
		$(".phoneNum").addClass("display_none");
	});

	$(".input_phone_num").blur(function(){
		var length_phone=$(".input_phone_num").val().length;
		if(length_phone!=11||isNaN(length_phone)) 
		{
			$(".phoneNum").removeClass("display_none");
			phone_num_right=false;
		}
		else phone_num_right=true;
	});


	$(".input_email").focus(function(){
		$(".email").addClass("display_none");
	});

	$(".input_email").blur(function(){
		var dot=$(".input_email").val().indexOf(".");
		var at=$(".input_email").val().indexOf("@");
		var email_length=$(".input_email").val().length;
		if(!(at>2&&dot>(at+2)&&email_length>(dot+1)))
		{
			$(".email").removeClass("display_none");
			email_right=false;
		}
		else email_right=true;
	});
});

function form_judge()
{
	if(name_right&&stu_id_right&&phone_num_right&&email_right)
	{
		var judge=confirm("确定要提交相关资料吗？");
		if (judge) return true;
		else return false;
	}
	else 
	{
		alert("请在带*的资料正确填写完成后再提交");
		return false;
	}
}