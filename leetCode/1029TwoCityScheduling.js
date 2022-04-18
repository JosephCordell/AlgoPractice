var twoCitySchedCost = function (costs) {
    let totalCost = 0
    for (let i = 0; i < costs.length; i++) {
        let min = Infinity
        for (let j = 0; j < costs[i].length; j++) {
            if (costs[i][j] < min) {
                min = costs[i][j]
            }
        }
        totalCost += min
    }
    return totalCost
};

let arr = [[10,20],[30,200],[400,50],[30,20]]

console.log(twoCitySchedCost(arr));