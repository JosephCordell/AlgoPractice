const isBadVersion = (versions, bad) => {
    let left = 0
    let right = versions 
    let pivot

    while (left <= right ) {
        pivot = left + Math.floor(( right - left) /2)
        console.log(left, right, pivot);
        if (pivot < bad) right = pivot 
        else if (pivot > bad ) left = pivot
        else if (pivot === bad) return `${pivot} is the bad version`
    }

    return 'no bad version'

}

const version = 5
const bad = 4

isBadVersion(version, bad)
