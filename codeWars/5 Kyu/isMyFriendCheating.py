
n= 101


def remov_nb(n):
    answer = []
    total = sum(range(n+1))
    for i in range(1,n+1):
        if (total-i)%(i+1)==0 and (total-i)/(i+1) in range(1,n+1):
            answer.append((i, (total-i)/(i+1)))
    return answer

    sum_all = sum(range(1,n+1))
    res = []
    for i in range(1,n+1):
        if (total-i)%(i+1)==0 and (total-i)/(i+1) in range(1,n+1):
            res.append((i, (total-i)/(i+1)))
    return res

print(remov_nb(n))