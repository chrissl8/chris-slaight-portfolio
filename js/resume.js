$(document).ready(function() {
	$('#collapse-list').mousedown(function() {
		$('.resume-list').hide();
	})

	$('#expand-list').mousedown(function() {
		$('.resume-list').show();
	})

	$('#fade-toggle').click(function () {
  		$('.resume-list').fadeToggle(1000);
  	})	

});