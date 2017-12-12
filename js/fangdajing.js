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
	