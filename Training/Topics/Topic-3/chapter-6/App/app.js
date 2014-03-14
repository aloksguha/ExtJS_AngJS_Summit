/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:16 AM
 * To change this template use File | Settings | File Templates.
 */

require.config({
    paths: {
        "logger":"utils/Logger",
        "library": "models/Library",
        "user": "models/User",
        "book": "models/Book",
        "bookIssue": "models/BookIssue",
        "author": "models/Author",
        "publisher": "models/Publisher"
    },
    shim: {
        'logger': {
            exports: 'Logger'
        }
    }

});
require(['library', 'user', 'book', 'bookIssue','logger']
    , function (Library, User, Book, BookIssue,Logger) {

        var logger = new Logger('Debug');

        var books = [
            new Book('Android Basics', 'Apress', 'Tim Roberts'),
            new Book('iOS Basics', 'Packt', 'Jim Allens'),
            new Book('Getting Started with HTML5', 'Oreilly', 'Bob Martin')
        ]

        var users = [
            new User('Sadik Rupani'),
            new User('Rohit Ghatol')
        ]


        var library = new Library(books, users);

        library.issueBook(books[1], users[1]);


        logger.log("Fetching All Books from Library");
        var allBooks = library.getBooks();
        var html = "";
        for (var index = 0; index < allBooks.length; index++) {
            var book = allBooks[index];
            logger.log(index + '-' + book.getName() + " From " + book.getPublisher().getName() + " By " + book.getAuthor().getName());
            html = html + "<li>" + book.getName() + " From " + book.getPublisher().getName() + " By " + book.getAuthor().getName() + "</li>";
        }
        var booksUlElem = document.getElementById("books");
        booksUlElem.innerHTML = html;


        logger.log("Fetching All Users from Library");
        var allUsers = library.getUsers();
        html = ""
        for (var index = 0; index < allUsers.length; index++) {
            var user = allUsers[index];
            logger.log(index + '-' + user.getName());
            html = html + "<li>" + user.getName() + "</li>";
        }
        var usersUlElem = document.getElementById("users");
        usersUlElem.innerHTML = html;


        logger.log("Fetching All Books Issued");
        var issuedBooks = library.getIssuedBooks()
        html = ""
        for (var index = 0; index < issuedBooks.length; index++) {
            var bookIssue = issuedBooks[index];
            logger.log(index + '- Book ' + bookIssue.getBook().getName() + " Issued to " + bookIssue.getUser().getName());
            html = html + "<li>Book - " + bookIssue.getBook().getName() + " Issued to " + bookIssue.getUser().getName() + "</li>";
        }

        var booksIssuedUlElem = document.getElementById("booksIssued");
        booksIssuedUlElem.innerHTML = html;

    });