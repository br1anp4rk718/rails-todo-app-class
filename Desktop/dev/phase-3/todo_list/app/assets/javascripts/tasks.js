$(document).ready(function() {
	$('.additem').on('click',function(e){
		e.preventDefault();

		var pathway = $(this).children().attr('href')

		// debugger;
		$.ajax({
			url: pathway,
			type: "GET"
		})

		.done(function(response){
			$('.list').append(response)
		})
	})

	$('body').submit('form', function(e){
		e.preventDefault();


		var path = $(this).attr('action')
		
		$.ajax({
			url: path,
			type: "POST"
		})

		.done(function(response){
			debugger	
		})
		
	})
})
