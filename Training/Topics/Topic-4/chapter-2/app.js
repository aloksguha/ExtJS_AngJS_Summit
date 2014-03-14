/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/27/13
 * Time: 2:15 PM
 * To change this template use File | Settings | File Templates.
 */

function AppViewModel() {
    this.firstName = ko.observable("Rohit");
    this.lastName = ko.observable("Ghatol");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());