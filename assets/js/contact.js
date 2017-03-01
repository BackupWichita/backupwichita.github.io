$(document).ready(function() {
	$('label').on('click', document, function() { 
		$(this).siblings('input[type=text],textarea').focus();
	});
});