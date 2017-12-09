
/*====================================页面配置====================================*/
$(function(){
	
	$("#banner").slide({titCell:".hd li",mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:800,interTime:6000,mouseOverStop:false});/** autoPlay:true自动播放*/
	$("#new").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",interTime:50,vis:5,pnLoop:false,trigger:"click"});
	//搜索框
	$("#text").focus(function(){
		$(this).attr('placeholder'," ").css('width','175px');
	})
	$("#text").blur(function(){
		$(this).css('width','132px');
		var myTimer = setTimeout(function(){
			$("#text").attr('placeholder',"搜索");
		},600)
		
	})
	
	//nav
	$(".nav li").mouseenter(function(){
		$(this).children("a").css({"background":"#6a6a6a","color":"#fff"})
		$(this).children("dl").css("display","block");
	})
	$(".nav li").mouseleave(function(){
		$(this).children("a").css({"background":"#fff","color":"#000"})
		$(this).children("dl").css("display","none");
	})
	
	//生成订单页面 
	//出现修改按钮
	$(".d1").mouseenter(function(){
		$(".modify").css("display","block")
	})
	$(".d1").mouseleave(function(){
		$(".modify").css("display","none")
	})
	//弹框
	$("#bomb_receiptInfo").click(function(){
		$(".receiptInfo_bg").css("display","block");
		$(".receiptInfo").css("display","block");
	})
	$(".modify").click(function(){
		$(".receiptInfo_bg").css("display","block");
		$(".receiptInfo").css("display","block");
	})
	//隐藏弹框
	$(".cancel").click(function(){
		$(".receiptInfo_bg").css("display","none");
		$(".receiptInfo").css("display","none");
	})
	$("#close").click(function(){
		$(".receiptInfo_bg").css("display","none");
		$(".receiptInfo").css("display","none");
	})
	//弹出框验证
	$(".save").click(function(){
		var username = $("#username").val();
		var usertel = $("#usertel").val();
		var detailed = $("#detailed").val();
		if(username==""){
			$("#usernameInfo").html("*收货人姓名不能为空");
		}else if(usertel==""){
			$("#usertelInfo").html("*电话不能为空");
		}else if(detailed==""){
			$("#detailedInfo").html("*详细地址不能为空");
		}
	})
	$("#username").blur(function(){
		if($("#username").val()!=""){
			$("#usernameInfo").html(" ");
		}
	})
	$("#usertel").blur(function(){
		if($("#usertel").val()!=""){
			$("#usertelInfo").html(" ");
		}
	})
	$("#detailed").blur(function(){
		if($("#detailed").val()!=""){
			$("#detailedInfo").html(" ");
		}
	})
	//登录页面的验证
	$("#l_but").click(function(){
		var name = $("#l_name").val();
		var password = $("#l_password").val();
		if(name=="" && password==""){
			$("#l_info").html("*请输入用户名 / 密码")
		}else if(name==""){
			$("#l_info").html("*请输入用户名 ")
		}else if(password==""){
			$("#l_info").html("*请输入密码 ")
		}
	});
	$("#l_name").focus(function(){
		$("#l_info").html(" ");
	});
	$("#l_password").focus(function(){
		$("#l_info").html(" ");
	});
	//注册页面
		//验证手机号
	$("#r_tel").blur(function(){
		var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
		var r_tel = $("#r_tel").val();
		if(r_tel==""){
			$("#r_tel_info").html("*请输入手机号")
		}else if(!reg.test(r_tel)){
			$("#r_tel_info").html("*手机号格式不正确")
		}else{
			$("#r_tel_info").hide()
		}
	})
	//两次密码是否一致
	$("#r_password_q").blur(function(){
		var r_password = $("#r_password").val();
		var r_password_q = $("#r_password_q").val();
		if(r_password != r_password_q){
			$("#r_passInfo").html("*两次密码不一致");
		}else{
			$("#r_passInfo").hide()
		}
	})
	//商品列表页面的 下拉菜单
	$("#n_sub_nav ul li.title").click(function(){
		if ($(this).hasClass('on')) {
			$(this).children(".list").slideUp(); //收起
			$(this).removeClass("on"); 
		    $("#n_sub_nav ul li>a span").html("+");
		}else{
			 
			$("#n_sub_nav ul li.title").removeClass("on"); 
			$("#n_sub_nav ul li.title .list").slideUp();
			$(this).children(".list").slideDown();//展开
			$(this).toggleClass("on");
			 $("#n_sub_nav ul li>a span").html("+");
			$("#n_sub_nav ul li.on>a span").html("-");
		}
	});	
})

   