$(document).ready(function() {

	$('button').click( () => { 
		get();
		console.log('I am hungry!'); 
	});

	$('form').on('submit', function(e){
  		e.preventDefault(); //prevents auto-rerendering
	});

	get = () => {
		$.get('http://127.0.0.1:3000/HD', () => {
			console.log('GET: IMMA DUM DUM')
		});
	}

	post = (input) => {
		$.post('http://127.0.0.1:3000/HD', (input) => {
			console.log('POST: IMMA DUM DUM')
		});
	}

});
