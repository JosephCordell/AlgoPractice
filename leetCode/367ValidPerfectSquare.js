/* Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false */

/*
 * @param {number} num
 * @return {boolean}
 */

 var isPerfectSquare = function(num) {
    let left = 0 
    let right = num
    while (left <= right) {
        let base = Math.floor(left + (right - left) / 2)
        let square = base * base
        if (square > num ) right = base -1
        if (square < num ) left = base +1
        if (square === num ) return base
    }
    return false
};

let num = 15

console.log(isPerfectSquare(num));