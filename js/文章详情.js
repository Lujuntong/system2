$(function(){
	$(".like-btn").hover(function(){
		$(".like-btn").addClass("animated rubberBand")
		$(".like-box").animate({"width":"215px"},500)
	},function(){
		$(".like-box").animate({"width":"73px"},500,function(){
			$(".like-btn").removeClass("animated rubberBand")
		})
	});
	$(".like-btn").one("click",function(){
		var step=parseInt(Math.random()*5)  //random的取值为0-1
		var timer=setTimeout(function(){
			step--
			$(".like-content").css("display","block").addClass("animated bounceInDown")
			$(".like-content li").eq(step).show()
		},100)
		setTimeout(function(){
			$(".like-content").css("display","none")
			$(".like-btn").css("backgroundPosition","0px -73px")
		},2000)
	});
	(function(){
		var news=getUrlParams("news");
		var data=articleData[news].data;
		$(".liebiao").html(data.typeTitle)
		$("#update").html(data.updateAt)
		$("#author").html(data.updateByFullName)
		$(".content-pic img").attr("src",data.coverImg)
		$(".content-text").html(data.content)
		function getUrlParams(name ){
			// 获取页面URL传过来的参数article.html?
			var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)')
			var r=window.location.search.substr(1).match(reg)
			// news=xiaoniaoNews1  ''  xiaoniaoNews1  ''
			if(r!=null){
				console.log(r)
				return r[2]
			}else{
				return ''
			}
		}
	})()
})