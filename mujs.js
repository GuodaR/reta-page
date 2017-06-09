 
function initializeInteractions() {
 	$(document).scroll(function() {
 		
 		for(a = 0; a <= 14; a++){
 			var photo = $(".imgMain").eq(a);
 			var wScroll = $(this).scrollTop();
 			var elementView = $(photo).offset().top - 700;

 			if(wScroll > elementView){
 				$(".imgMain").eq(a).addClass("isshowing");
 				// elementView += 500;
 			}
 		}
 	});
 }
 
 function scrollToTop() {
	// $(document).scrollTop(100); // DOES NOT WORK IN CHROME!
	$("html,body").animate({ scrollTop: 0 }, "slow");
}

 $(document).ready(function(){
  	initializeInteractions();
 	scrollToTop();
 	var rellax = new Rellax('.parallax');
 });
