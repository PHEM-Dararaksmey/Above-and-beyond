//lession one  
//let js = 'Amazing';
//       if (js === 'Amazing'){
//         alert("java script is fun");
//       }

//       //importand 
//       40 + 8 +23 -10 ;
//       console.log(40 + 8 +23 -10 );

//Value and Datatype

let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

//Declare variable 
let firstName = "Jonas"
//re-sign variable 
firstName ="SMEY";

//Use var let const
let age = 30;
age = 31; 

const birthYear = 1991;
//birthYear = 1998;

var job = 'Programmer';
job ='teacher';

lastName = "Dararaksmey";
console.log(lastName);


//Basic Operators
const now = 2023; 
const ageJonas = now - 2002;
const ageSarah = now - 2001;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2 , ageJonas / 10 , 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2 * 2 * 2
1
const First_Name = "Phem";
const Last_Name = "Dararaksmey";
console.log(First_Name + Last_Name);
// output  PhemDararaksmey 
console.log(First_Name + ' ' + Last_Name)
// output Phem Dararaksmey

//Assigment operators 

let x = 10 + 5; //15
x += 10; // x = x + 10 output = 25
x *= 4; // x = x * 4 = 100
x ++;  // x = x + 1 = 1001
x --; // x = x - 1 = 100
console.log(x)


//comparison  operators 
console.log(ageJonas > ageSarah); //false 
console.log(ageSarah >= 18); //true
const isFullAge = ageSarah >= 18;
console.log(isFullAge); // true
console.log(now - 1991 > now - 2018) // true

//Operator Precedence 
console.log(25-10 - 5); // let to right Precedence

let x1, y;
x1 = y = 25-10-5 ;
console.log(x, y); //output x = 10 , y = 10

//calculate average
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas , ageSarah , averageAge);

/*Coding challeng

    Mark and John are tying to compare their BMI ( body
    Mass Index ), which is calculated using the formula
    BMI = mass / height ** 2 == mass / (height * height).
    (mass in kg and height in meter)

    1. Store Mark's and John's mass and height in variable 
    2. Calcualte both their BIMs using the formula
    3. Create a boolen varaible ' markHigherBMI' containing
    information about whether Mark has a highter BMI than john.

    TEST DATA 1 : Mark weight 78 kg and is 1.69 m tell.
                  Jonh weight 92 kg and is 1.95 m tall.

    point 
        we have a formula 
            BMI = mass / height  ** 2 == mass / (height * height)
*/ 
// 1. Store Mark's and John's mass and height in variable 
const markWeight = 78;
const markHight = 1.69;
const johnWeight = 92;
const johnHight = 1.95;
//2.Calcualte both their BIMs using the formula
const markBMI = markWeight / (markHight ** 2);
const johnBMI = johnWeight / (johnHight ** 2);
console.log(markBMI , johnBMI);

//3.Create a boolen varaible
const markHigherBMI = markBMI > johnBMI;
if(markBMI > johnBMI){
    console.log("Mark has a highter BMI than john");
}
else{
    console.log("John has a highter BMI than Mark");
}









