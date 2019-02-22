// banner
$(function() {
	var num = 0
	$(".banner-btn-right1").hover(function() {
		$(".banner-btn-right1").addClass("animated rubberBand")
	}, function() {
		$(".banner-btn-right1").removeClass("animated rubberBand")
	}).click(function() {
		num++;
		if (num > $(".banner li").length - 1) {
			num = 0;
		}
		$(".banner-btn-midle-midle1").find("span").removeClass("now")
		$(".banner-btn-midle-midle1").find("span").eq(num).addClass("now")
		$(".banner li").hide().eq(num).show()
		console.log(num)
	})
	$(".banner-btn-left1").hover(function() {
		$(".banner-btn-left1").addClass("animated rubberBand")
	}, function() {
		$(".banner-btn-left1").removeClass("animated rubberBand")
	}).click(function() {
		num--;
		if (num < 0) {
			num = $(".banner li").length - 1
		}
		$(".banner-btn-midle-midle1").find("span").removeClass("now")
		$(".banner-btn-midle-midle1").find("span").eq(num).addClass("now")
		
		$(".banner li").hide().eq(num).show()
		
	})
	$(function(){
		$(".banner-btn-midle-midle1 span").click(function(){
			$(this).addClass("now").siblings().removeClass("now")
			$(".banner li").eq($(this).index()).show().siblings().hide()
		})
	})
})
// 主要产品
$(function() {
	function anim(ele, className) {
		// 清除所有动画
		ele.eq(index).removeClass("animated fadeInLeft fadeInRight")
			.addClass("animated")
			.addClass(className)
	}
	var oPrev = $(".product-line").find(".product-pre")
	var oNext = $(".product-line").find(".product-next")
	var oLis = $(".product-left ul li").find("span")
	var aImg = $(".product-box-pic")
	var aTxt = $(".product-box-content")
	var index = 0;
	oNext.hover(function() {
		oNext.addClass("animated rubberBand")
	}, function() {
		oNext.removeClass("animated rubberBand")
	}).click(function() {
		index++;
		if (index > $(".product-box").length - 2) {
			index = 0;
		}
		oLis.removeClass("active")
		oLis.eq(index).addClass("active")
		anim(aImg, "fadeInRight")
		anim(aTxt, "fadeInRight")
		$(".product-box").hide().eq(index).show()
	})
	oPrev.hover(function() {
		oPrev.addClass("animated rubberBand")
	}, function() {
		oPrev.removeClass("animated rubberBand")
	}).click(function() {
		index--;
		if (index < 0) {
			index = $(".product-box").length - 2
		}
		oLis.removeClass("active")
		oLis.eq(index).addClass("active")
		anim(aImg, "fadeInLeft")
		anim(aTxt, "fadeInLeft")
		$(".product-box").hide().eq(index).show()
	})
	oLis.click(function() {
		var filter = ""
		if ($(this).parent().index(".product-left ul li") > index) {
			filter = "fadeInRight"
		} else {
			filter = "fadeInLeft"
		}
		oLis.removeClass("active")
		$(this).addClass("active")
		index = $(this).parent().index(".product-left ul li")
		$(".product-box").hide().eq(index).show()
		anim(aImg, filter)
		anim(aTxt, filter)
	})
})
// 业务范围
$(function() {
	$(".business-btn").click(function() {
		$(this).toggleClass("business-btn1")
		$(this).parent().next(".business-box-bottom").stop().slideToggle().parent().siblings().find(
			".business-box-bottom").stop().slideUp()
	})
})
$(function() {
	$(".business-pic").hover(function() {
		$(this).addClass("animated tada")
	}, function() {
		$(".business-pic").removeClass("animated tada")
	}).click(function() {
		$(this).parent().next(".business-box-bottom").stop().slideToggle().parent().siblings().find(
			".business-box-bottom").stop().slideUp()
		$(".business-btn").eq($(this).index(".business-pic")).toggleClass("business-btn1")
	})
})
$(function() {
	$(".business-btn").hover(function() {
		$(this).addClass("animated tada")
	}, function() {
		$(".business-btn").removeClass("animated tada")
	})
})
// 团队介绍
$(function() {
	var animateRuning = false
	var aum=0
	$('.team-btn-right').hover(function() {
		$(".team-btn-right").addClass("animated rubberBand")
	}, function() {
		$(".team-btn-right").removeClass("animated rubberBand")
	}).click(function(){
		teamRight()
	})
	var teamRight=function() {
		if (!animateRuning) {
			animateRuning = true;
			$(".team-bigbox").animate({"left":200},1000).animate({"left":-1100},300,function(){
				$('.team-box').first().appendTo('.team-bigbox');
				$('.team-bigbox').css({
						'left': 0
					})
			})
				animateRuning = false
			}	
			aum++
			if(aum>2){
				aum=0
			}
			$(".team-btn-midle span").eq(aum).addClass("now").siblings().removeClass("now")	
	}
	$('.team-btn-left').hover(function() {
		$(".team-btn-left").addClass("animated rubberBand")
	}, function() {
		$(".team-btn-left").removeClass("animated rubberBand")
	}).click(function() {
		if (!animateRuning) {
			animateRuning = true;
			
			$('.team-box').last().prependTo('.team-bigbox');
			$('.team-bigbox').css({
					'left': -1100
				}),
				$('.team-bigbox').animate({"left":200},1000).animate({
					'left': 0
				}, 300, function() {
					animateRuning = false
				})
			aum--
			if(aum<0){
				aum=2
			}
			$(".team-btn-midle span").eq(aum).addClass("now").siblings().removeClass("now")
		}
	})
	var timer1=setInterval(teamRight,2000)
	$(".team-content").hover(function(){
		clearInterval(timer1)
	},function(){
		timer1=setInterval(teamRight,2000)
	})
})
// 返回顶部
$(window).scroll(function() { //window.onscroll
	if ($('html,body').scrollTop() >= 500) {
		$('.top').fadeIn(300)
	} else {
		$('.top').fadeOut(300)
	}

	$('.top').click(function() {
		var distance = $('html,body').scrollTop();
		//总时间
		var time = 300;
		//间隔时间
		var intervalTime = 30;
		var itemDistance = distance / (time / intervalTime)
		//使用循环定时器不断滚动
		var intervalId = setInterval(function() {
			distance -= itemDistance
			//到达顶部的时候  定会器停止
			if (distance <= 0) {
				distance = 0
				clearInterval(intervalId)
			}
			$('html,body').scrollTop(distance)
		}, intervalTime)

	})
})
// 返回顶部
$(function() {
	$(".fixed-contact").hover(function() {
		$(".fixed-contact").addClass("animated rubberBand")
	}, function() {
		$(".fixed-contact").removeClass("animated rubberBand")
	})
})
