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
			$(this).children(".list").slideUp(); 
			$(this).removeClass("on"); 
		    $("#n_sub_nav ul li>a span").html("+");
		}else{
			 
			$("#n_sub_nav ul li.title").removeClass("on"); 
			$("#n_sub_nav ul li.title .list").slideUp();
			$(this).children(".list").slideDown();
			$(this).toggleClass("on");
			 $("#n_sub_nav ul li>a span").html("+");
			$("#n_sub_nav ul li.on>a span").html("-");
		}
	});	
	//商品详情页：
	//左侧小图滚动
	$(".summary_pic_l").slide({mainCell:".bd ul", effect:"topLoop", vis:3,scroll:1, delayTime:800,trigger:"click"});
	//点击左侧缩略图，出现右侧中型图片
	var casepic="<img src=\"../img/pic_d_case1.jpg\" />";
	$(".casepic").html(casepic);
	$(".pic").click(function(){
		$(".casepic").html($(this).find(".hidden1").html());
		$(".lay_box").fadeIn(300)
	});
	$("li").click(function(){
		$(this).children("img").addClass("borderColor");
		$(this).siblings().children("img").removeClass("borderColor");
	})
	
	//出现大图
	$(".big_view").html($(".casepic").html());
	
	
	//放大镜效果
	function Zoom(summary_pic, hoverbox, l, t, x, y, h_w, h_h, big_view) {
	    var moveX = x - l - (h_w / 2);
	    //鼠标区域距离
	    var moveY = y - t - (h_h / 2);
	    //鼠标区域距离
	    if (moveX < 0) {
	        moveX = 0
	    }
	    if (moveY < 0) {
	        moveY = 0
	    }
	    if (moveX > summary_pic.width() - h_w) {
	        moveX = summary_pic.width() - h_w
	    }
	    if (moveY > summary_pic.height() - h_h) {
	        moveY = summary_pic.height() - h_h
	    }
	    //判断鼠标使其不跑出图片框
	    var zoomX = big_view.width() / summary_pic.width()
	    //求图片比例
	    var zoomY = big_view.height() / summary_pic.height()
	
	    big_view.css({
	        left: -(moveX * zoomX),
	        top: -(moveY * zoomY)
	    })
	    hoverbox.css({
	        left: moveX,
	        top: moveY
	    })
	}
	function Zoomhover(summary_pic, hoverbox, big_view) {
	    var l = summary_pic.offset().left;
	    var t = summary_pic.offset().top;
	    var w = hoverbox.width();
	    var h = hoverbox.height();
	    var time;
	    $(".casepic img,.hoverbox").mouseover(function(e) {
	        var x = e.pageX;
	        var y = e.pageY;
	        $(".hoverbox,.big_view").show();
	        hoverbox.css("opacity", "0.3")
	        time = setTimeout(function() {
	            Zoom(summary_pic, hoverbox, l, t, x, y, w, h, big_view)
	        }, 1)
	    }).mousemove(function(e) {
	        var x = e.pageX;
	        var y = e.pageY;
	        time = setTimeout(function() {
	            Zoom(summary_pic, hoverbox, l, t, x, y, w, h, big_view)
	        }, 1)
	    }).mouseout(function() {
	        big_view.parent().hide()
	        hoverbox.hide();
	    })
	}
	$(function() {
	    Zoomhover($(".casepic img"), $(".hoverbox"), $(".big_view img"));
	})
})

   