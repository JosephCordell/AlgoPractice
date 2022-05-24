/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters. */

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''

    if (strs.length === 1) return strs[0]
    let start = strs[0]
    let common = []
    let max = start.length
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < start.length; j++) {
            if (strs[i][j] === start[j]) common.push(start[j])
            else if (j < max) {
                max = j
                break
            }
        }
    }
    console.log(max, common);
    if (max === 0) return ''
    return common.slice(0, max).join('')
};

let arr = ["flower", "flower", "flower", "flower"]
let arr2 = ["aaa","aa","aaa"]
let arr3 = ["flower","flow","flight"]

console.log(longestCommonPrefix(arr2));