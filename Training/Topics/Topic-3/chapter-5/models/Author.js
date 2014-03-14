/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:17 AM
 * To change this template use File | Settings | File Templates.
 */
define([], function () {
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
});
