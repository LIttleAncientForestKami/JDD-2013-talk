/*
 * From TutorialZine Turn.js tutorial, cut to fit.
 * */

$(function () {
    var flipbook = $("#flipbook");

    flipbook.turn({
      display: 'double',
      autoCebnter: true
    });

    setTimeout(function(){
	    flipbook.fadeTo(500,1);
	    },1000);

    $(window).bind('keydown', function(e){
	    if (e.keyCode == 188){
	       flipbook.turn('previous');
	    } else if (e.keyCode == 190){
	       flipbook.turn('next');
	    }
    });
	      
});
