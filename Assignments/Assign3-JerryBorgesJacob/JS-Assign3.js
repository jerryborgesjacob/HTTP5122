// Jose Mourinho is a soccer coach with an illustrious career

// Define the custom object
var JoseMourinho = { 
    teams: 10,
    trophies: 26,
    redCards: 15,
    wins: 638,
    addWin: function(){     // this function adds a win to the 'wins' property
        this.wins = this.wins + 1;
        alert("Jose Mourinho now has " + JoseMourinho.wins + " wins in his career."); // Display output in alert box
        return this.wins;
    }
}

console.log(JoseMourinho);  // output initial values of object onto the console

// Declare variables to store user input
var input1, input2;

//Take user input and update the 'teams' property with new value
input1 = prompt("Please Enter Number of Teams coached : ", "Current No. of teams coached: " + JoseMourinho.teams); 
JoseMourinho.teams = parseInt(input1);

// console.log(JoseMourinho); // console.log used for testing

//Take user input and update the 'trophies' property with new value
input2 = prompt("Please Enter Number of Trophies won : ", "Current No. of Trophies : " + JoseMourinho.trophies);
JoseMourinho.trophies = parseInt(input2);

// console.log(JoseMourinho); // console.log used for testing

// Call the method
JoseMourinho.addWin();

console.log(JoseMourinho); // display object with new value onto console
