Ladderized
	.css({
		link: 'https://unpkg.com/materialize-css/dist/css/materialize.min.css'
	})
	.load(function(){
		Ladderized
			.clearQueue()
			.showNanoBar()
			.js({
				link: 'https://unpkg.com/jquery/dist/jquery.min.js'	
			})
			.js({
				link: 'https://unpkg.com/materialize-css/dist/js/materialize.min.js'
			})
			.load(function(){
				console.log('All files loaded!');
			});
	});
	/*
	.clearQueue()
	.showNanoBar()
	.js({
		link: 'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js'	
	})
	.js({
		link: 'https://unpkg.com/materialize-css@0.98.2/dist/js/materialize.min.js'
	})
	.load(function(){
		console.log('All files loaded!');
	})*/