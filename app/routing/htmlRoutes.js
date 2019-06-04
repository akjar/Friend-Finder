// =============================================================================
// 1. require the basic npm packages: Path
// =============================================================================

// require path
var path = require("path");

// =============================================================================
// 2. make routes to the different html pages
// =============================================================================

// be able to access from other files
module.exports = function(app) {

    // displays the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    
    // displays the home page by default
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};