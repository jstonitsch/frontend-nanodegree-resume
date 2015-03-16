var bio = {
  "name" : "Justin Stonitsch",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "239-207-6441",
    "email" :"justinstonitsch@gmail.com",
		"github" : "jstonitsch",
		"twitter" : "@jstonitsch",
		"location" : "Ft. Myers, FL"
  },
  "welcomeMessage" : "Thanks for Coming By!!",
  "skills" : [
    "Creative", "Awesomeness", "Efficent", "Collabritive", "HTML", "CSS", "Javascript"
  ],
  "biopic" : "images/fry.jpg",
  "display": function() {
		var formattedRole =
	  	HTMLheaderRole.replace("%data%", bio.role);
	  	$("#header").prepend([formattedRole]);
		var formattedName =
	  	HTMLheaderName.replace("%data%", bio.name);
	  	$("#header").prepend([formattedName]);
		var formattedBioPic =
	  	HTMLbioPic.replace("%data%", bio.biopic);
	  	$("#header").append([formattedBioPic]);
		var formattedWelcomeMsg =
	  	HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	  	$("#header").append([formattedWelcomeMsg]);
		var formattedMobile =
	  	HTMLmobile.replace("%data%", bio.contacts.mobile);
	  	$("#topContacts").append([formattedMobile]);
	  	$("#footerContacts").append([formattedMobile]);
		var formattedEmail =
	  	HTMLemail.replace("%data%", bio.contacts.email);
	  	$("#topContacts").append([formattedEmail]);
	 		$("#footerContacts").append([formattedEmail]);
		var formattedGithub =
	  	HTMLgithub.replace("%data%", bio.contacts.github);
	  	$("#topContacts").append([formattedGithub]);
	  	$("#footerContacts").append([formattedGithub]);
		var formattedTwitter =
	  	HTMLtwitter.replace("%data%", bio.contacts.twitter);
	  	$("#topContacts").append([formattedTwitter]);
	  	$("#footerContacts").append([formattedTwitter]);
		var formattedLocation =
	  	HTMLlocation.replace("%data%", bio.contacts.location);
	  	$("#topContacts").append([formattedLocation]);
	  	$("#footerContacts").append([formattedLocation]);

		if(bio.skills.length > 0) {
	  	$("#header").append([HTMLskillsStart])
	  	for(skill in bio.skills) {
	  		var formattedSkills =
					HTMLskills.replace("%data%", bio.skills[skill]);
					$("#skills").append([formattedSkills]);
			};
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
	  	"url": "http://www.camdentonschools.org"
		},
		{
	  	"name": "Missouri State University",
	  	"location": "Springfield, MO, US",
	  	"degree": "N/A",
	  	"majors": ["N/A"],
	  	"dates": 2006,
	  	"url": "http://www.missouristate.edu"
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
		for(school in education.schools) {
	  	$("#education").append([HTMLschoolStart]);
	  	var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url);
	  	formattedSchoolName =
				HTMLschoolName.replace("%data%", education.schools[school].name);
	  	var formattedSchoolDegree =
				HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append([formattedSchoolName + formattedSchoolDegree]);
	  	var formattedSchoolDates =
				HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append([formattedSchoolDates]);
	  	var formattedSchoolLocation =
				HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append([formattedSchoolLocation]);
	  	var formattedSchoolMajor =
				HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append([formattedSchoolMajor]);
		};

		$("#education").append([HTMLonlineClasses]);

		for(onlineCourse in education.onlineCourses) {
			$("#education").append([HTMLschoolStart]);

			var formattedOnlineTitle =
				HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool =
				HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				$(".education-entry:last").append([formattedOnlineTitle + formattedOnlineSchool]);
			var formattedOnlineDates =
				HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
				$(".education-entry:last").append([formattedOnlineDates]);
			var formattedOnlineURL =
				HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append([formattedOnlineURL]);
		};
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
		};
	}
};

var projects = {
	"projects" : [
		{
			"title": "SFEV Digital Sign",
			"dates": "2015",
			"description": "A webpage formatted to display on a digital sign in showroom",
			"images": ["images/sfevSignScreenshot.png"]
		},
		{
			"title": "Butter",
			"dates": "2014",
			"description": "the cooking",
			"images": ["http://placehold.it/350x250", "http://placehold.it/350x250"]
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

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
				var formattedProjectImage =
					HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append([formattedProjectImage]);
				};
			};
		};
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append([googleMap]);