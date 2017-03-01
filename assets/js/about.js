$(document).ready(function() {
	$('#clouds').pan({fps: 25, speed: .35, dir: 'right'});
	$("#dooractivator").on('click', document, function() { 
		$("#chris-hand, #tiffany-hand").toggleClass('active');
	});
	$("#peekactivator").hover(function(){
		$("#flaming-peek").addClass('active');
	},
	function() { 
		$("#flaming-peek").removeClass('active');
	});
	checkWindowSize();
	$('#projector').sprite({fps: 2, no_of_frames: 2}).active();
});

$(window).resize(checkWindowSize); 

function checkWindowSize() {
	var newSize = $(window).width() - 1600;
	if ($(window).width() <= 1700) {
		$("#set").css("left", newSize+'px');
	};
	if($(window).width() > 1700) {
		$("#set").css("left", '110px');
	};
	return true;
};