(function($){


	$body = $('body');

	$body.imagesLoaded(function () {
		setTimeout(function(){
			adjustWindow();
		}, 800);	

	});


	function adjustWindow () {
		var s = skrollr.init({
			forceHeight: false,
			render: function(data) {
			}
		});

		$('#slide-1').height(400);
		$('#slide-2').height(400);
		$('#slide-3').height(400);
		$('#slide-4').height(400);
		$('#slide-last').height(700);
		s.refresh($('.slide'));
	}

	
})(jQuery);