
const search = (arr, target) => {
    let left = 0
    let right = arr.length -1 
    let pivot
    while (left <= right ) {
        pivot = left + Math.floor(( right - left) /2)
        if (arr[pivot] == target ) return pivot
        if ( target < arr[pivot]) right = pivot -1 
        else left = pivot +1
    }
    return -1

}

const arr =  [-1,0, 2,3,5,9,12]
const target = 9

console.log(search(arr, target));