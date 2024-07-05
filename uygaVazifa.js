
// // Misol 1: Oddiy IIFE
// (function() {
//     console.log("This is an IIFE");
// })();

// // Misol 2: Parameter bilan IIFE
// (function(name) {
//     console.log("Hello, " + name);
// })("Alice");

// // Misol 3: Return qiymat bilan IIFE
// var result = (function() {
//     return "Result from IIFE";
// })();
// console.log(result);

// // Misol 4: IIFE arrow function yordamida
// (() => {
//     console.log("IIFE with arrow function");
// })();


// // 2. Pure function ga oid misollar

// // Misol 1: Juft sonlarni filter qilish
// function filterEvenNumbers(numbers) {
//     return numbers.filter(num => num % 2 === 0);
// }
// console.log(filterEvenNumbers([1, 2, 3, 4])); // [2, 4]

// // Misol 2: Massiv elementlarini yig'indisini hisoblash
// function sumArray(numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4])); // 10

// // Misol 3: Sonning 5-darajasini topish
// function powerOfFive(num) {
//     return Math.pow(num, 5);
// }
// console.log(powerOfFive(2)); // 32
// /* 3. Callback function ga oid misollar */

// // Misol 1: Oddiy callback function
// function greeting(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greeting("Alice", sayGoodbye);

// // Misol 2: Asinxron vazifa bilan callback (setTimeout)
// function asyncGreeting(name, callback) {
//     setTimeout(() => {
//         console.log("Hello, " + name);
//         callback();
//     }, 1000);
// }
// asyncGreeting("Alice", sayGoodbye);

// // Misol 3: Callback function bilan array method
// function processArray(arr, callback) {
//     return arr.map(callback);
// }
// console.log(processArray([1, 2, 3], num => num * 2)); // [2, 4, 6]

// // Misol 4: Event bilan callback function
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button clicked!");
// });

// /* 4. Rekursiv function ga oid misollar */

// // Misol 1: 1 gacha teskari sanash
// function countdown(num) {
//     if (num <= 0) return;
//     console.log(num);
//     countdown(num - 1);
// }
// countdown(5);

// // Misol 2: Massiv elementlarining yig'indisini rekursiv hisoblash
// function recursiveSumArray(arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + recursiveSumArray(arr.slice(1));
// }
// console.log(recursiveSumArray([1, 2, 3, 4])); // 10

// // Misol 3: Sonning marta darajasi (x^n) ni rekursiv hisoblash
// function power(x, n) {
//     if (n === 0) return 1;
//     return x * power(x, n - 1);
// }
// console.log(power(2, 3)); // 8


// /* 5. Object methods ga oid misollar */

// // Misol 1: Object.keys
// function getObjectKeys(obj) {
//     return Object.keys(obj);
// }
// console.log(getObjectKeys({a: 1, b: 2, c: 3})); // ["a", "b", "c"]

// // Misol 2: Object.values
// function getObjectValues(obj) {
//     return Object.values(obj);
// }
// console.log(getObjectValues({a: 1, b: 2, c: 3})); // [1, 2, 3]

// // Misol 3: Object.entries
// function getObjectEntries(obj) {
//     return Object.entries(obj);
// }
// console.log(getObjectEntries({a: 1, b: 2, c: 3})); // [["a", 1], ["b", 2], ["c", 3]]

// // Misol 4: Object.freeze
// function freezeObject(obj) {
//     return Object.freeze(obj);
// }
// const obj = {a: 1};
// freezeObject(obj);
// obj.a = 2; // obj o'zgarmaydi
// console.log(obj); // {a: 1}


// /* 6. Array methods ga oid misollar */

// // Misol 1: Slice Method
// function getMiddleThreeElements(arr) {
//     const middle = Math.floor(arr.length / 2);
//     return arr.slice(middle - 1, middle + 2);
// }
// console.log(getMiddleThreeElements([1, 2, 3, 4, 5])); // [2, 3, 4]

// // Misol 2: Splice Method
// function addRandomNumbers(arr, count, index) {
//     const randomNumbers = Array.from({length: count}, () => Math.floor(Math.random() * 90) + 10);
//     arr.splice(index, 0, ...randomNumbers);
//     return arr;
// }
// console.log(addRandomNumbers([1, 2, 3, 4], 3, 2)); // [1, 2, rand1, rand2, rand3, 3, 4]

// // Misol 3: Concat method
// function mergeArrays(arr1, arr2, arr3) {
//     return arr1.concat(arr3, arr2);
// }
// console.log(mergeArrays([1, 2], [5, 6], [3, 4])); // [1, 2, 3, 4, 5, 6]

// // Misol 4: IndexOf method
// function indexOfCube(arr, value) {
//     const index = arr.indexOf(value);
//     return index !== -1 ? Math.pow(index, 3) : false;
// }
// console.log(indexOfCube([1, 2, 3, 4], 3)); // 8

// // Misol 5: LastIndexOf method
// function lastIndexOfElement(arr, value) {
//     return arr.lastIndexOf(value);
// }
// console.log(lastIndexOfElement([1, 2, 3, 2, 1], 2)); // 3

// // Misol 6: Concat and IndexOf combined
// function containsInBoth(arr1, arr2, value) {
//     return arr1.includes(value) && arr2.includes(value);
// }
// console.log(containsInBoth([1, 2, 3], [3, 4, 5], 3)); // true

// // Misol 7: Includes method
// function arrayIncludes(arr, value) {
//     return arr.includes(value);
// }
// console.log(arrayIncludes([1, 2, 3], 2)); // true

// // Misol 8: ForEach method
// function averageOfOddThreeDigits(arr) {
//     let sum = 0;
//     let count = 0;
//     arr.forEach(num => {
//         if (num >= 100 && num < 1000 && num % 2 !== 0) {
//             sum += num;
//             count++;
//         }
//     });
//     return count === 0 ? 0 : sum / count;
// }
// console.log(averageOfOddThreeDigits([101, 202, 303])); // 202

// // Misol 9: Map method
// function transformArray(arr) {
//     return arr.map(num => num % 2 === 0 ? num ** 2 : num ** 3);
// }
// console.log(transformArray([1, 2, 3, 4])); // [1, 4, 27, 16]

// // Misol 10: Map method with strings
// function lastElements(arr) {
//     return arr.map(str => str.slice(-1));
// }
// console.log(lastElements(["hello", "world"])); // ["o", "d"]

// // Misol 11: Filter method
// function filterShortStrings(arr) {
//     return arr.filter(str => str.length < 4);
// }
// console.log(filterShortStrings(["a", "ab", "abc", "abcd"])); // ["a", "ab", "abc"]

// // Misol 12: Some method
// function hasAdults(arr) {
//     return arr.some(person => person.age > 18);
// }
// console.log(hasAdults([{name: "Ali", age: 20}, {name: "Vali", age: 17}])); // true

// // Misol 13: Every method
// function allNamesEndWithJon(arr) {
//     return arr.every(name => name.endsWith("jon"));
// }
// console.log(allNamesEndWithJon(["Alijon", "Valijon"])); // true

// // Misol 14: Find method
// let numbers = [102, 245, 330, 555, 678];
// function findThreeDigitDivisibleByFive(arr) {
//     return arr.find(num => num >= 100 && num <= 999 && num % 5 === 0);
// }

// console.log("Natija:", findThreeDigitDivisibleByFive(numbers)); 

// // Misol 15:  FindIndex method

// let names = ["John", "Jane", "Michael", "Rebecca", "Bekir"];
// function findIndexWithSubstring(arr, substr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().includes(substr.toLowerCase())) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log("Indeks:", findIndexWithSubstring(names, "bek"));