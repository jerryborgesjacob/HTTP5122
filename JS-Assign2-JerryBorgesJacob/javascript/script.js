
// Declare variables to store movie names 
var mov1 = "Your Name";
var mov2 = "Rush Hour";
var mov3 = "Interstellar";
var mov4 = "Batman Begins";
var mov5 = "The Dark Knight";
var mov6 = "LEGO Batman";
var mov7 = "Puss in Boots";

// Declare array and store movies into it
var movies = [mov1, mov2, mov3, mov4, mov5, mov6, mov7];


var valid = false; // variable to check validity of user input
var movieNumber = 0; // variable to check movie number in array
var input = 0; // variable to accept user input

input = prompt("Which top 7 movie would you like ? ","Pick a Number: 1 - 7"); // accept input from user

// check validity of user input and output appropriate message
while (valid === false){
if (input >= 1 && input <= 7){
    movieNumber = parseInt(input);
    alert("Number "+ movieNumber + " on the list is "+ movies[movieNumber - 1]); // display movie name based on input
    valid = true; // change validity 
    break; // break out of the loop
}
else{
    alert("Please enter a Number between 1 and 7 ! "); // alert the user of incorrect input
    input = prompt("Which top 7 movie would you like ? ","Pick a Number: 1 - 7"); // accept input from user again, if incorrect input was entered at first
}
}

// for loop to list out movie names in the console
for (i = 1; i <=7; i++){
    var movNum = i - 1; // variable to match 'i' value to the index value of item in the array
    console.log("Movie "+ i + ": " + movies[movNum]); // record the movie titles in console
}

