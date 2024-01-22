//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username;
		// Correct password
		var password;
		// user name input
		username = "dart";
		// password input
		password = "vader";




//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var uName = prompt("Please enter your username");


//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Username : " + uName);

//5. CREATE POPUP BOX FOR PASSWORD
var uPass = prompt("Please enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Password : " + uPass);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (uName === username && uPass === password){

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
alert("Welcome Back "+" "+ username + "!!");
console.log("Login Successful");
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	alert("Invalid Username / Password !!");
	console.log("Login Fail");
}