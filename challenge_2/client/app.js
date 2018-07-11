$(document).ready(function() {

	$('form').on('submit', function(e){
  		post( $('#input').val() );
  		e.preventDefault(); //prevents auto-rerendering
	});

	post = (input) => {
		$.post('http://127.0.0.1:3000/HD', {key: input}, (data) => {
			console.log('POST REQUEST: SUCCESSFUL!');
			var parsedData = JSON.parse(data);
			for(var i = 0; i < parsedData.length; i++){
				var row = parsedData[i].join(', ');
				$("p").append(row + "<br>");
			}
		});
	}

});