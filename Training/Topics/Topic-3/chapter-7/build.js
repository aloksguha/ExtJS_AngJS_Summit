/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 8:24 AM
 * To change this template use File | Settings | File Templates.
 */

({
    baseUrl: ".",
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
    },
    name: "app",
    out: "app.min.js"
})
