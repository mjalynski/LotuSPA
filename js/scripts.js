window.onload = function(){
		$( ".btn-service" ).click(function() {
		$( this ).children().toggleClass( "loaded" );
	});
	$( ".btn-link" ).click(function() {
		$( this ).children().toggleClass( "fa-minus" );
	});
	var timer=0;
	function comments() {
		if(timer<300){timer+=1;}
		if(timer>=300){timer=0;}
		if(timer>=0&&timer<=100){
			$("#first-comments").animate({opacity: '1'});
			$("#first-comments").css('display', 'flex');
			$("#second-comments").css({'display': 'none','opacity':'0'});
			$("#third-comments").css({'display': 'none','opacity':'0'});
		}
		if(timer>=100&&timer<=200){
			$("#second-comments").animate({opacity: '1'});
			$("#first-comments").css({'display': 'none','opacity':'0'});
			$("#second-comments").css('display', 'flex');
			$("#third-comments").css({'display': 'none','opacity':'0'});
		}
		if(timer>=200&&timer<=300){
			$("#third-comments").animate({opacity: '1'});
			$("#first-comments").css({'display': 'none','opacity':'0'});
			$("#second-comments").css({'display': 'none','opacity':'0'});
			$("#third-comments").css('display', 'flex');
		}
	}
setInterval(comments, 100);
}