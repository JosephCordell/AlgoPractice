/* Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 
Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 
Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space? */


// not being accepted for some reason
var rotate = function(nums, k) {
    let end = [...nums]
    let start = [...nums]
    end.splice(nums.length -k, nums.length)
    start.splice(0, nums.length -k)
    let answer = start.concat(end)
    return answer
};


const revNums = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start ++
        end--
    }
}

const rotate2 = (nums, k ) => {
    k = k % nums.length

    nums.reverse()
    revNums( nums, 0 , k-1)
    revNums(nums,k, nums.length-1)
}

const nums = [1,2,3,4,5,6,7], k = 3

console.log(rotate2(nums, k));

/* slow version
var rotate = function(nums, k) {
    while (k > 0) {
    let end = nums.pop()
    nums.unshift(end)
    k--
}
return nums
}; */


// Not accepting answer
// Also not using a Two pointer method
