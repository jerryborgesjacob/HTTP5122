//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function findAverage(num1,num2,num3,num4,num5){
    
    var average = (num1 + num2 + num3 + num4 + num5)/5.0;
    
    return average.toFixed(2);
}

console.log("Average = " + findAverage(5,10,15,20,25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var http5110 = 80;
var http5122 = 80;
var http5121 = 80;
var http5126 = 80;
var ixd5106 = 80;

function findProgramAverage(){
    if (findAverage(http5110, http5121, http5122, http5126,ixd5106) >= 70){
        alert("SUCCESS!");
        //console.log("Average marks = " +average);
    }else{
        alert ("REVIEW REQUIRED!");
        //console.log("Average Marks = " +average);
    }
    
}
findProgramAverage();


