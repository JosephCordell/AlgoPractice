function findOdd(arr) {
    const arrs = arr.reduce((a,c)=>a ^ c, 0);
    return arr.reduce((a,c)=>a ^ c, 0);
  }

const numbers = [1, 2, 20, 9]

const sum = (number) => {
    let a = 0;
    for (let n of number) {
        a += n 
    }
    return a
}

const sumReduce = (number) => {
    const add = number.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    // const add = number.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue
    //     )
    return add
}

// console.log(sum(numbers))
console.log(sumReduce(numbers))