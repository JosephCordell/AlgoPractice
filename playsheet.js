var search = function (nums, target) {
    if (nums[0] > target ) return 0
    if (nums[nums.length-1] < target ) return nums.length 
    let left = 0
    let right = nums.length -1 
    while (left <= right ){
        console.log(left, right);
        let mid = Math.floor(left + (right - left)/2)
        if (nums[mid] === target ) return mid
        if (nums[mid] < target ) left = mid + 1
        if (nums[mid] > target ) right = mid -1
    }
    return left
};

let nums = [1,3,5,6], target = 5

console.log(search(nums,target));