define(['backbone' ], function(Backbone) {
	var courseModel = Backbone.Model.extend({
		initialize : function() {
			
		},

		defaults : {
            icon: "C",
			name : "New Course Name",
			description : "New Course Description"
		}
	});
	return courseModel;
});
