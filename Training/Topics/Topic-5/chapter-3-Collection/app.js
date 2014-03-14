

//Define Backbone Model
var courseModel = Backbone.Model.extend({
defaults : {
	name : "New Course Name",
	description : "New Course Description"
}
});

//Define Backbone Collection
var courseCollection = Backbone.Collection.extend({
	model: courseModel
});

//Create collection instance
var courses = new courseCollection;

//Create model instance
var course1 = new courseModel({
	name : "HTML5",
	description : "HTML5 Fundamentals"
});
courses.add(course1);

//Adding multiple models at a time
courses.add([{
	name : "CSS3",
	description : "CSS3 Fundamentals"
},{
	name : "JQuery",
	description : "JQuery Fundamentals"
}]);


//Define Backbone View
var courseView = Backbone.View.extend({
    className: "course-wrapper",
	render: function() {
		this.$el.html("<div>Name: <b>"+this.model.get("name")+"</b></div>"+
						"<div>Description: "+this.model.get("description")+"</div>");
		return this;
    }
});




//Render view on HTML page
$(document).ready(function(){
	courses.each(function(course){
		var course1View = new courseView({
			model: course
		});
		$("body").append(course1View.render().el);
	});
});