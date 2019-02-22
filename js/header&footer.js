$(function() {
	$(".nav-hidden").find("a").hover(function() {
		$(this).stop(true).animate({
			"paddingLeft": "20px"
		}, 500)
	}, function() {
		$(".nav-hidden").find("a").stop(true).animate({
			"paddingLeft": "0px"
		}, 500)
	})
})
$(function() {
	$(".nav>ul>li").hover(function() {
		$(this).find(".nav-hidden").stop(true).slideDown(1000)
		$(this).find(".dian1").show()
	}, function() {
		$(".nav>ul>li").find(".nav-hidden").stop(true).slideUp(700,"backIn")
		$(".nav>ul>li").siblings().find(".dian1").hide()
	})
})
$(function(){
	$(".nav-hidden").mouseover(function(){
		$(this).siblings("i").hide()
	})
})
// 底部
$(function(){
	$(".dou").hover(function(){
		$(".dou").addClass("animated rubberBand")
	},function(){
		$(".dou").removeClass("animated rubberBand")
	console.log(1)
	})
})
$(function(){
	$(".lai").hover(function(){
		$(".lai").addClass("animated rubberBand")
	},function(){
		$(".lai").removeClass("animated rubberBand")
	})
})
$(function(){
	$(".mi").hover(function(){
		$(".mi").addClass("animated rubberBand")
	},function(){
		$(".mi").removeClass("animated rubberBand")
	})
})
$(function(){
	$(".fa").hover(function(){
		$(".fa").addClass("animated rubberBand")
	},function(){
		$(".fa").removeClass("animated rubberBand")
	})
})
$(function(){
	$(".sou").hover(function(){
		$(".sou").addClass("animated rubberBand")
	},function(){
		$(".sou").removeClass("animated rubberBand")
	})
})
$(function(){
	$(".la").hover(function(){
		$(".la").addClass("animated rubberBand")
	},function(){
		$(".la").removeClass("animated rubberBand")
	})
})
$(function(){
	$(".xi").hover(function(){
		$(".xi").addClass("animated rubberBand")
	},function(){
		$(".xi").removeClass("animated rubberBand")
	})
})
$(function(){
	$(".music li").click(function(){
		$(this).append('<audio src="img/index/sound0'+$(this).index()+'.mp3" autoplay></audio>')
	})
})
