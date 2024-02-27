//Loops - Loops are used to repeatedly execute a block of code until a specific condition is met
//They provide a way to automat code

//For loop
for (let i = 3; i <= 5; i++ ) {
  console.log(i)
}

//while loop
let count = 1;
while (count <= 3) {
  console.log('Hello world!', count);
  count++;
  console.log('Hello world!', count);
}

//do-while loop
let counter = 10;
do {
    console.log('Do while count:', counter);
    counter++;
}while (counter <= 5);