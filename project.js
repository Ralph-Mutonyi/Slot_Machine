// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. Give the user their winnings
// 7. Play again

// Step 1
// create a function

// prompt user for a number = deposit some money
const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
    const depositAmount = prompt("Enter a deposit Amount: ");
    
    // convert the deposit amount to a number
    const numberDepositAmount = parseFloat(depositAmount);

    // check if value prompted fro user  is a number 
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, try again");
    }else{
        return numberDepositAmount;
    }
    }
    
};

const depositAmount = deposit();
console.log(depositAmount);