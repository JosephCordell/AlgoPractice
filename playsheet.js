const bigNumbers = (num1, num2, carryOver = 0) => {

    let sum = num1 + num2

    let dict = {}
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            dict[i.toString() + j.toString()] = i + j
        }
    }

    return dict[sum] + carryOver
}

const numberSplit = (num1, num2) => {
    let total = []
    let num1Arr = num1.split('')
    let num2Arr = num2.split('')

    if (num1Arr.length > num2Arr.length) {
        let temp = num1Arr
        num1Arr = num2Arr
        num2Arr = temp
    }
    let tens = 0
    let j = 1
    for (let i = num1Arr.length - 1; i >= 0; i--) {
        let sum = bigNumbers(num1Arr[i], num2Arr[num2Arr.length - j], tens)
        if (sum > 10) {
            total.unshift(sum - 10);
            tens = 1
        }
        else {
            total.unshift(sum)
            tens = 0
        }
        j++
    }

    for (let k = num2Arr.length - j; k >= 0; k--) {
        total.unshift(bigNumbers(num2Arr[k], tens.toString())) // problem line
    }
    return total.join('')
}

const deciSplit = (num1, num2) => {
    let num1Arr = num1.split('.')
    let num2Arr = num2.split('.')

    console.log('deci?', num1Arr[1], num2Arr[1]);

    let whole = numberSplit(num1Arr[0], num2Arr[0])
    let deci = numberSplit(num1Arr[1], num2Arr[1])

    console.log('test', whole, deci);
    return whole + '.' + deci
}


const num1 = '11.5'
const num2 = '22.25'

console.log(deciSplit(num1, num2));

