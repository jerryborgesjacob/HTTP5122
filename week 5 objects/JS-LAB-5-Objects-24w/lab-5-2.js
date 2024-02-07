//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var customer = {

    //2. Add the required properties to your object.
    lastName: "Jacob",
    branchNumber: 1025,
    accountBalance: 500.25,
    interestRate: 1.03,

    //3. Add your first method and test it. Remember, the methods will change the properties of the object.
    makeDeposit: function(amount){
        this.accountBalance = this.accountBalance + amount;
        console.log("Thank you, your current balance is now $" + this.accountBalance);

    },

    //4. Add your second method and test it.
    makeWithdrawal: function(amount){
        this.accountBalance = this.accountBalance - amount;
        console.log("Thank you, your current balance is now $" + this.accountBalance);
    },
    
    // Once everything is working, tackle the Stretch Goal!
    multipleAccounts: true,

    addInterest: function(){

        if (customer.multipleAccounts === true){

            var newInterest = customer.interestRate + 0.005;
            customer.accountBalance = customer.accountBalance * newInterest;
            console.log("Thank you, your current balance (with interest of multiple accounts) is now $" + customer.accountBalance.toFixed(2) );
        
        }else{
            customer.accountBalance = customer.accountBalance * customer.interestRate;
            console.log("Thank you, your current balance (with regular interest) is now $" + customer.accountBalance.toFixed(2) );
        
        }
        }
    
}

//5. Create the required output to complete steps 6-10 of the lab.
console.log("Your current balance is $" + customer.accountBalance);
customer.makeDeposit(200);
customer.makeWithdrawal(75);
customer.addInterest();








