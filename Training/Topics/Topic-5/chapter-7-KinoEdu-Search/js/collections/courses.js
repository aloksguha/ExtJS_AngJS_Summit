define(['backbone', 'models/course' ], function(Backbone, CourseModel) {

    var courseCollection = Backbone.Collection.extend({
        model: CourseModel
    });

    return courseCollection;
});