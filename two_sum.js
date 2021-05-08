// Rules
// 1. Should be returned in an array of arrays
// 2. Any number in the 'numArray' can be used in multiple pairs

const twoSum = (numArray, sum) => {

    // Array to put the pairs into
    let pairs = [];
    let hastable = [];

    for (let i = 0; i < numArray.length; i++) {
        // The current number in the array
        let currNum = numArray[i];

        // Finding the counterpart for the current number
        // It is the difference of the sum we are looking for
        let counterpart = sum - currNum;

        // If the current counterpart is there push them as pairs to array
        if (hastable.indexOf(counterpart) !== -1) {
            pairs.push([currNum, counterpart]);
        }
        // Pushes the current number for the loops to hastable
        hastable.push(currNum);
    }
    return pairs;
}

console.log(twoSum([ 1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([ 40, 11, 19, 17, -12], 28));