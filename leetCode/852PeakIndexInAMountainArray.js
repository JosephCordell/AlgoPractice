/* Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

 

Example 1:

Input: arr = [0,1,0]
Output: 1
Example 2:

Input: arr = [0,2,1,0]
Output: 1
Example 3:

Input: arr = [0,10,5,2]
Output: 1 */

/*
 * @param {number[]} arr
 * @return {number}
 */

 var peakIndexInMountainArray = function(arr) {
    let left = 0
    let right = arr.length

    while (left <= right) {
        let mid = Math.floor(left + (right - left) /2)
        console.log(arr[mid-1], arr[mid], arr[mid+1]);
        if (arr[mid-1] > arr[mid]) right = mid -1
        if (arr[mid+1] > arr[mid]) left = mid +1
        if (arr[mid+1] < arr[mid] && arr[mid-1] < arr[mid]) return mid
    }
};

let arr = [0,2,4,7,10, 1]
console.log(peakIndexInMountainArray(arr));