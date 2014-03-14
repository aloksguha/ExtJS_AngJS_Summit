require.config({
    baseUrl : "js/",
    paths : {
        jquery : 'libs/jquery/jquery-1.9.1.min',
        underscore : 'libs/underscore/underscore',
        backbone : 'libs/backbone/backbone0.9.10',
		
        backbone : 'libs/backbone/backbone0.9.10',
        text : 'libs/require/text'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([ 'backbone', 'views/appView'],
    function(Backbone, AppView) {

		appView = new AppView({
			el: $("#page-content")
		});
	
    }
);

