NProgress.start();
$(document).ready(function(){
	NProgress.done();

	$('.article-content').css('display','none');
	$('.article-content img').each(function(index,elm){
		if($(window).width()>780){
			$(elm).attr('data-src',$(elm).attr('src'));
		} else if(380<$(window).width()){
			console.log($(window).width())
			$(elm).attr('data-src',$(elm).attr('src')+"?imageView2/2/w/2000");
		}else {
			$(elm).attr('data-src',$(elm).attr('src')+"?imageView2/2/w/1000");
		}
		$(elm).attr('src','/css/placehold.jpg');
	});
	$('.article-content').css('display','block');

	//totop
	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			$('#toTop').css({'display':'block','opacity':1,'animation-name':'fadeUp'})
		}else {
			$('#toTop').css({'opacity':0,'animation-name':'fadeDown'})
		}
	})
	$('#toTop .indicator').click(function(){
		var speed = 300;
        var position = 0;
        $('body').animate({scrollTop:position},speed,"swing");
        return false;
	})

	//lazyload
	new Lazyload('.article-content p',{
		tag: "data-src",
	  	distance: 0
	})
})





