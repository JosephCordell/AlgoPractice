var search = function (nums, target) {
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

let nums = [-1, 0, 3, 5, 9, 10, 12], target = 10

console.log(

    search(nums, target)
);


for (let i = 0; i < num; i++) {
    const element = num[i];
    
}
