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
            courseIcon:ko.observable("A"),
            courseName:ko.observable("Android Basics"),
            courseDescription:ko.observable("Teaches Hello World Application in Android"),
            editing:ko.observable(false)

        },
        {
            courseIcon:ko.observable("i"),
            courseName:ko.observable("iOS Basics"),
            courseDescription:ko.observable("Teaches Hello World Application in iOS"),
            editing:ko.observable(false)
        },
        {
            courseIcon:ko.observable("H"),
            courseName:ko.observable("HTML5 Basics"),
            courseDescription:ko.observable("Teaches HTML5 Fundamentals"),
            editing:ko.observable(false)
        },
        {
            courseIcon:ko.observable("C"),
            courseName:ko.observable("CSS 3 Basics"),
            courseDescription:ko.observable("Teaches CSS3 Fundamentals"),
            editing:ko.observable(false)

        },
        {
            courseIcon:ko.observable("M"),
            courseName:ko.observable("MongoDB Basics"),
            courseDescription:ko.observable("MongoDB Primer"),
            editing:ko.observable(false)
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
                if(course.courseName().indexOf(query)>=0 || course.courseDescription().indexOf(query)>=0){
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
                    courseIcon:ko.observable(self.newCourseIcon()),
                    courseName:ko.observable(self.newCourseName()),
                    courseDescription:ko.observable(self.newCourseDescription()),
                    editing:ko.observable(false)
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

    self.startEditing = function(){
        this.editing(true);
    }
    self.doneEditing = function(){
        this.editing(false);
    }

    self.clearError = function(){
        self.lastKnownError(null);
    }

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());