/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 */


var maxSequence = function (arr) {
  let max = 0;
  let localMax = 0;

  arr.map((x) => {
    if ((localMax >= 0)) {
      localMax += x;
      console.log('get here');
      if (localMax < 0) {
        localMax = 0;
      } else if (localMax > max) {
        max = localMax;
      }
    } else if (x > 0) {
      localMax += x;
    }
    console.log(`localMax`, localMax);
    console.log(`max`, max);

});
return max;
};

console.log(maxSequence([ 55 ]));
//   console.log(maxSequence([1, 2, 3, 4, 5, -1]))
