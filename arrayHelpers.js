Array.prototype.square = function () {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = Math.pow(this[i], 2)
  }
  return newArray;
};
Array.prototype.cube = function () {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] ** 3);
  }
  return newArray;
};

Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

Array.prototype.average = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  sum = sum / numbers.length;
  return sum;
};

Array.prototype.even = function () {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};

Array.prototype.odd = function () {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());
