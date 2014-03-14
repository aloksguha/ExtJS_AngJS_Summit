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
        define(['book','user'],definition);
    }
//else if module loaded using CommonJs
    else if (typeof module != 'undefined') {
        module.exports = definition(Book,User);
    }
//else if module loaded directly
    else {
        this[name] = definition(Book,User);
    }
}
('BookIssue', function (Book, User) {

        /**
         * BookIssue constructor
         * @param bookTobeIssued - The book to be Issue
         * @param userTobeIssuedTo - The user to be Issued to
         * @constructor
         */
        var BookIssue = function (bookTobeIssued, userTobeIssuedTo) {
            /**
             * Private Member Variables
             */
            var book = bookTobeIssued;
            var user = userTobeIssuedTo;


            /**
             * Set Book
             * @param bookTobeIssued {Book}
             */
            this.setBook = function (bookTobeIssued) {
                book = bookTobeIssued;
            }

            /**
             * Get Book
             * @return {Book} name
             */
            this.getBook = function () {
                return book;
            }

            /**
             * Set User
             * @param userTobeIssuedTo {user}
             */
            this.setUser = function (userTobeIssuedTo) {
                user = userTobeIssuedTo;
            }

            /**
             * Get User
             * @return {User}
             */
            this.getUser = function () {
                return user;
            }


        }
        return BookIssue;
    }))
