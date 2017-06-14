/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio
var bio = {
	"name": "Mohit Gupta",
	"role": "Senior Engineering Manager",
	"contacts": {
		"mobile": "+91-9811390685",
		"email": "mohitg@xyz.com",
		"twitter": "@i_tweet",
		"github": "fd97002",
		"location": "India"
	},
	"biopic":"images/fry.JPG",
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
	"skills": ["agile", "jackofall", "gogetter", "plusplus", "photography"],
	
	display : function()
	{
		var newHTMLheaderName = HTMLheaderName.replace("%data%", this["name"]);
		var newHTMLheaderRole = HTMLheaderRole.replace("%data%", this["role"]);

		var newHTMLmobile = HTMLmobile.replace("%data%", this.contacts["mobile"]);
		var newHTMLemail = HTMLemail.replace("%data%", this.contacts["email"]);
		var newHTMLtwitter = HTMLtwitter.replace("%data%", this.contacts["twitter"]);
		var newHTMLgithub = HTMLgithub.replace("%data%", this.contacts["github"]);
		var newHTMLlocation = HTMLlocation.replace("%data%", this.contacts["location"]);

		var newHTMLbioPic = HTMLbioPic.replace("%data%", this.biopic);
		var newWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

		$("#topContacts").before(newHTMLheaderName);
		$("#topContacts").before(newHTMLheaderRole);
		$("#topContacts").append(newHTMLmobile);
		$("#topContacts").append(newHTMLemail);
		$("#topContacts").append(newHTMLtwitter);
		$("#topContacts").append(newHTMLgithub);
		$("#topContacts").append(newHTMLlocation);
		$("#header").append(newHTMLbioPic);
		$("#header").append(newWelcomeMessage);
		$("#header").append(HTMLskillsStart);

		this.skills.forEach(
			function(skill)
			{
				var newSkill = HTMLskills.replace("%data%", skill);
				$("#skills").append(newSkill);
			}
		);	
		
		}
};

//education
var education = {
	"schools": [
		{
			"name": "BPS",
			"location": "Chamba",
			"degree": "High School",
			"dates": "01/04/1995",
			"url": "www.google.com",
			"majors": ["abc", "def"]
		},
		{
			"name": "DAV",
			"location": "Dalhousie",
			"degree": "Senior Secondary",
			"dates": "31/03/1997",
			"url": "www.google.com",
			"majors": ["ghi", "jkl"]
		},
		{
			"name": "BITS",
			"location": "Pilani",
			"degree": "BE",
			"dates": "31/05/2001",
			"url": "www.bits-pilani.co.in",
			"majors": ["CS"]
		}	
	],
	"onlineCourses": [
		{
			"title": "Front End Nanodegree",
			"school": "Udacity",
			"dates": "01/05/2017",
			"url": "www.udacity.com"
		}
	],
	
	display: function()
	{
		function func(obj)
		{
			$("#education").append(HTMLschoolStart);
			var name = HTMLschoolName.replace("%data%", obj.name);
			$(".education-entry:last").append(name);
			var degree = HTMLschoolDegree.replace("%data%", obj.degree);
			$(".education-entry:last").append(degree);
		    var dates = HTMLschoolDates.replace("%data%", obj.dates);
			$(".education-entry:last").append(dates);
		    var loc = HTMLschoolLocation.replace("%data%", obj.location);
			$(".education-entry:last").append(loc);

			obj.majors.forEach( 
				function(major)
				{
					HTMLschoolMajor.replace("%data%", major);
					$(".education-entry:last").append(major);
				});
			
		}

		function func0(obj)	
		{	
			$(".education-entry:last").append(HTMLonlineClasses);
			var title = HTMLonlineTitle.replace("%data%", obj.title);
			$(".education-entry:last").append(title);
	   		var school = HTMLonlineSchool.replace("%data%", obj.school);
			$(".education-entry:last").append(school);
	    	var onlinedates = HTMLonlineDates.replace("%data%", obj.dates);
			$(".education-entry:last").append(onlinedates);
			var url = HTMLonlineURL.replace("%data%", obj.url);
	    	$(".education-entry:last").append(url);
	    	//console.log(obj);
		}
		
		education.schools.forEach (func);	
		education.onlineCourses.forEach (func0);
	}
};

var work = {
	
	"jobs": [
    	{
	      "employer": "Udacity",
	      "title": "Course Developer",
	      "location": "Mountain View, CA",
	      "dates": "Feb 2014 - Current",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LearnBIG",
	      "title": "Software Engineer",
	      "location": "Seattle, WA",
	      "dates": "May 2013 - Jan 2014",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LEAD Academy Charter High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jul 2012 - May 2013",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "Stratford High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jun 2009 - Jun 2012",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    }
  	],
	
	display: function()
	{
		function func(job)
		{
			$("#workExperience").append(HTMLworkStart);
			var employer = HTMLworkEmployer.replace("%data%", job.employer);
			var title = HTMLworkTitle.replace("%data%", job.title);
			employer += title;
			$(".work-entry:last").append(employer);
			var dates = HTMLprojectDates.replace("%data%", job.dates);
			$(".work-entry:last").append(dates);
		    var loc = HTMLworkLocation.replace("%data%", job.location);
			$(".work-entry:last").append(loc);
			var desc = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(desc);
		    //console.log(job);
		}
		
		work.jobs.forEach (func);	
	}
};


//Projects
var projects = {
	
	proj: [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
			"images": [
				"images/proj1.JPG",
				"images/proj2.JPG"
			]
		},
		{
			"title": "Sample Project 2",
			"dates": "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
			"images": [
				"images/proj1.JPG"
			]
		}
		],
		
	display: function() {

		function func(project)
		{
			$("#projects").append(HTMLprojectStart);
			var title = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(title);
			var dates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(dates);
			var desc = HTMLprojectDescription.replace("%data", project.description);
		    $(".project-entry:last").append(desc);
			
			project.images.forEach( 
				function(img)
				{
					var image = HTMLprojectImage.replace("%data%", img);
					$(".project-entry:last").append(image);
				});
			
		}
		
		projects.proj.forEach (func);	
	}
};



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});


bio.display();
projects.display();
work.display();
education.display();


// Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var locations = [];
    work_obj.jobs.forEach(
        function funcloc(job) {
            console.log("a");
            locations.push(job["location"]);
        }
        );
    return locations;
}



// Did locationizer() work? This line will tell you!
//console.log(locationizer(work1));
//function inName(name){
	//internationalze the name
//}


//$("#main").append(internationalizeButton);