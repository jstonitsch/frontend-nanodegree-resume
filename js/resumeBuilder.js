var bio = {
		"name" : "Justin Stonitsch",
		"role" : "Web Developer",
		"contacts" : {
			"email" :"justinstonitsch@gmail.com",
			"mobile" : 2392076441,
			"twitter" : "@jstonitsch",
			"github" : "jstonitsch",
			"blog" : "N/A",
			"location" : "Ft. Myers, FL"
		},
		"bioPic" : "images/fry.jpg",
		"welcome" : "Thanks for Coming By!!",
		"skills" : [
		"Creative", "Awesomeness", "Efficent", "Collabritive"
			]
};
var work = {
	"jobs": [
		{
			"employer": "SFEV",
			"title": "EVT",
			"location": "Ft. Myers, FL, US",
			"dates": "2008 - Present",
			"description": "Firetruck Stuff"
		},
		{
			"employer": "Vitex Home Systems",
			"title": "Tech",
			"location": "Naples, FL, US",
			"dates": "2012 - 2013",
			"description": "Home Networking, Alarms, Automation"
		}
	]
};
var education = {
	"schools" : [
		{
			"name": "Camdenton High School",
			"location": "Camdenton, MO, US",
			"degree": "Gen Ed",
			"major": "N/A"
		},
		{
			"name": "Missouri State University",
			"location": "Springfield, MO, US",
			"degree": "N/A",
			"major": "N/A"
		}

	]
};
var projects = {
	"project" : [
		{
			"title": "Bug",
			"dates": "2012",
			"decsription": "a collection",
			"images": []
		},
		{
			"title": "Butter",
			"dates": "2014",
			"decsription": "the cooking",
			"images": []
		}
	]
};


var formattedName =
	HTMLheaderName.replace("%data%", bio.name);
var formattedRole = 
	HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic =
	HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = 
	HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedEmail =
	HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile =
	HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter =
	HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub =
	HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog =
	HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation =
	HTMLlocation.replace("%data%", bio.contacts.location);					
var formattedSkills =
	HTMLskills.replace("%data%", bio.skills);	


$("#header").prepend([formattedName]);
$("#header").append([formattedRole]);
$("#header").append([formattedBioPic]);
$("#header").append([formattedWelcomeMsg]);
/*$("#header").append([HTMLskillsStart]);
$("#header").append([formattedSkills]);
$("#topContacts").append([formattedEmail]);
$("#topContacts").append([formattedMobile]);
$("#topContacts").append([formattedTwitter]);
$("#topContacts").append([formattedGithub]);
$("#topContacts").append([formattedBlog]);
$("#topContacts").append([formattedLocation]);
$("#workExperience").append([work["employer"]]);
*/

if(bio.skills.length > 0) {
	$("#header").append([HTMLskillsStart])

	var formattedSkills =
	HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append([formattedSkills]);
	formattedSkills =
	HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append([formattedSkills]);
	formattedSkills =
	HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append([formattedSkills]);
	formattedSkills =
	HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append([formattedSkills]);
};

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append([HTMLworkStart]);

		var formattedWorkEmployer =
		HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle =
		HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append([formattedWorkEmployer + formattedWorkTitle]);
		var formattedWorkDates =
		HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append([formattedWorkDates]);
		var formattedWorkLocation =
		HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append([formattedWorkLocation]);
		var formattedWorkDescription =
		HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append([formattedWorkDescription]);
	}
};

displayWork();

$(document).click(function(loc) { // your code goes here 
	//var logClicks = loc.pageX + " " + loc.pageY;
	//console.log(logClicks);
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});	

function inName(oldname) {
	var finalName = oldname;
    var names = oldname.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    
    // Don't delete this line!
    return finalName;
};

projects.display = function() {
	for(project in projects.project){
		$("#projects").append([HTMLprojectStart]);

		var formattedProjectTitle =
		HTMLprojectTitle.replace("%data%", projects.project[project].title);
		$(".project-entry:last").append([formattedProjectTitle]);
		var formattedProjectDates =
		HTMLprojectDates.replace("%data%", projects.project[project].dates);
		$(".project-entry:last").append([formattedProjectDates]);
		var formattedProjectDscp =
		HTMLprojectDescription.replace("%data%", projects.project[project].description);
		$(".project-entry:last").append([formattedProjectDscp]);
		var formattedProjectImage =
		HTMLprojectImage.replace("%data%", projects.project[project].image);
		$(".project-entry:last").append([formattedProjectImage]);


	}
};

projects.display();

$("#mapDiv").append([googleMap]);