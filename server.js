// =============================================================================
// 1. require the basic npm packages: Express
// =============================================================================

// requiring express
var express = require("express");

// =============================================================================
// 2. set up my server properties
// =============================================================================

// create an express server
var app = express();

// set up a port
var PORT = process.env.PORT || 8080;

// allow app to parse the data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// =============================================================================
// 3. require our route files
// =============================================================================

// require api routes
require("./app/routing/apiRoutes")(app);

// require html routes
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// 4. start server by listening to port
// =============================================================================

// start the server
app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT)
});