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
    //Observable Array which holds all courses
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

    //Observables to hold value of new Course form fields
    self.newCourseIcon = ko.observable();
    self.newCourseName = ko.observable();
    self.newCourseDescription = ko.observable();


    //Object to hold the last known error
    self.lastKnownError = ko.observable(null);

    //Callback to add a new course
    self.addNewCourse = function(){
        self.lastKnownError(null);
        if(self.newCourseIcon()!=null
            && self.newCourseName()!=null
            && self.newCourseDescription()!=null
            ){
            this.courses.push(
                {
                    courseIcon:self.newCourseIcon(),
                    courseName:self.newCourseName(),
                    courseDescription:self.newCourseDescription()
                }
            );
        }
        else{
            self.lastKnownError('None of Course Icon, Name or Description can be empty');
        }
        self.newCourseIcon(null);
        self.newCourseName(null);
        self.newCourseDescription(null);
    }

    //Callback to remove a Course
    self.deleteCourse = function(){
        self.lastKnownError(null);
        //this points to the current row (course)
        self.courses.remove(this);
    }

    self.clearError = function(){
        self.lastKnownError(null);
    }


}

// Activates knockout.js
ko.applyBindings(new AppViewModel());