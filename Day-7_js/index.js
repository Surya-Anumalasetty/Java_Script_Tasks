//write a function which tells the whether a particular nunber is prime(true) or not(false)
//iterate a number 8 ---7 break 6 5 4 3 2 1
//iterater a number 9 10 11 break 12
//compare

let num = +prompt("Enter a number:")
let num1 = 0
let num2 = 0

for (let i = (num - 1); i > (num - 1000000000); i--) {
    let count = 0
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count = 1
            break;
        }
    }
    if (count == 0) {
        num1 = i;
        // console.log(num1)
        break
    }

}

for (let i = (num + 1); i < (num + 100000000); i++) {
    let count1 = 0
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count1 = 1
            break;
        }
    }
    if (count1 == 0) {
        num2 = i
        // console.log(num2)

        break
    }

}

if ((num - num1) == (num2 - num)) {
    console.log(num1)
    console.log(num2)
}
else {
    if ((num - num1) < (num2 - num)) {
        console.log(num1)
    }
    else {
        console.log(num2)
    }
}


// Task 1: Square Function
// Scenario: Create a function that takes a number as an argument and returns its square.
// Task:
// Define a function square that takes one parameter num.
// The function should return the square of num.
// Call the function with different numbers and print the results.

function sqr(num){
    return num*num
}
num=+prompt("Enter a Number for Square : ")
console.log(sqr(num))



// Task 2: Average Function
// Scenario: Create a function that takes an array of numbers as an argument
//  and returns the average.
// Task:
// hint:[2,5,2] =9/3=3
// Define a function average that takes one parameter arr.
// The function should return the average of the numbers in arr.
// Call the function with different arrays and print the results.


function avg(array){
    let sum=0;
    for(i in array){
        sum+=array[i]
    }
    return sum/(array.length)
}
let size=+prompt("Enter Size of the array : ")
let array=[]
for(let i=0; i<size; i++) {
        array[i]=+prompt("Enter your "+ i + " Number:")
    }
console.log(avg(array))


// Task 3:  Vowels Function
// Scenario: Create a function that takes a string as an argument and returns weather the strings contains vowels or not .
// Task:
// Define a function that takes one parameter str.
// The function should return whether string contains vowels or not.
// use loops and if conditions
// Call the function with different strings and print the results.
// hello --a,e ,i ,o,u---it contains vowels
// hll---it doesnt contains vowels



function cons(str){
    let count=0
    array=['a','e','i','o','u']
    for(i of str){
        for(j of array){
            if (i == j){
                count=1
            }
        }
    }
    // console.log(count)
    if(count>0){
        return "it contains vowels"
    }
    else{
        return "it doesnt contains vowels"
    }
}
let str=prompt("Enter a String:")
console.log(cons(str))


// Task 4: Temperature Converter
// Scenario: Create a function that converts temperatures between Celsius and Fahrenheit.
// Task:
// Define a function convertTemperature that takes two parameters: temp (the temperature) and scale (the scale to convert to, either “C” or “F”).
// The function should return the converted temperature.
// Test the function with different temperatures and scales and print the results.
// Hints:-
// formula for celscious (temp - 32) * 5/9
// formula for fahrehnheit (temp * 9/5) + 32

function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp - 32) * 5 / 9;
    } else if (scale === "F") {
        return (temp * 9 / 5) + 32;
    } else {
        return "Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Test the function with different temperatures and scales
console.log(convertTemperature(100, "C"));  // Expected: 37.7778 (approximately)
console.log(convertTemperature(0, "F"));    // Expected: 32
console.log(convertTemperature(37, "F"));   // Expected: 98.6
console.log(convertTemperature(32, "C"));   // Expected: 0
