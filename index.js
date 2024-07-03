let numbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// Sort the numbers from lowest to highest
let sortedNumbersAsc = numbers.sort(function(a, b){
    return a - b;
});
console.log(sortedNumbersAsc);

// Sort the numbers from highest to lowest
let sortedNumbersDesc = numbers.sort(function(a, b){
    return b - a;
});
console.log(sortedNumbersDesc);

// Return an array of unique numbers
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// Calculate the sum of the numbers
let sumOfNumbers = numbers.reduce(function(holder, num){
    return holder + num
    },0);
console.log(sumOfNumbers);

// Return a new array with elements that are less than or equal to 100
let lessThanOrEqual100 = numbers.filter(function(num) {
    return num <= 100;
});
console.log(lessThanOrEqual100); 

// Return a new array with elements that are greater than 50
let greaterThan50 = numbers.filter(function(num){
    return num > 50;
});
console.log(greaterThan50);

// Return a new array with elements that are divisible by 2
let divisibleBy2 = numbers.filter(function(num){
    return num % 2 === 0;
});
console.log(divisibleBy2);

// Return a new array with elements that are divisible by 3
let divisibleBy3 = numbers.filter(function(num){
    return num % 3 === 0;
});
console.log(divisibleBy3);

// Return a new array with elements that are neither divisible by 2 or 3, if they exist. Otherwise return an empty array.
let neitherDivisible = numbers.filter(function(num) {
    return num % 2 !== 0 && num % 3 !== 0;
});


// Declare a variable that counts how many elements are in the original array
let countElements = numbers.length;
console.log(countElements);

// Declare a new array that contains the same elements as the original array, but reversed.
let reversedArray = numbers.slice().reverse();
console.log(reversedArray);

// Given another array
let otherArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

// Using a for loop and a variable, return all values that are numbers
let numbersOnly = [];
for (let item of otherArray) {
    if (typeof item === 'number' && !isNaN(item)) {
        numbersOnly.push(item);
    }
}
console.log(numbersOnly);

// // Using a while loop and a variable, return all values that are strings
let stringsOnly = [];
let index = 0;
while (index < otherArray.length) {
    if (typeof otherArray[index] === 'string') {
        stringsOnly.push(otherArray[index]);
    }
    index++;
}
console.log(stringsOnly);

// Using a do while loop, return the sum of all values in the array
let totalSum = 0;
let i = 0;
do {
    if (typeof otherArray[i] === 'number' && !isNaN(otherArray[i])) {
        totalSum += otherArray[i];
    }
    i++;
} while (i < otherArray.length);
console.log(totalSum);

// Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting
let greeting = "Hello ";
for (let item of otherArray) {
    if (typeof item === 'string') {
        greeting += item + ", ";
    }
}
greeting = greeting.slice(0, -2) + ".";
console.log(greeting);

// // Using any looping structure of your choice and a new variable, remove all values in the array that are strings
let nonStrings = otherArray.filter(function(item){
    return (typeof item  !=='string');
});
console.log(nonStrings);
