var work = {
	"jobs": [
		{
			"employer": "Oracle",
			"title": "Programmer Analyst II",
			"location": "Reedwood City, CA",
			"dates": "Aug 2012 - Present",
			"description": "Our team is in charge of implementation, development and operational support of Oracle R12 critical systems, more specifically Oracle Financials, Oracle E-Business Suite, Oracle Fusion, and Oracle ERP. We support countries with high volume transactions and our work has leading to a  considerable reduction of bugs and an overall improvement of the modules through new enhancements. I have experience in Business Intelligence and Oracle Report adapting and improving several financials report that lead to a better decision making and auditory purposes for in the business. I also work in several internal projects to implement new solutions to extend and adapt the current system to Oracle evolving needs.",
			"url":"http://www.oracle.com"
		},
		{
			"employer": "Sang Sang Develpers",
			"title": "Front End Web Developer",
			"location": "Jalisco, Mexico",
			"dates": "Aug 2011 - Aug 2012",
			"description": "Deviced, designed and developer nice and friendly web sites for commercial and marketing purpouses using standard web technologies. I also developed several mini games in android to archieve a effective position branding of the companies we worked with.",
			"url":"http://www.sangsang.com.mx"
		},
		{
			"employer": "National Autonomous University of Mexico",
			"title": "Instructor",
			"location": "DF, Mexico",
			"dates": "Aug 2010 - Aug 2011",
			"description": "I studied computer engineering in one of the top universities in Latin America and took several extracurricular courses in mathematics, social sciences and languages. I worked as a part time instructor giving introductory courses of mathematics, physics and programming to freshmen.",
			"url": "http://www.unam.mx"

		}
	],

	display: function(){
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

	} // display ends
}; //work ends

var projects = {
	"projects":[
		{
			"title": "Interactive Resume",
			"dates": "Winter 2014",
			"description":  "A web based interactive resume",
			"url": "https://github.com/chinokhan/Nano1-P2",
			"images": ["images/p1.1.jpg","images/p1.2.jpg"]
		},
		{
			"title": "Mockup Web Site",
			"dates": "Winter 2014",
			"description": "A simple template to create web sites",
			"url": "https://github.com/chinokhan/Nano1-P1",
			"images": []
		}
	],

	display: function(){
		var  formattedProjectTitle, formattedProjectDates,	formattedProjectDescription, formattedProjectImage;
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
			$(".project-entry:last").append(HTMLprojectImagesStart);
			for(var i=0, n=p[project].images.length; i<n; i++){
				formattedProjectImage = HTMLprojectImage.replace("%data%", p[project].images[i]);
				$(".project-imgs:last").append(formattedProjectImage);
			}
		}

	}//display ends
}; //projects ends

var education = {
	"schools": [
		{
			"name": "Free University of Berlin",
			"location": "Berlin, Germany",
			"degree": "Computer Engineering",
			"majors": ["Computer Science"],
			"dates": 2013,
			"url": "http://www.fu-berlin.de/en/"
		},
		{
			"name": "National Autonomous University of Mexico",
			"location": "DF, Mexico",
			"degree": "Computer Engineering",
			"majors": ["Computer Science","Mathematics"],
			"dates": 2012,
			"url": "http://www.unam.mx"
		},
		{
			"name": "Escuela Nacional Preparatoria",
			"location": "DF, Mexico",
			"degree": "Computer technician",
			"majors": ["Mechanics"],
			"dates": 2006,
			"url": "http://www.prepa9.unam.mx"
		}
	],
	"onlineCourses" : [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"title": "Javascript Roadtrip",
			"school": "Codeschool",
			"dates": 2015,
			"url": "http://www.codeschool.com"
		},
		{
			"title": "Javascript Best Practices",
			"school": "Codeschool",
			"dates": 2015,
			"url": "http://www.codeschool.com"
		}
	],

	display: function(){
		var formattedSchoolName,
		formattedSchoolDegree,
		formattedSchoolDates,
		formattedSchoolLocation,
		formattedSchoolMajor,
		schools = education.schools;

		for(var school in schools){
			$("#education").append(HTMLschoolStart);
			formattedSchoolName = HTMLschoolName.replace("%data%", schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("#", schools[school].url);
			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
			formattedSchoolDates = HTMLschoolDates.replace("%data%", schools[school].dates);
			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			for(var i=0, n=schools[school].majors.length; i<n; i++){
				formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[school].majors[i]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}

		}

		$("#education").append(HTMLonlineClasses);

		var formatedOnlineTitle,
		formatedOnlineSchool,
		formatedOnlineDates,
		courses = education.onlineCourses;
		for(var course in courses){
			$("#education").append(HTMLschoolStart);
			formatedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[course].title);
			formatedOnlineTitle = formatedOnlineTitle.replace("#", courses[course].url);
			formatedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[course].school);
			formatedOnlineDates = HTMLonlineDates.replace("%data%", courses[course].dates);
			$(".education-entry:last").append(formatedOnlineTitle + formatedOnlineSchool);
			$(".education-entry:last").append(formatedOnlineDates);
			$(".education-entry:last").append("<br>");
		}

	} //display ends
}; //education ends

var bio = {
	"name": "Ulises Chino",
	"role": "Front End Web Ninja",
	"welcomeMessage": "Welcome to my kingdom",
	"skills" : ["Oracle Database", "PL/SQL", "Oracle Applications", "Oracle R12",
				"Oracle Fusion Middleware",	"HTML5", "CSS3", "Javascript", "JSON",
				"Bootstrap", "AngularJS", "Polymer"],
	"contacts" : {
		"mobile": "+52 1 33 39 45 38 62",
		"email": "ulises.chino@gmail.com",
		"github": "chinokhan",
		"twitter": "@chinokhan",
		"location": "Mexico"
	},
	"biopic" : "images/myPic.jpg",

	display: function(){
		var formattedHTMLheaderName, formattedHTMLheaderRole, formattedHTMLmobile,
		formattedHTMLemail, formattedHTMLtwitter, formattedHTMLgithub,
		formatedHTMLlocation, formattedHTMLbioPic, formattedWelcomeMsg;

		formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
		formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

		formattedHTMLmobile		= HTMLmobile.replace("%data%", bio.contacts.mobile);
		formattedHTMLemail		= HTMLemail.replace("%data%", bio.contacts.email);
		formattedHTMLtwitter	= HTMLtwitter.replace("%data%", bio.contacts.twitter);
		formattedHTMLgithub		= HTMLgithub.replace("%data%", bio.contacts.github);
		formatedHTMLlocation	= HTMLlocation.replace("%data%", bio.contacts.location);

		formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
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


		//This part diplay the skills
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			var element = $("#skills"), formattedHTMLskills;
			for(var i=0, len=bio.skills.length; i<len; i++){
				formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
				element.append(formattedHTMLskills);
			}
		}//Skill display ends

		//Display footer contacts
		$("#footerContacts").append(formattedHTMLmobile);
		$("#footerContacts").append(formattedHTMLemail);
		$("#footerContacts").append(formattedHTMLtwitter);
		$("#footerContacts").append(formattedHTMLgithub);
		$("#footerContacts").append(formatedHTMLlocation);

	} //display ends
}; //bio ends


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

