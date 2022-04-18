

const searchRecursive = (nums, target, left = 0, right = nums.length - 1) => {
    let middle = Math.floor((left + right) / 2)
    console.log(nums, target, left, right, middle);
    if (nums[middle] > target) {
        if (middle === right) return -1
        right = middle - 1
        return searchRecursive(nums, target, left, right)
    } else if (nums[middle] < target) {
        if (middle === right) return -1
        left = middle + 1
        return searchRecursive(nums, target, left, right)
    }
    return middle
}

const nums = [-2, -1, 3, 5, 9, 10, 12]
const target = 25

console.log(searchRecursive(nums, target));

var searchWhile = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (target > nums[mid]) left = mid + 1
        else if (target < nums[mid]) right = mid - 1
        else if (target === nums[mid]) return mid
    }
    return -1
};