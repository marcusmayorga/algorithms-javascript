// Introduction to recursion & the Call Stack

// Recursion is where a fucntion calls itself
// const func = () => {
//     if (/*base case */){
//         // return somthing;
//     }
//     else { // recursive case
//         func()
//     }
// }

// Example
// factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

const factorial = (num) => {
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));