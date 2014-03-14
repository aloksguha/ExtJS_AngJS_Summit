/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 6:16 AM
 * To change this template use File | Settings | File Templates.
 */

var books = [
            new Book('Android Basics','Apress','Tim Roberts'),
            new Book('iOS Basics','Packt','Jim Allens'),
            new Book('Getting Started with HTML5','Oreilly','Bob Martin')
        ]

var users = [
            new User('Sadik Rupani'),
            new User('Rohit Ghatol')
        ]


var library = new Library(books, users);

library.issueBook(books[1],users[1]);


console.log("Fetching All Books from Library");
var allBooks = library.getBooks();
var html = "";
for(var index=0;index<allBooks.length;index++){
    var book = allBooks[index];
    console.log(index+'-' +book.getName() +" From "+book.getPublisher().getName()+" By "+book.getAuthor().getName());
    html = html + "<li>"+book.getName() +" From "+book.getPublisher().getName()+" By "+book.getAuthor().getName()+"</li>";
}
var booksUlElem = document.getElementById("books");
booksUlElem.innerHTML = html;


console.log("Fetching All Users from Library");
var allUsers = library.getUsers();
html = ""
for(var index=0;index<allUsers.length;index++){
    var user = allUsers[index];
    console.log(index+'-' +user.getName());
    html = html + "<li>"+user.getName()+"</li>";
}
var usersUlElem = document.getElementById("users");
usersUlElem.innerHTML = html;


console.log("Fetching All Books Issued");
var issuedBooks = library.getIssuedBooks()
html = ""
for(var index=0;index<issuedBooks.length;index++){
    var bookIssue = issuedBooks[index];
    console.log(index+'- Book ' +bookIssue.getBook().getName()+" Issued to "+bookIssue.getUser().getName());
    html = html + "<li>Book - " +bookIssue.getBook().getName()+" Issued to "+bookIssue.getUser().getName()+"</li>";
}

var booksIssuedUlElem = document.getElementById("booksIssued");
booksIssuedUlElem.innerHTML = html;
