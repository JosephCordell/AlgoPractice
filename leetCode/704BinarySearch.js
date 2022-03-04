

const search = (nums, target, left = 0, right = nums.length-1) => {
    let middle = Math.floor((left + right) /2)
    console.log(nums, target, left, right, middle);
    if (nums[middle] > target) {
        if (middle === right) return -1
        right = middle -1
        return search(nums, target, left, right)
    } else if (nums[middle] < target) {
        if (middle === right) return -1
        left = middle +1
        return search(nums, target, left, right)
    } 
    return middle
}

const nums = [-2, -1, 3, 5, 9, 10, 12]
const target = 25

console.log(search(nums, target));