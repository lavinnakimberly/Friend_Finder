'use strict';

(function(){
	var path = require("path");
	var people = require("../data/friends")

	module.exports = function(app){
		app.get("/api/friends", function(req, res) {
			res.json(people);
		});

		app.post("/api/friends", function(req, res) {
			var newFriend = req.body;
			var currentScores = [];
			var matchedFriend = 0;
			var matchedScore = 100; //largest value difference

			//function to add array
			function add(a,b){
				return a + b 
			}

			//Get total score for each person in PERSON object
			for(var i = 0; i < people.length; i++){
				//Get scores in people.scores
				var personScore = people[i].scores
				var sum = personScore.reduce(add, 0);
				currentScores.push(sum)
			}

			//Get total score for new entry
			var newFriendScore = newFriend[0].scores;
			var newFriendSum = newFriendScore.reduce(add, 0);

			//Now, compare each score in currentScores (all of the friend's scores) with newFriendSum (the new entry's score)
			for(var i=0; i < currentScores.length; i++){
				//Determine difference between both people
				var friendDelta = Math.abs((newFriendSum - currentScores[i]))
				if(matchedScore >= friendDelta) {
					matchedScore = friendDelta;
					matchedFriend = i;
				}
			}
			//Get name of matched person
			var matchedPerson = people[matchedFriend];
			res.json(matchedPerson);
1		});
	};
})();