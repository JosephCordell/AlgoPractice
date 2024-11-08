/* You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

describe("Simple tests", function() {
    it("Test 1", function() {
      assert.deepEqual(consecutive([1, 3, 5, 7], 3, 7), false);
    });
    it("Test 2", function() {
      assert.deepEqual(consecutive([1, 3, 5, 7], 3, 1), true);
    });
    it("Test 3", function() {
      assert.deepEqual(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
    });
  }); */

function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length -1; i++) {
        console.log(arr[i], arr[i+1]);
        if (arr[i] === a && arr[i+1] === b) return true
        if (arr[i] === a && arr[i-1] === b) return true
    }
    return false
}

let arr = [ 1, 3, 5, 7 ], a = 3, b = 1

console.log(consecutive(arr, a, b));