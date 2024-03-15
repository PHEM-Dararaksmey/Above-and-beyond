// Strings and Template Literals 

const firstName ='Dararaksmey';
const job = 'teacher';
const birthYear = 2002;
const year = 2023;

const smey = 'Im' + firstName + ',a' + (year - birthYear) +'Year old' + job + '!';
console.log(smey);
// using the `` to tell the javascript we write a Template Literals
const smeyNew = `I'm ${firstName} , a ${year -birthYear} year old ${job}!`;
console.log(smeyNew); 

// using `` for all string 
console.log(`Just a regular sting....`);

// using `` can crate string multiple line 
console.log(`Sting 
multiple
line`);

// Taking Decisions_if_else

const age = 1;
// const isOldEnough = age >= 18;

if(age >= 18){
    console.log("Sarah can start driving license ❤️ ");
}else{
    const yearLest = 18 - age ;
    console.log(`Sarah is too young. Wait another ${yearLest} year :`);
}

// another example :

const birthYear1 = 1991; 
let century;
if(birthYear1 <= 2000){

    century = 20;

}else{

    century = 21;
}

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

const markWeight = prompt("Enter Mark's Weight : ");
const markHight = prompt("Enter Mark's Hight : ");
const markBMI = markWeight/(markHight * markHight);
const johnWeight = prompt("Enter John's Weight : ");
const johnHight = prompt("Enter John's Hight : ");
const johnBMI = johnWeight/(johnHight * johnHight);

if(markWeight > johnHight){
    console.log(`Mark BMI (${markBMI}) is Higher than John BMI (${johnBMI}) !`);
}else{
    console.log(`John BMI ${johnBMI} is Highter than Mark BMI (${markBMI}) !`);
}

//  Type conversion and Coercion 
/*
    javascrpit can only conver 2 or 3 type
        1 number to string 
        2 string to number 
        3 to a boolean
*/ 
const inputYear = '1991';
// conver string to number 
console.log(Number(inputYear))
console.log(inputYear + 18);
// conver number to string 
console.log(String(23),23);

// type coeercion
console.log("I am " + 23 + "Year old");
// type coercion whenever write string using + with number it's automate convert number to string
// using - convert sting to number  
console.log('23' - '10' - 3);
console.log('23' * '10' * 3);
console.log('23' / '10' / 3);

let n  = '1' + 1;
n = n - 1;
console.log(n);

// falsy values : 0 , '' , undefined , null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money){
    console.log("Don't Spend it all;");
}else{
    console.log("You should get a job!");
}

let height;
if (height){
    console.log("YAY! Height is defiend");
}else{
    console.log("Hight is UNDEFINED");
}

// ===

const age1 = 18;
if (age ==! 18){
    console.log("You just became an adult :D")
}

if (age == 18) {
    console.log("You just becomae an adult :D (loose)");
}
const favourite = prompt("What's your favourite number :");
console.log(favourite);
console.log(typeof favourite);
if(favourite === 23){
    console.log("Cool! 23 is an amazing number !");
}else if (favourite === 7){
    console.log('7 is also a cool number:')
}else{
    console.log("Number is not 23 or 7 ");
}
if (favourite !== 23 )
console.log("Why not 23?");

// boolean Logic : THE AND , OR, & NOT  Operators 
