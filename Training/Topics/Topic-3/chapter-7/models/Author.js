/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:17 AM
 * To change this template use File | Settings | File Templates.
 */
(function(name, definition) {
//If module loaded using RequireJs
    if (typeof define == 'function' && define.amd) {
        define([],definition);
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
    ('Author', function () {
    /**
     * Author constructor
     * @param name - The name of the Author
     * @constructor
     */
    var Author = function (authorName) {

        /**
         * Private Member Variable
         */
        var name = authorName;

        /**
         * Set Author name
         * @param name
         */
        this.setName = function (authorName) {
            name = authorName;
        }

        /**
         * Get Author name
         * @return name
         */
        this.getName = function () {
            return name;
        }
    }

    return Author;
}))
