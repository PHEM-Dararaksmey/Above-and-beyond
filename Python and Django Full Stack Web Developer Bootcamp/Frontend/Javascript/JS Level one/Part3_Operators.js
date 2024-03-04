// booleans
true 
false

//////////////////////////
///Comparison operators///
//////////////////////////
//compare tow items and return a boolean 

// Greater than
3 > 2; // true
2 > 3; // false

// Less than
1 < 2; //true

// Greater than or equal to 
2 >= 2; //true

// Less than or equal to
 1 <= 3; //false
 
 // Let's now discuss equality and it's quirk

 // Equality
 2 == 2; //true
 "username" == "username"; //true

 // Inequality
 2 != 3; //true

 // Hold on a second ! what happens with this

 "2" == 2; //true
 
 //true and false

 true == 1; //true
 true === 1; //false

 false == 0; // true
 false === 0; // false

 // weird behavior for null , undefined and 

 null == undefined; // true
 null === undefined // false

 NaN == NaN; //false

//////////////////////////
/// LOGICAL operators///
//////////////////////////

// Logical Operators allow us to combine multiple comparison operators

// And Is written with &&
// Need both conditions to be true to return
1 === 1 && 2 === 2; //true
// if one true and another one is false result is false 
//OR Is written with ||

1 == 2 || 1 === 1; // true

//NOT  
(1 === 1) //true

!(1 === 1) //false
// Need only one condition to be true to
var x = 1
var y = 2 
// Exercise 1 
"2" == y && x === 1; //true

// Exercise 2
x >= 0 || y === "2"; //true
// Exercise 3
!(x !== 1 ) && y === (1+1);  //true
// Exercise 4
y !== "2" && x < 10; //true
