/*Pig Latin Challenge
Create a function that takes in strings
In the function, translate a phrase into pig latin and print it to the console.
If able to do so, return the value into another variable and print that variable.
What is Pig Latin?
If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay).
If the word begins with a vowel, simply add an 'ay' at the end of the word.
*/
// string>array
// if vowel then
function pigLatin(string) {
    let wordArray = string.split (' ');
    let newWordArray= [];
    wordArray.forEach(element => {    
        const stringArray = element.split('');
    // let stringArray = string.split('');
    // console.log(stringArray);
    // for (i=0; i<stringArray.length; i++){
        const firstCharacter = stringArray[0];
            // console.log(firstCharacter);
            if(firstCharacter !== "a"  && firstCharacter !== "e" && firstCharacter !== "i" && firstCharacter !== "o" && firstCharacter !== "u" /* && firstCharacter !== "y"*/){
                    //starts with consonants
                    // console.log('consonant');
                    stringArray.push(firstCharacter);
                    // console.log(stringArray);
                    stringArray.shift();
                    // console.log(stringArray);
                }
    
        stringArray.push('ay'); //add ay in all of the words- wther vowel or consonant
        // stringArray.join('');//bring array back to a string
        // console.log(stringArray.join(''));
        //return the string
        newWordArray.push(stringArray.join(''));
    });
    console.log(newWordArray.join(' '));
}
pigLatin('aye');
pigLatin('hello');
pigLatin('eye');
pigLatin('index');
pigLatin('option');
pigLatin('under');
pigLatin('you');
pigLatin('Star Wars');
pigLatin('Hello how are you')
pigLatin('lorem ipsum');
pigLatin('faith');

// words like cherry or something else- account for all letters before a vowel?
/* NOT WORKING- NEEDS HELP!!!
function pigLatin2(string) {
    let wordArray = string.split (' ');
    let newWordArray= [];
    wordArray.forEach(element => {    
    const stringArray = element.split('');
    for (i=0; i<stringArray.length; i++){
        const currentCharacter = stringArray[0];
        console.log(currentCharacter);
        if(currentCharacter !== "a"  && currentCharacter !== "e" && currentCharacter !== "i" && currentCharacter !== "o" && currentCharacter !== "u" && firstCharacter !== "y"){
                //starts with consonants
                console.log('consonant');
                // stringArray.push(firstCharacter);
                // console.log(stringArray);
                // stringArray.shift();
                // console.log(stringArray);
            }

    stringArray.push('ay'); //add ay in all of the words- wther vowel or consonant
    // stringArray.join('');//bring array back to a string
    // console.log(stringArray.join(''));
    //return the string
    newWordArray.push(stringArray.join(''));
}
console.log(newWordArray.join(' '));
});
}

pigLatin2('aye');
pigLatin2('hello');
pigLatin2('Hello how are you');
pigLatin2('lorem ipsum');
*/