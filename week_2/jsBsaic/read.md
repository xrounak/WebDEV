
# 📘 JavaScript Basics: Variables, Arrays, Functions

---

## 📌 1. Variables

### 🧠 What are Variables?
Variables are containers for storing data values.

### ✅ Declare a Variable
```js
var name = "Rounak"; // old way
let age = 21;         // modern way (block scoped)
const pi = 3.14;      // constant (cannot be reassigned)
```

### 🔄 `var` vs `let` vs `const`
| Feature      | var         | let         | const         |
|--------------|-------------|-------------|---------------|
| Scope        | Function    | Block       | Block         |
| Reassignable | Yes         | Yes         | ❌ No         |
| Hoisting     | Yes         | No          | No            |

---

## 📌 2. Arrays

### 📦 What is an Array?
An array is a collection of items stored at contiguous memory locations.

### 🛠 Creating Arrays
```js
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
```

### ✨ Common Array Methods
| Method            | Example                    | Description                                 |
|-------------------|----------------------------|---------------------------------------------|
| `push()`          | `fruits.push("grape")`     | Add to end                                  |
| `pop()`           | `fruits.pop()`             | Remove from end                             |
| `shift()`         | `fruits.shift()`           | Remove from start                           |
| `unshift()`       | `fruits.unshift("kiwi")`   | Add to start                                |
| `length`          | `fruits.length`            | Returns array length                        |
| `includes()`      | `fruits.includes("mango")` | Checks if element exists                    |
| `indexOf()`       | `fruits.indexOf("banana")` | Finds the index                             |
| `slice(start, end)`| `fruits.slice(0, 2)`      | Extract portion of array                    |
| `splice()`        | `fruits.splice(1, 1)`      | Remove or replace elements                  |
| `forEach()`       | `fruits.forEach(f => ...)` | Loop over items                             |

---

## 📌 3. Functions

### 🧠 What is a Function?
A block of reusable code designed to perform a task.

### ✍️ Function Declaration
```js
function greet(name) {
  return "Hello, " + name + "!";
}
```

### 🧪 Function Expression
```js
const greet = function(name) {
  return "Hi, " + name;
};
```

### 🏹 Arrow Function (ES6)
```js
const greet = (name) => {
  return `Hey, ${name}`;
};
// or shorter
const greet = name => `Hey, ${name}`;
```

---

## 🔄 Parameters vs Arguments
- **Parameter** → placeholder in function definition: `function greet(name)`
- **Argument** → actual value passed: `greet("Rounak")`

---

## 🚀 Example: Add Numbers
```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 7)); // 12
```

---

## 💡 Bonus: Higher-Order Function Example
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

---

## 🧪 Practice
```js
// 1. Create an array of your 3 favorite movies
// 2. Write a function that returns the last item
// 3. Use push() to add a new movie
// 4. Use forEach() to print all movies
```

---

# 🔍 Scope & Hoisting in JavaScript

---

## 📌 Scope

**Scope** defines **where** in your code variables are accessible.

### 🧠 Types:
- **Global** → Declared outside functions
- **Function** → Declared inside functions with `var`
- **Block** → Declared inside `{}` with `let` or `const`

### Example:
```js
let globalVar = "I'm global";

function testScope() {
  var functionVar = "I'm function scoped";
  if (true) {
    let blockVar = "I'm block scoped";
  }
}
```

---

## 📌 Hoisting

Hoisting is JS behavior of moving **declarations** to the top of scope.

### `var` is hoisted and initialized as `undefined`:
```js
console.log(a); // undefined
var a = 5;
```

### `let` & `const` are hoisted but not initialized (TDZ):
```js
console.log(b); // ❌ ReferenceError
let b = 10;
```

---

# 🍇 One Page Code: Array Methods

```js
let fruits = ["apple", "banana", "mango"];
fruits.push("grape");
fruits.pop();
fruits.shift();
fruits.unshift("kiwi");
console.log(fruits.length);
console.log(fruits.includes("mango"));
console.log(fruits.indexOf("banana"));
console.log(fruits.slice(0, 2));
fruits.splice(1, 1, "orange");
fruits.forEach((fruit, index) => console.log(`${index + 1}. ${fruit}`));
```

---

# 🚀 One Page Code: Functions + Array Methods

```js
function greet(name) {
  return `Hello, ${name}!`;
}

const square = function (n) {
  return n * n;
};

const double = (n) => n * 2;

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num));
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const firstBig = numbers.find(num => num > 3);

function getEvenSquares(arr) {
  return arr.filter(n => n % 2 === 0).map(n => n * n);
}
```

---

# 🔄 Understanding `reduce()`

```js
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => acc + curr, 0); // 15

const product = nums.reduce((acc, curr) => acc * curr, 1); // 120

const max = nums.reduce((acc, curr) => (curr > acc ? curr : acc)); // 5

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = items.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
```

---

# 📚 Resources
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)
