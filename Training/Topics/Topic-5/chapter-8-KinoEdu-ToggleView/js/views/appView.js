define([ 'jquery', 'underscore', 'backbone', 'text!templates/appTpl.html', 'collections/courses', 'models/course', 'views/courseView' ],
    function($, _, Backbone, appTemplate, CourseCollection, CourseModel, CourseView) {

        var appView = Backbone.View.extend({

            events: {
                "keyup input.search": "filter",
                "click span.grid-view": "gridView",
                "click span.list-view": "listView"
            },

            template : _.template(appTemplate),

            initialize: function(){

                this.viewType = "grid";

                this.courses = new CourseCollection;

                this.listenTo(this.courses, "reset", this.renderCourses);

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
                        description:"Teaches Hello World Application in Android"
                    },{
                        name:"iOS Basics",
                        description:"Teaches Hello World Application in iOS"
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
                                        '</div>');
                }

                var self = this;
                this.courses.each(function(course){
                    var courseView = new CourseView({
                        model: course,
                        viewType: self.viewType
                    });
                    this.$("#course-list").append(courseView.render().el);
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
            }
        });

        return appView;
    });
