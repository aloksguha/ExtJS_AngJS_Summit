define(['backbone' ], function(Backbone) {
	var courseModel = Backbone.Model.extend({

		defaults : {
            icon : "C",
			name : "New Course Name",
			description : "New Course Description"
		},

        validate: function(attrs, options) {
            if (!attrs.name) {
                return "Please enter name";
            } else if (!attrs.description) {
                return "Please enter description";
            }  else if (!attrs.icon) {
                return "Please enter icon";
            }
        }
	});
	return courseModel;
});
