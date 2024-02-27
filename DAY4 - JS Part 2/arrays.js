// Topic: Introduction to Arrays

// Create an array
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

// Accessing array elements
console.log('Character 2: ', characters[1]);
console.log("Character 5: ", characters[4]);
console.log('The last character: ', characters[characters.length - 1]);

// Modifying array elements
characters.push('sasuke');
characters.pop();
characters[0] = 'crybaby';

console.log('Modified Array: ', characters);

// Array Iteration
for (let i=0; i < characters.length; i++) {
  console.log('Character ', i+1, characters[i]);
}

characters.forEach(function(character) {
  console.log(character);
})

// Array Methods

// indexof
console.log(characters.indexOf('layla'));

// includes
console.log('Includes a value: ', characters.includes('sasuke'));

// join
console.log('Joined array: ', characters.join(' - '));

// slice - DOES NOT alter original array, parameter 1 is the starting index inclusive, parameter 2 is the last 
// index exclusive
let sliceArray = characters.slice(1, 4);   // start index: 1  len = 4-1 = 3
console.log('Sliced array: ', sliceArray);
console.log('Updated Array: ', characters);

// splice - DOES alter original array, parameter 1 is the starting index inclusive, parameter 2 is the length
// of the elements extracted
let removeElements = characters.splice(0, 2);  // start index: 0 len = 2
console.log('Removed elements: ', removeElements);
console.log('Updated Array: ', characters);

//