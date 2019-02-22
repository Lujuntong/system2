
$(function() {
	$(".nav-header li").hover(function(){
		$(this).find(".now").css("opacity","1").animate({"top":"40","left":"45"+"%"})
	},function(){
		$(this).find(".now").css("opacity","0").animate({"top":"0","left":"0"})
	}).click(function(){
		$(this).find(".now1").show().parent().siblings().find(".now1").hide()
	})
	
	var height = $(window).height();
	var width = $(window).width();
	$(".warp").height(height);
	$(".warp").width(width);
	$(window).resize(function() {
		var height = $(window).height();
		var width = $(window).width();
		$(".warp").height(height);
		$(".warp").width(width);
	})

	var index = 0;
	var isRuning = false;
	function scrollUp() {
		if (!isRuning) {
			isRuning = true
			setTimeout(function() {
				isRuning = false;
			}, 1000)
			if (index > 0) {
				index--;
				if(index==0){
					$(".nav-li:eq(0)").find("a").addClass("nav-a")
					$(".box").animate({top: 0})
				}else{
					$(".nav-li").find("a").removeClass("nav-a");
					if(index>3){
						$(".nav-li").find("a").removeClass("nav-a");
						$(".nav-li:eq(4),.nav-li:eq(5)").find("a").addClass("nav-a")
						$(".box").animate({
							top: 4 * -100 + "%"
						})
						$(".nav-li").find(".now1").hide()
						$(".nav-li:eq(4),.nav-li:eq(5)").find(".now1").show()
					}else{
						$(".nav-li").find("a").removeClass("nav-a");
						$(".nav-li").find("a").eq(index-1).addClass("nav-a");
						$(".box").animate({
							top: index * -100 + "%"
						})
						$(".nav-li").find(".now1").hide()
						
						$(".nav-li").eq(index-1).find(".now1").show()
					}
				}
			}			
		}
// 		if(index==4){
// 		$(".nav-li").eq(3).find(".now1").show()
// 		$(".nav-li:eq(3)").find("a").addClass("nav-a");	
// 		}
	}
	function scrollDown() {
		if (!isRuning) {
			isRuning = true
			setTimeout(function() {
				isRuning = false;
			}, 1000)
			if (index < $(".content_one").length - 1) {
				index++;
				if(index>3){
					$(".nav-li").find("a").removeClass("nav-a");
					$(".nav-li:eq(3),.nav-li:eq(4)").find("a").addClass("nav-a")
					$(".box").animate({
						top: 4 * -100 + "%"
					})
					$(".nav-li").find(".now1").hide()
					$(".nav-li:eq(3),.nav-li:eq(4)").find(".now1").show()
				}else{
					$(".nav-li").find("a").removeClass("nav-a");
					$(".nav-li").find("a").eq(index-1).addClass("nav-a");
					$(".box").animate({
						top: index * -100 + "%"
					})
					$(".nav-li").find(".now1").hide()
					$(".nav-li").eq(index-1).find(".now1").show()
				}
			}
			
		}
	}
	function mouseWheel(ev) {
		if (ev.wheelDelta) {
			if (ev.wheelDelta > 0) {
				scrollUp()
			} else {
				scrollDown()
			}
			console.log(ev.wheelDelta)
		} else {
			if (ev.detail > 0) {
				scrollDown()
			} else {
				scrollUp()
			}
		}
	}
	window.onmousewheel = mouseWheel
	window.addEventListener("DOMMouseScroll", mouseWheel)
	$(".banner-btn").click(function(){
		scrollDown()
	})
	
	
	$(".nav-li").click(function(){
		var nIndex=$(this).index()
		if(nIndex> 2){
			$(".nav-li").find("a").removeClass("nav-a");
			$(".nav-li:eq(3),.nav-li:eq(4)").find("a").addClass("nav-a")
			$(".box").animate({
				top: 4 * -100 + "%"
			})
			$(".nav-li").find(".now1").hide()
			$(".nav-li:eq(3),.nav-li:eq(4)").find(".now1").show()
		}else{
			$(".nav-li").find("a").removeClass("nav-a");
			$(this).find("a").addClass("nav-a");
			$(".box").animate({
				top: -(nIndex+1) * 100 + "%"
			})
			$(".nav-li").find(".now1").hide()
			$(".nav-li").eq(nIndex).find(".now1").show()
		}
		// index=nIndex +1 
		index=nIndex
	})
	
})

$(function(){
	// 遮罩
	setTimeout(function(){
		$(".zhezhao-box").animate({"top":"10px"},300,function(){
			$(".zhezhao-txt").animate({"opacity":"1","top":"0"}).find(".banner-text>div").addClass("animated fadeInUp")
		})
	},1000)
	setTimeout(function(){
		$("#zhezhao").slideUp(500)
	},4000)
	$("#zhezhao").dblclick(function(){
		$("#zhezhao").slideUp(500)
	})
	// 概述
	var gIndex=0
	$(".gaishu-right").click(function(){
		$(".gaishu-left").animate({"opacity":"1"})
		gIndex++
		if(gIndex>$(".gaishu-box").length-1){
			gIndex--
			return
		}
		if(gIndex==$(".gaishu-box").length-1){
			$(".gaishu-right").animate({"opacity":"0.3"})
		}
		$(".gaishu-bigbox").animate({"left":gIndex*-100+"%"})
		console.log(gIndex)
	})
	$(".gaishu-left").animate({"opacity":"0.3"})
	$(".gaishu-left").click(function(){
		$(".gaishu-right").animate({"opacity":"1"})
		gIndex--
		if(gIndex<0){
			gIndex++
			return
		}
		if(gIndex==0){
			$(".gaishu-left").animate({"opacity":"0.3"})
		}
		$(".gaishu-bigbox").animate({"left":gIndex*-100+"%"})
		console.log(gIndex)
	})
	// 小鸟掌学
	$(".feicui-btn li").click(function(){
		$(".fBig").css("marginLeft",-868*$(this).index()+"px")
	})
	$(".fBtn-left").click(function(){
		$(this).find(".active1").animate({"left":"0px"},300),
		$(".fBtn-right").find(".active").animate({"left":"0px"},300)
	})
	$(".fBtn-right").click(function(){
		$(this).find(".active").animate({"left":"79px"},300),
		$(".fBtn-left").find(".active1").animate({"left":"79px"},300)
	})
})
