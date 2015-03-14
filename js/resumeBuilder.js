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
    "Creative", "Awesomeness", "Efficent", "Collabritive"
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
	  	var formattedSkills =
				HTMLskills.replace("%data%", bio.skills);
	  	formattedSkills =
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
	  	var formattedSchoolName =
				HTMLschoolName.replace("%data%", education.schools[school].name);1
				$(".education-entry:last").append([formattedSchoolName]);
	  	var formattedSchoolDegree =
				HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append([formattedSchoolDegree]);
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
		for(onlineCourse in education.onlineCourses) {
			$("#education").append([HTMLschoolStart]);

			var formattedOnlineTitle =
				HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
				$(".education-entry:last").append([HTMLonlineClasses]);
				$(".education-entry:last").append([formattedOnlineTitle]);
			var formattedOnlineSchool =
				HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				$(".education-entry:last").append([formattedOnlineSchool]);
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
			"title": "Bug",
			"dates": "2012",
			"description": "a collection",
			"images": ["http://placehold.it/250x250", "http://placehold.it/250x250"]
		},
		{
			"title": "Butter",
			"dates": "2014",
			"description": "the cooking",
			"images": ["http://placehold.it/250x250", "http://placehold.it/250x250"]
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
			/*var formattedProjectImage =
				HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append([formattedProjectImage]);
			*/
			if(projects.projects[project].images.length > 0) {
				var formattedProjectImage =
					HTMLprojectImage.replace("%data%", projects.projects[project].images);
				formattedProjectImage =
					HTMLprojectImage.replace("%data%", projects.projects[0].images);
					$(".project-entry:last").append([formattedProjectImage]);
				formattedProjectImage =
					HTMLprojectImage.replace("%data%", projects.projects[1].images);
					$(".project-entry:last").append([formattedProjectImage]);
			};
		};
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append([googleMap]);