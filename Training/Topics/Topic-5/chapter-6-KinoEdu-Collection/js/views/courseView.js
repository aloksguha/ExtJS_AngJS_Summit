define([ 'jquery', 'underscore', 'backbone', 'text!templates/courseTpl.html' ],
		function($, _, Backbone, courseTemplate) {

	var courseView = Backbone.View.extend({

		className: "course-wrapper",
		
		template : _.template(courseTemplate),
		
		render: function() {
			
			this.$el.html(this.template(this.model.toJSON()));
					
			return this;
		}
	});
	
	return courseView;
});
