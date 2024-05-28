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
    //endless loop if everything is amount is invalid
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

// step 2
// Determine number of lines and collect bet money 
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1 - 3)");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, Try again");
        }else{
            return numberOfLines;
        }
    }
};


const depositAmount = deposit();
const numberOfLines = getNumberOfLines();