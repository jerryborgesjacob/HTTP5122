/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = start;


//create page load function
function start(){

//create variables for required HTML elements
	var dateVar = new Date();
	
	var now = dateVar.toDateString();

	//create variables for now date and due date
	
	var dueDate = new Date("April 19, 2023  18:00:00");
	var finalDate = dueDate.toDateString();

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE

	var nowDisplay = document.getElementById("todayData");
	nowDisplay.innerHTML = now;

	var finalDisplay = document.getElementById("finalData");
	finalDisplay.innerHTML = finalDate;

	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE

	var timeDiff = dueDate.getTime() - dateVar.getTime();

	var daysRemain = timeDiff/86400000;

	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var fullDays = Math.floor(daysRemain);

	var remainingDays = document.getElementById("dueData");

	
	var late = document.getElementById("countMsg");
    
	/*
	var timeOver = new Date("April 19, 2024  18:00:01");
	var timesUp = timeOver.getTime();
	*/

	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if (fullDays < 0){
		late.innerHTML = "The Deadline for the Final Assignment has passed!";
	}else{
		remainingDays.innerHTML = fullDays;
	}


}

	
	
	
	
	
	
	
	
	
		
	