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
    this.courses = ko.observableArray(staticData);

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());