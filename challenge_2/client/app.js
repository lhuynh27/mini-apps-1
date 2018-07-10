$(document).ready(function() {

	$('form').on('submit', function(e){
  		post( $('#input').val() );
  		e.preventDefault(); //prevents auto-rerendering
	});

	post = (input) => {
		$.post('http://127.0.0.1:3000/HD', {key: input}, (data) => {
			console.log('POST REQ: IMMA DUM DUM')
		});
	}

	//displayCSV = 
});