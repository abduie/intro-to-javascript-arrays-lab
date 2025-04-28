// excercise 1 : define an empty array
const foods = [];
console.log(foods); // Output: []

// excercise 2 : add strings to the array
foods.push('pizza');
foods.push('cheeseburger');
console.log(foods); // Output: ['pizza', 'cheeseburger']

// excercise 3 : insert  at begining
const foods = [];

foods.push('pizza');
foods.push('cheeseburger');
foods.unshift('taco');

console.log(foods); 
// Output: ['taco', 'pizza', 'cheeseburger']

// excercise 4 : Access an array element
const foods = [];

foods.push('pizza');
foods.push('cheeseburger');
foods.unshift('taco');

const favFood = foods[1];

console.log(favFood); 
// Output: pizza

// excercise 5 : insert an element between two others
const foods = [];
foods.push('pizza');
foods.push('cheeseburger');
foods.unshift('taco');
foods.splice(1, 0, 'tufu');
console.log(foods);
// Output: ['taco', 'tufu', 'pizza', 'cheeseburger']

// excersie 6 : replace pizza with tofu
const foods = [];

foods.push('pizza');
foods.push('cheeseburger');
foods.unshift('taco');

const favFood = foods[1];

foods.splice(2, 0, 'tofu'); // Insert 'tofu'

foods.splice(1, 1, 'sushi', 'cupcake'); // Replace 'pizza' with 'sushi' and 'cupcake'

console.log(foods);
// Output: ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']

// excersie 7 : 

const yummy = foods.slice(1, 3);
console.log(yummy); // Output: ['sushi', 'cupcake']

// excercise 8 : 
const soyIdx = foods.indexOf('tofu');
console.log(soyIdx); // Output:3


// excercise 9 :
const allFoods = foods.join(' -> ');
console.log(allFoods); // Output: 'taco -> sushi -> cupcake -> tofu -> cheeseburger'
// excercise 10 :
const hasSoup = foods.includes('soup');
console.log(hasSoup); // Output: false

