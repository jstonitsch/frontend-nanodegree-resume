var bio = {
	"name" : "Justin Stonitsch",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : 2392076441,
		"email" :"justinstonitsch@gmail.com",
		"github" : "jstonitsch",
		"twitter" : "@jstonitsch",
		"location" : "Ft. Myers, FL"
	},
	"welcomeMessage" : "Thanks for Coming By!!",
	"skills" : [
	"Creative", "Awesomeness", "Efficent", "Collabritive"
		],
	"biopic" : "images/fry.jpg",
	"display": function() {
		$("#header").prepend([formattedName]);
		$("#header").append([formattedRole]);
		$("#header").append([formattedBioPic]);
		$("#header").append([formattedWelcomeMsg]);

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
	}
};

var education = {
	"schools" : [
		{
			"name": "Camdenton High School",
			"location": "Camdenton, MO, US",
			"degree": "Gen Ed",
			"majors": ["N/A"],
			"dates": 2004,
			"url": "www.camdentonschools.org"
		},
		{
			"name": "Missouri State University",
			"location": "Springfield, MO, US",
			"degree": "N/A",
			"majors": ["N/A"],
			"dates": 2006,
			"url": "www.missouristate.edu"
		}

	],
	"onlineCourses": [
		{
			"title": "Frontend Web Developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "www.udacity.com",
		}
	],
	"display": function() {

	}
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
	],
	"display": function() {

	}
};

var projects = {
	"projects" : [
		{
			"title": "Bug",
			"dates": "2012",
			"decsription": "a collection",
			"images": ["placehold.it/250x250", "placehold.it/250x250"]
		},
		{
			"title": "Butter",
			"dates": "2014",
			"decsription": "the cooking",
			"images": ["placehold.it/250x250", "placehold.it/250x250"]
		}
	],
	"display": function() {
	for(project in projects.projects){
		$("#projects").append([HTMLprojectStart]);

		var formattedProjectTitle =
		HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append([formattedProjectTitle]);
		var formattedProjectDates =
		HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append([formattedProjectDates]);
		var formattedProjectDscp =
		HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append([formattedProjectDscp]);
		var formattedProjectImage =
		HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append([formattedProjectImage]);

		}
	}
};

var formattedName =
	HTMLheaderName.replace("%data%", bio.name);
var formattedRole = 
	HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic =
	HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = 
	HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
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

function inName(oldname) {
	var finalName = oldname;
    var names = oldname.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    
    // Don't delete this line!
    return finalName;
};

bio.display();
projects.display();

$("#mapDiv").append([googleMap]);