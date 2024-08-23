function squareSum(numbers){
    total = 0
    for (let x = 0; x < numbers.length; x++) {
        total += numbers[x]*numbers[x];
        
    }
    return total
}

let n = [1,2,2]
console.log("test")
console.log(squareSum(n))

function squareSum2(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }