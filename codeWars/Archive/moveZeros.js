/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */


function moveZeros(arr) {
    let end = []
    let start = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            end.push(0)
        }
        else start.push(arr[i])
    }
    return start.concat(end)
}

let arr = [9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]

console.log(moveZeros(arr));
console.log([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);