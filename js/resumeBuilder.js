var bio = {
	"name" : "CMOI",	
	"skills" : ["introversion ", "chivalry ", "Java "],
	"contact" : [
	
	{
		"mobile" : "6139155344",
		"email" : "cmoisesele@live.com",
		"github" : "g-i-arc"
		
	},
	
	{
		"twitter" : "@cmoitweet",
		"instagram" : "@cmoigram",
		"snapchat" : "cmoichat"
	}
	],
	"image" : "images/cmoi.jpg" 
}
bio.age = "22"
bio.quote = "life is a traffic jam"
bio["role"] = "Software Engineer"

/*var work = {}
work["employer"] = "internet multimedia"
work["years"] = "A month"
work["position"] = "intern"
*/

var work = {
	"jobs":[
	{
		"employer" : "Christ Embassy Ottawa",
		"duration" : "September 2013 - present",
		"position" : "technician"
	},
	{
		"employer" : "internet multimedia",
		"duration" : "August 2014",
		"position" : "intern"
	},
	{
		"employer" : "inner city mission",
		"duration" : "August 2013",
		"position" : "intern"
	}
	]
}
var project = {
	"projects" : [
	{
		"title" : "Online resume",
		"dates" : "2015",
		"description" : " ",
		"images" : [
			"http://static.goal.com/3057800/3057822_heroa.jpg",
			"http://static.djbooth.net/pics-features/drake-1-listen-review.jpg"
		]
	}
	]
}
var education = {
	"schools": [
	{
		"name": "Carleton University",
		"location": "Ottawa, ON, Canada",
		"degree": "BA",
		"major": ["SEng"],
		"dates": 2013
	},
	{
		"name": "Global International College",
		"location": "Lekki, Lagos, Nigeria",
		"degree": " ",
		"major": ["GEng"],
		"dates": 2012
	}
	]
}
/*
var makeCourse = function(){
	console.log("Write in coursive")
}
var courses = 0
while (bio.age === "22"){
	makeCourse()
	courses ++
	if(courses === 10) bio.age++
}*/
//console.log(bio.age)
//$("#main").prepend(work.position)
//$("#main").append(bio["age"])