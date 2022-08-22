/* There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where .

There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

Example

A = [0,1]
B = [0,2]
k=1

A valid  is  and :  and . Return YES.

Function Description

Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

twoArrays has the following parameter(s):

int k: an integer
int A[n]: an array of integers
int B[n]: an array of integers
Returns
- string: either YES or NO

Input Format

The first line contains an integer , the number of queries.

The next  sets of  lines are as follows:

The first line contains two space-separated integers  and , the size of both arrays  and , and the relation variable.
The second line contains  space-separated integers .
The third line contains  space-separated integers .
Constraints

Sample Input

STDIN       Function
-----       --------
2           q = 2
3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]
4 5         A[] and B[] size n = 4, k = 5
1 2 2 1     A = [1, 2, 2, 1]
3 3 3 4     B = [3, 3, 3, 4]
Sample Output

YES
NO
Explanation

There are two queries:

1. Permute these into A'=[1,2,3] and B'=[9,8,7] so that the following statements are true:

A[0]+B[0] = 1 + 9 = 10 >== k
A[1]+B[1] = 2 + 8 = 10 >== k
A[2]+B[2] = 3 + 7 = 10 >== k

2. A=[1,2,2,1],B=[3,3,3,4], and k=5. To permute A and B into a valid A' and B', there must be at least three numbers in  that are greater than . */


const twoArrays = (k, a, b) => {
    a = a.sort((a,b) => {return a-b})
    b = b.sort((a,b) => {return b-a})

    for (let i = 0; i < a.length; i++) {
        console.log(a[i],b[i]);
        if (a[i] + b[i] < k ) return 'NO'
    }
    return 'YES'
}

let b = [1, 2, 3]
let a = [7, 8, 9]
let k = 10
console.log(twoArrays(k, a, b));