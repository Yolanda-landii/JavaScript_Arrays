const numbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// Function to sort numbers from lowest to highest
function sortNumbersAsc(arr) {
    return arr.slice().sort(function(a, b) {
      return a - b;
    });
  }
  
  // Function to sort numbers from highest to lowest
  function sortNumbersDesc(arr) {
    return arr.slice().sort(function(a, b) {
      return b - a;
    });
  }
  
  // Function to return an array of unique numbers
  function getUniqueNumbers(arr) {
    return [...new Set(arr)];
  }
  
  // Function to calculate the sum of numbers
  function sumOfNumbers(arr) {
    return arr.reduce(function(holder, num) {
      return holder + num;
    }, 0);
  }
  
  // Function to return a new array with elements <= 100
  function filterLessThanOrEqual100(arr) {
    return arr.filter(function(num) {
      return num <= 100;
    });
  }
  
  // Function to return a new array with elements > 50
  function filterGreaterThan50(arr) {
    return arr.filter(function(num) {
      return num > 50;
    });
  }
  
  // Function to return a new array with elements divisible by 2
  function filterDivisibleBy2(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
  }
  
  // Function to return a new array with elements divisible by 3
  function filterDivisibleBy3(arr) {
    return arr.filter(function(num) {
      return num % 3 === 0;
    });
  }
  
  // Function to return a new array with elements neither divisible by 2 nor 3
  function filterNeitherDivisibleBy2or3(arr) {
    return arr.filter(function(num) {
      return num % 2 !== 0 && num % 3 !== 0;
    });
  }
  
  // Function to count elements in the original array
  function countElements(arr) {
    return arr.length;
  }
  
  // Function to create a reversed array
  function reverseArray(arr) {
    return arr.slice().reverse();
  }
  
  // Example usage of the functions with numbers as parameter
  let sortedNumbersAsc = sortNumbersAsc(numbers);
  console.log("Sorted numbers (asc):", sortedNumbersAsc);
  
  let sortedNumbersDesc = sortNumbersDesc(numbers);
  console.log("Sorted numbers (desc):", sortedNumbersDesc);
  
  let uniqueNumbers = getUniqueNumbers(numbers);
  console.log("Unique numbers:", uniqueNumbers);
  
  let sum = sumOfNumbers(numbers);
  console.log("Sum of numbers:", sum);
  
  let lessThanOrEqual100 = filterLessThanOrEqual100(numbers);
  console.log("Numbers less than or equal to 100:", lessThanOrEqual100);
  
  let greaterThan50 = filterGreaterThan50(numbers);
  console.log("Numbers greater than 50:", greaterThan50);
  
  let divisibleBy2 = filterDivisibleBy2(numbers);
  console.log("Numbers divisible by 2:", divisibleBy2);
  
  let divisibleBy3 = filterDivisibleBy3(numbers);
  console.log("Numbers divisible by 3:", divisibleBy3);
  
  let neitherDivisible = filterNeitherDivisibleBy2or3(numbers);
  console.log("Numbers neither divisible by 2 nor 3:", neitherDivisible);
  
  let count = countElements(numbers);
  console.log("Number of elements in the array:", count);
  
  let reversed = reverseArray(numbers);
  console.log("Reversed array:", reversed);
  