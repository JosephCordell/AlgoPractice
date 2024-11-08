# As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

# For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

# For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

# If there are less or more than two occurrences of the number to search for, return 0.


arr = [7, 3, -7, -7, 2, 1]
n = -7


def length_of_sequence(arr,n):
    count = 0
    pos1 =0
    pos2=0
    answer = 0
    for x in range(0,len(arr)):
        if arr[x] == n and count > 0:
            pos2 = x
            count+=1
        if arr[x] == n and count == 0:
            pos1 = x
            count+=1
    if count >= 3:
        return 0
    if pos1 ==0 and pos2==0:
        return 0
    if count == 1:
        return 0
    answer = pos2-pos1+1
    
    return answer

print(length_of_sequence(arr, n))

def length_of_sequence2(arr,n):
    if arr.count(n) !=2:
        return 0
    a = arr.index(n)
    b = arr.index(n, a+1)
    print(arr.count(n))
    return b -a +1
length_of_sequence2(arr,n)

