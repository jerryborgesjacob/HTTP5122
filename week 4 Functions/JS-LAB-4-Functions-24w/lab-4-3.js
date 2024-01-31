//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the current temperature and return appropriate value
//It expects to receive a value from currentTemp as an Integer
//It will return boolean.



function checkTemp(currentTemp){

    
    
    if (currentTemp > 30){
        console.log(currentTemp);
        return false;
        
    }else if (currentTemp < -10){
        console.log(currentTemp);
        return false;
        
    }else{
        console.log(currentTemp);
        return true;
        
    }

}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var input = prompt("Please Enter Current Temperature : ");
if (checkTemp(input) === false){
    alert("Yikes! This is no weather for dog walking!");
}else{
    alert("You're good, have a nice walk!");
}