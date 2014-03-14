

//Define Backbone Model
var courseModel = Backbone.Model.extend({
    defaults : {
        name : "New Course Name",
        description : "New Course Description"
    }
});


//Create model instance
course1 = new courseModel;
console.log("\nModel with default attribute\nvar course1 = new courseModel;\n--->");
console.log(JSON.stringify(course1.toJSON()));


//Set attribute
course1.set("name" , "HTML");
console.log("\nSet attribute\ncourse1.set('name' , 'HTML');\n--->");
console.log(JSON.stringify(course1.toJSON()));


//Set multiple attributes
course1.set({
	name : "HTML5",
	description : "HTML5 Fundamentals"
});
console.log("\nSet multiple attribute\ncourse1.set({name:'HTML5',description:'HTML5 Fundamentals'});\n--->");
console.log(JSON.stringify(course1.toJSON()));


//Get attribute
console.log("\nGet name attribute\ncourse1.get('name');\n--->");
console.log(course1.get("name"));

//Has attribute
console.log("\nHas name attribute?\ncourse1.has('name');\n--->");
console.log(course1.has("name"));