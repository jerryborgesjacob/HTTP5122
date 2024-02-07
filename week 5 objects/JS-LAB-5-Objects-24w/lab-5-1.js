//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    firstName: "Jerry",
    lastName: "Jacob",
    age: 22,
    occupation: "Student",
    display: function(){
        console.log(this.occupation);
        alert("My name is "+ this.firstName + " " + this.lastName + " and I am " + this.age + " years old.");
    }
}

meObject.display();

