define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/courses', 'models/course', 'views/courseView' ],
    function($, _, Backbone, appTemplate, CourseCollection, CourseModel, CourseView) {

        var appView = Backbone.View.extend({

            events: {
                "keyup input.search": "filter",
                "click span.grid-view": "gridView",
                "click span.list-view": "listView",
                "click .save-btn": "saveCourse"
            },

            template : _.template(appTemplate),

            initialize: function(){
                this.editCourseModel = null;

                this.viewType = "grid";

                this.courses = new CourseCollection;

                this.listenTo(this.courses, "reset", this.renderCourses);
                this.listenTo(this.courses, "add", this.addOneCourse);

                this.dataArr = [
                    {
                        icon: "H",
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
                        description:"Hello World App in Android"
                    },{
                        name:"iOS Basics",
                        description:"Hello World App in iOS"
                    }
                ];

                this.courses.add(this.dataArr);

                this.render();
            },

            render: function() {
                this.$el.html(this.template());
                this.renderCourses();
                return this;
            },

            renderCourses: function(){
                this.$("#course-list").html("");

                if(this.viewType=="list"){
                    this.$("#course-list").html(
                                            '<div class="course-row header"><div class="clogo"></div>'+
                                            '<div class="course-name">Name</div>'+
                                            '<div class="course-desc">Description</div>'+
                                            '<div class="course-action">Actions</div>'+
                                        '</div>');
                }


                var self = this;
                this.courses.each(function(course){
                    self.addOneCourse(course);
                });
            },

            filter: function(){
                var searchStr = this.$("input.search").val();

                //filter collection
                this.courses.reset(
                    _.filter(this.dataArr, function(course){
                        return course.name.indexOf(searchStr)!=-1;
                    }
                ));
            },

            gridView: function(event){
                this.viewType = "grid";
                this.renderCourses();

                $(event.target).siblings().removeClass("active");
                $(event.target).addClass("active");
            },

            listView: function(event){
                this.viewType = "list";
                this.renderCourses();

                $(event.target).siblings().removeClass("active");
                $(event.target).addClass("active");
            },

            saveCourse: function(){
                var newCourse = new CourseModel({
                    "icon": this.$("#course-form input[name=icon]").val(),
                    "name": this.$("#course-form input[name=name]").val(),
                    "description": this.$("#course-form input[name=description]").val()
                });

                if (!newCourse.isValid()) {
                    alert("Please fill all the details");
                    return;
                }

                if(this.editCourseModel){  //Edit mode
                    this.editCourseModel.set(newCourse.toJSON());

                    this.editCourseModel = null;
                } else { //create new
                    this.courses.add(newCourse);
                }

                this.resetForm();
            },

            addOneCourse: function(newCourse){
                var self = this;
                var courseView = new CourseView({
                    model: newCourse,
                    viewType: self.viewType
                });
                this.$("#course-list").append(courseView.render().el);

                this.listenTo(courseView, "onEdit", this.editCourse);
            },

            resetForm: function(){
                this.$("#course-form input[name=icon]").val(""),
                this.$("#course-form input[name=name]").val(""),
                this.$("#course-form input[name=description]").val("")
            },

            editCourse: function(course){
                this.editCourseModel = course;
                this.$("#course-form input[name=icon]").val(course.get("icon")),
                this.$("#course-form input[name=name]").val(course.get("name")),
                this.$("#course-form input[name=description]").val(course.get("description"))
            }
        });

        return appView;
    });
