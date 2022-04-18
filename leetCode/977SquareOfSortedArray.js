/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] */

var sortedSquares = function (nums) {
    let sq = []
    for (let i = 0; i < nums.length; i++) {
        sq.push(Math.pow(nums[i], 2))
    }
    return sq.sort(function (a, b) { return a - b });
};




var sortedSquaresNoSort = function (nums) {
    let sq = []
    for (let i = 0; i < nums.length; i++) {
        const power = Math.pow(nums[i], 2)
        if (power > sq[sq.length - 1]) sq.push(power)
        else if (power < sq[0]) sq.unshift(power)
        else sq.push(power)
        console.log(sq);
    }
    return sq
};


const sortedSquareTwoPointer = (nums) => {
    let sq = []
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        console.log(left, right);
        let left2 = Math.pow(nums[left], 2)
        let right2 = Math.pow(nums[right], 2)
        if (left2 > right2) {
            sq.unshift(left2)
            left++
        } else {
            sq.unshift(right2)
            right--
        }
    }
    return sq
}


const nums = [-4, -1, 0, 3, 10]


console.log(sortedSquareTwoPointer(nums));
