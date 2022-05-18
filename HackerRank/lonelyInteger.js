/* Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .

Constraints

It is guaranteed that  is an odd number and that there is one unique element.
, where . */

function lonelyInteger(a) {
    // Write your code here
    a.sort((a, b) => a - b)
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== a[i+1] && a[i] !== a[i-1]) return (a[i]);  
    }
}

let a = [0, 1, 0, 3, 1, 2, 2]

console.log(lonelyInteger(a));