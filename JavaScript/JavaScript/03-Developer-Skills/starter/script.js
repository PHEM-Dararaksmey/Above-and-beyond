// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer.
// Our most recent task is this : "Given an array of temperatures of one day",
// calculate the temperature amplitue. Keep in mind that sometime there might be a sensor
// error.

const temperature = [3,-2,-6,-1,'error',9,13,17,15,14,9,5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(temp) {
    let max = temp[0];
    let min = temp[0];

    for(let i = 0 ; i < temp.length; i ++ ){
        const curTemp = temp[i];
        // - How to ignore errors?
        if(typeof curTemp !== 'number') continue;
        // Find the max value and min value 
        if(curTemp > max){
            max = curTemp;
        }
        if(curTemp < min){
            min = curTemp;
        }
    }
    console.log(max, min);
    //- Subtract min from max (amplitude) and return it
    return max - min;
}
//calcTempAmplitude([3,7,4,23]);
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
const calcTempAmplitudeNew = function(temp1,temp2) {
    const temp = temp1.concat(temp2);
    console.log(temp)
    let max = temp[0];
    let min = temp[0];

    for(let i = 0 ; i < temp.length; i ++ ){
        const curTemp = temp[i];
        // - How to ignore errors?
        if(typeof curTemp !== 'number') continue;
        // Find the max value and min value 
        if(curTemp > max){
            max = curTemp;
        }
        if(curTemp < min){
            min = curTemp;
        }
    }
    console.log(max, min);
    //- Subtract min from max (amplitude) and return it
    return max - min;
}
//calcTempAmplitude([3,7,4,23]);
const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
console.log(amplitudeNew);