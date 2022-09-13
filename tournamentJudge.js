let scores = [5.1, 5.2, 6.3, 4.4, 5.5]

let averageScores = (scores) => {
    let average = 0
    scores = scores.sort()
    scores.pop() 
    scores.shift()
    average = (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
    console.log(scores);
    return average
}

console.log(averageScores(scores));

SHA256:GY2GfbMG/LSdsk0zIwwYwj9DW8YHw8xyOyVqwPfnwmk