/* 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
[2, 3, 4]   output [0, 2]
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

nums = [4, 6, 3, 7], target = 13
sorted = [3, 4, 6, 7]
pointer1 = 2
pointer2 = 3
total = 13

output = [1, 3]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 


let obj = [{value: 4, index: 0}, {value: 6, index: 1}, {value: 3, index: 2}, {value: 7, index: 3}]
let sorted = [{value: 3, index: 2},{value: 4, index: 0}, {value: 6, index: 1}, {value: 7, index: 3}]
obj.value === 4
obj.index === 0


Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity? */

var twoSum = function(nums, target) {
    let sorted = []
    for (let i = 0; i < nums.length; i++) {
        sorted[i] = {value: nums[i], index: i}

        
    }
    sorted.sort(function(a, b){return a.value - b.value})
    let pointer1 = 0
    let pointer2 = sorted.length-1

    while (pointer1 < pointer2) {
        let total = sorted[pointer1].value + sorted[pointer2].value
        if (total === target) return [sorted[pointer1].index, sorted[pointer2].index]
        else if (total > target) pointer2 --
        else if (total < target) pointer1 ++
    }
    return []
};

const nums = [3,3], target = 6
/* 
sorted = [3,3]
pointer1 = 0
pointer2 = 1
total = 6

output [4, 2]



*/

// const nums = [4, 6, 3, 7], target = 13
// expected [2,4]

console.log(twoSum(nums, target));


/* 9, 13, 17, 
18, 22, 
26 */