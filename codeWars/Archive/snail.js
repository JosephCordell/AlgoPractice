snail = function (array) {
  let final = [];
  if (array[0].length === 0) {
      return []
  }
  for (
    let startingOffset = 0;
    startingOffset < array.length;
    startingOffset++
  ) {
    let endingIndex = array.length - startingOffset - 1;

    for (let t = startingOffset; t <= endingIndex; t++) {
      final.push(array[startingOffset][t]);
    }

    for (let r = startingOffset + 1; r <= endingIndex; r++) {
      final.push(array[r][endingIndex]);
    }

    for (let b = endingIndex - 1; b >= startingOffset; b--) {
      final.push(array[endingIndex][b]);
    }

    for (let l = endingIndex - 1; l > startingOffset; l--) {
      final.push(array[l][startingOffset]);
    }
  }
  console.log(`final: `, final);
  return final;
};

console.log(
  `Current final: `,
  snail([
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
  ])
);
console.log(
  `Current final: `,
  snail([[]])
);
