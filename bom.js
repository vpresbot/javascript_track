/*
Create a popup window displaying your favorite website, initializing it at 10px from the top left of the user's screen.
Size it 100px x 100px.
Move it to the center of the current screen.
Resize the window to the largest size available on the screen.
Give the popup window focus.
*/
var popup;
popup = window.open("https://www.twitter.com/", "", "left=10, top=10 width=500, height=500");
popup.resizeBy(100,100);
popup.moveTo(screen.width / 2, screen.height / 2);
popup.resizeBy(screen.width, screen.height);
popup.focus();

/*
Write a function that determines whether your popup window was closed by the user. 
The function shall log the status of the popup ("open" vs "closed") to the console.
Test the function by invoking when the popup is closed/open.
*/
if(!popup){
		alert("popup hasn't been opened");
		return false;
	}
	else if(popup.closed){
		alert("popup closed");
		return false;
	}
	else{
		alert("popup open");
		return true;
	}


/*
Create an Interval that console.logs the current time every 5 seconds.
*/
setInterval(function(){ aTimer() }, 5000);
function aTimer(){
	var d = new Date();
	console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}


/*
Query the user for their age. 
If they are 21 or over, redirect them to your favorite brewery. 
If they are under 21, redirect them to the Disney website.
*/
var anAdult = confirm("Are you 21 or older?");
if(anAdult){
	window.location.assign("http://www.wynwoodbrewing.com/");
}
else{
	window.location.assign("http://www.disney.com");
}

/*
Write a mobile redirection script.
If the available screen size is less than 320px (based on http://screensiz.es/phone), ask them if they would like
to view the mobile version of the site. 
If they confirm, redirect them to index-mobile.html.
Otherwise, land them on the standard index.html
*/
if (((screen.width + screen.height) <= (854 + 480)) || ((screen.width + screen.height) <= (1136 + 640))){
		var redirect = confirm("Would you like to see the mobile version of this site?");
		if(redirect){
			window.location.assign("index-mobile.html");
		}
		else{
			window.location.assign("index.html");
		}
	}
