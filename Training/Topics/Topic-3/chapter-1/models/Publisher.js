/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:17 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Publisher constructor
 * @param name - The name of the publisher
 * @constructor
 */
var Publisher = function(publisherName){
    /**
     * Private Member Variable
     */
    var name = publisherName;

    /**
     * Set Publisher name
     * @param name
     */
    this.setName = function(publisherName){
        name = publisherName;
    }

    /**
     * Get Publisher name
     * @return name
     */
    this.getName = function(){
        return name;
    }
}