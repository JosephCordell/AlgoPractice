let series = [0];
for (let a = 2; a < 100; a++) {
  for (let b = 2; b < 42; b++) {
    let c = Math.pow(a, b);
    if (c.toString().split('').reduce((x,y) => x + parseInt(y), 0) === a) {
      console.log(c)
      series.push(c);
    }
  }
}
series = series.sort((a, b) => a - b);
console.log(series)
var powerSumDigTerm = n => series[n];