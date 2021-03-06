(function ($) {
    $.extend({      
        getQueryString: function (name) {           
            function parseParams() {
                var params = {},
                    e,
                    a = /\+/g,  // Regex for replacing addition symbol with a space
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                    q = window.location.search.substring(1);

                while (e = r.exec(q))
                    params[d(e[1])] = d(e[2]);

                return params;
            }

            if (!this.queryStringParams)
                this.queryStringParams = parseParams(); 

            return this.queryStringParams[name];
        }
    });
})(jQuery);
/*
*	@ https://stackoverflow.com/a/3867610
*	$.getQueryString('myParam')
*
*/


$(document).ready(function() {
	// $(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('#nanobar').fadeOut(function () {
		$('#content').fadeIn();
		$('.parallax').parallax();
	});
	$('.link').click(function(){
		var self = this;
		$("#content").fadeOut(function () {
			window.location.href = $(self).attr('to');
		});
	});
});