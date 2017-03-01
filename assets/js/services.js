var door_state = "open";
var current_section = null;

$(document).ready(function() {
	
	//CLOUDS ANIMATION
	$('#clouds').pan({fps: 25, speed: .35, dir: 'right'});	
	
	//MUSIC PLAYER 
	var config =  {
		showTime: 0,
		playlist: {
                        title: 'Random videos',
                        videos: [
                                { id: 'b4qtltfyFts' }
                        ]
                },
		showPlaylist: 0,
		height:0,
	};
	var player = $("#music").player(config);
	var status = "off";
	$("#radio").click(function() { 
		if(status == "off") { player.player('playVideo'); $(this).addClass('active'); status = "on"; $('#tunesby').removeClass('hidden'); }
		else if(status == "on") { player.player('pauseVideo'); status = "off"; $(this).removeClass('active');  $('#tunesby').addClass('hidden'); }
	});
	
	//BALLOON LIFT OFF & RESET
	$("#reset-balloon").click(function() {
		if($("#balloon").hasClass('away')) { 
			$("#balloon").clearQueue();
			$("#balloon").stop();
			$("#balloon").removeClass('away');
			$("#balloon").css({ top: -182, right: -63, position: 'absolute' });
		}
	});
	$("#balloon").click(function() { 
		$(this).addClass('away');
		$(this).animate({
			top: '-1500px',
			right: '-700px'
		}, 5500 );
	});
	
	//CONTROLLING INPUT FROM SERVICES BOARD
	$("#board li").click(function() { 
		selected = $(this);
		switch(door_state) { 
			case 'transit': return false;
			case 'open':
				$("#doorway #door .content .section").each(function(i, obj) { 
					if($(this).hasClass(selected.attr('class'))) $(this).toggleClass('active');
				});
				selected.toggleClass('sel');
				door_state = 'transit';
				current_section = selected.attr('class').split(' ')[0];
				$("#doorway #door").animate({ top: '0px' }, 1500, function(){ door_state = 'closed' });
				break;
			case 'closed':
				door_state = 'transit';
				$("#doorway #door").animate({ top: '-450px' }, 1500, function() { 
					door_state = 'open';
					$("#board li").each(function(i, obj) { $(this).removeClass('sel') });
					$("#doorway #door .content .section").each(function(i, obj) { $(this).removeClass('active') });
					if(selected.hasClass(current_section)) return false;
					else { 
						current_section = selected.attr('class').split(' ')[0];
						selected.toggleClass('sel');
						door_state = 'transit';
						$("#doorway #door .content .section").each(function(i, obj) { 
							if($(this).hasClass(selected.attr('class').split(' ')[0])) $(this).toggleClass('active');
						});
						$("#doorway #door").animate({ top: '0px' }, 1500, function(){ door_state = 'closed' });
					}
				});
				break;
		}				
	});
	
	//BOT HAND MOVEMENT ANIMATION
	$('#bot').sprite({fps: 1, no_of_frames: 2}).active();
	
	// CAR LIFT ANIMATION 
	$("#car").animate({ height: '390px' }, 3000);
	var next = "down";
	$("#doorway").click(function() {
		if(next == "up") { $("#car").animate({ height: '390px' }, 3000 ); next = "down"; }
		else if(next == "down") {$("#car").animate({ height: '229px' }, 3000 ); next = "up";}
	});
	
	checkWindowSize();
});

$(window).resize(checkWindowSize); 
function checkWindowSize() {
	var newSize = $(window).width() - 1833;
	if ($(window).width() <= 1833) {
		$("#shop").css("left", newSize+'px');
	};
	if($(window).width() > 1833) {
		$("#shop").css("left", '0px');
	};
	return true;
};