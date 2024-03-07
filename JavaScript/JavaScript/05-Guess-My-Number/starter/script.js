'use strict';
/*
//Conncettion front-end called DOM Manipulatin
console.log(document.querySelector('.message').textContent);
//Select Element . class message in HTML 
document.querySelector('.message').textContent = 'Correct Number ! '
//Select Element . class number in HTML 
document.querySelector('.number').textContent = 13;
//Select Element . class score in HTML 
document.querySelector('.score').textContent = 20;
//Using value property 
console.log(document.querySelector('.guess').value);
//Set value to the input element 
document.querySelector('.guess').value = 23;
*/
//Create a number to compare 
let Correct_Number =Math.trunc(Math.random()*20) + 1;
//Create a score number 
let score = 20;
//Create a point to compare when the score hit to zero
const lose_point = 1;
//document.querySelector('.number').textContent = Correct_Number;
//Create a highsore 
let highsore = 0;
//Handling Click Event.
document.querySelector(".check").addEventListener('click',function(){
    const guess = Number( document.querySelector('.guess').value);
    console.log(guess ,typeof(guess));
    // if there are no guess number show No Number!
    if (!guess){
        document.querySelector('.message').textContent ='No Number!'
    } //When the player guess ccorrect
    else if (guess === Correct_Number){
        document.querySelector('.message').textContent ='Congratulation  ! Correct Number';
        //SO the DOM manipulation, we can also change styles.
        // Change background color to green when the user guess the correct Number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        // change the width of number box 
        document.querySelector('.number').style.width = '30rem';
        // Display the correst number 
        document.querySelector('.number').textContent = Correct_Number;
        // Display the highscore 
       if (score > highsore){
           highsore = score;
           document.querySelector('.highscore').textContent = highsore;
       }

    } // When user guess number Too hight 
    else if (guess > Correct_Number){
        if (score > lose_point){
            document.querySelector('.message').textContent ='Too hight';
            // Guess worng number - 1 score;
            score --; // => score = score - 1;
            // Display to score 
            document.querySelector('.score').textContent = score;

        }else{
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    } // When user guess number Too low
    else if (guess < Correct_Number){
        if (score > lose_point){
            document.querySelector('.message').textContent ='Too low';
            score --; // => score = score - 1;
            // Display to score 
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    }
    // 1 Select the element with the 'again' class and attach a click event handler
    document.querySelector('.again').addEventListener('click',function(){
    // 2. In the handler function, restore initial values of the score and secretNumber variables
    //Restore value of score 
    score = 20;
    //Restore value of correst_number
    Correct_Number =Math.trunc(Math.random()*20) + 1;
    // Restore highscore 
    //highsore = 0;
    // 3. Restore the initial conditions of the message, number, score and guess input field
    // Restore the initail condition of message
    document.querySelector('.message').textContent='Start guessing...'
    // Restore the initail condition of number
    document.querySelector('.number').textContent = '?';
    // Restore the initail condition of score
    document.querySelector('.score').textContent = score;
    // Restore the initail condition of guess
    document.querySelector('.guess').value ='';
    // 4. Also restore the original background color (#222) and number width (15rem)
    //Restore the background 
    document.querySelector('body').style.backgroundColor ='#222';
    //Restore the width of number 
    document.querySelector('.number').style.width ='15rem';
    //Restore value of Hightscore
   //document.querySelector('.highscore').textContent = score;

    })
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/