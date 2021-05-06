// Challenge #1:
//  Write a function that accepts two names as parameters, and then prints the full name to the console.     

function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}

fullName('Faith', 'Fetzer');
// Challenge #2:
//  Write a program that prints all numbers from 0-100.
// for multiples of 6, instead of the number, print 'Fizz'
// for multiples of 8, instead of the number, print 'Buzz'
// for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'     

for (i = 0; i <= 100; i ++){
    if (i%6 === 0 && i%8 ===0) {
        console.log('Fizz Buzz');
    } else if (i%6 === 0) {
        console.log('Fizz');
    } else if (i%8 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
// Challenge #3:
//  Write a function called findParameter() that accepts 2 parameters called: "length" and "width".
// The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
// The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.  
// This function should be active.   
//not noted but asusming that first part is "true, 20 and over"

function findPerimeter(length, width) {
    let perimeter = 2*(length+width);
    if (perimeter >= 20) {
        console.log(`True. The perimeter is ${perimeter}`);
    } else {
        console.log(`False. The perimeter is ${perimeter}`);
    }
    
}

findPerimeter(2, 4);
findPerimeter(10, 20);
findPerimeter(5, 5);
// Challenge #4:
//  Create an object literal called "library".
// The library object will contain 3 properties: name, address, sections.
// Name and address will both hold values that are strings.  This information can be fabricated.
// Sections will be an object that will store a property called "collections", which is an array of more objects.  You should include at least 2 objects inside the collections array.
// the objects stored in the collections array will hold properties of classification, count, and aisle.
// both the classification and aisle properties should hold strings as values, and count should hold a value that is a number  

let library = {
    name: 'Faith',
    address: '34689 John St',
    sections: {
        collections: [
            {classification: 'best object',
                        count: 5,
                        aisle: 'snacks'},
            {classification: 'worst object',
                    count: 3,
                    aisle: 'fresh fruit'},
            {classification: 'ok object',
                        count: 45,
                        aisle: 'chips'}
        ]
    }
}


console.log(library.sections.collections[2].classification);
// try to make constructor function to add to it- my personal challenge :)
// function Collection(classification, count, aisle) {
//     this.library.sections.collections
    
// }

// Whiteboard Challenge:
// Challenge 1:
// 2pts
// Write a function that accepts two names as parameters and when invoked prints the full name to the console.

// write your code below the line


function fullName2(firstName, lastName) {
console.log(`${firstName} ${lastName}`);
}
// testing in vs code
fullName2('Ian', 'McGuigan');











// Challenge 2:
// 2pts
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print ‘Fizz’.
// For multiples of 5, instead of the number, print ‘Buzz’.
// For multiples of 3 AND 5, instead of the number, print ‘Fizz Buzz’.

// write your code below the line



for ( let i =1; i <= 100; i++) {
	if ( i%3 === 0 && i%5 === 0 ){
		console.log('Fizz Buzz');
} else if ( i%3 === 0 ) {
		console.log('Fizz');
	} else if ( i%5 === 0) {
		console.log('Buzz');
	} else {
		console.log( i );
}
}
// Great job!

// Challenge 3:
// 2pts
// Write a function called isRightTriangle that accepts three parameters called: side, base, and hypotenuse.  The function should return true if it forms a right triangle; it should return false if it doesn’t.  (hint:  Pythagorean theorem:  a**2 + b**2 = c**2)

// write your code below the line


function isRightTriangle(side, base, hypotenuse) {
	if ( side**2 + base**2 === hypotenuse**2 ) {
		console.log(true);
	} else {
		console.log(false);
	}
} //forgot this closing tag on test
// testing in vs code next few lines

isRightTriangle(2, 4, 5);
isRightTriangle(3, 4, 5);

// Awesome!

// Challenge 4:
// 2pts
// Create an object literal called netflix.
// It will have three properties: id, name, and seasonInfo.
// ID will be an integer and name will be a string.
// SeasonInfo will be an object which will have a property called, episodeInfo, which is an array of more objects.  Those objects have an episodeNumber property and an episodeName property.

// *you are welcome to fabricate the data
// write your code below the line


let netflix = {
	    id: 4 ,
        name: 'The OC' ,
        seasonInfo: {
	        episodeInfo: [
		        {episodeNumber: 2, 
		        episodeName: 'The Rental House'},
		        {episodeNumber: 4,
		        episodeName: 'Tijuana'},
		        {episodeNumber: 6,
		        episodeName: 'Summer'}
]
}
}
// Awesome!
