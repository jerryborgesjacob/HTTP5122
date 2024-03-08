window.onload = function(){ // waits for the page to load

    var formHandle = document.forms.ixdForm;

    formHandle.onsubmit = thankYou; // function for action to be performed on clicking submit button

    // declaring variables 
    var firstNameValue = formHandle.f__fName;
    var lastNameValue = formHandle.f__lName;
    var idValue = formHandle.f__id;
    var programValue = formHandle.f__program;
    var projectValue = formHandle.f__project;

    // Declaring variable to store regular expression for Humber ID
    var regex = /^[nN][0-9]{8}$/;

    function thankYou(){

        heading = document.getElementById("welcome");
        form = document.getElementById("form");
        msg = document.getElementById("result");


        //Validation for Empty First Name Field
        if (firstNameValue.value === ""){
            fNameBox = document.getElementById("in_fName");
            fNameBox.style.background = "red";
            firstNameValue.focus();

            return false;
        }

        //Validation for Empty Last Name Field
        else if (lastNameValue.value === ""){
                lNameBox = document.getElementById("in_lName");
                lNameBox.style.background = "red";
                lastNameValue.focus();
    
                return false;

        }

        //Validation for Empty Humber ID field, and checking ID Format with Regular Expression
        else if (idValue.value === "" || !regex.test(idValue.value)){
            idBox = document.getElementById("in_id");
            idBox.style.background = "red";
            idValue.focus();

            return false;
            /* NOTE: Invalid format of Humber ID does not explicitly warn user with pop-up message as it was not mentioned in the assignment.
            The field goes red when an invalid format is entered*/
        }

        //Validation for not choosing a Program
        else if (programValue.value === "X"){
            programBox = document.getElementById("in_program");
            programBox.style.background = "red";
            programValue.focus();

            return false;

        }

        // Validation for not choosing an option from the Radio Buttons
        else if (projectValue.value === ""){
            projectBox = document.getElementById("caption_project");
            projectBox.style.background = "red";

            return false;

        }


        else{

        // Entering values from the Form into the Confirmation Message    
        inputFName = document.getElementById("result__Fname");
        inputFName.innerHTML = firstNameValue.value;

        inputLName = document.getElementById("result__Lname");
        inputLName.innerHTML = lastNameValue.value;

        inputId = document.getElementById("result__id"); 
        inputId.innerHTML = idValue.value;

        inputProgram = document.getElementById("result__program");
        inputProgram.innerHTML = programValue.options[programValue.selectedIndex].text;

        inputProject = document.getElementById("result__project");
        inputProject.innerHTML = projectValue.value;

        // Hiding the Header and Form, and Displaying the Confirmation Message.
        heading.style.display = "none";
        form.style.display = "none";
        msg.style.display = "block";
        return false;
        
    }
    

}
}