$(document).ready(function() {
	$('#clouds').pan({fps: 25, speed: .35, dir: 'right'});
	$('#navigation a').hover(function() {
		var elid = $(this).attr('class');
		$('#'+elid).addClass('active');
	}, function() {
		var itemID = jQuery(this).attr('class');
		$('#'+itemID).removeClass('active');
	});
	
	var config =  {
		showTime: 0,
		playlist: {
                        title: 'Random videos',
                        videos: [
                                { id: 'W1vRPjYMwKc' }
                        ]
                },
		showPlaylist: 0,
		height:0,
	};
	var player = $("#music").player(config);
	var status = "off";
	$('#motel').sprite({fps: 1, no_of_frames: 8}).active();
	$("#cadillac").click(function() { 
		if(status == "off") { player.player('playVideo'); status = "on"; $(this).addClass('active'); $('#tunesby').removeClass('hidden'); }
		else if(status == "on") { player.player('pauseVideo'); status = "off"; $(this).removeClass('active');  $('#tunesby').addClass('hidden'); }
	});
	$("#desk #fan").hover(function() { 
		$("#desk #bladeswrap").addClass('slow') 
	}, function() { 
		$("#desk #bladeswrap").removeClass('slow') 
	});
	$("#cadillac").animate({ left: '100px'}, 4500 );
});