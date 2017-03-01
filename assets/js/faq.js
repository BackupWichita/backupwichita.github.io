var icecream = Array('cone','sandwich','bombpop');

$(document).ready(function() {
	$('#clouds').pan({fps: 25, speed: .35, dir: 'right'});
	$('#freezer').click(function() {
		$(this).toggleClass('open');
		$(this).children('.eatme').removeClass().addClass('eatme');
		if($(this).hasClass('open')) { 
			var changeit = icecream[Math.floor(Math.random()*icecream.length)];
			$(this).children('.eatme').removeClass().addClass('eatme');
			$(this).children('.eatme').addClass(changeit);
		}
	});
	var rotation = 0
    setInterval(function() {
        $('div#wheel').css({
            "-moz-transform": "rotate(" + rotation + "deg)",
            "-webkit-transform": "rotate(" + rotation + "deg)",
            "-o-transform": "rotate(" + rotation + "deg)",
            "-ms-transform": "rotate(" + rotation + "deg)"
        }); 
        $('.bucket').css({
			"-moz-transform": "rotate("+(-rotation)+ "deg)",
			"-webkit-transform": "rotate("+(-rotation)+ "deg)",
			"-o-transform": "rotate("+(-rotation)+ "deg)",
			"-ms-transform": "rotate("+(-rotation)+ "deg)"
		}); 
    rotation = (rotation + .5) % 360
    }, 25);
	
	$('.item').click(function() {   
		if($(this).hasClass('active')) { 
			$('.item').each(function() {
				$(this).removeClass('active');
			});
			$('#words').html('');
		} else {
			$('.item').each(function() {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
			var linkText = $(this).children('.answer').html();
			$('#words').html(linkText);
		}
	});
});