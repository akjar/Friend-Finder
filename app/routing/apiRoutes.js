// 1. load the data

// require the data from the friends file
var friends = require("../data/friends.js");

// 2. make routes to the different html pages

// access app from other file
module.exports = function(app) {

    // displays the survey page
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
};