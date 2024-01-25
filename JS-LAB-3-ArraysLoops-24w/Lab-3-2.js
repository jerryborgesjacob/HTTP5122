//LAB 3 - ARRAYS & LOOPS - PART 2


//PM TEAM MEMBER ARRAY
var ourTeam = ["Jerry","Ali","John","Timothy","Joe"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER
ourTeam.pop();
console.log(ourTeam);

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");
console.log(ourTeam);

//REARRANGE THE ARRAY ALPHABETICALLY
var sortedTeam = ourTeam.sort();
console.log(sortedTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + ourTeam.length +" people in our group.")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (i = 0; i<5; i++){
    teamNumber = i+1;
    console.log(ourTeam[i] + " is #" + teamNumber);
}
