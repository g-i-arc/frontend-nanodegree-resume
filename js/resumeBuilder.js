var name = HTMLheaderName.replace("%data%", "Craig Isesele")
var role  = HTMLheaderRole.replace("%data%","Developer")
var mobile = HTMLmobile.replace("%data","6139155344")
var email = HTMLemail.replace("%data","cmoisesele@live.com")
var address = HTMLlocation.replace("%data","1233 Colonel by Drive")
//
$("#main").prepend(role)
$("#main").prepend(name)
/*
This is empty on purpose! Your code to build the resume will go here.
 */


//
var s = "audacity";

var udacityizer = function(s) {  
	/*
	My code passed
	s = s.slice(1)
	var firstLetter  = s.charAt(0)
	firstUpperLetter  = firstLetter.toUpperCase()
	s = s.replace(firstLetter, firstUpperLetter)
	*/
	//s = s[1].toUpperCase() + s.slice(2);
    return s;
};
// Did your code work? The line below will tell you!
console.log(udacityizer(s));