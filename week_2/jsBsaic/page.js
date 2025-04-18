// Run these in the console to see the output in the browser console 


// 🍇 Array Example - All in One Page
let fruits = ["apple", "banana", "mango"];

console.log("Initial fruits:", fruits);

// 1️⃣ push() - Add to end
fruits.push("grape");
console.log("After push('grape'):", fruits);

// 2️⃣ pop() - Remove from end
fruits.pop();
console.log("After pop():", fruits);

// 3️⃣ shift() - Remove from start
fruits.shift();
console.log("After shift():", fruits);

// 4️⃣ unshift() - Add to start
fruits.unshift("kiwi");
console.log("After unshift('kiwi'):", fruits);

// 5️⃣ length - Get array length
console.log("Length of fruits:", fruits.length);

// 6️⃣ includes() - Check if mango is present
console.log("Includes 'mango'?", fruits.includes("mango"));

// 7️⃣ indexOf() - Find index of banana
console.log("Index of 'banana':", fruits.indexOf("banana"));

// 8️⃣ slice() - Extract a portion (non-destructive)
let slicedFruits = fruits.slice(0, 2);
console.log("Sliced fruits (0 to 2):", slicedFruits);
console.log("Original after slice:", fruits);

// 9️⃣ splice() - Remove or replace (destructive)
fruits.splice(1, 1, "orange"); // Remove 1 item at index 1, insert 'orange'
console.log("After splice(1,1,'orange'):", fruits);

// 🔟 forEach() - Loop through each fruit
console.log("List of fruits:");
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
