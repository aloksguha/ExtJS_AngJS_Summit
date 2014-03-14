/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/27/13
 * Time: 2:15 PM
 * To change this template use File | Settings | File Templates.
 */

function AppViewModel() {
    var staticData = [
        {
            courseIcon:"A",
            courseName:"Android Basics",
            courseDescription:"Teaches Hello World Application in Android"
        },
        {
            courseIcon:"i",
            courseName:"iOS Basics",
            courseDescription:"Teaches Hello World Application in iOS"
        },
        {
            courseIcon:"H",
            courseName:"HTML5 Basics",
            courseDescription:"Teaches HTML5 Fundamentals"
        },
        {
            courseIcon:"C",
            courseName:"CSS 3 Basics",
            courseDescription:"Teaches CSS3 Fundamentals"
        },
        {
            courseIcon:"M",
            courseName:"MongoDB Basics",
            courseDescription:"MongoDB Primer"
        }
    ]
    var self = this;
    self.courses = ko.observableArray(staticData);
    self.query = ko.observable();

    self.filteredCourses = ko.computed(function(){
        var filtered = [];
        var orig = self.courses();
        var query = self.query();
        if(query!=null && query.trim().length>0 ){
            for(var index=0;index<orig.length;index++){
                var course = orig[index];
                if(course.courseName.indexOf(query)>=0 || course.courseDescription.indexOf(query)>=0){
                    filtered.push(course);
                }
            }
        }
        else{
            filtered = orig;
        }
        return filtered;
    })

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());