// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine and Transpose slot Machine
// 5. Check if user won
// 6. Give the user their winnings
// 7. Play again


const prompt = require("prompt-sync")();

// Declare Global Variables
// rows and columns
const ROWS = 3;
const COLS = 3;

// symbols
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2, 
}
// Step 1
// create a function

// prompt user for a number = deposit some money
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
        const lines = prompt("Enter the number of lines to bet on (1 - 3): ");
        //Convert no of line to a number
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, Try again");
        }else{
            return numberOfLines;
        }
    }
};

// step 3
// collect bet amount == bet per line 
const getBetAmount = (balance, lines) => {
    while(true){
        const bet  = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet, try again");
        }else{
            return numberBet;
        }
    }
};

// step 4
// spin the slot machine

const spin = () => {
    // array with all possible symbols
    const symbols = [];

    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = []; 
    for(let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            //randomly select any index from array = randomfunction
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1); // remove selected symbol to not pick it again
        }
    }

    return reels;
};

// Transposing array / matrix -  visualize the rows
const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

// Print to the user the rows
const printRows = (rows) =>  {
    for (const row of rows){
        let rowString = "";
        for(const [i, symbol] of row.entries()){
            rowString += symbol;
            if(i != row.length -1){
                rowString += "|";
            }
        }
        console.log(rowString);
    }
}

// step 5
// Determine if user won
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for(let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if(allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }
    return winnings;
}
// step 6 : Giver User their winning and Play Again

const game = () => {
    let balance = deposit();

    while(true){
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBetAmount(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings.toString());

        if(balance <= 0){
            console.log("You ran out of Money!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)?");

        if(playAgain != "y") break;
    }
    };
    

game();

