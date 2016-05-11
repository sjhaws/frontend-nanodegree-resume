var bio = {
    "name": "Steven Haws",
    "role": "HR Generalist/IT Business Analyst",
    "contacts": {
        "mobile": "801-856-1481",
        "email": "stevenjhaws@gmail.com",
        "location": "Bountiful, UT"
    },
    "pic": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/108/197/0408c09.jpg",
    "welcomeMsg": "Welcome to my Hall of Fame",
    "skills": [
        "JavaScript",
        "Visual Basic",
        "Waterfall Project Management",
        "Process Improvement",
        "HTML/CSS",
        "MS Word, Excel, PowerPoint, Access",
        "Excited to learn everything"
    ]
};

var education = {
        "name" : "Utah State University",
        "city" : "Logan",
        "major" : "Human Resource Management",
        "minor" : "Sociology",
        "graduation" : 2012
    };

var work = {
    "jobs": [
        {
            "title" : "IT Business Analyst",
            "employer" : "Resource Management, Inc.",
            "dates" : "April 2016 - present",
            "discription" : "Built wireframes for new HRIS Software. Gathered requirements from all areas of business for development."
        },
        {
            "title" : "HR Generalist",
            "employer" : "Resource Management, Inc.",
            "dates" : "March 2014 - present",
            "discription" : "Responsibility for around 60 clients specifically in the area of FMLA, Workers Comp, Unemployment, Benefits, Handbooks, Policies, Agreements, Onboarding, Terminations, and Grievances."
        },
        {
            "title" : "HR Clerk",
            "employer" : "Corporation of the Presiding Bishop",
            "dates" : "October 2012 - March 2014",
            "discription" : "Managed employee files changes and HR processes for/with HR Managers around the world."
        },
        {
            "title" : "HR Assistant",
            "employer" : "Pride Transport",
            "dates" : "June 2012 - October 2012",
            "discription" : "Temporary assignement to assist while another full time HR staff member was out."
        }]
};

var project = {
    "projects" : [
        {
            "title" : "RMI Center HRIS Design",
            "dates" : "2015 - present",
            "description" : "Gathering requriements from all areas of business and compiling wireframes to assist developers in coding web application HRIS."
        },
        {
            "title" : "Onboarding Tracking",
            "dates" : "2015",
            "description" : "Streamlined process for tracking client new hires by creating a Access database with multiple user GUIs."
        }
    ]
};
    
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
var formattedTitle = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedTitle);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedPic);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}


for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
   
    var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDate);
    
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].discription);
    $(".work-entry:last").append(formattedWorkDescription);
}

for (project in project.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[project].title);
    $("#projects").append(formattedProjectTitle);
   /* 
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[project].dates);
    $(".projects-entry:last").append(formattedProjectDates);
    
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[project].discription);
    $(".projects-entry:last").append(formattedProjectDescription);*/
};