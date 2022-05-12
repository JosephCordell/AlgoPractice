/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done? */

var moveZeroes = function (nums) {
    let pointer1 = 0
    let pointer2 = 1
    const limit = nums.length
    while ( pointer2 < limit ) {
        if ((nums[pointer1] === 0 && nums[pointer2] !== 0)) {
            nums[pointer1] = nums[pointer2]
            nums[pointer2] = 0
            pointer1++
            pointer2++
        } else if (nums[pointer1] !== 0 && nums[pointer2] !== 0) {
            pointer1++
            pointer2++
        } else if (nums[pointer1] !== 0 && nums[pointer2] === 0) {
            pointer1++
            pointer2++
        }
        else {
            pointer2++
        }
    }
    return nums
};



const nums = [0, 0, 1]

console.log(moveZeroes(nums));