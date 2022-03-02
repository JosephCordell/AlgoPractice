function miniMaxSum(arr) {
    arr = arr.sort()
    let min = 0
    let max = 0
    for (let i = 0; i < arr.length-1; i++) {
        min += arr[i]
        max += arr[i+1]
    }
    console.log(min, max);
}



miniMaxSum([1, 3, 5, 7, 9])