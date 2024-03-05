function higherOrderFunction(callback) {
  console.log('This is the higher-order function speaking');
  callback();
}  

function passFunction() {
  console.log('This is the passed function being called');
}


higherOrderFunction(passFunction);