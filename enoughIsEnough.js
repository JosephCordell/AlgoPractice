function deleteNth(arr, n) {
  let newArr = [];
  let countDuplicates = (item) => {
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (item === newArr[i]) {
        count++;
      }
    }
    return count;
  };
  for (let i = 0; i < arr.length; i++) {
      if ( countDuplicates(arr[i]) < n ) {
          newArr.push(arr[i])
      }
      
  }
  return newArr
}



const dalete = () => {
    let cache = {}
    return arr.filter((n) => {
        cache[n] = (cache[n] || 0 + 1)
        return cache[n] <=x
    })
}
console.log(deleteNth([20, 37, 20, 21], 1));
