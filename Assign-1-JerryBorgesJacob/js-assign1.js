
var teamNumber; // variable to store team number

var firstName; // variable to store team member's first name


//Step 1 : accept team number from user
teamNumber = prompt("Please Enter your Team Number","1 - 6");

// Step 2 : check if team number is between 1 to 6
if (teamNumber >=1 && teamNumber <=6 ){

    firstName = prompt("Please Enter your First Name","Use lowercase"); // prompt to accept team number from user
    console.log("Name Entered : "+firstName); // record user entry in console

    // Step 3 : check name and welcome by full name
    switch (firstName){
        case "jerry": 
        alert("Welcome Jerry Jacob!"); // pop-up to Welcome user
        console.log("Access granted"); //record status 
        break;

        case "ali": 
        alert("Welcome Ali Qasim"); // pop-up to Welcome user
        console.log("Access granted"); //record status
        break;

        case "ganga": 
        alert("Welcome Ganga Suresh"); // pop-up to Welcome user
        console.log("Access granted"); //record status
        break;
        
        case "kathan": 
        alert ("Welcome Kathan Patel"); // pop-up to Welcome user
        console.log("Access granted"); //record status
        break;

        default:
            alert ("Name Incorrect !!"); // wrong first name entered
            console.log("Invalid First Name"); // record error in console 
            break;
    
    }
    
}

// Step 4 : if the team number is wrong, deny access
else{
    
    alert("ACCESS DENIED!");
    console.log("Invalid Team Number"); // record incorrect entry 
    console.log("User entered : "+teamNumber); // record value entered by user


}

/*

Initially, I followed the instructions in the assignment PDF and did the code step by step.
But this led to a problem, wherein I was not able to validate the team number prompt against alphabets. 
Hence, I changed the if statement to check only for values 1 to 6, and all other input would go into the else block.
A copy of the earlier code is commented below.

*/

/* 
var teamNumber; // variable to store team number

var firstName; // variable to store team memeber's first name


//check if user enters the incorrect team number
teamNumber = prompt("Please Enter your Team Number","1 - 6");

if (teamNumber >=7 || teamNumber <=0 || teamNumber==="" || teamNumber === null || teamNumber === "1 - 6"){
    alert("ACCESS DENIED!");
    console.log("Invalid Team Number"); // record incorrect entry 
    console.log("User entered : "+teamNumber); // record value entered by user
}

// if the team number is correct, check their first name
else{
    firstName = prompt("Please Enter your First Name");
    console.log("Name Entered : "+firstName); // record user entry in console

    // check name and welcome by full name
    switch (firstName){
        case "Jerry": alert("Welcome Jerry Jacob!");
        break;

        case "Ali": alert("Welcome Ali Qasim");
        break;

        case "Ganga": alert("Welcome Ganga Suresh");
        break;
        
        case "Kathan": alert ("Welcome Kathan Patel");
        break;

        default:
            alert ("Name Incorrect !!"); // wrong first name entered
            console.log("Invalid First Name"); // record error in console 
            break;
    
    }    
}
*/
