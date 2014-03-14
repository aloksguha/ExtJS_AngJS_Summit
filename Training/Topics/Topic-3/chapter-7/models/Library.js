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
        define(['user','book','bookIssue'],definition);
    }
//else if module loaded using CommonJs
    else if (typeof module != 'undefined') {
        module.exports = definition(User,Book,BookIssue);
    }
//else if module loaded directly
    else {
        this[name] = definition(User,Book,BookIssue);
    }
}
    ('Library', function(User,Book, BookIssue){

    /**
     * Library constructor
     * @param name - The name of the Library
     * @constructor
     */

    var Library = function(libBooks, libUsers){

        /**
         * Private Member variables
         */
        var books = libBooks || [];
        var users = libUsers || [];
        var bookIssues = [];

        /**
         * Get Books in Library
         * @return {Book|Array}
         */
        this.getBooks = function(){
            return books;
        }

        /**
         * Set Books in Library
         * @param {Book|Array} libBooks
         */
        this.setBooks = function(libBooks){
            books = libBooks;
        }

        /**
         * Add a book to the library
         * @param {Book} book
         */
        this.addBook = function(book){
            books.push(book);
        }

        /**
         * Get Users in Library
         * @return {User|Array}
         */
        this.getUsers = function(){
            return users;
        }

        /**
         * Set Users in Library
         * @param {User|Array} libUsers
         */
        this.setUsers = function(libUsers){
            users = libUsers;
        }

        /**
         * Add a User to the Library
         * @param {User} user
         */
        this.addUser = function(user){
            users.push(user);
        }

        /**
         * Issue a Book to a given User
         * @param {Book} book
         * @param {User} user
         */
        this.issueBook = function(book, user){
            bookIssues.push(new BookIssue(book,user));
        }

        /**
         * Get All the Issued books
         * @return {BookIssue|Array}
         */
        this.getIssuedBooks = function(){
            return bookIssues;
        }



    }
    return Library;
}));
