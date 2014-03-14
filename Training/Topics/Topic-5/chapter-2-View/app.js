

//Define Backbone Model
var courseModel = Backbone.Model.extend({
    defaults : {
        name : "New Course Name",
        description : "New Course Description"
    }
});


//Create model instance
var course1 = new courseModel({
	name : "HTML5",
	description : "HTML5 Fundamentals"
});

//Define Backbone View
var courseView = Backbone.View.extend({
    //tagName:"p",
    //className: "course-wrapper",
    //id:"course-1",
    render: function() {
        this.$el.html("<div>Name: "+this.model.get("name")+"</div>"+
            "<div>Description: "+this.model.get("description")+"</div>");
        return this;
    }
});

//Create view
course1View = new courseView({
	model: course1
});


//Render view on HTML page
$(document).ready(function(){
$("body").append(course1View.render().el);
});