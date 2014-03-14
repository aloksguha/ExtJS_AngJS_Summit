define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/courses', 'models/course', 'views/courseView' ],
		function($, _, Backbone, appTemplate, CourseCollection, CourseModel, CourseView) {

	var appView = Backbone.View.extend({
	
		template : _.template(appTemplate),
		
		initialize: function(){
			this.render();
		},
		
		render: function() {
							
			this.$el.html(this.template());

            var courses = new CourseCollection([
                {
                    name : "HTML5",
                    description : "HTML5 Fundamentals"
                },{
                    name : "CSS3",
                    description : "CSS3 Fundamentals"
                },{
                    name : "JQuery",
                    description : "JQuery Fundamentals"
                },{
                    name:"Android Basics",
                    description:"Teaches Hello World Application in Android"
                },{
                    name:"iOS Basics",
                    description:"Teaches Hello World Application in iOS"
                }
            ]);

			courses.each(function(course){
                var courseView = new CourseView({
                    model: course
                });
                this.$("#course-list").append(courseView.render().el);
            });
					
			return this;
		}
	});
	
	return appView;
});
