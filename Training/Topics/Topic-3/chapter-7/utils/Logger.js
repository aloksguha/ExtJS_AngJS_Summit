/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 8:00 AM
 * To change this template use File | Settings | File Templates.
 */
(function(name, definition) {
//If module loaded using RequireJs
    if (typeof define == 'function' && define.amd) {
        define(definition);
    }
//else if module loaded using CommonJs
    else if (typeof module != 'undefined') {
        module.exports = definition();
    }
//else if module loaded directly
    else {
        this[name] = definition();
    }
}
('Logger', function () {
    /**
     * Create Log Level with one of the Log Levels - Info,Warn,Debug, Error
     * @param logLevel
     * @constructor
     */
    var Logger = function (logLevel) {
        var level = logLevel || 'Info';

        /**
         * Log the given message
         * @param message
         */
        this.log = function (message) {
            console.log(level + '  :  ' + message);
        }
    }
    return Logger;
}));