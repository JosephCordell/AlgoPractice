// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

sumMix = (x) => {
    answer = 0
    for (let i = 0; i < x.length; i++) {
        answer += Number(x[i])
    }
    return answer
}

console.log(sumMix([9, 3, '7', '3']))

// return x.map(a => +a).reduce((a, b) => a + b);