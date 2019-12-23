var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
	request("https://api.sunrise-sunset.org/json?lat=37.352390&lng=-121.953079", function(error, response, body){
		
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body)
				res.render("results", {data: data});
				var localTime = data["results"]["sunset"];
				console.log(localTime);
			}
	});
});


app.listen(3000, () => console.log('listening at port 3000'));  