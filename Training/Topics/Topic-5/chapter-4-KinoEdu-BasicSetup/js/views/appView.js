define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html' ],
		function($, _, Backbone, appTemplate) {

	var appView = Backbone.View.extend({
	
		template : _.template(appTemplate),
		
		initialize: function(){
			this.render();
		},
		
		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
	
	return appView;
});
