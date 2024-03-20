/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = Go;

//create page load function
function Go(){
	
	//create variables for required HTML elements
	var HH = document.getElementById("hoursOut");
	var MM = document.getElementById("minsOut");
	var SS = document.getElementById("secsOut");

	//create time variable so all functions have access to it
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime(){

		var clock = new Date();

		var hour = clock.getHours();
		var minute = clock.getMinutes();
		var seconds = clock.getSeconds();

		if (hour < 10){
			HH.innerHTML = "0" + hour + ":";	
		}else{
			HH.innerHTML = hour + ":";
		}
		
		if (minute < 10){
			MM.innerHTML = "0" + minute + ":";	
		}else{
			MM.innerHTML = minute + ":";
		}
		
		if (seconds < 10){
			SS.innerHTML = "0" + seconds;	
		}else{
			SS.innerHTML = seconds;
		}
		
	}


	var clockUpdate;

	//CREATE FUNCTION TO START THE CLOCK.
	function startClock(){

		clockUpdate = setInterval(displayTime, 1);

	}

	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock(){
		clearInterval(clockUpdate);
	}

	// SET EVENT LISTENERS

	var startButton = document.getElementById("btnStart");
	var stopButton = document.getElementById("btnStop");

	startButton.onclick = startClock;
	stopButton.onclick = stopClock;

	
}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
