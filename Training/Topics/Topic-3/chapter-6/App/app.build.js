/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/29/13
 * Time: 8:35 AM
 * To change this template use File | Settings | File Templates.
 */

({
    appDir: ".",
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
    dir: "../Dist",
    modules: [
        {
            name: "app"
        }
    ]
})