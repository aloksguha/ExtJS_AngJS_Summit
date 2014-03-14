define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html', 'models/course', 'views/courseView' ],
		function($, _, Backbone, appTemplate, CourseModel, CourseView) {

	var appView = Backbone.View.extend({
	
		template : _.template(appTemplate),
		
		initialize: function(){
			this.render();
		},
		
		render: function() {
							
			this.$el.html(this.template());
					
			//Create model instance
			var course1 = new CourseModel({
				name : "HTML5",
				description : "HTML5 Fundamentals"
			});

			//Create view
			var course1View = new CourseView({
				model: course1
			});


			//Render view on HTML page
			this.$("#course-list").append(course1View.render().el);

					
			return this;
		}
	});
	
	return appView;
});
