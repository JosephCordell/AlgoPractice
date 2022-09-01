/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

function zero(i) {
    if (i) return Math.floor(eval(0 + i))
    return 0
}
function one(i) {
    if (i) return Math.floor(eval(1 + i))
    return 1
}
function two(i) {
    if (i) return Math.floor(eval(2 + i))
    return 2
}
function three(i) {
    if (i) return Math.floor(eval(3 + i))
    return 3
}
function four(i) {
    if (i) return Math.floor(eval(4 + i))
    return 4
}
function five(i) {
    if (i) return Math.floor(eval(5 + i))
    return 5
}
function six(i) {
    if (i) return Math.floor(eval(6 + i))
    return 6
}
function seven(i) {
    if (i) return Math.floor(eval(7 + i))
    return 7
}
function eight(i) {
    if (i) return Math.floor(eval(8 + i))
    return 8
}
function nine(i) {
    if (i) return Math.floor(eval(9 + i))
    return 9
}

function plus(i) {
    return `+${i}`
}
function minus(i) {
    return `-${i}`
}
function times(i) {
    return `*${i}`
}
function dividedBy(i) {
    return `/${i}`
}


console.log(five(plus(seven())));
console.log(seven(plus(five())));
console.log(eight(minus(three())));
console.log(eight(dividedBy(three())));