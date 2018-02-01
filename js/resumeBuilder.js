/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ken Chan",
    "role": "Photographer and Programmer",
    "contacts": {
        "mobile": "99009900",
        "email": "kenchanchunhei@gmail.com",
        "github": "ken00815",
        "location": "Kwai Chung, Hong Kong"
    },
    "bioPic": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg",
    "welMsg": "Welcome to my resume! Please feel free to contact me if interested.",
    "skills": ["HTML", "CSS", "JS", "Photography", "Driving"],
    "display": function displayBio() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
        //Contact
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#header").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#header").append(formattedEmail);
        var formattedGhub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#header").append(formattedGhub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#header").append(formattedLocation);
        //end of contact
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedMsg);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welMsg);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill;
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        } else {
            console.log("No skills");
        };
    }
};

var education = {
    "schools": [{
            "name": "Tak Sun Secondary School",
            "location": "ShaTin",
            "degree": "Secondary",
            "major": ["Pure Mathematics", "Chemistry", "Physics"],
            "dates": "Sep 2004 - Jul 2012",
            "url": "http://www.tsss.edu.hk"
        },
        {
            "name": "Hang Seng Management College",
            "location": "ShaTin",
            "degree": "BA",
            "major": ["Supply Chain Management"],
            "dates": "Sep 2012 - Jun 2016",
            "url": "http://www.hsmc.edu.hk"
        }
    ],
    "onlineCourses": [{
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "dates": "Jan 2018 - Mar 2018",
        "url": "http://www.udacity.com"
    }],
    "display": function displayEdu() {
        //render the schools array
        if (education.schools.length > 0) {
            for (var i = 0; i < education.schools.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
                $(".education-entry:last").append(formattedName);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                $(".education-entry:last").append(formattedDegree);
                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                $(".education-entry:last").append(formattedDates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                $(".education-entry:last").append(formattedLocation);
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
                $(".education-entry:last").append(formattedMajor);
                var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
                $(".education-entry:last").append(formattedUrl);
            }
            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var i = 0; i < education.onlineCourses.length; i++) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                    $(".education-entry:last").append(formattedOnlineTitle);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                    $(".education-entry:last").append(formattedOnlineSchool);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                    $(".education-entry:last").append(formattedOnlineDates);
                    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                    $(".education-entry:last").append(formattedOnlineUrl);
                }
            }
        }

    }
};

var work = {
    "jobs": [{
            "employer": "Master Concept",
            "title": "Programmer",
            "location": "Kwun Tong",
            "date": "In Progress",
            "description": "Mainly support for Google Map Service and Google Street View|Trusted"
        },
        {
            "employer": "Vantis Solution",
            "title": "Consultant",
            "location": "Lai Chi Kok",
            "date": "2016-12-05 - 2018-01-05",
            "description": "Project implementation of HR System"
        }
    ],
    "display": function displayWork() {

        for (i = 0; i < work.jobs.length; i++) {

            var formattedEmployer;
            var formattedTitle;
            var formattedExp;
            var formattedWorkDate;
            var formattedWorkLocation;
            var formattedWorkDescription;

            $("#workExperience").append(HTMLworkStart);

            formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            formattedExp = formattedEmployer + formattedTitle;
            formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].date);
            formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(formattedExp);
            $(".work-entry:last").append(formattedWorkDate);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        };
    }
};

var project = {
    "projectDetails": [{
            "title": "Busy Hong Kong",
            "dates": "2017-06-01",
            "description": "The busies view in Hong Kong",
            "images": ["images/hongkong-800_large_1x.jpg"]
        },
        {
            "title": "Untypical Korea",
            "dates": "2017-02-01",
            "description": "Special angle of looking at Jeju-do",
            "images": ["images/jejudo.jpg"]
        }
    ],
    "display": function displayProject() {
        for (var i = 0; i < project.projectDetails.length; i++) {

            var formattedpTitle;
            var formattedpDates;
            var formattedpDescription;
            var formattedpImage;

            $("#projects").append(HTMLprojectStart);
            formattedpTitle = HTMLprojectTitle.replace("%data%", project.projectDetails[i].title);
            formattedpDates = HTMLprojectDates.replace("%data%", project.projectDetails[i].dates);
            formattedpDescription = HTMLprojectDescription.replace("%data%", project.projectDetails[i].description);
            if (project.projectDetails[i].images.length > 0) {
                for (var j = 0; j < project.projectDetails[i].images.length; j++) {
                    formattedpImage = HTMLprojectImage.replace("%data%", project.projectDetails[i].images);
                }
            } else {
              console.log("No Projects")
            };

            $(".project-entry:last").append(formattedpTitle);
            $(".project-entry:last").append(formattedpDates);
            $(".project-entry:last").append(formattedpDescription);
            $(".project-entry:last").append(formattedpImage);

        }
    }
};

//Internationalize the full name
$("#main").append(internationalizeButton)

function inName() {
    var norName = bio.name.split(" ");
    norName[0] = norName[0].slice(0, 1).toUpperCase() + norName[0].slice(1).toLowerCase();
    norName[1] = norName[1].toUpperCase();
    var name = norName[0] + " " + norName[1];
    console.log("Name is internationalized!")
    return name;
};

bio.display();
work.display();
education.display();
project.display();

$("#mapDiv").append(googleMap);
