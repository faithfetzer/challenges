let callback = (num) => {
  if (num%2 === 0) {
    return 'the number is even';
  } else if (num%2 === 1) {
    return 'the number is odd'; 
  } else {
    return 'what is this?';
  }
    // Use this area to solve the challenge!
}


// Test your callback function with the loop here!
for (i= 0; i <= 10; i++){
  console.log(callback(i));
}

console.log(callback('test'));



