/* findOutlier([0, 1, 2])
findOutlier([1, 2, 3]) */
console.log(findOutlier([2,6,3,8,10]))
console.log(findOutlier([1,2,3]))
/* findOutlier([0,0,3,0,0])
findOutlier([1,1,0,1,1]) */

function findOutlier(integers){
    let obj = {}
    obj.evenCount = 0
    obj.oddCount = 0

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            obj.evenCount += 1
            obj.even = integers[i]
        } else {
            obj.oddCount += 1
            obj.odd = integers[i]
        }
        if(obj.oddCount > 0 && obj.evenCount > 0 && obj.oddCount !== obj.evenCount) { // early termination condition
            break;
        }
    }
    if (obj.evenCount > obj.oddCount) {
        return obj.odd
    } else {
        return obj.even
    }
  }