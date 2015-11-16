//------------------------------- Basic Info --------------------------------------------
var name="Nitish Srivastava";
var	mobile="+91-9958087983";
var email="nitish2794@gmail.com";
var address="10/20 , West Patel Nagar , New Delhi - 110008";
var contact={
	"mobile":mobile,
    "email":email,
    "address":address
}
var profileimageurl="images/profileimage.jpg";

//---------------------------- Social Media Links ---------------------------------------
var fblink="https://www.facebook.com/nitish.srivastava.10";
var twitterlink="#";
var youtubelink="#";
var inlink="https://in.linkedin.com/pub/nitish-srivastava/34/9b9/852";
var googlelink="https://plus.google.com/+NitishSrivastava2794";
var githublink="#";

//--------------------------- Career Objective ------------------------------------------
var careerobjective="To gain practical exposure in the field of Web Development and Software Development.";

//----------------------------- Skills --------------------------------------------------
var role="Web Developer";
var skills=[{"name":"Google App Engine","percentage":"75"},
{"name":"Microsoft Azure","percentage":"50"},
{"name":"Web Development","percentage":"70"},
{"name":"Google Analytics","percentage":"50"},
{"name":"Ruby on Rails","percentage":"40"}
];
var skills_new=[
{"cat":"Cloud Technologies","skills":["Google App Engine","Microsoft Azure"]},
{"cat":"Computer Languages","skills":["C","C++","Java"]},
{"cat":"Web Development","skills":["HTML","CSS","JavaScript","jQuery","Google Analytics","Ruby on Rails"]}
];
var computerLanguages=["C","C++","Java","Ruby"];
var webLanguages=["HTML","CSS","JavaScript","jQuery"];


//---------------------------- Education ------------------------------------------------
var education = [
	{
		"standard":"10",
		"board":"CBSE",
		"institute":"Sanatan Dharam Public School",
		"percentage":"85.5"
	},
	{
		"standard":"12",
		"board":"CBSE",
		"institute":"Sanatan Dharam Public School",
		"percentage":"83.2"
	},
	{
		"standard":"B.Tech(CSE)",
		"board":"-",
		"institute":"Maharaja Surajmal Institute of Technology",
		"percentage":"85.43"
	},
	{
		"standard":"current",
		"board":"-",
		"institute":"Maharaja Surajmal Institute of Technology",
		"percentage":"85.43"
	}
]

//-------------------------- Achievements -----------------------------------------------
var achievements = [
	'Published an article "Create and Deploy a Simple Ruby on Rails Application" on wikiHow having 650+ views.',
	'Secured 96.7 percentile(average) in AMCAT held on 7th April 2015.',
	'Worked as Event Head of the event "Brainstorm 2015" of MSIT Avensis 2015.',
	'"Brainstorm 2015" awarded as Best Event in Technical Department.',
	'Awarded as Best Volunteer in Technical Department of Avensis 2015.', 
	'Won 50$ AWS CREDITS in Hackerrank "CodeSprint" in 2014.',
	'Completed Summer Training in "Cloud Computing" in 2014.',
	'Won Best Project Award in Summer Training at "OSAHUB" in 2014.',
	'Won All-Rounder 2011-12 Trophy in School.',
	'Won Best Student 2011-12 Award in School.'
]

//-------------------------- Online Trainings -------------------------------------------
var online_trainings = [
	'"Algorithm Analysis and Design",a Stanford University Course from Coursera.',
	'"Big Data for Better Performance" from Open2Study.',
	'"Google Webmaster" from ALISON.',
	'"Introduction to Cloud Computing" from ALISON.'
]

//---------------------------- Projects -------------------------------------------------
var projects=[
	{
		"name":'BrainStorm 2015',
		"description":'An online treasure hunt event in Avensis 2015.',
		"language":'Ruby',
		"technology":['Microsoft Azure','Google Analytics','Ruby on Rails'],
		"link":''
	},
	{
		"name":'The Hotopic',
		"description":'Extracting trending articles from different websites and displaying for reading while listening to favourite music.',
		"language":'Java',
		"technology":['Google App Engine'],
		"link":'www.thotopic.appspot.com'
	},
	{
		"name":'Javasengine',
		"description":'Search engine For Java In Java ( In development ).',
		"language":'Java',
		"technology":['Google App Engine'],
		"link":'www.javasengine.appspot.com'
	},
	{
		"name":'Code Review Information System',
		"description":'A java based web app which maintains records of all the applications that have undergone white-box testing in Cyber Security Division, NIC HQ.',
		"language":'Java',
		"technology":['Struts 2 framework','SQL Server 2008'],
		"link":''
	},
	{
		"name":'',
		"description":'',
		"language":'',
		"technology":[],
		"link":''
	},
]

//-----------------------------Menu Items -----------------------------------------------

var menus=[
	{
		"name":"skills","image":"skills.png","url":"skills"
	},
	{
		"name":"projects","image":"projects.png","url":"projects"
	},
	{
		"name":"achievements","image":"achievement.png","url":"achievements"
	},
	{
		"name":"education","image":"education.png","url":"education"
	},
	{
		"name":"certi","image":"certi.png","url":"certi"
	},
	{
		"name":"mail","image":"mail.png","url":"email"
	}

]

//------------------------------ Quotes -------------------------------------------------
var quotes=[
	{
		"text":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.","writer":"John Woods"
	},
	{
		"text":"Walking on water and developing software from a specification are easy if both are frozen.","writer":"Edward Berard"
	},
	{
		"text":"Programs must be written for people to read, and only incidentally for machines to execute.","writer":"Hal Abelson"
	},
	{
		"text":"Talk is cheap. Show me the code.","writer":"Linus Torvalds"
	}
]

//----------------------------- Certificates  -------------------------------------------
var certis=[
	{
		"title":"Amcat","src":"certi/amcat.jpg"
	},
	{
		"title":"AAD - Coursera","src":"certi/ada.jpg"
	},
	{
		"title":"Big Data for Better Performance","src":"certi/bigdata.jpg"
	},
	{
		"title":"ALISON Learner Record","src":"certi/alison.jpg"
	}
]

//----------------------------- My Functions --------------------------------------------


//--------desktop check----------------------
function checkIfSmallAndSetPosition(){
	//window.alert('inside func');
if ($('#desktopTest').is(':hidden')) {
    // device is == Small
    //window.alert('small device');
    $('#profile').removeAttr('min-height');
    $('#sociallinks').removeClass('footer');
} else {
    // device is >= SMall 
}
}

//---- For marking the clicked menu button---------
$(document).ready(function(){
$('img.menu-button').click(function(){
	console.log('clicked');
    $('img.menu-button').removeClass("active");
    $(this).addClass("active");
});
});

//-----------------For hovering effect--------------------
//var isHovered = $('#menu-buttons').is(":hover");
//if(isHovered)
//{window.alert('hovered');}
$(document).ready(function(){
/*	var allmenuids=[];
$("#menu-buttons").find("a").each(function(){ allmenuids.push(this.id); });
//var allmenuids = "this-is,is-not,a-the,test";
var allmenuids2=allmenuids.toString();
allmenuids2=allmenuids2.replace(/,/g,',#');

var menuids='"#'+allmenuids2+'"';

window.alert(menuids);*/
$("#skills-link,#achievements-link,#education-link,#certi-link,#email-link,#projects-link").hover(function() {
	//window.alert('hovered');
  var hovered = $(this).attr("href");
  //window.alert('href:'+hovered);
  hovered=hovered.replace("#","").toUpperCase();
  $('#overlap-main').text(hovered);
  $('#overlap-main').css("display","block");
},function() {
  $('#overlap-main').css("display","none");
});
});




//--------------------for fading effect-----------------------------


//--------------------------------------------------------

//----For Showing + and - sign on collapse close and expand----
$(document).ready(function(){
  $("#skills-c").on("hide.bs.collapse", function(){
    $(".skills-h").html('<a data-toggle="collapse"  href="#skills-c" style="text-decoration: none;">+ SKILLS</a>');
  });
  $("#skills-c").on("show.bs.collapse", function(){
    $(".skills-h").html('<a data-toggle="collapse"  href="#skills-c" style="text-decoration: none;">- SKILLS</a>');
  });
   $("#achievements-c").on("hide.bs.collapse", function(){
    $(".achievements-h").html('<a data-toggle="collapse"  href="#achievements-c" style="text-decoration: none;">+ ACHIEVEMENTS</a>');
  });
  $("#achievements-c").on("show.bs.collapse", function(){
    $(".achievements-h").html('<a data-toggle="collapse"  href="#achievements-c" style="text-decoration: none;">- ACHIEVEMENTS</a>');
  });
   $("#projects-c").on("hide.bs.collapse", function(){
    $(".projects-h").html('<a data-toggle="collapse"  href="#projects-c" style="text-decoration: none;">+ PROJECTS</a>');
  });
  $("#projects-c").on("show.bs.collapse", function(){
    $(".projects-h").html('<a data-toggle="collapse"  href="#projects-c" style="text-decoration: none;">- PROJECTS</a>');
  });
     $("#education-c").on("hide.bs.collapse", function(){
    $(".education-h").html('<a data-toggle="collapse"  href="#education-c" style="text-decoration: none;">+ EDUCATION</a>');
  });
  $("#education-c").on("show.bs.collapse", function(){
    $(".education-h").html('<a data-toggle="collapse"  href="#education-c" style="text-decoration: none;">- EDUCATION</a>');
  });
});

//-------------------------------Display Functions in HTML--------------------------------
function displayProfile(){
$("#profileimage").append('<img src="'+profileimageurl+'" class="img-circle" alt="'+name+'" width="100%">');
$("#profilename").append(name);
$("#profilerole").append(role);
$("#profileobjective").append(careerobjective);
$("#sociallinks").append('<a href="'+fblink+'"><img src="images/fb.png" alt="" width=50px height=50px/></a>&nbsp;&nbsp;');
$("#sociallinks").append('<a href="'+googlelink+'"><img src="images/googleplus.png" alt="" width=50px height=50px/></a>&nbsp;&nbsp;');
$("#sociallinks").append('<a href="'+twitterlink+'"><img src="images/twitter.png" alt="" width=50px height=50px/></a>&nbsp;&nbsp;');
$("#sociallinks").append('<a href="'+inlink+'"><img src="images/in.png" alt="" width=50px height=50px/></a>&nbsp;&nbsp;');
$("#sociallinks").append('<a href="'+githublink+'"><img src="images/github.png" alt="" width=50px height=50px/></a>&nbsp;&nbsp;');
}

function displaySkills(){
	$('#skills-h').append('<a data-toggle="collapse"  href="#skills-c" style="text-decoration: none;">- SKILLS</a>');
	$("#skills-c").append('<ul>');
	for (skill in skills){
		//$("#skills-c").append('<li>'+skills[skill].name+'</li>');
		if(skills[skill].name)
		$("#skills-c").append('<div class="progress">  <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style="width:'+skills[skill].percentage+'%">'+skills[skill].name+'</div></div>');
	}
	$("#skills-c").append('</ul>');
}
function displaySkills_new(){
	$('#skills-h').append('<a data-toggle="collapse"  href="#skills-c" style="text-decoration: none;">- SKILLS</a>');
	//$("#skills-c").append('<ul>');
	for (skillnw in skills_new){
		$("#skills-c").append('<li>'+skills_new[skillnw].cat+'</li>');
		if(skills_new[skillnw].cat){
			//$("#skills-c").append('<span class="label label-default">'+skills_new[skillnw].cat+'</span></br>');
			//for(skill in skills_new[skillnw].skills )
			//	if()
				$("#skills-c").append('<span class="label label-success">'+skills_new[skillnw].skills+'</span></br></br>');
		}
	}
	//$("#skills-c").append('</ul>');
}

function displayAchievements(){
	$('#achievements-h').append('<a data-toggle="collapse"  href="#achievements-c" style="text-decoration: none;">+ ACHIEVEMENTS</a>');
	$("#achievements-c").append('<ul>');
	for (achievement in achievements){
		$("#achievements-c").append('<li style="border-radius:5px;border-color:#005FA8; border-width: 2px;border-style:solid;border-spacing: 5px;">'+achievements[achievement]+'</li></br>');
	}
	$("#achievements-c").append('</ul>');
}

function displayProjects(){
	$('#projects-h').append('<a data-toggle="collapse"  href="#projects-c" style="text-decoration: none;">- PROJECTS</a>');
	$("#projects-c").append('<ul>');
	for (project in projects){
		if(projects[project].name)
		{
			//$("#projects-c").append('<br/>');
			$("#projects-c").append('<li>'+projects[project].name+'<br/><p>'+projects[project].description+'<br/><b>Language : </b>'+projects[project].language+'</p>');
			
			if(projects[project].technology)
			$("#projects-c").append('<p><b>Technology : </b>'+projects[project].technology+'</p>');
			if(projects[project].link)
			$("#projects-c").append('<p><b>Link : </b>'+projects[project].link+'</p></li>');
			$("#projects-c").append('<br/>');
		}
	}
	$("#projects-c").append('</ul>');
}

function displayMenu(){
	
	for (menu in menus)
		if(menus[menu].name && menu<(menus.length)){
			if(menu==0)
	      	$('#menu-buttons').append('<a id="'+menus[menu].url+'-link" href="#'+menus[menu].url+'" data-toggle="tab"><img  class="menu-button active" src="'+menus[menu].image+'"></a>');
			else
			$('#menu-buttons').append('<a id="'+menus[menu].url+'-link" href="#'+menus[menu].url+'" data-toggle="tab"><img  class="menu-button" src="'+menus[menu].image+'"></a>');
}
}

function displayFrontPage(){

	var index = Math.floor(Math.random() * quotes.length-1) + 1 ;
	$("#fun").append(quotes[index].text+'<br/>- ');
	console.log('inside');
	$("#fun").append(quotes[index].writer);
	$("#intro").prepend('<img src="'+profileimageurl+'" class="img-circle" alt="'+name+'" width="30%">');
	$("#intro").append('Interactive Resume');
	$("#boldname").append(name+'<hr/>');


}

function displayEmailForm(){
	$("#email-h").append('<a data-toggle="collapse"  href="#email-c" style="text-decoration: none;">+ CONTACT ME</a>');
	//$("#email-c").append('<form class="form-horizontal" role="form" name="sendmailform" action="sendmail" method="get">');
    //$("#email-c").append('<br/><br/><div class="form-group"><label class="control-label col-sm-2" >Name:</label><div class="col-sm-10"><input type="text" class="form-control" placeholder="Enter your name"></div></div>');
    //$("#email-c").append('<br/><br/><div class="form-group"><label class="control-label col-sm-2" for="email">Email:</label><div class="col-sm-10"><input type="email" class="form-control" name="fromemail" placeholder="Enter your email"></div></div>');
    //$("#email-c").append('<br/><br/><div class="form-group"><label class="control-label col-sm-2" >Subject:</label><div class="col-sm-10"><input type="text" class="form-control" placeholder="Enter subject"></div></div>');
    //$("#email-c").append('<br/><br/><div class="form-group"><label class="control-label col-sm-2" >Message:</label><div class="col-sm-10"><textarea class="form-control" rows="5" name="body" placeholder="Enter Message"></textarea></div></div>');
    //$("#email-c").append('<br/><br/><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><br/><br/><button type="submit" class="btn btn-default">Send</button></div></div>');
    //$("#email-c").append('</form>');
}

function displayEducation(){
	$('#education-h').append('<a data-toggle="collapse"  href="#projects-c" style="text-decoration: none;">- EDUCATION</a>');
	displayEducationDetail('10',0);
	displayEducationDetail('12',1);
	displayEducationDetail('btech',2);
	displayEducationDetail('current',3);
}

function displayCertificates(){
	$('#certi-h').append('<a data-toggle="collapse"  href="#projects-c" style="text-decoration: none;">CERTIFICATES</a>');
	$('#certi-c').append('<ul class="row">');
	for(certi in certis){
		$('#certi-c').append('<li class="col-lg-3 col-md-3 col-sm-3 col-xs-4"><img class="img-responsive" src="'+certis[certi].src+'">'+certis[certi].title+'</li>');
	}
	$('#certi-c').append('</ul>');
}

//--------------Function for displaying progress bars on tab change----------------
$(document).ready(function() {
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	
	$('#10').append('<div class="progresscir" id="progress10"></div>');
	$('#btech').append('<div class="progresscir" id="progressbtech"></div>');
	$('#12').append('<div class="progresscir" id="progress12"></div>');
	$('#current').append('<div class="progresscir" id="progresscurrent"></div>');
	displayProgressBar('10',(education[0].percentage/100)); 
	displayProgressBar('12',(education[1].percentage/100)); 
	displayProgressBar('btech',(education[2].percentage/100)); 
	displayProgressBar('current',0.846);
	});
$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
$( "#progress10" ).remove();
$( "#progress12" ).remove();
$( "#progressbtech" ).remove();
$( "#progresscurrent" ).remove();
});
});
//---------------function for actual display of progress bars------------------
function displayProgressBar(id,percentage){
	var circle = new ProgressBar.Circle('#progress'+id, {
            color: '#48D788',
            strokeWidth: 5,
            trailWidth: 5,
            trailColor: '#eee',
            duration: 1500,
            easing: 'easeInOut',
            text: {
               value: '0'
            },
            step: function(state, bar) {
              bar.setText((bar.value() * 100).toFixed(2)+"%");
            }
        });
        circle.animate(percentage);
}
function displayEducationDetail(id,index){
	$('#'+id).append('<div class="edudetail">'+education[index].institute+'</div>');
	$('#'+id).append('<br/><div class="edudetail">'+education[index].board+'</div>');
}
//----------------------------- Functions Calls -----------------------------------------
checkIfSmallAndSetPosition();
displayProfile();
displaySkills_new();
displayAchievements();
displayProjects();
displayMenu();
displayFrontPage();
displayEmailForm();
displayEducation();
displayCertificates();


