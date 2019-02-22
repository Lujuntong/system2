
$(function(){
	setTimeout(function(){
		$(".content-title").animate({"width":"1100px"},1500)
	});
	(function(){
		// global
		var global=global||{}
		global.loadStart=0; 
		// 控制加载次数
		loadArticleList()
		function loadArticleList(){
			// 判断是不是第一次加载
			if(global.loadStart==0){
				// 如果是第一次加载
				$("#articleList").html("");
			}
			// 请求数据
			var result=listData["listData0"+global.loadStart]
			var list=result.data.list
			// 判断数据到底存不存在
			if (!list||!list.length) {
				$("#articleList").html("您请求的数据不存在")
			} else{
				// 如果数据存在
				for(var i=0;i<list.length;i++){
					var htmlModel=$('#itemHtml').html()
					htmlModel=htmlModel.replace('articleId',list[i].sysId)
					htmlModel=htmlModel.replace("images/list_img01.jpg",list[i].coverImg)
					htmlModel=htmlModel.replace("$artcleTitle$",list[i].title)
					htmlModel=htmlModel.replace("$updateTime$",list[i].creatAt)
					htmlModel=htmlModel.replace("$describe$",list[i].describe)
					$('#articleList').append(htmlModel)
				}
			}
			global.loadStart++;
			global.loadCount=Math.ceil(result.data.count/result.data.pageSize)
			if(global.loadStart>=global.loadCount){
				$(".banner-btn").fadeTo(200,0)
				$(".more img").attr("src","images/list_gomore_bg.jpg")
			}
		}
		$(".banner-btn").click(function(){
			loadArticleList()
		})
		
		$(".big-box").delegate(".small-box","click",function(){
			var article=$(this).attr("articleId")
			console.log(1)
			window.open("文章详情.html?news=xiaoniaoNews"+article)
			
		})
	})()

})