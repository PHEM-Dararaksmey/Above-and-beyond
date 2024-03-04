// 2 - Activating Strict Mode
// strict mode is a great tool for catching potential errors and mistakes in your code, especially if you’re new to JavaScript. strict mode was first introduced in ECMAScript 5 or ES5 and it is a way to opt into a, well, stricter version of your code in order to enforce good programming patterns and less error-prone code.
'use strict';

let hasDriviersLicense = false;
const passTest = true;
if (passTest) hasDriviersLicense = true;
if (hasDriviersLicense) console.log('I can drive : D');

// const interface = 'Aduio';
// const private = 534;
// const if = 23;

// 3 - Function Declarations 
// Function is the the block of code and re-use over and over again 

function logger(){
    // function body 
    console.log("My name is Dararaksmey");
}


// calling / runing / invoking function 
logger();

// function can also recevied data and return data  
// function with parameter
function fruitPrcessor(apple, oranges){
    // console.log(apple , oranges)
    const juict = ` Juice with ${ apple} apple and ${oranges} oranges.`;
    return juict;
}
// calling function 

// fruitPrcessor(5,0);

// to use the return function you must store function as the variable 

const appleJuict = fruitPrcessor(5,0);
console.log( appleJuict)

// also can using it dirctely to the console.log

// console.log(fruitPrcessor(5, 0));

// using function with the different input and output 
const appleOrangeJuice = fruitPrcessor( 2, 4);

console.log(appleOrangeJuice);

const num = Number('23');

// 4 Function Expression 

function calcAg1(birthYear){
    const age = 2023 - birthYear;
    return age;
}

 const age1 = calcAg1(2002);
 console.log(age1);

// Function Expreesion 
// Function Expression is the function without a name or annonymose function
// Function Expreesion is product value .

// What the different betweend function declarations and function expression
// the main practical difference is calling function declarations before defined in the code.
/*
    Here the another example : 

        we are going call the function before we define the function
        
        const Name = fullname("Dararaksmey");

            function fullname(name){
                console.log(name);
            }

    hoisting process is where are variable and function declarations are moved to the top of their 
    containing scope during the compilation phase.
*/

const calcAg2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAg2(1991);
console.log(age1,age2);


// 5. Arrow function 
/*
    Definston
        arrow function is simplay a special form of function expression that is shorter 
        and faster to write.
*/

// Arrow function  

// crate function  Arrow 
const calcAg3 = birthYearArrow  => 2023 - birthYearArrow;
// using function arrow 
const age3 = calcAg3(1991); 
console.log(age3);

// crate function arrow with multiple parameter 

const yearUntilRetirement = (birthYearArrow, fristName)=>{
    const age = 2023 - birthYearArrow;
    const retirement = 65 - age ;

    return `${fristName} retires in ${retirement} year `;
} 
// using arrow function 
const age4 = yearUntilRetirement(1991,'Dararaksmey');
console.log(age4);


// for today is section 5 and we start tmr after final exam;


// 6 Function calling other functions 

function cutFruitPieses(fruit){
    return fruit * 4;
}
function fruitPrcessor1(apple1, oranges1){
    const applePieces = cutFruitPieses(apple1);
    const orangesPieces = cutFruitPieses(oranges1);

    const Juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
    return Juice;
}

console.log(fruitPrcessor1(2,3));

// 7 Rewrinting function
// Create a function to calling other function 
const calcAg4 = function(birthYear){
    return 2024 - birthYear
}
// convert to a more normal function expreesion.
const yearUntilRetirement2 = function (birthYear, fristName){
    const age = calcAg4(birthYear);
    const retirement = 65 - age ;
    
    // control statement 

    if(retirement > 0 ){

        return `${fristName} retires in ${retirement} year `;
    }
    else{
        return `${fristName}  has already retires `;
    }

} 
console.log(yearUntilRetirement2(2002,'Jonas'));
console.log(yearUntilRetirement2(2002,'Mike'));

// There are 3 Different Function Types 

/* Function declaration 
    Function that can be use before it's declared 
*/
function functionDeclaration(){
    return `Function Declaration Function that can be use before it's declared `;
}
/* Function expression 
    Essentiall a function value stored in a varaible 
*/
const functionExpreesion = function(){
    return `Essentiall a function value stored in a varaible `;
}
/* Arrow Function
    Great for q auick one-line funnction. has no this keyword  */
const arrowFunction = arrowFunction => 2023 - birthYear

//coding 
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(30, 13);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Array 






