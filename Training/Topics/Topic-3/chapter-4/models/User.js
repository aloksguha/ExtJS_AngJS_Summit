/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:24 AM
 * To change this template use File | Settings | File Templates.
 */




define([], function(){

    /**
     * User constructor
     * @param name - The name of the User
     * @constructor
     */
    var User = function(UserName){

        /**
         * Private Member Variable
         */
        var name = UserName;

        /**
         * Set User name
         * @param name
         */
        this.setName = function(UserName){
            name = UserName;
        }

        /**
         * Get User name
         * @return name
         */
        this.getName = function(){
            return name;
        }
    }
    return User;
})
