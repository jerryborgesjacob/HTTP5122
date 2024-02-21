/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
window.onload = function(){

var formHandle = document.forms.form_ship;


formHandle.onsubmit = thankYou;

var nameValue = formHandle.f_Name;
var pcValue = formHandle.f_pc;
var list = formHandle.f_speed;

function thankYou(){
	
	form = document.getElementById("shippingForm");
	msg = document.getElementById("thanks_msg");

	if (list.value === "0"){
		listBox = document.getElementById("in_Speed");
		listBox.style.background = "red";

		return false;
	}
	

	else if (nameValue.value === ""){
		nameBox = document.getElementById("in_Name");
		nameBox.style.background = "red";
		nameValue.focus();

		return false;
	}
	else if (pcValue.value === "") {
		pcBox = document.getElementById("in_pc");
		pcBox.style.background = "red";
		pcValue.focus();

		return false;

	}	
	else{
	
	inputName = document.getElementById("thanksCustomer");
	inputName.innerHTML = nameValue.value;
	
	inputPC = document.getElementById("thanksPC");
	inputPC.innerHTML = pcValue.value;

	deliveryType = document.getElementById("thanksSpeed");
	deliveryType.innerHTML = list.options[list.selectedIndex].text;

	deliveryCost = document.getElementById("thanksCost");
	deliveryCost.innerHTML = list.value;

	form.style.display = "none";
	
	msg.style.display = "block";
	return false;
	}
	
}


}