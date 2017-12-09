
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
	
})

   