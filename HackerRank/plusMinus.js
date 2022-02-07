const plusMinus = (arr) => {
    const arrLength = arr.length
    let positive = 0
    let negative = 0
    let zero = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++
        else if (arr[i] < 0) negative++
        else zero++


    }
    console.log((positive / arrLength).toFixed(6))
    console.log((negative / arrLength).toFixed(6))
    console.log((zero / arrLength).toFixed(6))
}

arg = [1, 0]

console.log(plusMinus(arg));