// NOT USING array.reverse() method

function reverseWords(string) {

    // Variable to hold the string split into an array at spaces
    let wordsArr = string.split(' ');

    // Variable to hold words into final array with each word reversed
    let reversedWordsArr = [];

    // forEach to loop through individual words of the wordsArr array
    wordsArr.forEach(word => {

        // reversedWord variable to hold word before it's pushed to reversedWordsArr array and loop repeats
        let reversedWord = '';

        // for loop goes from the end of the leagth of the individual word back to the beginning to reverse it
        // SPECIAL NOTE: the "word.length - 1" is used to get the word to a 0 index type
        for(let i = word.length - 1; i >=0; i--) {
            reversedWord += word[i];
        }
        
        // reversedWord is pushed to the reversedWordsArr array
        reversedWordsArr.push(reversedWord);
    });

    // Join the reverseWordsArr array into a string with spaces between words to return final string
    return reversedWordsArr.join(' ');
}
console.log(reverseWords("Marcus Loves Coding"));
console.log(reverseWords("Coding JavaScript"));

console.log("Marcus".length - 1, '0 Indexed length')