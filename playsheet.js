var search = function (nums) {
    pointer1 = 0
    pointer2 = 1
    let test = 0
    const limit = nums.length
    while ( pointer2 < limit ) {
        console.log(pointer1, pointer2, nums);
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

let nums = [45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0, -30645, -17025, 81209, 887, 64648]

console.log(search(nums));
