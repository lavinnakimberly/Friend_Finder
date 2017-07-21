var path = require("path");
var dummyData = require("./../data/friends.js");

module.exports = function(app) {


app.get("/api/friends", function(req, res) {

    res.json(dummyData);

});

app.post("/api/friends", function(req, res) {
function add(a,b){
    return a + b 
}
var scoreCheck = []
for(i = 0; i < dummyData.length; i++){
    var sum = dummyData[i].scores.reduce(add, 0);
    scoreCheck.push(sum)
}

var newEntry = req.body.scores;
console.log(newEntry);
var newScore = newEntry.reduce(add,0);

 
    console.log(sum);
    console.log(newScore);
    res.json(req.body);

});

}