/*
Create a function that takes in strings
In the function, translate a phrase into pig latin and print it to the console.
If able to do so, return the value into another variable and print that variable.
What is Pig Latin?
If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay).
If the word begins with a vowel, simply add an 'ay' at the end of the word.
*/
let thisString = 'chase'
function pigLatin(word) {
    word = word.toLowerCase();
    let vowels = ['a','e','i','o','u'];
    let firstLetter = word[0];
    if(vowels.includes(firstLetter)) {
        return word + 'ay';    
    } else {
        for(let letter of word) {
            console.log(letter);
            if (vowels.includes(letter)) {
                vowelIndex = word.indexOf(letter)
                console.log(vowelIndex);
                console.log(letter);
                break;
            }
        }
        return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay';
    }
}
console.log(pigLatin(thisString));
pigLatin(thisString);


// second way
let sampleString = 'pig latin';
function pigLatin2(str) {
    let wordsArray = str.split(' ');  //1
    wordsArray.forEach((word, index) => {  //2
        //3
        let lettersArray = word.split('');
        console.log(lettersArray);
        //4
        while (lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u') {
            //5
            lettersArray.push(lettersArray[0]);
            //6
            lettersArray.shift();
        }; 
        lettersArray.push('ay');  //7
        wordsArray[index] = lettersArray.join(''); //8
    });
    //9
    return wordsArray.join(' ');
    }
console.log(pigLatin2(sampleString));
//10
let pigString = pigLatin2(sampleString);
console.log(pigString);
/*
1. Splitting our string by word (remember that the .split() method returns our new substring in an array), and storing that new array in a wordsArray variable ---> ['pig', 'latin'].
2. Using the forEach method on our wordsArray ---> forEach method is looping over each word in our new wordsArray variable - forEach runs once FOREACH element in an array. So what is the first word forEach is looking at? 'peter'. Notice we're also passing in our optional parameter of index here. We will use this in a bit.
3. Taking the word our forEach is looking at ('pig' during the first iteration of forEach), and using the split method to separate it into individual letters.
4. While statememt creates a loop that executes a block of code as long as the test condition evaluates to true. Our while loop is checking the first index (so the first letter) in our lettersArray and checking if it's NOT equal to a vowel.
5. If the word does not begin with a vowel, we are pushing the first index of our array (p in this case) to the array. Remember that when we use the push method that what we push gets added on to the end of the array.
6. We are then removing the first item in our array using the shift method. Our lettersArray is currently ['i', 'g', 'p'].
7. Using the push method again to add the string of 'ay' as another item in our array.
8. Grabbing our wordsArray and it's 0th index (index is coming from our forEach method), and setting the value of index 0 equal to our lettersArray. Remember that our lettersArray was an array of each individual character of our word, so we're using the .join method to concatenate each value together.
9. Returning our wordsArray and again using the .join method. Notice that we have an empty space in our join method this time. Before we were concatentating each string, now we're concatening each word.
10. Declaring a new variable of pigString and initalizing it as our function, and passing in our sampleString variable to pass to the function. Remember that when we use the return keyword in our function that, since we're returning something, it's best practice to declare a new variable that we can store the return value in.
*/