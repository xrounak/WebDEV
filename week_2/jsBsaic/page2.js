// 🚀 Functions & Array Methods in One Page

// 1️⃣ Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Rounak")); // Hello, Rounak!
  
  // 2️⃣ Function Expression
  const square = function (n) {
    return n * n;
  };
  console.log("Square of 4:", square(4)); // 16
  
  // 3️⃣ Arrow Function
  const double = (n) => n * 2;
  console.log("Double of 5:", double(5)); // 10
  
  // Sample array for method demos
  const numbers = [1, 2, 3, 4, 5];
  
  // 4️⃣ forEach() - Loop over each item
  console.log("forEach output:");
  numbers.forEach((num) => {
    console.log(num);
  });
  
  // 5️⃣ map() - Create a new array with transformed values
  const doubled = numbers.map((num) => num * 2);
  console.log("Doubled Array:", doubled); // [2, 4, 6, 8, 10]
  
  // 6️⃣ filter() - Create a new array with only even numbers
  const evens = numbers.filter((num) => num % 2 === 0);
  console.log("Even Numbers:", evens); // [2, 4]
  
  // 7️⃣ reduce() - Reduce array to a single value (sum)
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log("Sum of numbers:", sum); // 15
  
  // 8️⃣ find() - Get the first number greater than 3
  const firstBig = numbers.find((num) => num > 3);
  console.log("First number > 3:", firstBig); // 4
  
  // 9️⃣ Bonus: Function using filter + map together
  function getEvenSquares(arr) {
    return arr.filter(n => n % 2 === 0).map(n => n * n);
  }
  console.log("Even squares:", getEvenSquares(numbers)); // [4, 16]
  