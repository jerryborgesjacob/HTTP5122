//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady(){
	//GET DOM ELEMENTS WE'LL NEED
	var firstBox = document.getElementById("mysteryBox");
	var secondBox = document.getElementById("buttonBox");

	

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function askUser(){
		
		var input = confirm("Do you want to see something?");
		console.log(input);			
		
		if (input === true){
			firstBox.style.display = "none";
			secondBox.style.display = "block";

		}
	}
	//FUNCTION TO CHANGE buttonBox
	function surprise(){
		secondBox.style.width = "600px";
		secondBox.innerHTML = "<h2>SURPRISE!!</h2>";
		secondBox.style.textAlign = "center";
		secondBox.style.backgroundColor = "orange";

	}

	//SETUP LISTENERS
	firstBox.onmouseover = askUser;
	secondBox.onclick = surprise;

//END onload FUNCTION



}



	