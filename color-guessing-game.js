const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow']
        // creating global constant for colors
        // const COLORS = (COLORS_ARRAY.join(", ")); -- minimize global variables so added this to line 30
               
        function runGame() {
            let numTries = 0;
            let guess = "";
            // initializing variable guess to value of an empty string
            let correct = false;
            // initializiing variable correct to Boolean value of false
            const targetIndex = Math.floor(Math.random() * 10);
            // needs to be local
            // console.log(targetIndex); >> shows it's working properly in console
            const target = COLORS_ARRAY[targetIndex];
            // declaring constant of target that assigns array index number from targetIndex to COLORS_ARRAY
            // so index number equals the color
            console.log(target);
            do {
                guess = prompt(`I am thinking of one of these colors:\n\n${COLORS_ARRAY.join(", ")}\n\nWhat color am I thinking of?\n`)
                numTries += 1;
                if (guess === null) {
                    alert("You have ended the game");
                // if player selects cancel, value of guess will be null and game will end
                return;
                }
                correct = checkGuess(guess,target);
            } while (!correct);
            document.body.style.background = guess;
            alert(`Congratulations! You guessed the right color.\n\nIt took you ${numTries} tries to guess correctly.`)
        }
        
        function checkGuess(guess,target) {
            let correct = false;
            if (COLORS_ARRAY.indexOf(guess) < 0) {
                alert("Sorry, I don't recognize your color.\n\n Please try again.")
            } else if (guess > target) {
                alert("Sorry, your guess is incorrect.\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.")
            } else if (guess < target) {
                alert("Sorry, your guess is incorrect.\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.")
            } else {
                correct = true;
            }
            return correct;
        }