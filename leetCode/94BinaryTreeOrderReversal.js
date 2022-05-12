/* Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
  @param {TreeNode} root
  @return {number[]}
 */


var inorderTraversal = function (root) {
  let tourist = root;
  let solution = []

  while (tourist !== null) {
    let guide = tourist.left

    if (tourist.left !== null) {

      while (guide.right !== null && guide.right !== tourist) {
        guide = guide.right
      }
      if (guide.right === null) {
        guide.right = tourist;
        tourist = tourist.left
      } else {
        guide.right = null
        solution.push(tourist.val)
        tourist = tourist.right
      } }
      else {
        solution.push(tourist.val)
        tourist = tourist.right
      }
    }
  
  return solution
};