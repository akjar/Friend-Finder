// =============================================================================
// 1. load the data
// =============================================================================

// require the data from the friends file
var friends = require('../data/friends.js')

// =============================================================================
// 2. make routes to the different html pages
// =============================================================================

// access app from other file
module.exports = function (app) {
  // displays the survey page
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  // posting the data
  app.post('/api/friends', function (req, res) {
    // create a variable
    var bestMatch = {
      name: '',
      photo: '',
      friendDifference: 1000
    }

    // create variables for results from the survey
    var userData = req.body
    var userScores = userData.scores

    // create a variable for the score difference
    var totalDifference = 0

    // go through all of the friends
    for (var i = 0; i < friends.length; i++) {
      // go through the friends scores
      for (var j = 0; j < friends[i].scores[j]; j++) {
        // calculate the difference of scores
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

        // if the new difference socre is less then the current match then change the match with the new friends
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name
          bestMatch.photo = friends[i].photo
          bestMatch.friendDifference = totalDifference
        }
      }
    }
    // push the data to the database
    friends.push(userData)

    // turn best match into json format
    res.json(bestMatch)
  })
}
