var work = {
	"jobs": [
		{
			"employer": "Oracle",
			"title": "Programmer Analyst",
			"location": "Jalisco, Mexico",
			"dates": "Aug 2012 - Current",
			"description": "In charge of global support to Oracle R12 critical systems. Bug reduction and new enhacements",
			"url":"http://www.oracle.com"
		},
		{
			"employer": "Sang Sang Develpers",
			"title": "Front End Web Developer",
			"location": "DF, Mexico",
			"dates": "Aug 2011 - Aug 2012",
			"description": "Deviced, designed and developer nice and friendly web sites",
			"url":"http://www.google.com"
		},
		{
			"employer": "National Autonomous University of Mexico",
			"title": "Instructor",
			"location": "DF, Mexico",
			"dates": "Aug 2010 - Aug 2011",
			"description": "Gave introductory courses of mathematics, physics and programmig to freshmen",
			"url": "http://www.unam.mx"

		}
	]
};

var projects = {
	"projects":[
		{
			"title": "Mockup Web Site",
			"dates": "Summer 2014",
			"description": "A simple template to create web sites",
			"url": "https://github.com/chinokhan/Nano1-P1"
		},
		{
			"title": "Interactive Resume",
			"dates": "Winter 2014",
			"description":  "A web based interactive resume",
			"url": "https://github.com/chinokhan/Nano1-P2"
		},
		{
			"title": "Fun Places Locator",
			"dates": "Spring 2015",
			"description": "A web based app to pin interesting places in a map",
			"url": "http://www.google.com"
		}
	]
};

var bio = {
	"name": "Ulises Chino",
	"role": "Front End Web Ninja",
	"welcomeMessage": "Welcome to my kingdom",
	"skills" : ["Oracle Database", "PL/SQL", "Oracle Applications", "Oracle R12",
				"HTML5", "CSS3", "Javascript", "JSON"],
	"contact" : {
		"mobile": "+52 1 33 39 45 38 62",
		"email": "ulises.chino@gmail.com",
		"github": "chinokhan",
		"twitter": "@chinokhan",
		"location": "Mexico"
	},
	"pic" : "/images/myPic.jpg"
};

var education = {
	"schools": [
		{
			"name": "National Autonomous University of Mexico",
			"location": "DF, Mexico",
			"degree": "Computer Engineering",
			"majors": [
				"Computer Science",
				"Mathematics"
			],
			"dates": "2006-2012",
			"url": "www.unam.mx"
		}
	],
	"onlineCourses" : [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "Jan-Aug 2015",
			"url": "www.udacity.com"
		},
		{
			"title": "Javascript Roadtrip",
			"school": "Codeschool",
			"dates": "Jan-Mar 2015",
			"url": "www.codeschool.com"
		},
		{
			"title": "Javascript Best Practices",
			"school": "Codeschool",
			"dates": "Feb 2015",
			"url": "www.codeschool.com"
		}
	]
};

function displayHeader(){
	var formattedHTMLheaderName, formattedHTMLheaderRole, formattedHTMLmobile,
	formattedHTMLemail, formattedHTMLtwitter, formattedHTMLgithub,
	formatedHTMLlocation, formattedHTMLbioPic, formattedWelcomeMsg;

	formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
	formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

	formattedHTMLmobile		= HTMLmobile.replace("%data%", bio.contact.mobile);
	formattedHTMLemail		= HTMLemail.replace("%data%", bio.contact.email);
	formattedHTMLtwitter	= HTMLtwitter.replace("%data%", bio.contact.twitter);
	formattedHTMLgithub		= HTMLgithub.replace("%data%", bio.contact.github);
	formatedHTMLlocation	= HTMLlocation.replace("%data%", bio.contact.location);

	formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pic);
	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedHTMLheaderRole);
	$("#header").prepend(formattedHTMLheaderName);

	$("#topContacts").append(formattedHTMLmobile);
	$("#topContacts").append(formattedHTMLemail);
	$("#topContacts").append(formattedHTMLtwitter);
	$("#topContacts").append(formattedHTMLgithub);
	$("#topContacts").append(formatedHTMLlocation);

	$("#header").append(formattedHTMLbioPic);
	$("#header").append(formattedWelcomeMsg);
}

function displaySkills(){
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var element = $("#skills"), formattedHTMLskills;
		for(var i=0, len=bio.skills.length; i<len; i++){
			formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
			element.append(formattedHTMLskills);
		}
	}
}

function displayWork(){
	var formatedWorkEmployer, formattedWorkTitle, formattedWorkDates, formatedWorkLocation, formattedWorkDescription;
	var jobs = work.jobs;
	for(var job in jobs){
		$("#workExperience").append(HTMLworkStart);
		formatedWorkEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
		formatedWorkEmployer = formatedWorkEmployer.replace("#", jobs[job].url);
		formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
		formattedWorkDates = HTMLworkDates.replace("%data%", jobs[job].dates);
		formatedWorkLocation = HTMLworkLocation.replace("%data%", jobs[job].location);
		formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
		$(".work-entry:last").append(formatedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formatedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

function displayProjects(){
	var  formattedProjectTitle, formattedProjectDates,	formattedProjectDescription;
	var p = projects.projects;
	for(var project in p){
		$("#projects").append(HTMLprojectStart);
		formattedProjectTitle = HTMLprojectTitle.replace("%data%", p[project].title);
		formattedProjectDates = HTMLprojectDates.replace("%data%", p[project].dates);
		formattedProjectDescription = HTMLprojectDescription.replace("%data%", p[project].description);
		formattedProjectTitle = formattedProjectTitle.replace("#", p[project].url);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
	}
}


displayHeader();
displaySkills();
displayWork();
displayProjects();

$("#mapDiv").append(googleMap);