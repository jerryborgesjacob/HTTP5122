//LAB 9-DATA STORAGE: INDEX PAGE
window.onload = go;

function go(){


    
    //check for stored values
        //retrieve stored values
        if (document.cookie.length > 0){
        var cookieArray = document.cookie.split(";");
        var userName = cookieArray[0].split("=")[1];
        var welcome = document.getElementById("newMsgBox");
        welcome.innerHTML = "Welcome " + userName;
        
        
        var color = cookieArray[0].split("=")[1];
        
        document.body.style.background = color;
        

        
    
    }
        //change welcome text to stored name
       
        //change BG colour to stored colour

        //  document.body.style.background = 


		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	var formHandle = document.forms.infoForm;

    formHandle.onsubmit = saveInfo;

	//onsubmit Function
    function saveInfo(){
        
        //get values from form

        var formName = formHandle.f_name;
        var formColor = formHandle.f_color;

        var name = document.getElementById("inName");
        var favColor = document.getElementById("inColor");

        name.innerHTML = formName.value;
        favColor.innerHTML = formColor.value;
        
        //console.log the form values
        console.log(name.value);
        console.log(favColor.value);

        function cookieMaker(cookieName, cookieValue, lifespan){

            document.cookie = "firstName=" + cookieName + "; userColor=" + cookieValue + "; max-age=" + lifespan + ";";
        }
        
        cookieMaker(name.value, favColor.value, 86400);
        cookieMaker(name.value, favColor.value, 86400);

        
        location.reload();
        return false;
    }

    var delCookie = document.getElementById("btnDel");

    delCookie.onclick = del;

    function del(){
        document.cookie = "firstName = ; max-age-0;"; 
        //location.reload();
    }


}