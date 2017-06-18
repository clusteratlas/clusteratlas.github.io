
	Ladderized
		.css({
			link: 'https://unpkg.com/materialize-css@0.98.2/dist/css/materialize.min.css'
		})
		.load(function(){
			Ladderized
				.clearQueue()
				.createNanoBar(2)
				.js({
					link: 'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js'
				})
				.js({
					link: 'https://unpkg.com/materialize-css@0.98.2/dist/js/materialize.min.js'
				})
				.load(function(){
					console.log('All files loaded!');
					console.log(window);
				});
		});
