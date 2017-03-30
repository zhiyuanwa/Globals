//index-1
//返回顶层
$(document).on('scroll',function(){
	var scr = $(this).scrollTop();
	if (scr>400) {
		$('.fla-top').fadeIn(200);
	}else{
		$('.fla-top').fadeOut(50);
	}

})
$('.fla-top').on("click",function(){
	var ting = setInterval(aotu,50);
	function aotu(){
		var _top = document.body.scrollTop||document.documentElement.scrollTop;
		if (_top==0) {
			clearInterval(ting);
		}else{
			scrollTo(0,_top/2)
		}
	}
})

//获取banner 宽
$(function(){
	var bnr = $('.bnr').height();
	$('._banner').css('height',bnr)
	var bnr_2 = $('.bnr-2').height();
	$('._man').css('height',bnr_2);

//index-2
//获取banner 宽
	var bnr = $('.banner-img').height();
	$('._banner').css('height',bnr)
})
	
