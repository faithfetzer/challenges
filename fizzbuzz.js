/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - print out the number if neither.
        * "print = console.log"
*/

/*let fb = 15;

if (fb % 5 === 0 && fb % 3 === 0) {
    console.log("Fizz Buzz");
} else if (fb % 5 === 0) {
    console.log("Buzz");
} else if (fb % 3 === 0) {
    console.log("Fizz");
} else {
    console.log(fb);
};
*/
for (let fb = 1; fb <=100; fb++) {
    if (fb % 5 === 0 && fb % 3 === 0) {
        console.log("Fizz Buzz");
    } else if (fb % 5 === 0) {
        console.log("Buzz");
    } else if (fb % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(fb);
    }
};

let fb = prompt('Give me a number');
if (fb % 5 === 0 && fb % 3 === 0) {
    alert("Fizz Buzz");
} else if (fb % 5 === 0) {
    alert("Buzz");
} else if (fb % 3 === 0) {
    alert("Fizz");
} else {
    alert(fb);
}