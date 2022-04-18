//1. What is the simplest possible input? 
//2. Play around with examples and visualize 
//3. relate hard cases to simpler cases
//4. Generalize the pattern 
//5. Write code by combining recursive pattern with the base case

const recursion = (n) => {
    let total = 0
    while (n > 0) {
        total += n
        n--
    }
    return total
}

const recursionLoop = (n) => {
    let total = n
    if (n <= 0) return 0
    else {
        total += recursionLoop(n - 1)
    }
    return total

}

const recursionVideo = (n) => {
    if (n == 0) return 0
    else return n + recursionVideo(n - 1)
}

let number = 5

console.log(recursion(number));
console.log(recursionLoop(number));
console.log(recursionVideo(number));

const recursivePathing = (n, m) => {
    if (n === 1 || m === 1 )return 1
    else {
        return recursivePathing(n, m-1) + recursivePathing(n-1, m)
    }
}

let n = 5, m = 5

console.log(recursivePathing(n, m));