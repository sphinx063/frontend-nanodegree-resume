/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("[Murtyunjaya]");
 var awesomeThoughts="I am Mrutyunjaya and I am awesome";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("awesome","fun");
 console.log(funThoughts);
 var s = "audacity";
 var udacityizer = function(s){
 	var res1;
 	var res2;
 	var res3;
 	var final;
 	if(s=='audacity'){
 		res1 = s.slice(1).substring(0,1).toUpperCase();
 		res2=s.slice(1);
 		res3=res2.substring(1,res2.length);
 		final=res1+res3;

 	}
 	return final;
 };
 var sampleArray = [1,2,3];
 var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice();
    var lastIndex = newArray.length-1;
    newArray[lastIndex] = newArray[lastIndex]+1;
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    
    // Don't delete this line!
    return newArray;
};
var skills = ["awesomeness", "killer instinct", "save the planet", "football freak"];
var bio = {
	"name" : "Mrutyunjaya Lenka",
	"role" : "Web Developer",
	"contacts" : {"mobile" : "480-465-2685",
					"github" : "https://github.com/sphinx063/",
					"email" : "rinku.cse12@gmail.com",
					"location" : "Tempe"},
	"picture" : "http://vignette1.wikia.nocookie.net/kungfupanda/images/7/73/KFP3-promo-po4.jpg/revision/latest/scale-to-width-down/270?cb=20150726165358",
	"skills" : skills,
	"welcome" : "\"Greatness lives here!\""

};


//$("#header").append("<img style='width:100%' src='"+bio.picture+"'>");

 console.log(incrementLastArrayElement(sampleArray));
/*var work = {};
work.currentJob = "JS Developer";
work.employer = "Bingo.com";
work.years = 2;
work.city = "Bangalore";
var education = {};
education["lastSchool"] = "Arizona State University";
education["years"] = "2015-2017";
education["city"] = "Tempe";
$("#main").append(work["currentJob"]);
$("#main").append(education.lastSchool);
*/
var education =  {
 	"schools": [{
 		"name": "ASU",
 		"major": "CS",
 		"years": "2015-2017",
 		"location": "Tempe",
 		"degree":"MS"
 	}, {
 		"name": "NIT",
 		"major": "CS",
 		"years": "2008-2012",
 		"location": "Rourkela",
 		"degree":"BTech"
 	}]
 };
 var work = {
 	"jobs": [{
 		"employer":"HBB",
 		"dates":"2014-2015",
 		"title":"Developer",
 		"location":"Bangalore",
 		"description":["JavaScript","HTML5","Unity3d"]
 	},
 	{
 		"employer":"ITC",
 		"dates":"2012-2014",
 		"title":"Consultant",
 		"location":"Bangalore",
 		"description":["Java","J2EE","SQL"]
 	}
 	]
 };
 var project = {
 	"projects": [{
 		"title":"Format String",
 		"dates":"2016 Spring",
 		"images":["file:///C:/Users/sphinx/Downloads/1.jpg","file:///C:/Users/sphinx/Downloads/2.jpg"],
 		"description":["C","objdump","gdb"]
 	},
 	{
 		"title":"Travel Guide",
 		"dates":"2015 Fall",
 		"images":["file:///C:/Users/sphinx/Downloads/3.jpg","file:///C:/Users/sphinx/Downloads/4.png"],
 		"description":["Java",".NET","XML"]
 	}
 	]
 };

work.display = function(){
	for(var i=0;i<work.jobs.length;i++){
	console.log(work.jobs.length);
	var employer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var title = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var mainTitle = employer+title;	
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(mainTitle);
	//$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer));
	//$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[i].title));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
	}
}
work.display();
$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
	console.log(loc.pageX);
	console.log(loc.pageY);
});
$("#main").append(internationalizeButton);
function inName(name){
	var names = name.split(" ");
	firstName = names[0].substring(0,1).toUpperCase()+names[0].substring(1,names[0].length).toLowerCase();
	lastName = names[1].toUpperCase();
	return firstName+" "+lastName;
}
console.log(inName("sebastian thrun"));
project.display = function(){
	for(var i=0;i<project.projects.length;i++){
		console.log(project.projects.length);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.projects[i].description));
		if(project.projects[i].images.length>0){
			for(var j=0;j<project.projects[i].images.length;j++){
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.projects[i].images[j]));
			}
		}
	}
}
project.display();
education.display=function(){
	for(var i=0;i<education.schools.length;i++){
		console.log(education.schools.length);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].years));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].major));
	}	
}
education.display();
bio.display=function(){
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 	var formattedName = HTMLheaderName.replace("%data%",bio.name);
 	$("#header").append(formattedName);
 	$("#header").append(formattedRole);
 	var emailTop = HTMLcontactGeneric.replace("%contact%","email").replace("%data%",bio.contacts.email);
 	var mobTop = HTMLcontactGeneric.replace("%contact%","Mob").replace("%data%",bio.contacts.mobile);
 	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
 	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
 	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#footerContacts").append(emailTop);
	$("#footerContacts").append(mobTop);
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));

	$("#header").append(HTMLbioPic.replace("%data%",bio.picture));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcome));
	//$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	//$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
	//$("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
	//$("#header").append(HTMLlocation.replace("%data%",bio.contacts.location));
	if(bio.hasOwnProperty('skills')){
		$("#header").append(HTMLskillsStart);
		for(var i=0;i<bio.skills.length;i++){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
}
bio.display();
$("#mapDiv").append(googleMap);