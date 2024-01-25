//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var input;
var total = 0 ;
var items=[];


//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total <= 35 ){
	//GET ITEM COST FROM USER

	
		input = prompt("Please enter Cost of the item");	
	
	console.log(input);
	
	
	
	//CONVERT USER INPUT TO A NUMBER
	var price = parseInt(input);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	total = total + price; 
	
	//PUSH ITEM COST TO CART ARRAY
	items.push(price);
	
	}
	console.log(items);
//SEND POPUP MESSAGE TO USER
alert("Your Shipping for this order will be free! Your total is $"+total);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: "+items.join(" | "));
