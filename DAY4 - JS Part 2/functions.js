// Functions - Allow user to write reusable block of codes and also provide ways to organize and structure codes

// Declaring a function
function greet() {
  console.log('Hello to the world of functions!');
}

// Calling a function
greet();


// Function declaration - can be hoisted
function functionDeclaration() {
  console.log('Hello! I am a fuction declaration!');
}
functionDeclaration();


// Function expression - cannot be hoisted
const functionExpression = function() {
  console.log('Hello! I am a fuction expression!');
}
functionExpression();

// Function with parameter
function greetme(name) {
  console.log('Hello', name + '!');
}

greetme('Regal');

// function with a return value
function sum(a, b) {
  return a + b;
}

console.log('The sum of a and b is: ', sum(10, 20));