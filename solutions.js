// Exercise 1: Formatting and Naming
var thisIsANewVariable = 10;

if (thisIsANewVariable == 10) {
  // code block
}

console.log('Exercise 1: ', thisIsANewVariable);

// Exercise 2: Defining Core Data Types
let aTypeOfFruit = `Apple`; 
let valueOfPi = 3.14;               
let isCompleted = true;  

console.log('Exercise 2: ', aTypeOfFruit, valueOfPi, isCompleted);

// Exercise 3: Single-Line Comment
// currentScore holds the player's score after lvl 1
let currentScore = 95; 

console.log('Exercise 3: ', currentScore);

// Exercise 4: Equality Comparison

console.log('Exercise 4: ');
console.log('100' == 100);  
console.log('100' === 100);

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule;

schedule = isWeekend ? 'Day off' : 'Work day';
console.log('Exercise 5: ', schedule);

// Exercise 6: If/Else Structure
let userAge = 16;

console.log('Exercise 6: ');

if (userAge >= 18) {
  console.log('Acess granted');
} 

else {
  console.log('Access denied');
}

// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;

console.log('Exercise 7: ');

if (hasPermission && itemCount < 5) {
  console.log('Ready to process');
}

// Exercise 8: For Loop
let iterationNum = 0;

for (let i = 0; i < 5; i++) {
  iterationNum ++;
}

console.log('Exercise 8: ', iterationNum);

// Exercise 9: Loop Control
iterationNum = 0;

for (let i = 0; i <= 9; i++) {
  iterationNum ++;
  
  if (iterationNum == 7) {
    break;
  }
}

console.log('Exercise 9: ', iterationNum);

// Exercise 10: Ensuring Execution
let counter = 10;

do {
  console.log("Running once");
  counter ++;
} while (counter < 10);

// Exercise 11: Function Definition
function calculateArea(width, height) {
  let area = width * height;
  return area;
}

let resultArea = calculateArea(5, 10);

console.log('Exercise 11: ', resultArea);

// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];

console.log('Exercise 12 before: ', fruitList);

  fruitList.push('Grape');
  fruitList.shift();
  console.log(`Banana at index: `, fruitList.indexOf('Banana'));

console.log('Exercise 12 afer: ', fruitList);

// Exercise 13: Array Copying
let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();

/* Slice creates a copy of another array. This copy is a shallow copy. 
   We should be aware that when we do this kind of copy, only the references will get copied.
   Modications to any nested objects will affect both arrays. */

console.log('Exercise 13 original data: ', originalData);
console.log('Exercise 13 cloned data: ', clonedData);

// Exercise 14: Object Constructor
function Animal (species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation
let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');

console.log('Exercise 14 & 15 Dog: ', dog);
console.log('Exercise 15 & 15 Cat: ', cat);
