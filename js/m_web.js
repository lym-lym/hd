
/*====================================页面配置====================================*/
$(function(){
	
	$("#banner").slide({titCell:".hd li",mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:800,interTime:6000,mouseOverStop:false});/** autoPlay:true自动播放*/
	
	
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
})

   