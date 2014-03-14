define([ 'jquery', 'underscore', 'backbone', 'text!templates/courseTpl.html', 'text!templates/courseListTpl.html' ],
		function($, _, Backbone, courseGridTemplate, courseListTemplate) {

	var courseView = Backbone.View.extend({





        initialize: function(){
            this.viewType = this.options.viewType || "grid";

            if(this.viewType == "grid"){
                this.template = _.template(courseGridTemplate);
                this.$el.addClass("course-wrapper");
            } else {
                this.template = _.template(courseListTemplate);
                this.$el.addClass("course-row");
            }
        },

		render: function() {
			
			this.$el.html(this.template(this.model.toJSON()));
					
			return this;
		}
	});
	
	return courseView;
});
