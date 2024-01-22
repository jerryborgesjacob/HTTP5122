//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
//variable to collect user choice
var input;

//variable to collect user email address
var email;

//Pop up to ask user's choice
input = confirm("Would you like to join our mailing list ? ");

//record user chioce in console
console.log("Join mail list :" +" "+ input);


//==== LOGIC =============

//check if user wants to join mail list
if (input === true){
    email = prompt("Please Enter your email address","me@example.com");
    console.log("email : " + email); // record email in console

    //check if email is in the right format
//invalid formats
if (email === "" || email === null || email === "me@example.com"){
    alert("Thank you, but your email was not valid ");
    console.log("Invalid email format"); // record error in console
}

//email is in the right format
else{
    alert("Thank you, our emails will be sent to "+ email);
    console.log("Email registered successfully") // record success in console 
}
    
// user has pressed cancel
}else{

    alert("Thank you, we will not bother you again.");
    console.log("User did not register to mail list"); //record in console
}
