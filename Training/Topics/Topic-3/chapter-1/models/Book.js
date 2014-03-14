/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:17 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Book constructor
 * @param name - The name of the Book
 * @constructor
 */
var Book = function(bookName,publisherName, authorName){
    /**
     * Private Member Variables
     */
    var name = bookName;
    var publisher = new Publisher(publisherName);
    var author = new Author(authorName);

    /**
     * Set Book name
     * @param name
     */
    this.setName = function(bookName){
        name = bookName;
    }

    /**
     * Get Book name
     * @return name
     */
    this.getName = function(){
        return name;
    }

    /**
     * Set Publisher of the book
     * @param bookPublisher {Publisher}
     */
    this.setPublisher = function(bookPublisher){
        publisher = bookPublisher;
    }

    /**
     * Get the Publisher of the book
     * @return {Publisher}
     */
    this.getPublisher = function(){
        return publisher;
    }

    /**
     * Set the Author of the Book
     * @param bookAuthor {Author}
     */
    this.setAuthor = function(bookAuthor){
        author = bookAuthor;
    }

    /**
     * Get the Author of the Book
     * @return {Author}
     */
    this.getAuthor = function(){
        return author;
    }

}