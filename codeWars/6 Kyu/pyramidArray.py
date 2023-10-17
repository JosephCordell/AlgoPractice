# Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

# pyramid(0) => [ ]
# pyramid(1) => [ [1] ]
# pyramid(2) => [ [1], [1, 1] ]
# pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
# Note: the subarrays should be filled with 1s

def pyramid(n):
    # your code here
    answer = []
    for x in range(n):
        sub = []
        for y in range(x+1):
            sub.append(1)
        answer.append(sub)
    return answer

n = 5

print(pyramid(n))