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
		$(".search_res").css("display","none");
	})
	//跨域
	$('#text').bind('input', function () {
		$(".search_res").css("display","block");
		var search_text = $("#text").val();
		$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+search_text+"&_ksTS=1513150265740_480&callback=?&area=c2c&bucketid=2",function(data){
			data.result.forEach((v)=>{
				 $('<li><a href="javascript">'+v[0]+'</a></li>').appendTo($("#uls"));  
			})
		});
	});
	
	//nav
	$(".nav li").mouseenter(function(){
		$(this).children("a").css({"background":"#6a6a6a","color":"#fff"})
		$(this).children("dl").css("display","block");
	})
	$(".nav li").mouseleave(function(){
		$(this).children("a").css({"background":"#fff","color":"#000"})
		$(this).children("dl").css("display","none");
	})
	
	//car2
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
		var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
		var r_tel = $("#usertel").val();
		if(r_tel==""){
			$("#usertelInfo").html("*请输入手机号")
		}else if(!reg.test(r_tel)){
			$("#usertelInfo").html("*手机号格式不正确")
		}else{
			$("#usertelInfo").html(" ")
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
		}else if(name!="" && password!=""){
			$.ajax({
				type:"post",
				url:"../php/login.php",
				async:true,
				data :{
					username : name,
					userpass : password
				},
				success :function(data){
					data = JSON.parse(data);
					if(data.status === 200){
						location.href = "../index.html"
					}else if(data.status === 401){
						$("#l_info").html(data.info)
					}
				}
			});
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
		}else if(r_tel != ""){
			$.ajax({
				type:"get",
				url:"../php/register.php",
				async:true,
				data:"userId="+this.value,
				success:function(data){
					data = JSON.parse(data);
					if(data.status === 200){
						$("#r_tel_info").html(data.info);
					}else if(data.status === 401){
						$("#r_tel_info").html(data.info)
					}
				}
			});
		}else{
			$("#r_tel_info").html(" ")
		}
	})
	
	$("#r_tel").blur(function(){
		
	});
	
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
	var big_view="<img src=\"../img/pic_d_big1.jpg\" />";
	$(".casepic").html(casepic);
	$(".big_view").html(big_view);
	$(".pic").click(function(){
		$(".casepic").html($(this).find(".hidden1").html());
		$(".big_view").html($(this).find(".hidden2").html());
		$(".lay_box").fadeIn(300)
		Zoomhover($(".casepic"), $(".hoverbox"), $(".big_view img"));
	});
	$("li").click(function(){
		$(this).children("img").addClass("borderColor");
		$(this).siblings().children("img").removeClass("borderColor");
	})
	
//数量加减
	var t = $("#text_box");  
	//初始化数量为1,并失效减  
	$('#min').attr('disabled',true);  
	    //数量增加操作  
	    $("#add").click(function(){ 
	    	if(t.val()<10){
	    		 t.val(parseInt(t.val())+1);  
	    	}
	       
			$("#min").removeAttr("disabled");   
	    })   
	    //数量减少操作  
	    $("#min").click(function(){  
	    	if(parseInt(t.val())>1){
	    		t.val(parseInt(t.val())-1)
	    	}else{
	    		$("#min").attr("disabled","disabled")
	    	}
	    }) 
	
	$(".share").click(function(){
		$(".weixin_qrcode").css("display","block");
	})
	$(".weixin_close").click(function(){
		$(".weixin_qrcode").css("display","none");
	})
	
	//
	$("#switch_sizeicon a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
})

   