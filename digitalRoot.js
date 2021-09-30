function digital_root(n) {
  let sum = n;
  let arr = []
let reducer = (a,b) => parseInt(a) + parseInt(b)


  while  (sum > 9) {
        arr = sum.toString().split('')
        sum = arr.reduce(reducer)
    }

    return sum;
}

console.log(digital_root(111111));
